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
  Modal,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../assets/style/Styles';
import MenuSlide from '../../composants/MenuSlide';
import MenuBottom from '../../composants/MenuBottom';
import MenuTalk from '../../composants/MenuTalk';
import Vocal from '../../../assets/images/vocal.png';

export const TalkChat = ({navigation, route}) => {
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

  // State pour gérer les messages envoyés par l'utilisateur
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState(text);

  // State pour gérer les messages reçus (exemple initial)
  const [receivedMessages, setReceivedMessages] = useState([
    {text: 'Bonjour', sender: 'Kolia', timestamp: new Date()},
    {image: Vocal, sender: 'Kolia', timestamp: new Date()},
  ]);

  const scrollViewRef = useRef(null);

  // Fonction pour envoyer un message
  const handleSendMessage = () => {
    if (text.trim() !== '') {
      const newMessage = {
        text,
        sender: 'Raluca',
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setText('');
    }
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
                      {messages.includes(message) ? 'Raluca' : 'Kolia'}
                    </Text>
                    <Image
                      source={messages.includes(message) ? require('../../../assets/images/Ellipse44.png') : require('../../../assets/images/kolia-ellipse.png')}
                      style={{ width: 40, marginLeft: messages.includes(message) ? 20 : 20, marginRight: messages.includes(message) ? 20 : 20, resizeMode: 'contain' }}
                    />
                  </View>
                  <View>
                    {message.text ? ( //  texte ou image
                      <Text
                        style={{
                          marginTop: 10,
                          alignSelf: messages.includes(message) ? 'flex-end' : 'flex-start',
                          borderRadius: 50,
                          borderWidth: 1,
                          borderColor: messages.includes(message) ? '#FF84D7' : '#0019A7',
                          color: messages.includes(message) ? '#FF84D7' : '#0019A7',
                          textAlign: 'center',
                          padding: 5,
                          fontFamily: 'Comfortaa',
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        {message.text}
                      </Text>
                    ) : (
                      // Si image, affichez image ici
                      <Image
                        source={message.image}
                        style={{ width: 100, resizeMode: 'contain', marginTop: 10 }}
                      />
                    )}
                  </View>
                </View>
              ))}
          </ScrollView>

        </View>

        <SafeAreaView
          style={{
            position: 'absolute',
            top: 460,
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{
              width: 250,
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
            onSubmitEditing={handleSendMessage}
            placeholder={'Entrez votre message...'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 10,
              width: 80,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={handleSendMessage}>
              <Image source={require('../../../assets/boutons/ico-mic.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSendMessage}>
              <Image source={require('../../../assets/boutons/ico-send.png')} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </View>
  );
};

// Propriétés du composant
TalkChat.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default TalkChat;
