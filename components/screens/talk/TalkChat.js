/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// Import des modules et composants nécessaires
import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import {PERMISSIONS, check, request} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import {
  GiphyContent,
  GiphyGridView,
  GiphyMedia,
  GiphyMediaView,
  GiphySDK,
} from '@giphy/react-native-sdk';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';
import MenuBottom from '../../composants/MenuBottom';
import MenuTalk from '../../composants/MenuTalk';
import Vocal from '../../../assets/images/vocal.png';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

GiphySDK.configure({ apiKey: 'lDpjsXxCOkiQD25GOsvV4IAZ59tro93z' });

export const TalkChat = ({ navigation, route }) => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [media, setMedia] = useState(null);
  const [modalGiphyVisible, setModalGiphyVisible] = useState(false);

  // Fonction pour envoyer un message Gif
  const handleSendGiftMessage = (index) => {
      setMessageIdCounter(messageIdCounter + 1);
      const newMessage = {
        id: messageIdCounter,
        audio: false,
        text: false,
        gift: index,
        sender: userRecept,
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setText('');
  };
  
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  // Récupération des paramètres de la route
  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';
  const user = route.params?.user ?? '';
  const prenium = route.params?.prenium ?? '';
  const friendChoice = route.params?.friendChoice ?? '';
  const userRecept = "Raluca";
  const userEmet = "Kolia";

  // State pour gérer les messages envoyés par l'utilisateur
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const [text, setText] = useState(text);
  const [audioPath, setAudioPath] = useState([]);
  const [newAudioPath, setNewAudioPath] = useState(false);
  const [receivedMessages, setReceivedMessages] = useState([
    {text: 'Bonjour', sender: userEmet, timestamp: new Date()},
    // {image: Vocal, sender: 'Kolia', timestamp: new Date()},
  ]);

  const scrollViewRef = useRef(null);
  const [messageIdCounter, setMessageIdCounter] = useState(0);

  // Fonction pour envoyer un message Text
  const handleSendTextMessage = () => {
    if (text && text.trim() !== '') {
      setMessageIdCounter(messageIdCounter + 1);
      const newMessage = {
        id: messageIdCounter,
        audio: false,
        text,
        gift: false,
        sender: userRecept,
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setText('');
    }
  };

// Fonction pour attendre pendant un certain temps (utilisée pour définir la durée de l'enregistrement)
const wait = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};


  // Récupérer l'heure actuelle toutes les secondes
  const [currentTime, setCurrentTime] = useState(new Date());


  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Fonction pour trier les messages chronologiquement
  const sortMessagesChronologically = (a, b) => {
    return new Date(a.timestamp) - new Date(b.timestamp);
  };

  // Fonctions pour enregistrer et envoyer un audio

  const [audioRecordings, setAudioRecordings] = useState([]);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [permissionAudio, setPermissionAudio] = useState(null);
  const [result, setResult] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);

  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('00:00:00');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('00:00:00');
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
    try {
      if (recording) {
        console.log('Enregistrement déjà en cours . . .');
        return;
      }
      setRecording(true);
      const now = new Date();
      const dateAndTime = now.toISOString().replace(/[:.]/g, '-');
      const audioDirectory = `${RNFS.ExternalDirectoryPath}/Music/Chat`;
      const path = `${audioDirectory}/ChatVocal_${dateAndTime}.mp3`;

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
      const uri = new audioRecorderPlayer.startRecorder(path, audioSet);
      const recordBackListener = audioRecorderPlayer.addRecordBackListener(e => {
        if (typeof e.currentPosition === 'number' && e.currentPosition > 0) {
          setRecordSecs(e.currentPosition);
          setRecordTime(
            audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
          );
        }
      });
      console.log(`uri: ${uri}`);
      setNewAudioPath(uri);
      setAudioPath(prevAudioPath => [...prevAudioPath, uri]);
      wait(2000);
      return recordBackListener;
    } catch (error) {
      console.log('Erreur lors du démarrage de l\'enregistrement audio :', error);
    }
  };

  const onStopRecord = async () => {
    setRecording(false);
    const result = audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    setMessageIdCounter(messageIdCounter + 1);
    const newRecording = {
      id: messageIdCounter,
      text: false,
      audio: newAudioPath,
      gift: false,
      sender: userRecept,
      timestamp: new Date(),
      playTime: recordTime,
    };

    setMessages(prevMessages => [...prevMessages, newRecording]);

    // Réinitialiser l'état du chemin audio actuel.
    setNewAudioPath(null);
    console.log(result);
  };


