import * as React from 'react';
import { Provider as PaperProvider, Appbar, DefaultTheme, List, Button } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'grey',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>  
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="card-search-outline" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical-circle-outline" onPress={() => {}} />
      </Appbar.Header>
        <List.Item
          title="First Item"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}/>
        <Button icon="home" mode="contained" onPress={() => console.log('Pressed')}>Home</Button>
    </PaperProvider>
  );
}