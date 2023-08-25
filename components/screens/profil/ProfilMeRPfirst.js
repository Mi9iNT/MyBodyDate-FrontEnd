/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {ImageBackground, StatusBar, TextInput} from 'react-native';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {MenuSlide} from '../../composants/MenuSlide';
import {Statut} from '../../composants/edit/Statut';
import {VotreRecherche} from '../../composants/edit/VotreRecherche';
import {Offre} from '../../composants/edit/Offre';
import {Langue} from '../../composants/edit/Langue';
import {Distinct} from '../../composants/edit/Distinct';
import {Competence} from '../../composants/edit/Competence';
import {LinkedIn} from '../../composants/edit/LinkedIn';

export const ProfilMeRPfirst = ({route, navigation}) => {
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

  const [openModalStatut, setOpenModalStatut] = useState(false);
  const [openModalVotreRecherche, setOpenModalVotreRecherche] = useState(false);
  const [openModalOffre, setOpenModalOffre] = useState(false);
  const [openModalLangue, setOpenModalLangue] = useState(false);
  const [openModalDistinct, setOpenModalDistinct] = useState(false);
  const [openModalCompetence, setOpenModalCompetence] = useState(false);
  const [openModalLinkedIn, setOpenModalLinkedIn] = useState(false);

  const [addProVisible, setAddProVisible] = useState([
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
    <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <MenuSlide />
      </View>
      <ScrollView>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontWeight: '700',
            fontSize: 22,
            color: 'black',
            textAlign: 'center',
          }}>
          Profil éditer
        </Text>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 22,
              color: 'black',
            }}>
            Photos
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '700',
              fontSize: 14,
              color: 'black',
              marginTop: 10,
            }}>
            Ajoutez jusqu'à 3 photos professionnelles de{'\n'}vous pour gagner
            en crédibilité.
          </Text>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
              top: 20,
            }}>
            <Image
              source={require('../../../assets/images/Rectangle-69.png')}
              style={{
                width: 129,
                height: 129,
              }}
            />
            <ImageBackground
              source={require('../../../assets/images/Rectangle-71.png')}
              style={{
                width: 82,
                height: 82,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '500',
                  fontSize: 36,
                  color: 'black',
                }}>
                +
              </Text>
            </ImageBackground>
            <ImageBackground
              source={require('../../../assets/images/Rectangle-71.png')}
              style={{
                width: 82,
                height: 82,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '500',
                  fontSize: 36,
                  color: 'black',
                }}>
                +
              </Text>
            </ImageBackground>
          </View>
        </View>
        <View style={{marginTop: 50, marginLeft: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 20,
              color: 'black',
            }}>
            À propos de moi
          </Text>
          <Text
            style={{
              fontFamily: 'Comfortaa',
              fontWeight: '500',
              fontSize: 14,
              color: 'black',
              marginTop: 20,
            }}>
            Ecrivez votre phrase d'accroche.
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#E0BDFF',
              borderRadius: 30,
              marginTop: 20,
              padding: 10,
              right: 10,
            }}>
            <TextInput
              placeholder="Partagez le meilleur de votre expérience,      en résumé..."
              style={{
                color: 'black',
                textAlign: 'left',
                bottom: 30,
                width: 300,
                height: 100,
              }}
            />
          </View>
        </View>
        <View style={{marginTop: 10, marginLeft: 20}}>
          <Text
            style={{
              fontFamily: 'Gilroy',
              fontWeight: '700',
              fontSize: 22,
              color: 'black',
              top: 20,
            }}>
            Mes infos de base
          </Text>
          <View
            style={{
              marginTop: 430,
              left: 8,
            }}>
            <Statut
              visibleStatut={openModalStatut}
              closeModalStatut={() => setOpenModalStatut(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(0);
                setOpenModalStatut(true);
              }}
              style={{
                bottom: 380,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../../assets/images/statut.png')} />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  left: 20,
                }}>
                Statut
              </Text>
              <View
                style={{width: 3, height: 35, left: 220}}>
                <Image
                  source={
                    addProVisible[0]
                      ? require('../../../assets/images/add_pro_plein.png')
                      : require('../../../assets/images/add_pro_vide.png')
                  }
                />
              </View>
              </TouchableOpacity>
            <VotreRecherche
              visibleVotreRecherche={openModalVotreRecherche}
              closeModalVotreRecherche={() => setOpenModalVotreRecherche(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(1);
                setOpenModalVotreRecherche(true);
              }}
              style={{
                bottom: 340,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/recherche_emploi.png')}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  left: 20,
                }}>
                Recherche
              </Text>
              <View
                style={{width: 35, height: 35, left: 187}}>
                <Image
                  source={
                    addProVisible[1]
                      ? require('../../../assets/images/add_pro_plein.png')
                      : require('../../../assets/images/add_pro_vide.png')
                  }
                />
            </View>
              </TouchableOpacity>
            <Offre
              visibleOffre={openModalOffre}
              closeModalOffre={() => setOpenModalOffre(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(2);
                setOpenModalOffre(true);
              }}
              style={{
                bottom: 300,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/publier__offre.png')}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  left: 20,
                }}>
                Publier une offre
              </Text>
              <View
                style={{width: 35, height: 35, left: 142}}>
                <Image
                  source={
                    addProVisible[2]
                      ? require('../../../assets/images/add_pro_plein.png')
                      : require('../../../assets/images/add_pro_vide.png')
                  }
                />
            </View>
              </TouchableOpacity>
            <Langue
              visibleLangue={openModalLangue}
              closeModalLangue={() => setOpenModalLangue(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(3);
                setOpenModalLangue(true);
              }}
              style={{
                bottom: 260,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/langue_pro.png')}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  left: 20,
                }}>
                Je parle courament
              </Text>
              <View
                style={{width: 35, height: 35, left: 123}}>
                <Image
                  source={
                    addProVisible[3]
                      ? require('../../../assets/images/add_pro_plein.png')
                      : require('../../../assets/images/add_pro_vide.png')
                  }
                />
            </View>
              </TouchableOpacity>
            <Distinct
              visibleDistinct={openModalDistinct}
              closeModalDistinct={() => setOpenModalDistinct(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(4);
                setOpenModalDistinct(true);
              }}
              style={{
                bottom: 220,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/distinctions.png')}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  left: 20,
                }}>
                Mes distinctions
              </Text>
              <View
                style={{width: 35, height: 35, left: 142}}>
                <Image
                  source={
                    addProVisible[4]
                      ? require('../../../assets/images/add_pro_plein.png')
                      : require('../../../assets/images/add_pro_vide.png')
                  }
                />
              </View>
              </TouchableOpacity>
            <Competence
              visibleCompetence={openModalCompetence}
              closeModalCompetence={() => setOpenModalCompetence(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(5);
                setOpenModalCompetence(true);
              }}
              style={{
                bottom: 180,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/distinctions.png')}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  left: 20,
                }}>
                Mes compétences
              </Text>
              <View
                style={{width: 35, height: 35, left: 131}}>
                <Image
                  source={
                    addProVisible[5]
                      ? require('../../../assets/images/add_pro_plein.png')
                      : require('../../../assets/images/add_pro_vide.png')
                  }
                />
            </View>
              </TouchableOpacity>
            <LinkedIn
              visibleLinkedIn={openModalLinkedIn}
              closeModalLinkedIn={() => setOpenModalLinkedIn(false)} // Assurez-vous de définir correctement cette fonction
            />
            <TouchableOpacity
              onPress={() => {
                handleAddProToggle(6);
                setOpenModalLinkedIn(true);
              }}
              style={{
                bottom: 140,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/images/LinkedIn-RP.png')}
              />
              <Text
                style={{
                  fontFamily: 'Comfortaa',
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  left: 20,
                }}>
                Url LinkedIn
              </Text>
              <View
                style={{width: 35, height: 35, left: 180}}>
                <Image
                  source={
                    addProVisible[6]
                      ? require('../../../assets/images/add_pro_plein.png')
                      : require('../../../assets/images/add_pro_vide.png')
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


ProfilMeRPfirst.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
