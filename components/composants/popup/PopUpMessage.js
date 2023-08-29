import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

const PopUpMessage = ({message, ptCommun, txtPartenaire, navigation}) => {
  const [popUp, setPopUp] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUp(false);
    }, 8000); // 8 secondes

    return () => {
      clearTimeout(timer);
    };
  }, []);

  let txt1 = '';
  let txt2 = '';
  let txtPointsCommuns = '';

  if (message === 'Ami') {
    txt1 = 'Vous êtes actuellement sur ';
    txt2 = 'MY BODY DATE Cercle d’ami.e.s.';
    txtPointsCommuns = 'Vous avez ' + ptCommun + ' points communs';
  } else if (message === 'Amour') {
    txt1 = 'Vous êtes actuellement sur ';
    txtPointsCommuns = ptCommun + ' points communs';
    txt2 = 'MY BODY DATE Relation amoureuse.';
  } else if (message === 'Professionnel') {
    txt1 = 'Vous êtes actuellement sur ';
    txt2 = 'MY BODY DATE Professionnel.';
    txtPointsCommuns = 'Vous avez ' + ptCommun + ' points communs';
  }

  return (
    <View>
      {popUp ? (
        <View
          style={{
            zIndex: 1,
            width: 346,
            minHeight: 50,
            padding: 10,
            backgroundColor: '#fff',
            borderColor: '#0019A7',
            borderRadius: 20,
            borderWidth: 2,
            bottom: 30,
            left: 25,
          }}>
          {txt1 && (
            <Text
              style={{
                color: '#0019A7',
                textAlign: 'center',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 16,
                fontStyle: 'normal',
              }}>
              {txt1}
            </Text>
          )}
          {txt2 && (
            <Text
              style={{
                color: '#0019A7',
                textAlign: 'center',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 16,
                fontStyle: 'normal',
              }}>
              {txt2}
            </Text>
          )}
        </View>
      ) : message === 'Amour' ? (
        <>
          <TouchableOpacity
            style={{  
              position:'absolute',  
              width: 346,
              minHeight: 50,
              padding: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.40)',
              borderColor: '#0019A7',
              borderRadius: 20,
              borderWidth: 2,
              top: 0,
              left: 25,
            }}>
            {txtPartenaire && (
              <Text
                style={{
                  color: '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa-Bold',
                  fontSize: 16,
                  fontStyle: 'normal',
                }}>
                {txtPartenaire}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DiscoverBio');
            }}
            style={{
              position:'absolute',
              top:150,
              width: 196,
              minHeight: 50,
              padding: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.40)',
              borderColor: '#0019A7',
              borderRadius: 20,
              borderWidth: 2,
              bottom: 30,
              left: 25,
            }}>
            {txtPartenaire && (
              <Text
                style={{
                  color: '#0019A7',
                  textAlign: 'center',
                  fontFamily: 'Comfortaa-Bold',
                  fontSize: 16,
                  fontStyle: 'normal',
                }}>
                {txtPointsCommuns}
              </Text>
            )}
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DiscoverBio');
          }}
          style={{
            width: 346,
            minHeight: 50,
            padding: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.40)',
            borderColor: '#0019A7',
            borderRadius: 20,
            borderWidth: 2,
            bottom: 30,
            left: 25,
          }}>
          {txtPointsCommuns && (
            <Text
              style={{
                color: '#0019A7',
                textAlign: 'center',
                fontFamily: 'Comfortaa-Bold',
                fontSize: 16,
                fontStyle: 'normal',
              }}>
              {txtPointsCommuns}
            </Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PopUpMessage;
