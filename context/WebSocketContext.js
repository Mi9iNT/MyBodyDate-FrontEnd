import React, {createContext, useContext} from 'react';

const WebSocketContext = createContext();

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};

export const WebSocketProvider = ({children}) => {
  const initializeWebSocket = () => {
    // Initialisation de la connexion WebSocket
  };

  const closeWebSocket = () => {
    // Fermeture de la connexion WebSocket
  };

  // Passer les fonctions ou valeurs nécessaires via le contexte
  const contextValue = {
    initializeWebSocket,
    closeWebSocket,
    // ...autres valeurs ou fonctions nécessaires
  };

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  );
};
