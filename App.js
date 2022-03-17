import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <View style={{marginTop:10}}>
        <Button
          title="Simpan"
          color="#006400"
          onPress={() => Alert.alert('Simple Button pressed')}
          />
      </View>
      <View style={{marginTop:10}}>
        <Button
          title="Hapus"
          color="#8b0000"
          onPress={() => Alert.alert('Simple Button pressed')}
          />
      </View>
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
