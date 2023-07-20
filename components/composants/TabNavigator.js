/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
// Importez vos écrans pour les onglets
import {ProfilMe} from '../screens/profil/ProfilMe';
import {Talk} from '../screens/talk/Talk';
import {Messages} from '../screens/messages/Messages';
import {Map} from '../screens/map/Map';
import {Moi} from '../screens/profil/Profil';

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Découvir" component={ProfilMe} />
      <Tab.Screen name="Talk" component={Talk} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Moi" component={Moi} />
      {/* Ajoutez d'autres onglets ici si nécessaire */}
    </Tab.Navigator>
  );
}

