import axios from 'axios';

// Créer une instance Axios avec une configuration de base
export const instanceFile = () => {
  return axios.create({
    baseURL: 'http://10.0.2.2:9088/api',
    timeout: 1000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const instance = () => {
  return axios.create({
    baseURL: 'http://10.0.2.2:9088/api',
    timeout: 1000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

// Méthode pour effectuer une requête GET
export const getMethod = async url => {
  const apiInstance = instance();
  try {
    const response = await apiInstance.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Gestion spécifique des erreurs
    if (error.response) {
      // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
      console.log('Erreur de réponse du serveur :', error.response.status);
      // Afficher un message en fonction du code d'erreur
      if (error.response.status === 404) {
        // 404 (Not Found)
        alert('La ressource demandée est introuvable.');
      } else if (error.response.status === 500) {
        // 500
        alert(
          'Une erreur interne du serveur est survenue. Veuillez réessayer plus tard.',
        );
      } else {
        alert('Une erreur est survenue lors de la récupération des données.');
      }
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      // console.error('Pas de réponse du serveur :', error.request);
      // Afficher un message générique à l'utilisateur pour ce cas
      alert('Aucune réponse du serveur. Veuillez réessayer plus tard.');
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      // console.error('Erreur de configuration de la requête :', error.message);
      // Afficher un message générique à l'utilisateur pour les autres erreurs
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
    throw error; // Propager l'erreur pour une gestion à un niveau supérieur si nécessaire
  }
};

// Méthode pour effectuer une requête POST
export const postMethod = async (url, data = {}) => {
  const apiInstance = instance();
  try {
    const response = await apiInstance.post(url, data);
    return response.data; // Retourne les données de la réponse
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.message); // Affiche le message d'erreur provenant du back
      throw error;
    } else if (axios.isAxiosError(error) && error.code === 'ECONNABORTED') {
      // erreur de timeout
      alert('La requête a expiré. Veuillez réessayer plus tard.');
      throw new Error('Timeout de la requête dépassé');
    } else {
      alert('Une erreur est survenue. Veuillez réessayer.');
      throw error;
    }
  }
};

// Méthode pour effectuer une requête POSTde fichier
export const postImageMethod = async (url, formData) => {
  const apiInstance = instanceFile();
  try {
    const response = await apiInstance.post(url, formData);
    return response.data;
  } catch (error) {
    // Gestion des erreurs
    throw error;
  }
};