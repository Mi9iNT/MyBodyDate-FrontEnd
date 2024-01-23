import WebSocket from 'react-native-use-websocket';

const socketUrl = 'wss://10.0.2.2:9088/websocket';
const websocketConnection = new WebSocket(socketUrl);

websocketConnection.onopen = () => {
  console.log('Connexion WebSocket établie avec succès');
};

websocketConnection.onerror = (error) => {
  console.error('Erreur de connexion WebSocket :', error);
};

websocketConnection.onmessage = (event) => {
  console.log('Message reçu du serveur :', event.data);
};

export default websocketConnection;
