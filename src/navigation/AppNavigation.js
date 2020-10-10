import React from 'react';
import {Dimensions, StyleSheet, Platform} from 'react-native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import SearchPage from '../components/main/SearchPage';
import WeatherDetails from '../components/main/screens/WeatherDetails';
import FavoriteLocations from '../components/main/screens/FavoriteLocations';
import HeaderButton from '../components/main/common/HeaderButton'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomHeader from '../components/main/common/CustomHeader'
global.currentScreenIndex = 0;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// set screen transition animation.

const MyTransition = {
  gestureDirection: 'horizontal',
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};


 const Search = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SearchPage'}
      headerMode="screen"
      mode="modal"
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={({route, navigation}) => ({
          ...MyTransition,
          header: () =>
            <CustomHeader navigation={navigation}title={'Weather App'} />
        })}
      />
    </Stack.Navigator>
  );
};

const Favorites = () => {
  return (
    <Stack.Navigator
      initialRouteName={'FavoriteLocations'}
      headerMode="screen"
      mode="modal"
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="FavoriteLocations"
        component={FavoriteLocations}
        options={({route, navigation}) => ({
          ...MyTransition,
          header: () =>
            <CustomHeader navigation={navigation} title={'Favorite Locations'} />
        })}
      />
    </Stack.Navigator>
  );
};



export default DrawerStack = ()=> {
  return (
      <Drawer.Navigator initialRouteName="SearchPage">
        <Drawer.Screen name="Home" component={Search} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
  );
}

