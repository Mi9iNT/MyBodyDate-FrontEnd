/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import StyleBloquerContacts from '../../../assets/style/styleScreens/styleSettings/StyleBloquerContacts';
import MenuSlideSettings from '../../composants/MenuSlideSettings';

export const BloquerContacts = ({ navigation }) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [viewSelected, setViewSelected] = useState(true);
  const [showBlockedMessage, setShowBlockedMessage] = useState(false);
  const [contact, setContact] = useState('');
  const [blockedContacts, setBlockedContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [buttonPressed, setButtonPressed] = useState();
  const [contactsData, setContactsData] = useState([
    {
      name: 'Kolia',
      relation: 'Relation amoureuse',
      avatar: require('../../../assets/images/kolia-ellipse.png'),
    },
    {
      name: 'Beverly',
      relation: 'Cercle d\'ami',
      avatar: require('../../../assets/images/beverly-ellipse.png'),
    },
    {
      name: 'Lisa',
      relation: 'Professionnel',
      avatar: require('../../../assets/images/lisa-ellipse.png'),
    },
    {
      name: 'Céline',
      relation: 'Cercle d\'ami',
      avatar: require('../../../assets/images/celine-ellipse.png'),
    },
  ]);

  // Fonction pour filtrer les contacts en fonction de la recherche
  const filterContacts = () => {
    if (contact) {
      const filtered = contactsData.filter((contactData) =>
        contactData.name.toLowerCase().includes(contact.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts([]);
    }
  };

  useEffect(() => {
    filterContacts();
  }, [contact]);


  const removeBlockedContact = (index) => {
    setBlockedContacts((prevBlockedContacts) =>
      prevBlockedContacts.filter((_, i) => i !== index)
    );
  };

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Gestionnaire pour ouvrir/fermer le clavier
  const handleSearchButtonPress = () => {
    if (isKeyboardOpen) {
      // Soumettre la recherche et fermer le clavier
      Keyboard.dismiss();
    } else {
      // Ouvrir le clavier
       inputRef.current.focus();
    }
  };

  const handleInputFocus = () => {
    setIsKeyboardOpen(true);
  };

  const handleInputBlur = () => {
    setIsKeyboardOpen(false);
  };

  const inputRef = useRef(null);
  

  return (
    <ImageBackground
      style={StyleBloquerContacts.bgGradient}
      source={require('../../../assets/images/bg-parametres.png')}>
      <MenuSlideSettings settingsNavigation={() => navigation.navigate('Securite et privee')} />
      <Text
        style={StyleBloquerContacts.title}>
        Bloquer des contacts
      </Text>
      <View
        style={StyleBloquerContacts.separator}
      />
      <View style={StyleBloquerContacts.bloquerContactContainer}>
        <Image style={StyleBloquerContacts.icoInfo} source={require('../../../assets/boutons/ico-info.png')} />
        <Text style={StyleBloquerContacts.description}>Ajoutez les critères essentiels pour vous et affinez vos recherches. Trouvez la personne qui vous correspond vraiment.</Text>
      </View>
      <View style={StyleBloquerContacts.navViewButton}>
        <View style={StyleBloquerContacts.navButton}>
          <TouchableOpacity onPress={() => setViewSelected(true)} style={[{ borderBottomWidth: viewSelected ? 2 : 0 }, StyleBloquerContacts.navButtonBox]}>
            <Text style={[ {fontWeight: viewSelected ? 700 : 500}, StyleBloquerContacts.navButtonText ]}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setViewSelected(false)} style={[{ borderBottomWidth: viewSelected ? 0 : 2 }, StyleBloquerContacts.navButtonBox]} >
            <Text style={[{ fontWeight: viewSelected ? 500 : 700 }, StyleBloquerContacts.navButtonText]}>Contacts bloqués</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={StyleBloquerContacts.searchBox}>
          <TouchableOpacity onPress={handleSearchButtonPress} style={StyleBloquerContacts.boxIcoSearch}>
            <Image
              style={StyleBloquerContacts.icoSearch}
              source={require('../../../assets/boutons/icon-recherche.png')}
            />
          </TouchableOpacity>
          <TextInput
            ref={inputRef}
            style={StyleBloquerContacts.inputSearch}
            onChangeText={setContact}
            value={contact}
            placeholder={'Chercher un nom ou un numéro'}
            placeholderTextColor={'#0019A7'}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </SafeAreaView>
        <>
          {viewSelected ? (
            <View style={[{ height: contact ? 150 : 0 }, StyleBloquerContacts.viewSelected]}>
              {showBlockedMessage && (
                <View style={StyleBloquerContacts.blockedMessageContainer}>
                  <Text style={StyleBloquerContacts.blockedMessage}>Ce contact a déjà été bloqué.</Text>
                </View>
              )}
              <ScrollView style={StyleBloquerContacts.scrollView} contentContainerStyle={{ paddingBottom: 10 }}>
                <>
                  {contact ? (
                    <View style={StyleBloquerContacts.viewScroll}>
                      <>
                        {filteredContacts.length > 0 ? (
                          filteredContacts.map((contactData, index) => (
                            <View style={{flexDirection:'column'}}>
                              <TouchableOpacity key={contactData} onPress={() => {
                                // Vérifier si le contact est déjà bloqué avant de l'ajouter
                                const isBlocked = blockedContacts.find((blockedContact) => blockedContact.name === contactData.name);
                                if (!isBlocked) {
                                  setBlockedContacts((prevBlockedContacts) => [...prevBlockedContacts, contactData]);
                                  setViewSelected(false);
                                  setShowBlockedMessage(true);

                                  // Délai de 2 secondes pour masquer le message après qu'il a été affiché
                                  setTimeout(() => {
                                    setShowBlockedMessage(false);
                                  }, 2000);
                                } else {
                                  // Le contact est déjà bloqué, vous pouvez afficher un message pour l'indiquer
                                  setShowBlockedMessage(true);

                                  // Délai de 2 secondes pour masquer le message après qu'il a été affiché
                                  setTimeout(() => {
                                    setShowBlockedMessage(false);
                                  }, 5000);
                                }
                              }} style={StyleBloquerContacts.userLink}>
                              <Image style={[StyleBloquerContacts.imgUserLink,{borderColor: contactData.relation === 'Professionnel' ? '#000' : contactData.relation === 'Cercle d\'ami' ? '#9424FA' : contactData.relation === 'Relation amoureuse' ? '#FF84D7' : '#0019A7', }]} source={contactData.avatar} />
                              <Text style={StyleBloquerContacts.textNameUserLink}>{contactData.name}</Text>
                              <Text style={[{color: contactData.relation === 'Professionnel' ? '#000' : contactData.relation === 'Cercle d\'ami' ? '#9424FA' : contactData.relation === 'Relation amoureuse' ? '#FF84D7' : '#0019A7'}, StyleBloquerContacts.textRelationUserLink]}>{contactData.relation}</Text>
                              <Image style={{}} source={require('../../../assets/images/fleche-blue.png')} />
                              </TouchableOpacity>
                              <View style={StyleBloquerContacts.separatorUserLink}></View>
                            </View>
                          ))
                        ) : (
                          <View style={StyleBloquerContacts.viewTextNotFound}>
                            <Text style={StyleBloquerContacts.textNotFound}>Aucun contact trouvé</Text>
                          </View>
                        )}
                      </>
                    </View>

                  ) : (
                    null
                  )}
                </>
              </ScrollView>
            </View>
          ) : (
            <View style={[{height: contact ? 150 : 0}, StyleBloquerContacts.viewSelected]}>
              <ScrollView style={StyleBloquerContacts.scrollView} contentContainerStyle={{ paddingBottom: 10 }}>
                <>
                  {contact ? (
                    <View style={StyleBloquerContacts.viewScroll}>
                        {blockedContacts.map((contactData, index) => (
                        <View style={{flexDirection: 'column'}}>
                          <TouchableOpacity key={index} onPress={() => { removeBlockedContact(index); setViewSelected(true); }} style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignSelf: 'center', alignItems: 'center', borderRadius:50, marginBottom: 10, padding: 5,backgroundColor:'#FFFFFFA3' }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 100, borderWidth: 2,borderColor: contactData.relation === 'Professionnel' ? '#000' : contactData.relation === 'Cercle d\'ami' ? '#9424FA' : contactData.relation === 'Relation amoureuse' ? '#FF84D7' : '#0019A7', }} source={contactData.avatar} />
                            <Text style={StyleBloquerContacts.textNameUserLink}>{contactData.name}</Text>
                            <Text style={[{color: contactData.relation === 'Professionnel' ? '#000' : contactData.relation === 'Cercle d\'ami' ? '#9424FA' : contactData.relation === 'Relation amoureuse' ? '#FF84D7' : '#0019A7'}, StyleBloquerContacts.textRelationUserLink]}>{contactData.relation}</Text>
                            <Image style={{}} source={require('../../../assets/images/fleche-blue.png')} />
                          </TouchableOpacity>
                          <View style={StyleBloquerContacts.separatorUserLink}></View>  
                        </View>
                       
                      ))}
                    </View>

                  ) : (
                    null
                  )}
                </>
              </ScrollView>
            </View>
          )}
        </>
        <TouchableOpacity style={{ top: contact?80:150}}>
          <Image
            style={StyleBloquerContacts.importContactButtonImg}
            source={require('../../../assets/boutons/Bouton-Bleu.png')}
          />
          <Text style={StyleBloquerContacts.importContactButtonText}>Importer des contacts</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
        setButtonPressed('Retour');
        navigation.navigate('Securite et privee');
        }}
        style={StyleBloquerContacts.backButtonContainer}>
        <Image
          style={StyleBloquerContacts.backButton}
          source={
                buttonPressed === 'Retour'
                  ? require('../../../assets/boutons/Bouton-Rouge.png')
                  : require('../../../assets/boutons/Bouton-Blanc-Border.png')
              }
        />
        <Text
          style={[StyleBloquerContacts.backButtonText]}>
          Retour
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

BloquerContacts.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default BloquerContacts;
