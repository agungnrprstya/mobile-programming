import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Menambahkan gambar */}
        <Image
        style={{width: 300, height: 300}}
        source={{ 
        uri: 'https://kompaspedia.kompas.id/wp-content/uploads/2021/07/logo-universitas-mercu-buana_thumb.png', }}/>

      {/* Teks pada layar */}
        <Text 
        style={{ fontWeight: 'bold' }}
        >Hello World!</Text>
        <StatusBar 
        style="auto" />
      
      {/* Tombol simpan */}
      <View style={{marginTop:10}}></View>
        <Button
        title="Simpan"
        color="#006400"
        onPress={() => Alert.alert('Simple Button pressed')}
        />
      
      {/* Tombol hapus */}
      <View style={{marginTop:10}}></View>
        <Button
        title="Hapus"
        color="#8b0000"
        onPress={() => Alert.alert('Simple Button pressed')}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});