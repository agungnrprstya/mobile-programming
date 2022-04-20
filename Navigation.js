import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screen/HomeScreen';
import KategoriScreen from './screen/KategoriScreen';
import KategoriTambahScreen from './screen/KategoriTambahScreen';
import KategoriUbahScreen from './screen/KategoriUbahScreen';
import SettingScreen from './screen/SettingScreen';
import BukuScreen from './screen/BukuScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={Tab} />
        <Stack.Screen name="KategoriScreen" component={KategoriScreen} />
        <Stack.Screen name="KategoriTambahScreen" component={KategoriTambahScreen} />
        <Stack.Screen name="KategoriUbahScreen" component={KategoriUbahScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="BukuScreen" component={BukuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tab() {
  return (
    <BottomTab.Navigator
      activeColor="white"
      barStyle={{ backgroundColor: '#B22222' }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="KategoriTab"
        component={KategoriScreen}
        options={{
          tabBarLabel: 'Kategori Buku',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingTab"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />

      <BottomTab.Screen
        name="BukuTab"
        component={BukuScreen}
        options={{
          tabBarLabel: 'Buku',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Navigation;