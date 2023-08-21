/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MyComponentMore} from '../composants/MyComponentMore';

export const More = () => {
  const navigation = useNavigation();

  // Constantes concernant la Modal de more
  const [showModal, setShowModal] = useState(false);
  const [bloquerOpen, setbloquerOpen] = useState(false);
  const [signalerOpen, setSignalerOpen] = useState(false);

  const [linkModal, setLinkModal] = useState(null);

  // Fonction pour ouvrir/fermer la modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
  {/* Modal */}
  <Modal
    animationType="slide"
    transparent={true}
    visible={showModal}
    onRequestClose={() => setShowModal(false)}>
    <TouchableOpacity style={{ position: 'absolute', backgroundColor: 'transparent', width: '100%', height: '100%' }} onPress={() => { setShowModal(false); }} accessibilityLabel="Ferme la fenêtre" />
    {/* Contenu de la modal */}
    <View
      style={{
        top: 270,
        left: 80,
        width: 320,
        height: 550,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderWidth: 1,
        borderColor: '#0019A7',
      }}>
      <ScrollView
        style={{
          width: '95%',
          paddingTop: 0,
          paddingBottom: 10,
      }}>
        <View
          style={{
            top: 20,
            width: '100%',
            left: 10,
            height: (bloquerOpen && signalerOpen) ? 780 : (bloquerOpen && !signalerOpen) ? 660 : (!bloquerOpen && signalerOpen) ? 660 : 560,
            backgroundColor: 'transparent',
          }}>
            {linkModal === null ? (
            <>    
            /* Bloquer */
            <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignSelf:'center', alignItems:'center', width:'80%', height:50, borderColor:'#0019A7', borderBottomWidth: 1}} onPress={() => {bloquerOpen ? setbloquerOpen(false) : setbloquerOpen(true);}}>
              <Text style={{ color: '#0019A7',fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Bloquer</Text>
              <Image source={require('../../assets/images/flèche-B.png')} style={{resizeMode:'contain', width: 10, height: 20, transform: [{rotate: bloquerOpen ? '90deg' : '-90deg'}]}} />
            </TouchableOpacity>
            {bloquerOpen ? (
            <>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignSelf:'center', alignItems:'center', width:'80%', height:50, borderColor:'#0019A7', borderBottomWidth: 1}} onPress={() => {setLinkModal('Bloquer');}}>
                <Text style={{ color: '#0019A7', left:20, fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Bloquer Kolia ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignSelf:'center', alignItems:'center', width:'80%', height:70, borderColor:'#0019A7', borderBottomWidth: 1}} onPress={() => {setbloquerOpen(false);}}>
                <Text style={{ color: '#0019A7', left:20, fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Liste des personnes bloquées</Text>
              </TouchableOpacity>
            </>
          ) : (null)}
          {/* Signaler */}
          <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignSelf:'center', alignItems:'center', width:'80%', height:50, borderColor:'#0019A7', borderBottomWidth: 1}} onPress={() => {signalerOpen ? setSignalerOpen(false) : setSignalerOpen(true);}}>
            <Text style={{ color: '#0019A7',fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Signaler</Text>
            <Image source={require('../../assets/images/flèche-B.png')} style={{resizeMode:'contain', width: 10, height: 20, transform: [{rotate: signalerOpen ? '90deg' : '-90deg'}]}} />
          </TouchableOpacity>
          {signalerOpen ? (
            <>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignSelf:'center', alignItems:'center', width:'80%', height:50, borderColor:'#0019A7', borderBottomWidth: 1}} onPress={() => { setSignalerOpen(false);}}>
                <Text style={{ color: '#0019A7', left:20, fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Signaler Kolia ?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection:'row', justifyContent:'space-between', alignSelf:'center', alignItems:'center', width:'80%', height:70, borderColor:'#0019A7', borderBottomWidth: 1}} onPress={() => {setSignalerOpen(false);}}>
                <Text style={{ color: '#0019A7', left:20, fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Liste des personnes signées</Text>
              </TouchableOpacity>
            </>
          ) : (null)}
          {/* Copier l’ID du profil */}
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center', alignItems: 'center', width: '80%', height: 50, borderColor: '#0019A7', borderBottomWidth: 1 }} onPress={() => { }}>
            <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Copier l’ID du profil</Text>
          </TouchableOpacity>
          {/* Partager avec un.e ami.e */}
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center', alignItems: 'center', width: '80%', height: 50, borderColor: '#0019A7', borderBottomWidth: 1 }} onPress={() => { }}>
            <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Partager avec un.e ami.e</Text>
          </TouchableOpacity>
          {/* Annuler */}
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '30%', height: 50, top:180, left:40}} onPress={() => {setShowModal(false);}}>
            <Image source={require('../../assets/images/croix-bold-rouge.png')}/>
            <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontStyle: 'normal', fontWeight: 700 }}>Annuler</Text>
          </TouchableOpacity>
        </>) : linkModal === 'Bloquer' ? (
          <View style={{flexDirection:'column', justifyContent:'space-around', height:'50%', width: '96%', alignSelf:'center',}}>
            <Text style={{color: '#0019A7',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 24,fontStyle: 'normal',fontWeight: 700 }}>Bloquer Kolia ?</Text>
            <Image source={require('../../assets/images/ico-like.png')} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
            <Text style={{ color: '#0019A7', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 24, fontStyle: 'normal', fontWeight: 700 }}>MERCI !</Text>
            <Text style={{color: '#0019A7',textAlign: 'center',fontFamily: 'Comfortaa',fontSize: 24,fontStyle: 'normal',fontWeight: 700, }}>Votre décision a bien été prise en compte ! Kolia ne pourra plus accéder à votre profil ou vous envoyer des messages.</Text>
          </View>
         ) : (null)}
        </View>
      </ScrollView>
    </View>
  </Modal>

  {/* Image "Ellipse_signalement.png" */}
  <TouchableOpacity onPress={toggleModal}>
    <Image
      source={require('../../assets/images/Ellipse_signalement.png')}
      style={{width: 50, height: 50, top: -40, left: 310}}
    />
  </TouchableOpacity>
</View>

  );
};

export default More;
