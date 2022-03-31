import * as React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

export default function Usia(props) {
  
  if (props.usia <0) {
    return (
      <View style={{alignItems:'center'}}>
        <Title></Title>
      </View>
    )
  }

  if (props.usia >= 0 && props.usia <= 5) {
    return (
      <View style={{alignItems:'center'}}>
        <Title>Jenis Usia : Balita</Title>
      </View>
    )
  }

  if (props.usia >= 6 && props.usia <= 13) {
    return (
      <View style={{alignItems:'center'}}>
        <Title>Jenis Usia : Anak-anak</Title>
      </View>
    )
  }

  if (props.usia >= 14 && props.usia <= 30) {
    return (
      <View style={{alignItems:'center'}}>
        <Title>Jenis Usia : Remaja</Title>
      </View>
    )
  }

  if (props.usia >= 31 && props.usia <= 50) {
    return (
      <View style={{alignItems:'center'}}>
        <Title>Jenis Usia : Dewasa</Title>
      </View>
    )
  }

  else {
    return (
      <View style={{alignItems:'center'}}>
        <Title>Jenis Usia : Manula</Title>
      </View>
    )
  }
    
}