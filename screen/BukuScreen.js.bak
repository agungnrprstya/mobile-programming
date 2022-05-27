import React, { useState, useEffect } from 'react';
import { Appbar, List, Button} from 'react-native-paper';
import supabase from '../supabase';

function BukuScreen({navigation}) {
  const [nimi, setNama] = useState('');
  const [stok, setStok] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    //data : hasil query, error : pesan error
    const { data, error } = await supabase
                              .from('Buku')
                              .select('nama, stok');
                              
    console.log('data', data);
    console.log('error', error);
    setNama(data[0].nama)
    setStok(data[0].stok)
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Buku" />
      </Appbar.Header>

      <List.Item
        title={nimi}
        description={stok}
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