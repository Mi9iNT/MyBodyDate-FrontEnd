import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import {PERMISSIONS, check, request} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import Styles from '../../../assets/style/Styles';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

export const EmpreinteVocal = ({route, navigation}) => {
  // constant récupérant la valeur de prénom donnée par l'utilisateur continue dans data passée en paramètre de route
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';
  const userSize = route.params?.userSize ?? '';
  const userLang = route.params?.userLang ?? '';
  const userSituation = route.params?.userSituation ?? '';
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';

  const [modalInfoVocaVisible, setModalInfoVocaVisible] = useState(false);

  // Constante permettant de savoir quel input radio a été sélectionné par l'utilisateur
  const [selectedVoice, setSelectedVoice] = useState();
  console.log('Voix sélectionnée : ', selectedVoice);

  const [isActive, setIsActive] = useState(false);

  const [buttonPressed, setButtonPressed] = useState(null);

  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [pause, setPause] = useState(false);
  const [permissionAudio, setPermissionAudio] = useState(null);
  const [result, setResult] = useState(false);

  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState(false);
  const [recordTimeFormated, setRecordTimeFormated] = useState(false);
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState(false);
  const [duration, setDuration] = useState('00:00:00');
  console.log(
    'recordTime : ',
    recordTime,
    ' playTime : ',
    playTime,
    ' duration : ',
    duration,
  );

  useEffect(() => {
    const checkPermissions = async () => {
      const permissions = [PERMISSIONS.ANDROID.RECORD_AUDIO];

      const statuses = await request(permissions[0]);

      setPermissionAudio(statuses);

      if (statuses === 'granted') {
        setPermissionAudio(true);
      }
    };

    checkPermissions();
  }, []);

  const onStartRecord = async () => {
    setRecording(true);
    setPlaying(false);
    setPause(false);
    const audioDirectory = `${RNFS.ExternalDirectoryPath}/Music`;
    const path = `${audioDirectory}/empreinteVocal.mp3`;
    // si le répertoire existe, sinon le créer
    const exists = await RNFS.exists(audioDirectory);
    if (!exists) {
      await RNFS.mkdir(audioDirectory);
    }
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.MP3,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.mp3,
    };
    console.log('audioSet', audioSet);
    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener(e => {
      if (typeof e.currentPosition === 'number' && e.currentPosition > 0) {
        setRecordSecs(e.currentPosition);
        let recTime = audioRecorderPlayer.mmssss(Math.floor(e.currentPosition));
        const parts = recTime.split(':');
        const secondsPart = parts[1];
        setRecordTime(secondsPart);
      }
    });
    console.log(`uri: ${uri}`);
    // Arrête l'enregistrement après 30 secondes
    setTimeout(() => {
      onStopRecord();
    }, 30000);
  };

  const onStopRecord = async () => {
    setRecording(false);
    setPlaying(false);
    setPause(false);
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    console.log(result);
    setResult(true);
  };

  const onStartPlay = async () => {
    setRecording(false);
    setPlaying(true);
    setPause(false);
    console.log('Player Playing . . .');
    const path = `${RNFS.ExternalDirectoryPath}/Music/empreinteVocal.mp3`;

    // Vérifiez si le fichier existe
    const exists = await RNFS.exists(path);
    if (!exists) {
      console.log("Le fichier audio n'existe pas");
      return;
    }

    const msg = await audioRecorderPlayer.startPlayer(path);
    console.log(msg);
    audioRecorderPlayer.setVolume(1.0);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (typeof e.currentPosition === 'number') {
        setCurrentPositionSec(e.currentPosition);
        let plyTime = audioRecorderPlayer.mmssss(Math.floor(e.currentPosition));
        const parts = plyTime.split(':');
        const secondsPart = parts[1];
        setPlayTime(secondsPart);
        if (e.currentPosition === e.duration) {
          console.log('finished');
          audioRecorderPlayer.stopPlayer();
          setPlayTime(0);
        }
      }

      if (typeof e.duration === 'number' && e.duration > 0) {
        setCurrentDurationSec(e.duration);
        setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      }
      if (e.currentPosition === e.duration) {
        console.log('finished');
        onStopPlay();
      }
    });
  };

  const onPausePlay = async () => {
    setRecording(false);
    setPlaying(false);
    setPause(true);
    console.log('Player Pausing . . .');
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = () => {
    setRecording(false);
    setPlaying(false);
    setPause(false);
    console.log('Player Stopped');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    <View style={Styles.container}>
      <ImageBackground
        style={[Styles.bgGradient]}
        source={require('../../../assets/images/Background.png')}>
        <View style={[Styles.ViewText, {top: 80}]}>
          <Text
            style={[
              {
                color: '#FFF',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 24,
                fontStyle: 'normal',
                fontWeight: 600,
                textAlign: 'center',
              },
            ]}>
            EMPREINTE VOCAL
          </Text>
          <Text
            style={[
              Styles.textWhite2,
              {
                top: 30,
                color: '#FFF',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 500,
                alignSelf: 'center',
                width: '70%',
              },
            ]}>
            Enregistrer un mesage vocale introductif à l'attention des personnes
            que vous croisez, et émouvoir votre futur match
          </Text>

          <View style={[{top: 0}]}>
            <View
              style={[
                {
                  bottom: 100,
                  flexDirection: 'column',
                  height: 190,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  alignSelf: 'center',
                },
              ]}>
              <TouchableOpacity
                onPressIn={() => {
                  onStartRecord();
                }}
                onPressOut={() => {
                  onStopRecord();
                }}
                activeOpacity={0.6}
                style={[
                  {
                    backgroundColor: 'transparent',
                    padding: 15,
                    borderRadius: 100,
                    height: 135,
                    width: 135,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 3,
                    borderColor: '#0F0BAE',
                  },
                ]}>
                <View
                  style={[
                    {
                      backgroundColor: 'white',
                      borderRadius: 100,
                      height: 118,
                      width: 118,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  ]}>
                  <Image
                    style={[
                      {
                        top: 0,
                        width: 70,
                        height: 110,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                      },
                    ]}
                    source={require('../../../assets/images/microVocal.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[Styles.textWhiteCenter2, {bottom: 110}]}>
            {playing && !recording
              ? playTime
              : !playing && recording
              ? recordTime
              : !playing && !recording && recordTime > 0
              ? recordTime
              : '30'}{' '}
            secondes
          </Text>
          <View
            style={[
              {
                backgroundColor: 'transparent',
                bottom: 100,
                height: 40,
                width: 100,
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'space-around',
              },
            ]}>
            {recording ? (
              <TouchableOpacity
                onPress={() => {
                  onStopRecord();
                }}
                activeOpacity={0.6}
                style={[
                  {
                    backgroundColor: '#0019A7',
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                  },
                ]}
              />
            ) : (
              <TouchableOpacity
                onPressIn={() => {
                  onStartRecord();
                }}
                activeOpacity={0.6}
                style={[
                  {
                    backgroundColor: '#0019A7',
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                  },
                ]}
              />
            )}

            {result && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  !playing ? onStartPlay() : onPausePlay();
                }}>
                <Image
                  style={[
                    {
                      width: 30,
                      height: 30,
                      alignSelf: 'center',
                      resizeMode: 'contain',
                    },
                  ]}
                  source={
                    !playing
                      ? require('../../../assets/images/play.png')
                      : require('../../../assets/images/pause.png')
                  }
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[{bottom: 80, alignSelf: 'center', width: '100%'}]}>
            <TouchableOpacity
              style={[
                {
                  bottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: '70%',
                  alignSelf: 'center',
                },
              ]}
              onPress={() => setModalInfoVocaVisible(true)}
              accessibilityLabel="Découvrez votre type de voix ">
              <Text style={[Styles.textBtn2]}>Décrivez votre type de voix</Text>
              <Image
                style={[{width: 25, height: 25, resizeMode: 'contain'}]}
                source={require('../../../assets/images/ico-info-rose.png')}
              />
            </TouchableOpacity>
            <View style={[{flexDirection: 'row', marginLeft: 50, bottom: 10}]}>
              <View style={{flex: 2}}>
                <TouchableOpacity
                  style={Styles.btnInputLang}
                  onPress={() => setSelectedVoice('Soprano')}
                  accessibilityLabel="Soprano">
                  <Image
                    style={Styles.SelectedImage}
                    source={
                      selectedVoice === 'Soprano'
                        ? require('../../../assets/images/radio_selected.png')
                        : require('../../../assets/images/radio_unselected.png')
                    }
                  />
                  <Text style={Styles.textBtnInputLang}>Soprano</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.btnInputLang}
                  onPress={() => setSelectedVoice('Mezzo')}
                  accessibilityLabel="Mezzo">
                  <Image
                    style={Styles.SelectedImage}
                    source={
                      selectedVoice === 'Mezzo'
                        ? require('../../../assets/images/radio_selected.png')
                        : require('../../../assets/images/radio_unselected.png')
                    }
                  />
                  <Text style={Styles.textBtnInputLang}>
                    Mezzo{'\n'}Soprano
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.btnInputLang}
                  onPress={() => setSelectedVoice('Alto')}
                  accessibilityLabel="Alto">
                  <Image
                    style={Styles.SelectedImage}
                    source={
                      selectedVoice === 'Alto'
                        ? require('../../../assets/images/radio_selected.png')
                        : require('../../../assets/images/radio_unselected.png')
                    }
                  />
                  <Text style={Styles.textBtnInputLang}>Alto</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 2}}>
                <TouchableOpacity
                  style={Styles.btnInputLang}
                  onPress={() => setSelectedVoice('Baryton')}
                  accessibilityLabel="Baryton">
                  <Image
                    style={Styles.SelectedImage}
                    source={
                      selectedVoice === 'Baryton'
                        ? require('../../../assets/images/radio_selected.png')
                        : require('../../../assets/images/radio_unselected.png')
                    }
                  />
                  <Text style={Styles.textBtnInputLang}>Baryton</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[Styles.btnInputLang, {top: 10}]}
                  onPress={() => setSelectedVoice('Ténor')}
                  accessibilityLabel="Ténor">
                  <Image
                    style={Styles.SelectedImage}
                    source={
                      selectedVoice === 'Ténor'
                        ? require('../../../assets/images/radio_selected.png')
                        : require('../../../assets/images/radio_unselected.png')
                    }
                  />
                  <Text style={Styles.textBtnInputLang}>Ténor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[Styles.btnInputLang, {top: 22}]}
                  onPress={() => setSelectedVoice('Basse')}
                  accessibilityLabel="Basse">
                  <Image
                    style={Styles.SelectedImage}
                    source={
                      selectedVoice === 'Basse'
                        ? require('../../../assets/images/radio_selected.png')
                        : require('../../../assets/images/radio_unselected.png')
                    }
                  />
                  <Text style={Styles.textBtnInputLang}>Basse</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{top: 10}}>
              <Text style={[Styles.textWhite3, {fontSize: 12, left: 20}]}>
                Choix unique.
              </Text>
              <TouchableOpacity
                style={[Styles.btn, {top: 10}]}
                onPress={() =>
                  navigation.navigate("Charte d'engagement", {
                    userConsent: consentement,
                    routeName: routeChoice,
                    loveCoach: loveCoach,
                    userEmail: userEmail,
                    userPhone: userPhone,
                    userCity: userCity,
                    accesPosition: accesPosition,
                    genre: genre,
                    userBirth: userBirth,
                    userSize: userSize,
                    userLang: userLang,
                    userSituation: userSituation,
                    userOrientation: userOrientation,
                    userRecherche1: userRecherche1,
                    userRecherche2: userRecherche2,
                    userAffinites: userAffinites,
                    rythmeDeVie1: rythmeDeVie1,
                    rythmeDeVie2: rythmeDeVie2,
                    userPrenom: userPrenom,
                    userVoice: selectedVoice,
                  })
                }
                accessibilityLabel="Enregistrer plus tard">
                <Text style={Styles.textBtnBlue}>Enregistrer plus tard</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalInfoVocaVisible}
            onRequestClose={() => {
              setModalInfoVocaVisible(!modalInfoVocaVisible);
            }}>
            <View style={[Styles.centeredView3, {top: 200}]}>
              <Text style={[Styles.textBlueCenter3, {bottom: 200}]}>
                VOTRE TYPE DE VOIX
              </Text>
              <Image
                style={[
                  {
                    bottom: 160,
                    width: 30,
                    height: 30,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={require('../../../assets/images/ico-info.png')}
              />
              <Text style={[Styles.textBlue, {bottom: 130}]}>
                <Text style={[Styles.textBlueBold]}>Soprano</Text> est la voix
                la plus aigue de femme.
              </Text>
              <Text style={[Styles.textBlue, {bottom: 130}]}>
                <Text style={[Styles.textBlueBold]}>Mezzo Soprona</Text> est la
                voix médium.
              </Text>
              <Text style={[Styles.textBlue, {bottom: 130}]}>
                <Text style={[Styles.textBlueBold]}>Alto (contralto)</Text> est
                la voix de femme la plus grave et est très rare.
              </Text>
              <Text style={[Styles.textBlue, {bottom: 130}]}>
                Pour les hommes la voix la plus aigue est{' '}
                <Text style={[Styles.textBlueBold]}>Ténor</Text>.
              </Text>
              <Text style={[Styles.textBlue, {bottom: 130}]}>
                <Text style={[Styles.textBlueBold]}>Baryton</Text> est la voix
                médium.
              </Text>
              <Text style={[Styles.textBlue, {bottom: 130}]}>
                <Text style={[Styles.textBlueBold]}>Basse</Text> est la plus
                grave.
              </Text>
            </View>
          </Modal>
          <View style={[{bottom: 10}]}>
            <TouchableOpacity
              onPress={() => {
                setButtonPressed('Continuer');
                navigation.navigate("Charte d'engagement", {
                  userConsent: consentement,
                  routeName: routeChoice,
                  loveCoach: loveCoach,
                  userEmail: userEmail,
                  userPhone: userPhone,
                  userCity: userCity,
                  accesPosition: accesPosition,
                  genre: genre,
                  userBirth: userBirth,
                  userSize: userSize,
                  userLang: userLang,
                  userSituation: userSituation,
                  userOrientation: userOrientation,
                  userRecherche1: userRecherche1,
                  userRecherche2: userRecherche2,
                  userAffinites: userAffinites,
                  rythmeDeVie1: rythmeDeVie1,
                  rythmeDeVie2: rythmeDeVie2,
                  userPrenom: userPrenom,
                  userVoice: selectedVoice,
                });
              }}
              accessibilityLabel="Continuer">
              <Text
                style={[
                  Styles.textBtn9,
                  {
                    zIndex: 4,
                    top: 40,
                    color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                  },
                ]}>
                Continuer
              </Text>
              <Image
                style={[
                  {
                    height: 56,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  },
                ]}
                source={
                  buttonPressed === 'Continuer'
                    ? require('../../../assets/boutons/Bouton-Rouge.png')
                    : require('../../../assets/boutons/Bouton-Blanc.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
