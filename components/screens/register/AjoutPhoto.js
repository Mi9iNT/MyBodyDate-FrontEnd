import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  PERMISSIONS,
  check,
  checkMultiple,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import {
  getMethod,
  postMethod,
  postImageMethod,
} from '../../../service/axiosInstance';
import {storeData, getData} from '../../../service/storage';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import StylesAjoutPhoto from '../../../assets/style/styleScreens/styleRegister/StyleAjoutPhoto';

export const AjoutPhoto = ({navigation}) => {
  const [userLog, setuserLog] = useState();

  const [userId, setuserId] = useState();

  const [buttonPressed, setButtonPressed] = useState('');

  const [cameraStatus, setCameraStatus] = useState(false);

  const [sourcePath, setSourcePath] = useState(false);

  const [userAvatar, setUserAvatar] = useState(false);

  const [modalRecaptchaVisible, setModalPreventImageaVisible] = useState(false);

  console.log('userAvatar : ' + sourcePath);

  const checkPermissions = () => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            requestPermission();
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            requestPermission();
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const requestPermission = async () => {
    try {
      const cameraPermission = PERMISSIONS.ANDROID.CAMERA;

      const permissions = [cameraPermission];

      const result = await requestMultiple(permissions);

      console.log('Résultat des demandes de permission :', result);

      console.log('Camera', result[cameraPermission]);

      if (result[cameraPermission] === RESULTS.GRANTED) {
        console.log('Autorisations accordées.');
        setCameraStatus(true);
      } else {
        console.log('Autorisations refusées.');
      }
    } catch (err) {
      console.error('Erreur lors de la demande de permissions : ', err);
    }
  };

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log("L'utilisateur a annulé la sélection de l'image.");
      } else if (response.errorCode) {
        console.log('Erreur : ', response.errorMessage);
      } else {
        setSourcePath(response.assets[0].uri);
        handleStoreData('avatar', response.assets[0].uri);
        // postData(response.assets[0].uri);
        console.log(sourcePath);
      }
    });
  };

  const openCamera = () => {
    if (cameraStatus) {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };

      launchCamera(options, response => {
        if (response.didCancel) {
          console.log("L'utilisateur a annulé la capture.");
        } else if (response.errorCode) {
          console.log('Erreur : ', response.errorMessage);
        } else {
          setSourcePath(response.assets[0].uri);
          handleStoreData('avatar', sourcePath);
          // postData(response.assets[0].uri);
          console.log(sourcePath);
        }
      });
    } else {
      requestPermission();
    }
  };

  const handleStoreData = async (key, value) => {
    try {
      await storeData(key, value);
    } catch (error) {
      console.error('Erreur lors du stockage des données :', error);
    }
  };

  const handleGetData = async () => {
    try {
      const avatar = await getData('avatar');
      setSourcePath(avatar);
      // console.log(sourcePath);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  // const getAvatar = async index => {
  //   try {
  //     const avatarDistant = await getMethod(`/getAvatar/${userId}`);
  //     console.log('userId :', userId);
  //     setSourcePath(avatarDistant);
  //   } catch (error) {
  //     console.warn(
  //       'Erreur lors de la récupération des données :',
  //       error.message,
  //     );
  //   }
  // };

  // const postData = async index => {
  //   const url = '/addAvatar';
  //   const formData = new FormData();

  //   formData.append('userId', userId);
  //   formData.append('file', {
  //     uri: index,
  //     type: 'image/*',
  //     name: 'avatar.jpg',
  //   });

  //   console.log('Données du formulaire :', formData);

  //   try {
  //     const response = await postImageMethod(url, formData);
  //     console.log('Réponse du serveur après la requête POST :', response);
  //     if (response) {
  //       handleStoreData('avatar', index);
  //     }
  //   } catch (error) {
  //     console.error('Erreur lors de la requête POST :', error);
  //   }
  // };

  // const getCurrentUser = () => {
  //   getMethod('/currentUser')
  //     .then(data => {
  //       console.log(
  //         'Données récupérées :',
  //         data.userProfile,
  //         ' ',
  //         data.phoneNumber,
  //         ' ',
  //         data.avatar,
  //       );

  //       if (data) {
  //         setuserLog(data.email ? data.email : data.phoneNumber);
  //         setuserId(data.id);
  //         setUserAvatar(data.userProfile.avatar.avatar);
  //         // getAvatar(data.userProfile.avatar.avatar, userId);
  //       } else {
  //         console.warn('Avatar non trouvé dans les données.');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données :', error);
  //     });
  // }

  useEffect(() => {
    checkPermissions();
    handleGetData();
  }, []);

  let avatar;
  if (!sourcePath) {
    avatar = require('../../../assets/images/image.png');
  } else {
    // let cheminComplet = sourcePath;
    // let cheminAttendu = cheminComplet.substring(
    //   cheminComplet.indexOf('\\static\\'),
    // );
    // cheminAttendu = cheminAttendu.replace(/\\/g, '/');

    // avatar = {uri: 'data:image/png;base64,' + cheminAttendu};
    avatar = {uri: sourcePath};
    console.log(avatar);
  }

  return (
    <View style={StylesAjoutPhoto.container}>
      <ImageBackground
        style={StylesAjoutPhoto.bgGradient}
        source={require('../../../assets/images/Background.png')}>
        <View style={[StylesAjoutPhoto.ViewText]}>
          <Text style={[StylesAjoutPhoto.TxtTitle]}>AJOUTEZ UNE PHOTO</Text>
          <Text style={[StylesAjoutPhoto.TxtTitle2]}>
            Affichez votre lifestyle.(6 photos publiques)
          </Text>
          <Image style={[StylesAjoutPhoto.imgPhoto]} source={avatar} />
          <View style={[StylesAjoutPhoto.viewBtn]}>
            <TouchableOpacity
              style={[StylesAjoutPhoto.btn]}
              accessibilityLabel="Importer une image"
              onPress={() => {
                setButtonPressed('Import');
                ImagePicker();
              }}>
              <Image
                style={[StylesAjoutPhoto.imgBtn]}
                source={
                  buttonPressed === 'Import'
                    ? require('../../../assets/boutons/Bouton-Rouge-Image.png')
                    : require('../../../assets/boutons/Bouton-Noir-Image.png')
                }
              />
              <Text style={[StylesAjoutPhoto.textBtn]}>Importer une image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesAjoutPhoto.btn]}
              accessibilityLabel="Prendre une photo"
              onPress={() => {
                setButtonPressed('Photo');
                openCamera();
              }}>
              <Image
                style={[StylesAjoutPhoto.imgBtn]}
                source={
                  buttonPressed === 'Photo'
                    ? require('../../../assets/boutons/Bouton-Rouge-Photo.png')
                    : require('../../../assets/boutons/Bouton-Noir-Photo.png')
                }
              />
              <Text style={[StylesAjoutPhoto.textBtn]}>Prendre une photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[StylesAjoutPhoto.btn]}
              accessibilityLabel="Meta - Facebook"
              onPress={() => {
                setButtonPressed('Meta');
              }}>
              <Image
                style={[StylesAjoutPhoto.imgBtn]}
                source={
                  buttonPressed === 'Meta'
                    ? require('../../../assets/boutons/Bouton-Rouge-Meta.png')
                    : require('../../../assets/boutons/Bouton-Noir-Meta.png')
                }
              />
              <Text style={[StylesAjoutPhoto.textBtn]}>Meta (Facebook)</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[StylesAjoutPhoto.btn2]}
            onPress={() => navigation.navigate('Empreinte vocal')}
            accessibilityLabel="Enregistrer plus tard">
            <Text style={[StylesAjoutPhoto.textBtnBlue]}>
              Enregistrer plus tard
            </Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalRecaptchaVisible}
            onRequestClose={() => {
              setModalPreventImageaVisible(!modalRecaptchaVisible);
            }}>
            <View style={[StylesAjoutPhoto.centeredView]}>
              <Image
                style={[StylesAjoutPhoto.icoCadenas]}
                source={require('../../../assets/images/cadenas.png')}
              />
              <Text style={[StylesAjoutPhoto.textBlueCenter]}>
                À MONTRER{'\n'}SOUS RÉSERVE !
              </Text>
              <View style={[StylesAjoutPhoto.rowImg]}>
                <Image
                  style={[StylesAjoutPhoto.imgBlur]}
                  blurRadius={10}
                  source={require('../../../assets/images/x-femme.png')}
                />
                <Image
                  style={[StylesAjoutPhoto.imgBlur]}
                  blurRadius={10}
                  source={require('../../../assets/images/x-homme.png')}
                />
                <Image
                  style={[StylesAjoutPhoto.imgNblur]}
                  source={require('../../../assets/images/julia.jpg')}
                />
              </View>
              <Text style={[StylesAjoutPhoto.textBlueCenter2]}>
                Les profils dénudés ou les visages{'\n'}masqués peu
                reconnaissables ne{'\n'}sont pas autorisés sur votre profil
                {'\n'}public. Vous pouvez ajouter ces{'\n'}à votre dossier dédié
                et{'\n'}confidentiel plus tard.
              </Text>
              <TouchableOpacity
                style={[StylesAjoutPhoto.btn]}
                onPress={() => {
                  setButtonPressed('Next');
                  setModalPreventImageaVisible(false);
                  navigation.navigate('Empreinte vocal');
                }}
                accessibilityLabel="Continuer">
                <Image
                  style={[StylesAjoutPhoto.imgBtn]}
                  source={
                    buttonPressed === 'Next'
                      ? require('../../../assets/boutons/Bouton-Rouge.png')
                      : require('../../../assets/boutons/Bouton-Bleu.png')
                  }
                />
                <Text style={[StylesAjoutPhoto.textBtn2]}>Continuer</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <TouchableOpacity
            style={StylesAjoutPhoto.btn3}
            onPress={() => {
              setButtonPressed('Continuer');
              setModalPreventImageaVisible(true);
            }}
            accessibilityLabel="Continuer">
            <Text
              style={[
                StylesAjoutPhoto.textBtn1,
                {
                  color: buttonPressed === 'Continuer' ? '#fff' : '#0019A7',
                },
              ]}>
              Continuer
            </Text>
            <Image
              style={[StylesAjoutPhoto.imgBtn2]}
              source={
                buttonPressed === 'Continuer'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc.png')
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AjoutPhoto;
