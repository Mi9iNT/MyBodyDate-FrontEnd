/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Styles from '../../assets/style/Styles';
import { useNavigation } from '@react-navigation/native';

export const MenuSlide = ({ route, icoPushChange, backButton, settingsNavigation, imagePath, tabPath, backgroundColor }) => {
  const navigation = useNavigation();

  // Constantes concernant la Modal du Menu Slide
  const [modalVisible, setModalVisible] = useState(false);

  // const [icoPushChange, setIcoPushChange] = useState(icoPushChange);

  // const [imagePath, setImagePath] = useState();

  const getRandomLink = () => {
    const link1 = 'Voix du jour';
    const link2 = 'Carte magique';
    const randomIndex = Math.floor(Math.random() * 2);
    return randomIndex === 0 ? navigation.navigate(link1) : navigation.navigate(link2);
  };
  console.log(backgroundColor);

  const [linkSelected, setLinkSelected] = useState();
  // console.log(tabPath);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        width:'100%',
        backgroundColor:backgroundColor ? 'white' : 'transparent',
      }}>
      {backButton === 'Retour' ?
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 165,
          }}>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => settingsNavigation ? navigation.navigate(settingsNavigation) : navigation.goBack() }>
            <Image
              source={require('../../assets/images/retour_flèche_bleu.png')}
              style={{ width: 10, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      : backButton === 'Retour profil' ?
        <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 125,
            }}>
            <TouchableOpacity
              accessibilityLabel="Accueil"
              onPress={() => navigation.navigate('Tabs', { tabPath: tabPath })}>
              <Image
                source={imagePath === 'Professionnel' ? require('../../assets/images/retour_flèche_noir.png') : imagePath === 'Professionnel-Clair' ? require('../../assets/images/retour_flèche_blanc.png') : require('../../assets/images/retour_flèche_bleu.png')}
                style={{ width: 10, height: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityLabel="Accueil"
              onPress={() => navigation.navigate('Tabs', { tabPath: tabPath })}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 18,
                  color: '#0019A7',
                }}>
                {backButton}
              </Text>
            </TouchableOpacity>
        </View>
      : backButton === 'Retour profil pro' ?
        <View
          style={{
            width: 155,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            accessibilityLabel="Accueil"
            onPress={() => navigation.navigate('Tabs', { tabPath: tabPath }, { tabPath: 'Professionnel' })}>
            <Image
              source={imagePath === 'Professionnel' ? require('../../assets/images/retour_flèche_noir.png') : imagePath === 'Professionnel-Clair' ? require('../../assets/images/retour_flèche_blanc.png') : require('../../assets/images/retour_flèche_bleu.png')}
              style={{ width: 10, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Retour profil pro"
            onPress={() => navigation.navigate('Tabs', { tabPath: tabPath }, { tabPath: 'Professionnel' })}>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '700',
                fontSize: 18,
                color: imagePath === 'Professionnel' ? '#000' : imagePath === 'Professionnel-Clair' ? '#fff' : '#0019A7',
              }}>
              Retour Profil Pro
            </Text>
          </TouchableOpacity>
        </View>
      : backButton === 'Back' ?
        <View
          style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            width:100,
          }}>
          <TouchableOpacity
            accessibilityLabel="Retour"
            onPress={() => navigation.goBack()}>
            <Image
              source={imagePath === 'Professionnel' ? require('../../assets/images/retour_flèche_noir.png') : imagePath === 'Professionnel-Clair' ? require('../../assets/images/retour_flèche_blanc.png') : require('../../assets/images/retour_flèche_bleu.png')}
              style={{ width: 10, height: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Retour"
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                fontFamily: 'Comfortaa-Bold',
                fontSize: 18,
                color: imagePath === 'Professionnel' ? '#000' : imagePath === 'Professionnel-Clair' ? '#fff' : '#0019A7',
              }}>
              Retour
            </Text>
          </TouchableOpacity>
        </View>
        :
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          accessibilityLabel="Accueil"
          onPress={() => navigation.navigate('Tabs', {tabPath:tabPath})}>
          <Image
            source={imagePath === 'Professionnel' ? require('../../assets/images/retour_flèche_noir.png') : imagePath === 'Professionnel-Clair' ? require('../../assets/images/retour_flèche_blanc.png') : require('../../assets/images/retour_flèche_bleu.png')}
            style={{ width: 10, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Accueil"
          onPress={() => navigation.navigate('Tabs', {tabPath:tabPath})}>
          <Image
            source={imagePath === 'Professionnel-Clair' ? require('../../assets/images/home_blanc.png') : require('../../assets/images/home_1.png')}
            style={{ width: 20, height: 20, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Accueil"
          onPress={() => navigation.navigate('Tabs', {tabPath:tabPath})}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 18,
              color: imagePath === 'Professionnel' ? '#000' : imagePath === 'Professionnel-Clair' ? '#fff' : '#0019A7',
            }}>
            Accueil
          </Text>
        </TouchableOpacity>
        </View>
        }
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ right:10, width:31, justifyContent:'center', alignItems: 'center'}}>
            <Image
              source={
                imagePath === 'Ami'
                  ? require('../../assets/images/cercle_ami.png')
                  : imagePath === 'Professionnel'
                  ? require('../../assets/images/Cercle-Pro-Sombre.png')
                  : imagePath === 'Professionnel-Clair'
                  ? require('../../assets/images/Cercle-Pro-Clair.png')
                  : require('../../assets/images/Rencontre_amoureuse.png')
              }
              style={{ width: 30, height: 30 }}
            />
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Notifications');
          // setIcoPushChange(true);
            }}>
          <Image
            source={icoPushChange ? require('../../assets/images/notification_icons-vert.png') : !icoPushChange && imagePath === 'Professionnel-Clair' ? require('../../assets/images/notification_icons-blanc.png') : !icoPushChange && imagePath === 'Professionnel' ? require('../../assets/images/notification_icons-noir.png') : require('../../assets/images/notification_icons.png') }
            style={{ width: 30, height: 30, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={{ backgroundColor: 'transparent', height: '100%', width: '100%', position: 'absolute', right: 0 }} />
          <View
            style={{
              top: 61,
              left: 94,
              width: 322,
              height: 804,
              backgroundColor: '#FFFFFF',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              borderWidth: 1,
              borderColor: '#0019A7',
            }}>
            <View style={{top: 20, flexDirection: 'column', justifyContent: 'space-around'}}>

              <View style={{left:60, height:'22%', width:'66%', flexDirection:'column', justifyContent: 'space-between'}}>

             {/* Jeux */}
              <TouchableOpacity
                style={{
                  width: '40%',
                  height: 24,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf:'flex-end',
                  alignItems:'center',
                }}
                accessibilityLabel="Jeux"
                  onPress={() => { setModalVisible(false); getRandomLink(); }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Jeux
                </Text>
                <Image
                  source={require('../../assets/boutons/ico-jeux.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

            {/* Apps Affinitaires */}

              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 24,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf:'flex-end',
                  alignItems:'center',
                }}
                accessibilityLabel="Apps Affinitaires"
                  onPress={() => { setModalVisible(false); navigation.navigate('Apps Affinitaires'); }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Apps Affinitaires
                </Text>
                <Image
                  source={require('../../assets/boutons/ico-app-affinite.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

            {/* Paramètres */}
              <TouchableOpacity
                style={{
                  width: '70%',
                  height: 24,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf:'flex-end',
                  alignItems:'center',
                }}
                accessibilityLabel="Paramètres"
                  onPress={() => { setModalVisible(false); navigation.navigate('SettingsStack', {imagePath: imagePath});}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                    textAlign: 'right',
                  }}>
                  Paramètres
                </Text>
                <Image
                  source={require('../../assets/images/parametres.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>

            </View>

            <View style={{marginVertical: 15, height:1, width:215, backgroundColor:'#0019A7', alignSelf:'center'}} />
            <Text style={{left: 40, color: '#0019A7',fontFamily: 'Gilroy-Bold',fontSize: 20,fontStyle: 'normal',fontWeight: 700 }}>Choisir un mode</Text>
            <View style={{top: 20, width: 292, height: 350, justifyContent:'space-between', flexDirection:'column'}}>
               {/* Professionnel */}
            <TouchableOpacity
              style={{
                height: 110,
                width:268,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignSelf:'center',
                alignItems:'center',
                backgroundColor: linkSelected === 'Professionnel' ? 'rgba(0, 25, 167, 0.13)' : 'transparent',
                borderRadius: 22,
                padding: 2,
                }}
                  onPress={() => { setModalVisible(false); setLinkSelected('Professionnel'); navigation.navigate('ProfilMeRPfirst', { tabPath: 'Professionnel' }); }}>
                <Image
                  source={require('../../assets/images/mybodydate_favicon-1.png')}
                  style={{
                    width: 38,
                    height: 38,
                    resizeMode: 'contain',
                  }}
                />
                <View
                  style={{
                    height: '70%',
                    width: '70%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Gilroy-Bold',
                    fontWeight: 700,
                    color: '#0019A7',
                  }}>
                  Professionnel
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Comfortaa-Bold',
                    fontWeight: '500',
                    color: '#0019A7',
                  }}>
                  Trouvez des contacts qui vous font évoluer.
                </Text>
                </View>

            </TouchableOpacity>
              <View style={{marginVertical: 10, height:1, width:215, backgroundColor:'#0019A7', alignSelf:'center'}} />
            {/* Cercle d'ami */}
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('ProfilMeCAfirst',{tabPath:'Ami'});
                setLinkSelected('Ami');
              }}
              style={{
                height: 110,
                width:268,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignSelf:'center',
                alignItems:'center',
                backgroundColor: linkSelected === 'Ami' ? 'rgba(0, 25, 167, 0.13)' : 'transparent',
                borderRadius: 22,
                padding: 2,
                }}>
                <Image
                  source={require('../../assets/images/mybodydate_favicon-2.png')}
                  style={{
                    width: 38,
                    height: 38,
                    resizeMode: 'contain',
                  }}
                />
                <View
                  style={{
                    height: '70%',
                    width: '70%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Gilroy-Bold',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Cercle d'ami.es
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Comfortaa-Bold',
                    fontWeight: '500',
                    color: '#0019A7',
                  }}>
                  Agrandissez votre cercle social.
                </Text>
                </View>

            </TouchableOpacity>
              <View style={{marginVertical: 10, height:1, width:215, backgroundColor:'#0019A7', alignSelf:'center'}} />
            {/* Rencontre amoureuse */}
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('ProfilMeRAfirst', {tabPath:'Amour'});
                setLinkSelected('Amour');
              }}
              style={{
                height: 110,
                width:268,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignSelf:'center',
                alignItems:'center',
                backgroundColor: linkSelected === 'Amour' ? 'rgba(0, 25, 167, 0.13)' : 'transparent',
                borderRadius: 22,
                padding: 2,
                }}>
                <Image
                  source={require('../../assets/images/mybodydate_favicon-3.png')}
                  style={{
                    width: 38,
                    height: 38,
                    resizeMode: 'contain',
                  }}
                />
                <View
                  style={{
                    height: '85%',
                    width: '70%',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Gilroy-Bold',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Recontre amoureuse
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Comfortaa-Bold',
                    fontWeight: '500',
                    color: '#0019A7',
                  }}>
                  Un coup de coeur n'attend pas.
                </Text>
                </View>

            </TouchableOpacity>
            </View>

            </View>

          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={imagePath === 'Professionnel' ? require('../../assets/images/menu-mobile-noir.png') : imagePath === 'Professionnel-Clair' ? require('../../assets/images/menu-mobile-blanc.png') : require('../../assets/images/menu_mobile.png')}
            style={{ width: 30, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuSlide;
