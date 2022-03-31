import React from 'react';
import { Appbar } from 'react-native-paper';

function ProfileScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
    </>
  );
}

export default ProfileScreen;