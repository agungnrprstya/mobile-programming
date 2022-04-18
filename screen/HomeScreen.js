import React from 'react';
import { Appbar } from 'react-native-paper';
// import supabase from '../supabase';

function HomeScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
    </>
  );
}

export default HomeScreen;