const onStartPlay = async (index) => {
  if (playing) {
    onPausePlay();
  } else {
    setPlaying(true);
    console.log('Player en lecture . . .');
    console.log(index);
  
    if (index >= 0 && index < messages.length) {
      const path = messages[index].audio;
      setSelectedAudio(messages[index].id);

      // Vérifiez si le fichier audio existe
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

          // Mettez à jour l'état playTime du message audio en cours de lecture
          setPlayTime(prevRecordings =>
            Array.isArray(prevRecordings) ? prevRecordings.map((rec, i) =>
              i === index
                ? { ...rec, playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)) }
                : rec
            ) : []
          );

          if (e.currentPosition === e.duration) {
            console.log('Lecture finit');
            audioRecorderPlayer.stopPlayer();

            // Réinitialisez l'état playTime du message audio une fois la lecture terminée
            setPlayTime(prevRecordings =>
              Array.isArray(prevRecordings) ? prevRecordings.map((rec, i) =>
                i === index ? { ...rec, playTime: '00:00:00' } : rec
              ) : []
            );
          }
        }

        if (typeof e.duration === 'number' && e.duration > 0) {
          setCurrentDurationSec(e.duration);
          setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
        }
        if (e.currentPosition === e.duration) {
          console.log('Lecture finit');
          audioRecorderPlayer.stopPlayer();

          // Réinitialisez l'état playTime du message audio une fois la lecture terminée
          setAudioRecordings(prevRecordings =>
            Array.isArray(prevRecordings) ? prevRecordings.map((rec, i) =>
              i === index ? { ...rec, playTime: '00:00:00' } : rec
            ) : []
          );
        }
      });
    }
  }
};



  const onPausePlay = async (index) => {
    if (index >= 0 && index < messages.length) {
      const path = messages[index].audio;
      setSelectedAudio(messages[index].id);
      setPlaying(false);
      audioRecorderPlayer.pausePlayer();
      console.log('Lecteur en pause . . .');
    };
  };

  const onStopPlay = () => {
    setPlaying(false);
    setPlayTime('00:00:00');
    console.log('Lecteur arrêté');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  // GIPHY


  return (
    <View style={{backgroundColor: '#fff', height: '100%', width: 'auto'}}>
      <MenuSlide imagePath={imagePath} />
      <View>
        <MenuTalk user={user} prenium={prenium} friendChoice={friendChoice} navigation={navigation} />
      </View>
      <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
        style={{top: '10%', height: '90%', resizeMode: 'contain'}}>
        <View style={{top: -50, height: '70%'}}>
          <ScrollView
            style={{ marginTop: 100, flexDirection: 'column-reverse' }}
            contentContainerStyle={{ paddingBottom: 20 }}
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
          >
            {Array.isArray(messages) &&
              Array.isArray(receivedMessages) &&
              [...messages, ...receivedMessages].sort(sortMessagesChronologically).map((message, index) => (
                <View
                  key={`message-${index}`}
                  style={{
                    height: 'auto',
                    minWidth: '40%',
                    alignSelf: messages.includes(message) ? 'flex-end' : 'flex-start',
                    marginTop: 20,
                    marginLeft: messages.includes(message) ? 0 : 20,
                    marginRight: messages.includes(message) ? 20 : 20,
                  }}
                >
                  <View style={{width: 350}}>
                    <Text style={{ color: 'rgba(0, 25, 167, 0.40)', fontFamily: 'Comfortaa', fontSize: 14, fontWeight: 700, textAlign: 'center' }}>Aujourd’hui {formatTime(currentTime)}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: messages.includes(message) ? 'row-reverse' : 'row',
                      alignSelf: messages.includes(message) ? 'flex-end' : 'flex-start',
                      height: 40,
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: messages.includes(message) ? 'rgba(255, 132, 215, 0.97)' : '#0019A7',
                        textAlign: messages.includes(message) ? 'right' : 'left',
                        fontFamily: 'Gilroy',
                        fontSize: 15,
                        fontWeight: 700,
                      }}
                    >
                      {messages.includes(message) ? userRecept : userEmet}
                    </Text>
                    <Image
                      source={message.sender === userRecept ? require('../../../assets/images/Ellipse44.png') : require('../../../assets/images/kolia-ellipse.png')}
                      style={{ width: 40, marginLeft: message.sender === userRecept ? 20 : 20, marginRight: message.sender === userRecept ? 20 : 20, resizeMode: 'contain' }}
                    />
                  </View>
                  <View>
                    {message.text && ( //  texte
                      <Text
                        style={{
                          marginTop: 10,
                          alignSelf: message.sender === userRecept ? 'flex-end' : 'flex-start',
                          borderRadius: 50,
                          borderWidth: 1,
                          borderColor: message.sender === userRecept ? '#FF84D7' : '#0019A7',
                          color: message.sender === userRecept ? '#FF84D7' : '#0019A7',
                          textAlign: 'center',
                          padding: 5,
                          fontFamily: 'Comfortaa',
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        {message.text}
                      </Text>
                    )}
                    {message.audio && ( // audio
                      <View
                        style={{
                          width: 150,
                          height: 28,
                          top: 10,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          alignSelf: message.sender === userRecept ? 'flex-end' : 'flex-start',
                          borderRadius: 50,
                          backgroundColor: '#632b61'
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            if (message.id === selectedAudio && playing) {
                              onPausePlay(message.id);
                            } else {
                              onStartPlay(message.id);
                            }
                          }}>
                          <Image source={message.id === selectedAudio && playing ? require('../../../assets/images/pause-blanc.png') : require('../../../assets/images/play-blanc.png')} style={{width:10, height:10, resizeMode:'contain'}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} />
                        <Text style={{ color:'white', fontSize: 10, fontFamily: 'Comfortaa-Bold'}}>{message.id === selectedAudio && playing ? playTime : message.playTime}</Text>
                      </View>
                    )}
                    {message.gift && ( // gift
                      <View style={{width:'100%', padding:20,}}>
                        <GiphyMediaView
                          media={message.gift}
                          style={{ aspectRatio: message.gift.aspectRatio }}
                        />
                      </View>
                    )}
                  </View>
                </View>
              ))}
          </ScrollView>

        </View>

        <SafeAreaView
          style={{
            position: 'relative',
            bottom: 45,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              width: 240,
              height: 42,
              borderRadius: 40,
              borderColor: '#000',
              borderWidth: 1,
              color: '#000',
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              textAlign: 'center',
            }}
            onChangeText={setText} // Mettre à jour le state "text" avec la valeur saisie
            value={text}
            keyboardType="default"
            onSubmitEditing={handleSendTextMessage}
            placeholder={'Entrez votre message...'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 10,
              width: 100,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => { setModalGiphyVisible(true); }}>
              <Image source={require('../../../assets/boutons/ico-giphy.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { recording ? onStopRecord() : onStartRecord(); }}>
              {recording ?
                <View style={{width:20, height:20, backgroundColor:'#0019A7', borderRadius:5,}} />
                :
                <Image source={require('../../../assets/boutons/ico-mic.png')} />
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
              <Image source={require('../../../assets/boutons/ico-send.png')} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={{ top: 55, position: 'relative' }}>
          <MenuBottom navigation={navigation} activeTab={'Talk'} />
        </View>
      </ImageBackground>
      <Modal animationType="slide" transparent={true} visible={modalGiphyVisible} onRequestClose={() => setModalGiphyVisible(false)}>
        <TouchableOpacity onPress={() => setModalGiphyVisible(false)} style={{ backgroundColor: 'transparent', height: '100%', width: '100%', position: 'absolute' }} />
        <ImageBackground
        source={require('../../../assets/images/bg-parametres.png')}
          style={{ position:'absolute', backgroundColor: 'white', top: '24%', height: 550, width:'100%',resizeMode: 'cover', flexDirection:'column', justifyContent:'space-around', alignItems:'center', }}>
          <SafeAreaView style={{ }}>
            <TextInput
            autoFocus
            onChangeText={setSearchQuery}
            placeholder="Rechercher votre Gif . . ."
              value={searchQuery}
              style={{
              width: 240,
              height: 42,
              borderRadius: 40,
              borderColor: '#000',
              borderWidth: 1,
              color: '#000',
              fontFamily: 'Comfortaa',
              fontSize: 15,
              fontStyle: 'normal',
              textAlign: 'center',
            }}
          />
          <GiphyGridView
            content={GiphyContent.search({ searchQuery: searchQuery })}
            cellPadding={3}
            style={{ height: 400, width:400, marginTop: 24 }}
              onMediaSelect={(e) => { setMedia(e.nativeEvent.media); handleSendGiftMessage(e.nativeEvent.media); setModalGiphyVisible(false); }}
          />
        </SafeAreaView>
        </ImageBackground>
      </Modal>
    </View>
  );
};

// Propriétés du composant
TalkChat.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default TalkChat;
