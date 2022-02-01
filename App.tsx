/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Dimensions, View} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';
import usePermissions from './hooks/usePermission';

const App = () => {
  const latitude = 37.2831881;
  const longitude = 127.0590571;
  const latitude2 = 37.2813708;
  const longitude2 = 127.0449198;

  usePermissions();

  return (
    <View
      style={{
        width: Dimensions.get('window').width - 30,
        height: 200,
        marginTop: 10,
      }}>
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        zoomControl={false}
        center={{
          zoom: 10,
          tilt: 50,
          latitude: (latitude + latitude) / 2,
          longitude: (longitude + longitude) / 2,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          pinColor="blue"
        />
        <Path
          coordinates={[
            {
              latitude: latitude,
              longitude: longitude,
            },
            {latitude: latitude2, longitude: longitude2},
          ]}
        />
        <Marker coordinate={{latitude: latitude, longitude: longitude}} />
      </NaverMapView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
