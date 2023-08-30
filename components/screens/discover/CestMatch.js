/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { check, checkMultiple, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MenuSlide from '../../composants/MenuSlide';
import {MenuBottom} from '../../composants/MenuBottom';

export const CestMatch = ({route, navigation}) => {
  const routeChoice = route.params?.routeName ?? '';
  const consentement = route.params?.userConsent ?? '';
  const loveCoach = route.params?.loveCoach ?? '';
  const userEmail = route.params?.userEmail ?? '';
  const userPhone = route.params?.userPhone ?? '';
  const userCity = route.params?.userCity ?? '';
  const accesPosition = route.params?.accesPosition ?? '';
  const genre = route.params?.genre ?? '';
  const userBirth = route.params?.userBirth ?? '';
  const userSize = route.params?.userSize ?? '';
  const userLang = route.params?.userLang ?? '';
  const userSituation = route.params?.userSituation ?? '';
  const userOrientation = route.params?.userOrientation ?? '';
  const userRecherche1 = route.params?.userRecherche1 ?? '';
  const userRecherche2 = route.params?.userRecherche2 ?? '';
  const userAffinites = route.params?.userAffinites ?? '';
  const rythmeDeVie1 = route.params?.rythmeDeVie1 ?? '';
  const rythmeDeVie2 = route.params?.rythmeDeVie1 ?? '';
  const userPrenom = route.params?.userPrenom ?? '';
  const userVoice = route.params?.userVoice ?? '';
  const activeTab = route.params?.activeTab ?? '';
  const imagePath = route.params?.imagePath ?? '';
  // const prendPass = route.params?.prendPass ?? '';

const [map, setMap] = useState(true);

const [userLocation, setUserLocation] = useState({
    latitude: 48.8966739567463,
    longitude: 2.3809600920672116,
  });

const mapViewRef = useRef(null);

const CustomMarker = () => {
    return (
        <View style={[styles.markerContainer]}>
            <View style={{zIndex: 1, height: 35, width: 35, alignItems:'center', justifyContent:'center', borderColor:'#0019A7', borderWidth:2, borderRadius:100, }}>
                    <Image style={{height: 35, width: 35, resizeMode: 'contain' }} source={require('../../../assets/images/Ellipse-444.png')} />
                </View>
                <View style={{right: 5, height: 35, width: 35, alignItems:'center', justifyContent:'center', borderColor: '#0019A7', borderWidth: 2, borderRadius: 100, }}>
                    <Image style={{height:35, width:35, resizeMode:'contain'}} source={require('../../../assets/images/Ellipse-455.png')}/>
                </View>
        </View>
    );
  };


useEffect(() => {
    // Vérifier les autorisations pour les appareils iOS et les versions plus récentes d'Android
    if (Platform.OS === 'ios' || Platform.Version >= 23) {
      const requestLocationPermissionIOSAndroid = async () => {
        const locationPermission = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (locationPermission === RESULTS.GRANTED) {
          // Obtenir la position de l'utilisateur
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation({ latitude, longitude });
            },
            (error) => {
              console.log('Error getting user location:', error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          // Demander la permission d'accéder à la position de l'utilisateur
          const newLocationPermission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          if (newLocationPermission === RESULTS.GRANTED) {
            // Obtenir la position de l'utilisateur
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ latitude, longitude });
              },
              (error) => {
                console.log('Error getting user location:', error);
              },
              { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
          } else {
            console.log('Accès refusé à la géolocalisation');
          }
        }
      };

      requestLocationPermissionIOSAndroid();
    } else {
      // Pour les versions plus anciennes d'Android, utiliser la méthode de demande de permission Android
      requestLocationPermissionAndroid();
    }
}, []);

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 100,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    markerContainer: {
        flexDirection: 'row',
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });


  return (
    <ImageBackground
      source={require('../../../assets/images/bg-match.jpg')}
      style={{ flex: 1 }}>
        <MenuSlide imagePath={imagePath} backButton={'Back'} />
        <View style={{ height: 654 }}>
            <Text style={{top: 10, left: 40, color: '#0019A7', fontFamily: 'Comfortaa-Bold', fontSize: 29, fontStyle: 'normal' }}>C’est un <Text style={{ color: '#9424FA' }}>match !</Text></Text>
            <View style={{top: 40, width: '80%', height: 174, alignSelf: 'center', flexDirection: 'row' }}>
                <View style={{zIndex: 1, height: 174, width: 174, alignItems:'center', justifyContent:'center', borderColor:'#0019A7', borderWidth:2, borderRadius:100, }}>
                    <Image style={{height: 174, width: 174, resizeMode: 'contain' }} source={require('../../../assets/images/Ellipse-444.png')} />
                </View>
                <View style={{right: 34, height: 174, width: 174, alignItems:'center', justifyContent:'center', borderColor: '#0019A7', borderWidth: 2, borderRadius: 100, }}>
                    <Image style={{height:174, width:174, resizeMode:'contain'}} source={require('../../../assets/images/Ellipse-455.png')}/>
                </View>
              </View>
              <View style={{ top: 80, width: 358, height: map ? 355 : 195, alignSelf: 'center', alignItems:'center', flexDirection: 'column', justifyContent: 'space-around', borderRadius: 30, borderWidth: 1, borderColor: ' #0019A7', backgroundColor: '#FFF' }}>
                <Image style={{ height: 35, width: 35, resizeMode: 'contain' }} source={require('../../../assets/images/ico-monde.png')} />
                <Text style={{ color: '#0019A7', textAlign: 'center', fontFamily: 'Gilroy-Bold', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }}>Il y a un instant</Text>
                  {!map ?
                      <Text style={{ color: '#0019A7', width: '80%', textAlign: 'center', fontFamily: 'Gilroy-Bold', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }}>Nous respectons la volonté des Datters souhaitant garder leurs localisation privé sur leurs lieux de croisement.</Text>
                      :
                      <View style={{ height: 50, alignItems: 'center' }}>
                          <Text style={{ color: '#0019A7', width: '80%', textAlign: 'center', fontFamily: 'Gilroy-Bold', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }}>Vous vous êtes croisé une fois</Text>

                          <Text style={{ color: '#0019A7', width: '80%', textAlign: 'center', fontFamily: 'Gilroy-Bold', fontSize: 15, fontStyle: 'normal', fontWeight: 700 }}>Bd Auguste Blanqui</Text>
                      </View>
                  }
                  {map && (
                      <View style={{width:'100%', height:'50%'}}>
                          <MapView
                            ref={mapViewRef}
                            provider={PROVIDER_GOOGLE}
                            customMapStyle={[
                            {
                                featureType: 'administrative',
                                elementType: 'geometry',
                                stylers: [
                                {
                                    visibility: 'off',
                                },
                                ],
                            },
                            {
                                featureType: 'poi',
                                stylers: [
                                {
                                    visibility: 'off',
                                },
                                ],
                            },
                            {
                                featureType: 'road',
                                elementType: 'labels.icon',
                                stylers: [
                                {
                                    visibility: 'off',
                                },
                                ],
                            },
                            {
                                featureType: 'transit',
                                stylers: [
                                {
                                    visibility: 'off',
                                },
                                ],
                            },
                            ]}
                            style={styles.map}
                            region={{
                            latitude: 48.8966739567463,
                            longitude: 2.3809600920672116,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                            }}
                            showsPointsOfInterest={false}
                        >
                            <Marker coordinate={userLocation}>
                            <CustomMarker />
                            </Marker>
                        </MapView>
                      </View>

                  )}
              </View>
        </View>
        <MenuBottom navigation={navigation} activeTab={activeTab} />
    </ImageBackground>
  );
};

CestMatch.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
