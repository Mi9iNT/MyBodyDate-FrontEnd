// Définir l'interface pour un utilisateur

import {User} from '../../../interfaces/UserInterface';

// Définir et exporter le tableau des utilisateurs
const users: User[] = [
  {
    id: 1,
    name: 'Léa',
    genre: 'Femme',
    cercle: ['Amour', 'Amis'],
    image1: require('../../../assets/images/Rectangle-44.png'),
    image2: require('../../../assets/images/Rectangle-Lea2.png'),
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 25,
    location: 'Marseille',
    on: true,
    quality: true,
    medaille: true,
    partenaire: 'OpenBetween',
    distance: 7,
    ptCommun: 11,
  },
  {
    id: 2,
    name: 'Kolia',
    genre: 'Homme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/Rectangle-43.png'),
    image2: require('../../../assets/images/bg-video-call-2.png'),
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 45,
    location: 'Paris',
    on: true,
    quality: true,
    medaille: true,
    partenaire: false,
    distance: 5,
    ptCommun: 3,
  },
  {
    id: 3,
    name: 'Margot',
    genre: 'Femme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/Rectangle-Margot.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 42,
    location: 'Lille',
    on: true,
    quality: true,
    medaille: false,
    partenaire: 'CheerFlakes',
    distance: 5,
    ptCommun: 13,
  },
  {
    id: 4,
    name: 'Paula',
    genre: 'Femme',
    cercle: ['Amour', 'Amis'],
    image1: require('../../../assets/images/Rectangle-Paula.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 31,
    location: 'Paris',
    on: true,
    quality: true,
    medaille: true,
    partenaire: 'GoPride',
    distance: 1,
    ptCommun: 2,
  },
  {
    id: 5,
    name: 'Léon',
    genre: 'Non-binaire',
    cercle: ['Amour', 'Amis'],
    image1: require('../../../assets/images/Rectangle-Leon.png'),
    image2: require('../../../assets/images/Rectangle-Leon2.png'),
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 27,
    location: 'Paris',
    on: true,
    quality: true,
    medaille: false,
    partenaire: 'OpenBetween',
    distance: 12,
    ptCommun: 4,
  },
  {
    id: 6,
    name: 'Abelle',
    genre: 'Femme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/Rectangle-Abelle.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 65,
    location: 'Paris',
    on: true,
    quality: true,
    medaille: false,
    partenaire: 'WineGap',
    distance: 12,
    ptCommun: 9,
  },
  {
    id: 7,
    name: 'Maya',
    genre: 'Femme',
    cercle: ['Amour', 'Amis'],
    image1: require('../../../assets/images/Rectangle-Maya.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 42,
    location: 'Lille',
    on: true,
    quality: true,
    medaille: false,
    partenaire: 'CheerFlakes',
    distance: 6,
    ptCommun: 9,
  },
  {
    id: 8,
    name: 'Robert',
    genre: 'Homme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/Rectangle-Robert.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 42,
    location: 'Lille',
    on: true,
    quality: true,
    medaille: false,
    partenaire: 'WineGap',
    distance: 6,
    ptCommun: 9,
  },
  {
    id: 9,
    name: 'Max',
    genre: 'Homme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/Rectangle-Max.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 25,
    location: 'Paris',
    on: true,
    quality: true,
    medaille: false,
    partenaire: 'GoPride',
    distance: 1,
    ptCommun: 5,
  },
  {
    id: 10,
    name: 'Georges',
    genre: 'Homme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/Rectangle-Georges.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 45,
    location: 'Reims',
    on: true,
    quality: true,
    medaille: false,
    partenaire: 'CheerFlakes',
    distance: 5,
    ptCommun: 3,
  },
  {
    id: 11,
    name: 'Julie',
    genre: 'Femme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/BackJulie.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 65,
    location: 'Paris',
    on: true,
    quality: true,
    medaille: true,
    partenaire: false,
    distance: 9,
    ptCommun: 5,
  },
  {
    id: 12,
    name: 'Lisa',
    genre: 'Femme',
    cercle: ['Amour', 'Amis', 'Professionnel'],
    image1: require('../../../assets/images/BackLisa.png'),
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false,
    age: 28,
    location: 'Lyon',
    on: true,
    quality: true,
    medaille: false,
    partenaire: false,
    distance: 15,
    ptCommun: 2,
  },
];

export default users;
