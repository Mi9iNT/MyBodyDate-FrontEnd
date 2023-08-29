/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {Religion} from '../../composants/edit/Religion';
import {Enfant} from '../../composants/edit/Enfant';
import {Morphologie} from '../../composants/edit/Morphologie';
import {Origine} from '../../composants/edit/Origine';
import {Astrologie} from '../../composants/edit/Astrologie';
import {Politique} from '../../composants/edit/Politique';
import {Fumer} from '../../composants/edit/Fumer';
import {Alcool} from '../../composants/edit/Alcool';
import {Sport} from '../../composants/edit/Sport';

export const ProfilMeRAfirst = ({route, navigation, imagePath}) => {
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
  const rythmeDeVie2 = route.params?.rythmeDeVie2 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';

  const [modalVisible, setModalVisible] = useState(false);

  const [openModalReligion, setOpenModalReligion] = useState(false);
  const [openModalEnfant, setOpenModalEnfant] = useState(false);
  const [openModalMorphologie, setOpenModalMorphologie] = useState(false);
  const [openModalOrigine, setOpenModalOrigine] = useState(false);
  const [openModalAstrologie, setOpenModalAstrologie] = useState(false);
  const [openModalPolitique, setOpenModalPolitique] = useState(false);
  const [openModalFumer, setOpenModalFumer] = useState(false);
  const [openModalAlcool, setOpenModalAlcool] = useState(false);
  const [openModalSport, setOpenModalSport] = useState(false);

  const [addProVisible, setAddProVisible] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleAddProToggle = index => {
    const newArray = [...addProVisible];
    newArray[index] = !newArray[index];
    setAddProVisible(newArray);
  };

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MenuSlide imagePath={true} />
      <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 24,
              color: '#0019A7',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            Profil éditer
          </Text>
        </View>
        <View style={{left: 20, top: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 20,
              color: '#0019A7',
              left: 5,
            }}>
            Photos
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 14,
              color: '#0019A7',
              top: 15,
            }}>
            Affichez votre lifestyle. Ajoutez jusqu'à 6{'\n'}photos de vous pour
            gagner en visibilité.
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/Raluca-Edit.png')}
            style={{
              width: 129,
              height: 129,
              top: 60,
            }}
          />
          <Image
            source={require('../../../assets/images/Sup.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
            }}
          />
          <Image
            source={require('../../../assets/images/Plus-Edit-B.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            left: 23,
            top: 20,
          }}>
          <Image
            source={require('../../../assets/images/Plus-Edit-B.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
              right: 33,
            }}
          />
          <Image
            source={require('../../../assets/images/Plus-Edit-B.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
            }}
          />
          <Image
            source={require('../../../assets/images/Plus-Edit-B.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
              left: 33,
            }}
          />
        </View>
        <Image
          source={require('../../../assets/images/Line133.png')}
          style={{
            width: 360,
            height: 2,
            top: 100,
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontFamily: 'Gilory',
            fontWeight: '700',
            fontSize: 20,
            color: '#0019A7',
            top: 120,
            left: 15,
          }}>
          Photos explicites
        </Text>
        <Text
          style={{
            fontFamily: 'Comfortaa',
            fontWeight: '700',
            fontSize: 14,
            color: '#0019A7',
            top: 130,
            left: 15,
          }}>
          Photos floues sur profil, visibles sur demande{'\n'}individuelle
          restreinte et révocable.
        </Text>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            top: 85,
          }}>
          <Image
            source={require('../../../assets/images/CadenaRouge.png')}
            style={{
              width: 112,
              height: 112,
              top: 60,
            }}
          />
          <Image
            source={require('../../../assets/images/PlusRouge.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
            }}
          />
          <Image
            source={require('../../../assets/images/PlusRouge.png')}
            style={{
              width: 82,
              height: 82,
              top: 60,
            }}
          />
        </View>
        <View
          style={{
            top: 160,
            left: 20,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Gilroy',
                fontWeight: '700',
                fontSize: 20,
                color: '#0019A7',
                left: 20,
              }}>
              Quelques mots sur moi
            </Text>
            <Text
              style={{
                fontFamily: 'Comfortaa',
                fontWeight: '500',
                fontSize: 14,
                color: '#0019A7',
                top: 10,
                left: 20,
              }}>
              Lorem ipsum
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E0BDFF',
                borderRadius: 30,
                alignSelf: 'center',
                top: 30,
                width: 333,
                height: 111,
                right: 20,
              }}>
              <TextInput
                placeholder="Lorem Ipsum"
                style={{
                  left: 20,
                  color: '#0019A7',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 20,
              color: '#0019A7',
              top: 50,
              left: 20,
            }}>
            Mes infos de base
          </Text>
          <View
            style={{
              marginTop: 450,
              left: 10,
            }}>
            <Religion
              visibleReligion={openModalReligion}
              closeModalReligion={() => setOpenModalReligion(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(0);
                setOpenModalReligion(true);
              }}
              style={{
                bottom: 380,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/ReligionB.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Religion
              </Text>
              <View style={{width: 35, height: 35, left: 194}}>
                <Image
                  source={
                    addProVisible[0]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Enfant
              visibleEnfant={openModalEnfant}
              closeModalEnfant={() => setOpenModalEnfant(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(1);
                setOpenModalEnfant(true);
              }}
              style={{
                bottom: 360,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Biberon.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Enfant
              </Text>
              <View style={{width: 35, height: 35, left: 207}}>
                <Image
                  source={
                    addProVisible[1]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Morphologie
              visibleMorphologie={openModalMorphologie}
              closeModalMorphologie={() => setOpenModalMorphologie(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(2);
                setOpenModalMorphologie(true);
              }}
              style={{
                bottom: 340,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Body.png')}
                style={{
                  width: 50, // '50%' de la largeur du parent
                  height: 50, // '50%' de la hauteur du parent
                  right: 5,
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 10,
                }}>
                Morphologie
              </Text>
              <View style={{width: 35, height: 35, left: 152}}>
                <Image
                  source={
                    addProVisible[2]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Origine
              visibleOrigine={openModalOrigine}
              closeModalOrigine={() => setOpenModalOrigine(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(3);
                setOpenModalOrigine(true);
              }}
              style={{
                bottom: 320,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Origine.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Origine ethnique
              </Text>
              <View style={{width: 35, height: 35, left: 138}}>
                <Image
                  source={
                    addProVisible[3]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Astrologie
              visibleAstrologie={openModalAstrologie}
              closeModalAstrologie={() => setOpenModalAstrologie(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(4);
                setOpenModalAstrologie(true);
              }}
              style={{
                bottom: 300,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Astrologie.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Signe astrologie
              </Text>
              <View style={{width: 35, height: 35, left: 140}}>
                <Image
                  source={
                    addProVisible[4]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Politique
              visiblePolitique={openModalPolitique}
              closeModalPolitique={() => setOpenModalPolitique(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(5);
                setOpenModalPolitique(true);
              }}
              style={{
                bottom: 280,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Politique.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Orientation politique
              </Text>
              <View style={{width: 35, height: 35, left: 112}}>
                <Image
                  source={
                    addProVisible[5]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Fumer
              visibleFumer={openModalFumer}
              closeModalFumer={() => setOpenModalFumer(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(6);
                setOpenModalFumer(true);
              }}
              style={{
                bottom: 260,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Fumer.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Fumer
              </Text>
              <View style={{width: 35, height: 35, left: 211}}>
                <Image
                  source={
                    addProVisible[6]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Alcool
              visibleAlcool={openModalAlcool}
              closeModalAlcool={() => setOpenModalAlcool(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(7);
                setOpenModalAlcool(true);
              }}
              style={{
                bottom: 240,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/AlcoolEdit.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Alcool
              </Text>
              <View style={{width: 35, height: 35, left: 212}}>
                <Image
                  source={
                    addProVisible[7]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
            <Sport
              visibleSport={openModalSport}
              closeModalSport={() => setOpenModalSport(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(8);
                setOpenModalSport(true);
              }}
              style={{
                bottom: 220,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/Sport.png')}
                style={{
                  width: 40, // '50%' de la largeur du parent
                  height: 40, // '50%' de la hauteur du parent
                }}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#0019A7',
                  left: 20,
                }}>
                Activité sportive
              </Text>
              <View style={{width: 35, height: 35, left: 142}}>
                <Image
                  source={
                    addProVisible[8]
                      ? require('../../../assets/images/MoinActivite.png')
                      : require('../../../assets/images/PlusActivite.png')
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

ProfilMeRAfirst.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
