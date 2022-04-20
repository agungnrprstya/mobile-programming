import React from 'react';
import { Appbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import supabase from '../supabase';
import ActiveScreen from './Top Tab Screen/ActiveScreen';
import NonactiveScreen from './Top Tab Screen/NonactiveScreen';

const TopTab = createMaterialTopTabNavigator();

function HomeScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>

      <TopTab.Navigator>
        <TopTab.Screen name="Active" component={ActiveScreen}/>
        <TopTab.Screen name="Nonactive" component={NonactiveScreen}/>
      </TopTab.Navigator>
    </>
  );
}

export default HomeScreen;