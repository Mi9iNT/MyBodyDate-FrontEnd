/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, View, Image, TouchableOpacity, Text, ImageBackground, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { check, checkMultiple, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import PropTypes from 'prop-types';
import MenuBottom from '../../composants/MenuBottom';
import MenuSlide from '../../composants/MenuSlide';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import customMarkerIcon from '../../../assets/boutons/marker-map.png';
import customMarkerIconBlue from '../../../assets/boutons/marker-map-blue.png';
import SliderMap from '../../composants/SliderMap';

export const Map = ({ navigation, route, imagePath }) => {
  const tabPath = route.params?.tabPath ?? '';
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const [userLocation, setUserLocation] = useState({
    latitude: 48.8966739567463,
    longitude: 2.3809600920672116,
  });

  const mapViewRef = useRef(null);

  // Fonction pour vérifier et demander les autorisations de géolocalisation pour les appareils Android
  const requestLocationPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'MyBodyDate',
          message: 'Autoriser MY BODY DATE à accéder à la position de cet appareil ?',
          buttonNeutral: 'Demander plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'Autoriser',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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
    } catch (err) {
      console.warn(err);
    }
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
      height: 800,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    markerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    recenterButton: {
      position: 'absolute',
      bottom: 160,
      right: 20,
      padding: 10,
      borderRadius: 30,
    },
  });

  // Fonction pour centrer la carte sur la position de l'utilisateur
  const centerMapOnUser = () => {
    if (mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }, 1000);
    }
  };

  const [markerOpened, setMarkerOpened] = useState(false);

  const CustomMarker = () => {
    return (
      <View style={[styles.markerContainer]}>
        <TouchableOpacity
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', zIndex: 1, }}
          onPress={() => setMarkerOpened(!markerOpened)}
        >
          <Image source={markerOpened ? customMarkerIconBlue : customMarkerIcon} style={{ top: 12, width: 50, height: 50 }} />
          <Text style={{ top: -26, color: markerOpened ? '#fff' : '#0019A7', textAlign: 'center', fontFamily: 'Comfortaa', fontSize: 18, fontStyle: 'normal', fontWeight: 700 }}>4</Text>
        </TouchableOpacity>
        {markerOpened ? <SliderMap /> : null}
      </View>
    );
  };

  const RecenterButton = ({ onPress }) => (
    <TouchableOpacity
      style={styles.recenterButton}
      onPress={onPress}
    >
      <Image source={require('../../../assets/boutons/center-map-position.png')} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../../../assets/images/bg-menuslide-map.png')} style={{ height: '100%', width: '100%', resizeMode:'contain' }}>
      <MenuSlide imagePath={imagePath}/>
      <View style={[styles.container, { backgroundColor:'red'}]}>
        <MapView
          ref={mapViewRef}
          provider={PROVIDER_GOOGLE}
          customMapStyle={[
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            }
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
        <RecenterButton onPress={centerMapOnUser} />
      </View>
      {/* <MenuBottom navigation={navigation} route={route} tabPath={tabPath} active={'Map'} /> */}
    </ImageBackground>
  );
};

Map.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};