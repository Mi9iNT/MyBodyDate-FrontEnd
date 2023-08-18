/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import Styles from '../../assets/style/Styles';
import { useNavigation } from '@react-navigation/native';

export const MenuSlide = ({route, icoPushChange, imagePath, prendPass}) => {
  const navigation = useNavigation();

  // Constantes concernant la Modal du Menu Slide
  const [modalVisible, setModalVisible] = useState(false);

  // const [icoPushChange, setIcoPushChange] = useState(icoPushChange);

  // const [imagePath, setImagePath] = useState(imagePath);

  // const [prendPass, setPrendPass] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      {prendPass ?
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
          <TouchableOpacity>
            <Image source={imagePath === true ? require('../../assets/images/cercle_ami.png') : require('../../assets/images/Rencontre_amoureuse.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
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
              position: 'absolute',
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
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{backgroundColor:'transparent', height:'100%', width:'30%', position:'absolute', left: -95}}  />
            {/* Paramètres */}
            <View
              style={{
                top: 51,
                left: 80,
                width: 196,
                height: 24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems:'center',
              }}>
              <TouchableOpacity
                accessibilityLabel="Paramètres"
                onPress={() => navigation.navigate('Settings')}>
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
              </TouchableOpacity>

              <TouchableOpacity
              style={{
                width: 35,
                height: 35,
              }}
                accessibilityLabel="Paramètres"
                onPress={() => navigation.navigate('Settings')}>
                <Image
                  source={require('../../assets/images/parametres.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* Professionnel */}
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfilMeRP')}>
              <View
                style={{
                  position: 'absolute',
                  top: 265,
                  left: 83,
                  width: 196,
                  height: 24,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Professionnel
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 286,
                  left: 31,
                  width: 30,
                  height: 30,
                }}>
                <Image
                  source={require('../../assets/images/mybodydate_favicon-1.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 302,
                  left: 83,
                  width: 184,
                  height: 36,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'comfortaa',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Trouvez des contacts qui vous font évoluer.
                </Text>
              </View>
            </TouchableOpacity>

            {/* Cercle d'ami */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilMeCA',{imagePath:true});
                // setImagePath(true);
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 396,
                  left: 83,
                  width: 196,
                  height: 24,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Cercle d'ami
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 414,
                  left: 31,
                  width: 30,
                  height: 30,
                }}>
                <Image
                  source={require('../../assets/images/mybodydate_favicon-2.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 433,
                  left: 83,
                  width: 184,
                  height: 52,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'comfortaa',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Agrandissez votre cercle social.
                </Text>
              </View>
            </TouchableOpacity>

            {/* Rencontre amoureuse */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfilMeRA',{imagePastille:false});
                // setImagePath(false);
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 518,
                  left: 83,
                  width: 210,
                  height: 48,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'gilroy',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Rencontre amoureuse
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 536,
                  left: 31,
                  width: 30,
                  height: 30,
                }}>
                <Image
                  source={require('../../assets/images/mybodydate_favicon-3.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 558,
                  left: 83,
                  width: 184,
                  height: 34,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'comfortaa',
                    fontWeight: '700',
                    color: '#0019A7',
                  }}>
                  Un coup de coeur n'attend pas.
                </Text>
              </View>
            </TouchableOpacity>
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

export default MenuSlide;
