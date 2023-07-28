/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import Styles from '../../assets/style/Styles';
import { useNavigation } from '@react-navigation/native';
import { Pastille } from './Pastille';

export const MenuSlideMap = () => {
  const navigation = useNavigation();

  const [imagePath, setImagePath] = useState(imagePath);

  // Constantes concernant la Modal du Menu Slide
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground source={require('../../assets/images/bg-menuslide-map.png')} style={{resizeMode:'contain'}}>
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          accessibilityLabel="Retour"
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/retour_flèche_bleu.png')}
            style={{ width: 10, height: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityLabel="Retour"
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              left: 20,
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 18,
              color: '#0019A7',
            }}>
            Retour
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{borderWidth: 2,borderColor:'#0019A7', borderRadius:100, left:-10, width:31, justifyContent:'center', alignItems: 'center'}}>
            <Pastille imagePath={imagePath} />
        </View>
         
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/notification_icons.png')}
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
            {/* Paramètres */}
            <View
              style={{
                position: 'absolute',
                top: 51,
                left: 23,
                width: 196,
                height: 24,
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
            </View>
            <View
              style={{
                position: 'absolute',
                top: 40,
                left: 238,
                width: 35,
                height: 35,
              }}>
              <TouchableOpacity
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
                navigation.navigate('ProfilMeCA', {currentImage:'ProfilMeCA'});
                setImagePath('ProfilMeCA');
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
                navigation.navigate('ProfilMeRA', {currentImage:'ProfilMeRA'});
                setImagePath('ProfilMeRA');
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
                  top: 578,
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
    </ImageBackground>
  );
};

export default MenuSlideMap;
