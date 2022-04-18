import React from 'react';
import { Appbar, List, Button} from 'react-native-paper';

function BukuScreen({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Buku" />
      </Appbar.Header>

      <List.Item
        title="Nama"
        left={props => <List.Icon {...props} icon="book" />}
        right={props => <List.Icon {...props} icon="pencil" />}
        onPress={() => navigation.navigate('KategoriUbahScreen')}
      />
      
      <Button 
        icon="plus" 
        mode="contained" 
        onPress={() => navigation.navigate('KategoriTambahScreen')}
        style={{margin:10}}
      >
        Tambah Kategori
      </Button>
    </>
    
  );
}

export default BukuScreen;