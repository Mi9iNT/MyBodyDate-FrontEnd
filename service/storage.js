// storage.js

import AsyncStorage from '@react-native-async-storage/async-storage';

// Pour stocker une donnée
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Données pour la clé ${key} stockées avec succès`);
  } catch (error) {
    console.error(`Erreur lors du stockage pour la clé ${key} :`, error);
    throw error;
  }
};

// Pour stocker plusieurs données
export const storeDatas = async (items) => {
  try {
    if (!Array.isArray(items)) {
      throw new Error('Les paires clé-valeur ne sont pas dans un tableaux');
    }
    const jsonItems = items.map(([key, value]) => [key, JSON.stringify(value)]);
    await AsyncStorage.multiSet(jsonItems);
    console.log(`Données stockées avec succès`);
  } catch (error) {
    console.error(`Erreur lors du stockage des données :`, error);
    throw error;
  }
};

// Pour récupérer une donnée
export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Erreur lors de la récupération pour la clé ${key} :`, error);
    throw error;
  }
};

// Pour récupérer plusieurs données
export const getDatas = async keys => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values.map(item => ({
      key: item[0],
      value: item[1] !== null ? JSON.parse(item[1]) : null,
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};
