import React from 'react';
import { Appbar } from 'react-native-paper';

function KategoriUbahScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Ubah Kategori" />
      </Appbar.Header>
    </>
  );
}

export default KategoriUbahScreen;