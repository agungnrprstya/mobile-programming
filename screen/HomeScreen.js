import React from 'react';
import { Appbar, Button } from 'react-native-paper';

function HomeScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="account" onPress={() => navigation.navigate('ProfileScreen')} />
      </Appbar.Header>

      <Button 
        icon="account" 
        mode="contained" 
        onPress={() => navigation.navigate('ProfileScreen')}
        style={{margin:10}}
      >
        Profile Screen
      </Button>
    </>
  );
}

export default HomeScreen;