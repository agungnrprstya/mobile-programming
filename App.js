import * as React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Appbar, Title, Button } from 'react-native-paper';
import Child from './Child';
import Usia from './Usia';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: '#f1c40f',
  },
};

export default function App() {
  const [title, setTitle] = React.useState('Halo');
  const [angka, setAngka] = React.useState(1);
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => setTitle('Halo')} />
        <Appbar.Content title={title} subtitle={'Subtitle'} />
        <Appbar.Action icon="pencil" onPress={() => setTitle('Pencil')} />
        <Appbar.Action icon="delete" onPress={() => setTitle('Delete Icon')} />
      </Appbar.Header>

      <Child 
      judul="Belajar Component"
      judul2="Kembali" 
      labelButton="Tambah"
      labelButton2="Home" />
      
      <Button 
        icon="plus" 
        mode="contained" 
        style={{margin:20}} 
        onPress={() => setAngka(angka+1)}>Tambah 
      </Button>
            
      <View style={{alignItems:'center'}}>
      <Title>{angka}</Title>
      </View>

      <Button 
        icon="minus" 
        mode="contained"                    
        style={{margin:20}}
        onPress={() => setAngka(angka-1)}>Kurang
      </Button>

      <Usia usia={angka}/>
          
    </PaperProvider>

  );
}