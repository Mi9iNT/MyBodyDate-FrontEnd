/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';
import {More} from '../../composants/more/More';
import Styles from '../../../assets/style/Styles';
import LinearGradient from 'react-native-linear-gradient';

export const DiscoverBio = ({route, navigation, imagePath}) => {
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
  const userVoice = route.params?.userVoice ?? '';

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [image, setImage] = useState('../../../assets/images/Rectangle-102.png');
  const [buttonPressed, setButtonPressed] = useState();
  let blur = 40;
  if (buttonPressed === 'Lire') {
    blur = 0;
  } else {
    blur = 40;
  }

 const handleModal = (index) => {
  if (buttonPressed === 'Lire' && index === 3) {
    setImage('Rectangle-44'); 
    setModalImage(true);
  } else if (buttonPressed !== '' && index === 3) {
    setModalVisible(true);
  } else if (index === 2) {
    setImage('Bio-K-1');
    setModalImage(true);
  } else if (index === 1) {
    setImage('Bio-K');
    setModalImage(true);
  } else {
    setModalImage(false);
  }
};
  
  const imagePaths = {
  'default': require('../../../assets/images/Rectangle-102.png'),
  'Bio-K': require('../../../assets/images/Bio-K.png'),
  'Bio-K-1': require('../../../assets/images/Bio-K-1.png'),
  'Rectangle-44': require('../../../assets/images/Rectangle-44.png'),
};

  console.log(image);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MenuSlide/>
      <ImageBackground
        source={require('../../../assets/images/Background.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            top: 50,
          }}>
          <ImageBackground
            source={require('../../../assets/images/Bio-RencontreAmoureuse.png')}
            style={{
              width: 396,
              height: 417,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                letterSpacing: 1,
                top: 20,
                left: 20,
              }}>
              Bio
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                letterSpacing: 1,
                top: 30,
                left: 20,
              }}>
              Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                color: '#0019A7',
                letterSpacing: 1,
                top: 40,
                left: 20,
              }}>
              Centre d'intérets
            </Text>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 60,
              }}>
              <View style={{ backgroundColor: '#3347b9', borderRadius: 50, borderColor: '#0019A7', borderWidth: 2, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', gap:10, paddingHorizontal:10, }}>
                <Image style={{width:20, resizeMode:'contain'}} source={require('../../../assets/images/ico-coeurs-blanc.png')} />
                <Text style={{color: '#FFF',textAlign: 'right',fontFamily: 'Comfortaa-Bold',fontSize: 16,fontStyle: 'normal',
              }}>Rencontre amoureuse</Text>
              </View>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#0019A7', borderWidth: 2, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', gap:10, paddingHorizontal:10, }}>
                <Image style={{width:20, resizeMode:'contain'}} source={require('../../../assets/images/ico-altere-bleu.png')} />
                <Text style={{color: '#0019A7',textAlign: 'right',fontFamily: 'Comfortaa-Bold',fontSize: 16,fontStyle: 'normal',
              }}>Sportif.ve</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                top: 80,
                left: 10,
              }}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#0019A7', borderWidth: 2, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', gap:10, paddingHorizontal:10, maxWidth:'62%' }}>
                <Image style={{width:20, resizeMode:'contain'}} source={require('../../../assets/images/ico-love-bleu.png')} />
                <Text style={{color: '#0019A7',textAlign: 'right',fontFamily: 'Comfortaa-Bold',fontSize: 16,fontStyle: 'normal',
              }}>ÉterneLle amoureux.se</Text>
              </View>
              <View style={{ top: 20, backgroundColor: '#3347b9', borderRadius: 50, borderColor: '#0019A7', borderWidth: 2, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', gap:10, paddingHorizontal:10, maxWidth:'85%', }}>
                <Image style={{width:20, resizeMode:'contain'}} source={require('../../../assets/images/ico-chef-blanc.png')} />
                <Text style={{color: '#FFF',textAlign: 'right',fontFamily: 'Comfortaa-Bold',fontSize: 16,fontStyle: 'normal',
              }}>Amateur.ice de cuisine & gourmet</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                top: 120,
              }}>
              <View style={{ backgroundColor: '#fff', borderRadius: 50, borderColor: '#0019A7', borderWidth: 2, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', gap:10, paddingHorizontal:10, }}>
                <Image style={{width:20, resizeMode:'contain'}} source={require('../../../assets/images/ico-ami-bleu.png')} />
                <Text style={{color: '#0019A7',textAlign: 'right',fontFamily: 'Comfortaa-Bold',fontSize: 16,fontStyle: 'normal',
              }}>Cercle d'ami.es</Text>
              </View>
              <View style={{ backgroundColor: '#3347b9', borderRadius: 50, borderColor: '#0019A7', borderWidth: 2, height: 48, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', gap:10, paddingHorizontal:10, }}>
                <Image style={{width:20, resizeMode:'contain'}} source={require('../../../assets/images/ico-avion-blanc.png')} />
                <Text style={{color: '#FFF',textAlign: 'right',fontFamily: 'Comfortaa-Bold',fontSize: 16,fontStyle: 'normal',
              }}>Globe trotteur.se</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 105,
          }}>
          <TouchableOpacity
            onPress={() => { handleModal(1); }}
            style={{
              borderRadius: 30,
              borderColor: '#0019A7',
              borderWidth: 4,
              width: 102,
              height: 102,
              alignItems: 'center',
              justifyContent:'center',
            }}>
            <Image
              source={require('../../../assets/images/Bio-K.png')}
              style={{
                width: 100,
                height: 100,
                resizeMode:'contain',
              }}
            />
            </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { handleModal(2); }}
            style={{
            borderRadius: 30,
            borderColor: '#0019A7',
            borderWidth: 4,
            width: 102,
            height: 102,
            alignItems: 'center',
            justifyContent:'center',
            }}>
            <Image
              source={require('../../../assets/images/Bio-K-1.png')}
              style={{
                width: 100,
                height: 100,
                resizeMode:'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { handleModal(3); }}
          style={{
            borderRadius: 30,
            borderColor: '#E0BDFF',
            borderWidth: 4,
            width: 102,
            height: 102,
            alignItems: 'center',
            justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/Rectangle-44.png')}
              blurRadius={blur}
              style={{
                borderRadius: 20,
                borderEndWidth: 2,
                width: 100,
                height: 100,
                resizeMode:'contain',
              }} />
            {blur === 0 ? null :
              <View style={{ elevation: 12, position: 'absolute', bottom: 30, }}>
                <Image
                  source={require('../../../assets/images/cadenas-rouge.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                  }}
              />
              </View>
              }
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.80);', height: '85%', width: '100%', alignItems:'center', justifyContent:'center', top: 45 }}>
            <ImageBackground source={require('../../../assets/images/Rectangle-102.png')} style={{ resizeMode: 'contain', width: 332, height: 469, alignItems: 'center' }}>
              <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={{top: 20, left: 130, width: 20, marginTop: 0}}>
          <Image
            source={require('../../../assets/images/Group-58.png')}
            style={{
              top: 4,
              width: 20,
              height: 18,
            }}
          />
        </TouchableOpacity>
        <Image
            source={require('../../../assets/images/Rectangle-44.png')}
            blurRadius={blur}
            style={{
            top: 30,
            borderRadius: 100,
            borderEndWidth: 2,
            width: 120,
            height: 120,
            resizeMode:'contain',
          }} />
            <Text style={{ top: 50, width: '80%', color: '#FFF', textAlign: 'center', fontFamily: 'Gilroy-Bold', fontSize: 20, fontStyle: 'normal', }}>Voulez-vous vraiment voir cette photo ?</Text>
            <Text style={{ top: 80, width: '80%', color: '#FFF', textAlign: 'center', fontFamily: 'Gilroy-Bold', fontSize: 20, fontStyle: 'normal', }}>Vous êtes sur le point d’accéder à un contenu à accès restreint</Text>
              <TouchableOpacity style={{ top: 130, height: 42, }} onPress={() => { setButtonPressed('Lire'); setModalVisible(false); }}>
              <Image source={buttonPressed === 'Lire' ? require('../../../assets/boutons/Bouton-Rouge.png') : require('../../../assets/boutons/Bouton-Blanc.png')} style={{ height: 42, resizeMode: 'contain' }} />
              <Text style={{ bottom:38,color: '#0019A7',textAlign: 'center', fontFamily: 'Comfortaa-Bold',fontSize: 18,fontStyle: 'normal',}}>Lire le contenu</Text>
            </TouchableOpacity>

            </ImageBackground>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalImage}
          onRequestClose={() => setModalImage(false)}>
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.80);', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', top: 45 }}>
            <View style={{ width: 300, height: 300, alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  setModalImage(false);
                }}
                style={{bottom: 200, left: 140, width: 20, marginTop: 0}}>
                <Image
                  source={require('../../../assets/images/Group-58.png')}
                  style={{
                    width: 20,
                    height: 18,
                  }}
                />
              </TouchableOpacity>
              <Image source={imagePaths[image]} style={{ bottom:50, resizeMode: 'contain', width: 300, height:300, alignItems: 'center' }}/>
            </View>
          </View>
        </Modal>
      </ImageBackground>
      {/* <MenuBottom navigation={navigation} route={route} active={'Discover'} /> */}
    </View>
  );
};

DiscoverBio.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
