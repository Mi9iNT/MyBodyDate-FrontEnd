/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppsAffinitaires2} from '../components/screens/appsAffinitaires/AppsAffinitaires2';
import {AppsAffinitaires} from '../components/screens/appsAffinitaires/AppsAffinitaires';

const AppsAffinitairesStack = createNativeStackNavigator();

function AppsAffinitairesNavigator({route}) {
  const {AppsAffinitairesRoute} = route.params;
  return (
    <AppsAffinitairesStack.Navigator initialRouteName={AppsAffinitairesRoute}>

      {/* Apps Affinitires */}
      <AppsAffinitairesStack.Screen
        name="Apps_Affinitaires"
        component={AppsAffinitaires}
        options={{headerShown: false}}
      />
      <AppsAffinitairesStack.Screen
        name="Apps Affinitaires2"
        component={AppsAffinitaires2}
        options={{headerShown: false}}
      />
    </AppsAffinitairesStack.Navigator>
  );
}

export default AppsAffinitairesNavigator;
