/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const DefaultCode1 = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 230,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Flash
      </Text>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(true)} // Show the second code on click
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Premium
        </Text>
      </TouchableOpacity>
    </View>
    <Image
      source={require('../../assets/images/Line-107.png')}
      style={{
        width: 195,
        height: 3,
        top: 250,
      }}
    />
    <Image
      source={require('../../assets/images/Line-106.png')}
      style={{
        width: 390,
        height: 1,
        top: 250,
      }}
    />
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#0019A7',
          top: 20,
          textAlign: 'center',
        }}>
        Flash pour démarrer en toute{'\n'}sérénité
      </Text>
      <Text
        style={{
          fontSize: 32,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#FF84D7',
          top: 30,
          textAlign: 'center',
        }}>
        19,99€ /mois**
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: 'Gilory',
          fontWeight: '400',
          color: '#0019A7',
          top: 30,
        }}>
        <Text style={{textDecorationLine: 'underline'}}>
          Disponible en 1 mois
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#0019A7',
          top: 30,
        }}>
        FLASH
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Gilory',
          fontWeight: '400',
          color: '#0019A7',
          top: 30,
        }}>
        Pendant 6 MOIS*
      </Text>
    </View>
    <View
      style={{
        alignItems: 'center',
        top: 30,
      }}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 80,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 80,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Echangez sans limite avec qui vous voulez
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 110,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 110,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Accédez a vos liste de Likes et Visites
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 140,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 140,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Décidez qui peut vous contacter
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 170,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 170,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Accédez aux filtres avancé de la recherche
        </Text>
      </View>
    </View>
    <View
      style={{
        alignItems: 'center',
        top: 190,
      }}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-59.png')}
          style={{
            width: 25,
            height: 25,
            top: 50,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#A3B0FF',
            top: 50,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Rejouer les profils que vous avez passé
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-59.png')}
          style={{
            width: 25,
            height: 25,
            top: 80,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#A3B0FF',
            top: 80,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Permettez à tous les profils de vous contacter
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-59.png')}
          style={{
            width: 25,
            height: 25,
            top: 110,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#A3B0FF',
            top: 110,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Démarquez vous avec l'icône Premium
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-59.png')}
          style={{
            width: 25,
            height: 25,
            top: 140,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#A3B0FF',
            top: 140,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Découvrez quand vos messages sont lus
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-59.png')}
          style={{
            width: 25,
            height: 25,
            top: 170,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#A3B0FF',
            top: 170,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Repliez le bandeau spotlight pendant 1{'\n'}minute
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-59.png')}
          style={{
            width: 25,
            height: 25,
            top: 210,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#A3B0FF',
            top: 210,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Propulsez votre profil : 5 mises en avant/{'\n'}mois
        </Text>
      </View>
    </View>
  </>
);

const DefaultCode2 = ({setShowDefaultCode2}) => (
  <>
    <View
      style={{
        alignItems: 'center',
        top: 230,
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => setShowDefaultCode2(false)} // Show the first code on click
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
          }}>
          Flash
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#0019A7',
        }}>
        Premium
      </Text>
    </View>
    <Image
      source={require('../../assets/images/Line-107.png')}
      style={{
        width: 195,
        height: 3,
        top: 360,
        position: 'absolute',
        right: 0,
      }}
    />
    <Image
      source={require('../../assets/images/Line-106.png')}
      style={{
        width: 390,
        height: 1,
        top: 250,
      }}
    />
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#0019A7',
          top: 20,
          textAlign: 'center',
        }}>
        Premium pour avoir toutes les{'\n'}chances de votre cotés
      </Text>
      <Text
        style={{
          fontSize: 32,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#FF84D7',
          top: 30,
          textAlign: 'center',
        }}>
        24,99€ /mois**
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: 'Gilory',
          fontWeight: '400',
          color: '#0019A7',
          top: 30,
        }}>
        <Text style={{textDecorationLine: 'underline'}}>
          Disponible en 1 mois
        </Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'Gilory',
          fontWeight: '700',
          color: '#0019A7',
          top: 30,
        }}>
        PREMIUM
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Gilory',
          fontWeight: '400',
          color: '#0019A7',
          top: 30,
        }}>
        Pendant 6 MOIS*
      </Text>
    </View>
    <View
      style={{
        alignItems: 'center',
        top: 30,
      }}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 80,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 80,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Echangez sans limite avec qui vous voulez
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 110,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 110,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Accédez a vos liste de Likes et Visites
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 140,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 140,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Décidez qui peut vous contacter
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 170,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 170,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Accédez aux filtres avancé de la recherche
        </Text>
      </View>
    </View>
    <View
      style={{
        alignItems: 'center',
        top: 190,
      }}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 50,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 50,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Rejouer les profils que vous avez passé
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 80,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 80,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Permettez à tous les profils de vous contacter
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 110,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 110,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Démarquez vous avec l'icône Premium
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 140,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 140,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Découvrez quand vos messages sont lus
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 170,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 170,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Repliez le bandeau spotlight pendant 1{'\n'}minute
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          position: 'absolute',
          left: 10, // Déplace l'image vers la gauche
        }}>
        <Image
          source={require('../../assets/images/Group-54.png')}
          style={{
            width: 25,
            height: 25,
            top: 210,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gilory',
            fontWeight: '700',
            color: '#0019A7',
            top: 210,
            marginLeft: 20, // Crée un espace entre l'image et le texte
          }}>
          Propulsez votre profil : 5 mises en avant/{'\n'}mois
        </Text>
      </View>
    </View>
  </>
);

const MyComponentQuart = () => {
  const [showDefaultCode2, setShowDefaultCode2] = useState(false);

  return (
    <>
      {showDefaultCode2 ? (
        <DefaultCode2 setShowDefaultCode2={setShowDefaultCode2} />
      ) : (
        <DefaultCode1 setShowDefaultCode2={setShowDefaultCode2} />
      )}
    </>
  );
};

export {MyComponentQuart};
