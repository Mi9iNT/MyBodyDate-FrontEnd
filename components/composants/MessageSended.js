import React, {useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';
import Styles from '../../assets/style/Styles';

const MessageSended = ({navigation, route}) => {
  const [messages, setMessages] = useState(true);
  // Corrected the initialization of the 'user' state
  const [user, setUser] = useState(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {messages === false ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
          }}>
          <Image
            style={{top: '25%'}}
            source={require('../../assets/images/ico-conversation.png')}
          />
          <Text
            style={{
              top: '27%',
              width: 200,
              color: '#929EDE',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: '700',
              opacity: 1.5,
            }}>
            Vous n'avez pas encore de conversation
          </Text>
        </View>
      ) : (
        <>
          <Text
            style={{
              top: '5%',
              left: 10,
              width: 200,
              color: '#0019A7',
              textAlign: 'center',
              fontFamily: 'Comfortaa',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: '700',
              opacity: 1.5,
            }}>
            Messages envoyés
          </Text>
          <ScrollView
            style={{marginTop: 40, height: '56.5%'}}
              contentContainerStyle={{ paddingBottom: 40 }}>
               <Text
                  style={{
                    color: '#929EDE',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontWeight: 700,
                    left: 40,
                    
                  }}>
                  Conversation
                </Text>
            <View
                style={{
                top:20,
                paddingVertical: 10,
                paddingHorizontal: 20
                }}>
              <View style={{paddingHorizontal: 20, flexDirection:'row', justifyContent:'space-between'}}>
                
                    <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignSelf:'center', width:280}}>
                      <View>
                      <Image source={require('../../assets/images/alex-ellipse.png')} style={{ borderRadius: 100, borderColor: '#9424FA', borderWidth: 2, width: 119, height: 119 }} />
                      <Image source={require('../../assets/images/Ellipse-62.png')} style={{ top:-40, left:100, width: 20, height: 20 }} />
                    </View>
                      <View style={{ flexDirection: 'column',  width:150,  top:20 }}>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontWeight: 700, marginRight:30 }}>Alex</Text>
                          <Image source={require('../../assets/images/ico-certified-rose.png')}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', top:20}}>
                          <Text style={{ color: '#929EDE', fontFamily: 'Comfortaa', fontSize: 16, fontWeight: 700 }}>Hier - Et toi ?</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center'}}>
                      <Image source={require('../../assets/boutons/more-2.png')}/>
                    </TouchableOpacity>
              </View> 
               
              <TouchableOpacity
                onPress={toggleSection}
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <Text
                  style={{
                    color: '#929EDE',
                    fontFamily: 'Comfortaa',
                    fontSize: 16,
                    fontWeight: 700,
                  }}>
                  Conversation masquée
                </Text>
                <Image
                  source={require('../../assets/boutons/fleche.png')}
                  style={{ width: 10, transform: [{ rotate: isExpanded ? '180deg' : '0deg' }] }}
                />
              </TouchableOpacity>

                {isExpanded && (
                  <View>
                <View style={{paddingVertical: 30, paddingHorizontal: 20, flexDirection:'row', justifyContent:'space-between'}}>
                      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: 280 }} onPress={() => navigation.navigate('TalkChat', { user: 'Beverly', prenium: 'no' })}>
                      <Image source={require('../../assets/images/beverly-ellipse.png')} style={{ borderRadius: 100, borderColor: '#9424FA', borderWidth: 2, width: 119, height: 119 }} />
                      <View style={{ flexDirection: 'column',  width:150,  top:20 }}>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontWeight: 700, marginRight:30 }}>Beverly</Text>
                          <Image source={require('../../assets/images/ico-certified-rose.png')}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', top:20}}>
                          <Text style={{ color: '#929EDE', fontFamily: 'Comfortaa', fontSize: 16, fontWeight: 700 }}>Hier  -  Et toi ?</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center'}}>
                      <Image source={require('../../assets/boutons/more-2.png')}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{paddingVertical: 30, paddingHorizontal: 20, flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignSelf:'center', width:280}}>
                      <Image source={require('../../assets/images/gaelle-ellipse.png')} style={{ borderRadius: 100, borderColor: '#9424FA', borderWidth: 2, width: 119, height: 119 }} />
                      <View style={{ flexDirection: 'column',  width:150,  top:20 }}>
                        <View style={{flexDirection:'row'}}>
                          <Text style={{ color: '#0019A7', fontFamily: 'Gilroy', fontSize: 20, fontWeight: 700, marginRight:30 }}>Gaëlle</Text>
                          <Image source={require('../../assets/images/ico-certified-rose.png')}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', top:20}}>
                          <Text style={{ color: '#929EDE', fontFamily: 'Comfortaa', fontSize: 16, fontWeight: 700 }}>Hier  -  Pas loin...</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center'}}>
                      <Image source={require('../../assets/boutons/more-2.png')}/>
                    </TouchableOpacity>
                </View>
                  </View>
              )}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default MessageSended;
