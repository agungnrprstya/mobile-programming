import * as React from 'react';
import { View } from 'react-native';
import { Title, Button } from 'react-native-paper';

export default function Child(props) {
  return (
    <View>
      <Title>{props.judul}</Title>
      <Button 
        icon="camera" 
        mode="contained" 
        onPress={() => console.log('Tambah')}
        style={{margin:10}}>
        {props.labelButton}
      </Button>
      <Title>{props.judul2}</Title>
      <Button 
        icon="home" 
        mode="contained" 
        onPress={() => console.log('home')}
        style={{margin:10}}>
        {props.labelButton2}
      </Button>
    </View>
  )
}