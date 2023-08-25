/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Styles from '../../assets/style/Styles';
import { useNavigation } from '@react-navigation/native';
import { Pastille } from './Pastille';

export const MenuSlideSettings = ({backButton, imagePath}) => {
  const navigation = useNavigation();

  // Constantes concernant la Modal du Menu Slide
  const [modalVisible, setModalVisible] = useState(false);

  const [linkSelected, setLinkSelected] = useState();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
       {backButton?
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 165,
        }}>
        <TouchableOpacity
          accessibilityLabel="Accueil"
          onPress={() => navigation.navigate('Moi')}>
          <Image
            source={require('../../assets/images/retour_flèche_bleu.png')}
            style={{ width: 10, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Accueil"
          onPress={() => navigation.navigate('Moi')}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 18,
              color: '#0019A7',
            }}>
            Retour mon profil
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
          onPress={() => navigation.navigate('ProfilMe')}>
          <Image
            source={require('../../assets/images/retour_flèche_bleu.png')}
            style={{ width: 10, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Accueil"
          onPress={() => navigation.navigate('ProfilMe')}>
          <Image
            source={require('../../assets/images/home_1.png')}
            style={{ width: 20, height: 20, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Accueil"
          onPress={() => navigation.navigate('ProfilMe')}>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 18,
              color: '#0019A7',
            }}>
            Accueil
          </Text>
        </TouchableOpacity>
        </View>
        }
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ left:-10, width:31, justifyContent:'center', alignItems: 'center'}}>
          <Image
              source={
                imagePath === 'Ami'
                  ? require('../../assets/images/cercle_ami.png')
                  : imagePath === 'Amour'
                  ? require('../../assets/images/Rencontre_amoureuse.png')
                  : ('../../assets/images/Rencontre_professionnel.png')
              }
              style={{ width: 30, height: 30 }}
            />
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Notifications');
          // setIcoPushChange(true);
            }}>
          <Image
            source={icoPushChange ? require('../../assets/images/notification_icons-vert.png') : require('../../assets/images/notification_icons.png')}
            style={{ width: 30, height: 30, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
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
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ backgroundColor: 'transparent', height: '100%', width: '30%', position: 'absolute', right: 95 }} />
            
            <View style={{top: 20, flexDirection: 'column', justifyContent: 'space-around'}}>

              <View style={{left:60, height:'22%', width:'66%', flexDirection:'column', justifyContent: 'space-between',}}>

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
                  onPress={() => { setModalVisible(false); navigation.navigate('Settings')}}>
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
                  onPress={() => { setModalVisible(false); }}>
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
                  onPress={() => { setModalVisible(false); navigation.navigate('Settings')}}>
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
            <Text style={{left: 40, color: '#0019A7',fontFamily: 'Gilroy-Bold',fontSize: 20,fontStyle: 'normal',fontWeight: 700, }}>Choisir un mode</Text>
            <View style={{top: 20, width: 292, height: 350, justifyContent:'space-between', flexDirection:'column',}}>
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
                  onPress={() => { setLinkSelected('Professionnel'); navigation.navigate('ProfilMeRP', { imagePath: 'Professionnel' }); }}>
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
                navigation.navigate('ProfilMeCA',{imagePath:'Ami'});
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
                navigation.navigate('ProfilMeRA',{imagePath:'Amour'});
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
            source={require('../../assets/images/menu_mobile.png')}
            style={{ width: 30, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuSlideSettings;
