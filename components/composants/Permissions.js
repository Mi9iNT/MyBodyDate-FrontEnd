import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';

export default function Permissions() {
    const PermissionLocation = () => {
        request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then((response) => {
            console.log(response);
        });
    };

    return (
        <View>
            <Button title='permission location' onPress={() => { PermissionLocation(); }} />
        </View>
    );
}

const styles = StyleSheet.create({});



// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';


// export default function Permissions() {

//     const PermissionLocation = () => (
//     request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(response)=> {
//         console.log(response)
//     })

//   return (
//     <View>
//           <Button title='permission location' onPress={() => {PermissionLocation()}}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})