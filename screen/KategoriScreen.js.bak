import React, { useState, useEffect } from 'react';
import { Appbar, Button, List } from 'react-native-paper';
import supabase from '../supabase';

function KategoriScreen({navigation}) {
  const [nama, setNama] = useState('');
  const [penerbit, setPenerbit] = useState('');

  //script dijalankan ketika screen diakses
  useEffect(() => {
    getData();
  }, []);

  // const getDataURL = async() => {
  //   fetch("https://czumsavaxnzxlqcqjqcu.supabase.co/rest/v1/kategori?select=nama", {
  //         method: 'get', 
  //         headers: {
  //             'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dW1zYXZheG56eGxxY3FqcWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyMjM2ODQsImV4cCI6MTk2NDc5OTY4NH0.dvpeurHCH0HfnxGVKm7ypingS3PpeqXAhdWAozy2n5o',
  //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6dW1zYXZheG56eGxxY3FqcWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyMjM2ODQsImV4cCI6MTk2NDc5OTY4NH0.dvpeurHCH0HfnxGVKm7ypingS3PpeqXAhdWAozy2n5o'
  //         }
  //     })
  //     .then(res => res.json())
  //     .then((data) => {
  //         console.log('data', data)
  //         setNama(data[0].nama)
  //       },
  //       (error) => {
  //         console.log('error', error);
  //       }
  //     )
  //   //setData(data);
  // }

  const getData = async() => {
    //data : hasil query, error : pesan error
    const { data, error } = await supabase
                              .from('Kategori')
                              .select('nama, penerbit');
                              
    console.log('data', data);
    console.log('error', error);
    setNama(data[0].nama)
    setPenerbit(data[0].penerbit)
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Kategori" />
      </Appbar.Header>

      <List.Item
        title={nama}
        description={penerbit}
        left={props => <List.Icon {...props} icon="folder" />}
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

export default KategoriScreen;