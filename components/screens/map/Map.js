/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MenuBottom from '../../composants/MenuBottom';
import MenuSlideMap from '../../composants/MenuSlideMap';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import customMarkerIcon from '../../../assets/boutons/marker-map.png';
import customMarkerIconBlue from '../../../assets/boutons/marker-map-blue.png';
import SliderMap from '../../composants/SliderMap';

export const Map = ({ navigation, route }) => {
  // Masquer la barre de statut au montage de l'écran
  useEffect(() => {
    StatusBar.setHidden(true);
    // Rétablir la visibilité de la barre de statut lors du démontage de l'écran
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const activeTab = route.params?.activeTab;

  const userLocation = {
    latitude: 48.8966739567463,
    longitude: 2.3809600920672116,
  };

  const mapViewRef = useRef(null);

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
      <View style={styles.markerContainer}>
        <TouchableOpacity
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', zIndex:1 }}
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
    <View style={{ backgroundColor: '#fff', height: '100%', width: '100%' }}>
      <MenuSlideMap />
      <View>
        <View style={styles.container}>
          <MapView
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
      </View>
      <MenuBottom navigation={navigation} activeTab={activeTab} />
    </View>
  );
};

Map.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
