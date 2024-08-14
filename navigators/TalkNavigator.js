/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TalkVideoAccept} from '../components/screens/talk/TalkVideoAccept';
import {TalkVideo} from '../components/screens/talk/TalkVideo';
import {TalkPhoneAccept} from '../components/screens/talk/TalkPhoneAccept';
import {TalkPhone} from '../components/screens/talk/TalkPhone';
import TalkChat from '../components/screens/talk/TalkChat';

const TalkStack = createNativeStackNavigator();

function TalkNavigator({route}) {
  const {TalkRoute} = route.params;
  return (
    <TalkStack.Navigator initialRouteName={TalkRoute}>

      {/* Talk */}
      <TalkStack.Screen
        name="TalkChat"
        component={TalkChat}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkPhone"
        component={TalkPhone}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkPhoneAccept"
        component={TalkPhoneAccept}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkVideo"
        component={TalkVideo}
        options={{headerShown: false}}
      />
      <TalkStack.Screen
        name="TalkVideoAccept"
        component={TalkVideoAccept}
        options={{headerShown: false}}
      />
    </TalkStack.Navigator>
  );
}

export default TalkNavigator;
