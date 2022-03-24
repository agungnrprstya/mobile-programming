import * as React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Appbar, DefaultTheme, List, Button, RadioButton, Text, Checkbox } from 'react-native-paper';

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
  const [checked, setChecked] = React.useState(false, 'first');
  const [checked2, setChecked2] = React.useState(false);
  return (
    <PaperProvider theme={theme}>

      {/* Appbar */}
      <Appbar.Header>  
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="card-search-outline" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical-circle-outline" onPress={() => {}} />
      </Appbar.Header>

      {/* List */}
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}/>
      
      {/* Checkbox */}
      <View style={{ marginLeft:10, marginBottom:0 }}> 
        <Text style={{ fontSize: 15 }}>Ini Checkbox</Text>
      </View>

      <View style={{flexDirection:"row-reverse",alignItems:'center'}}>
        <View style={{flex: 40}}>
          <Text>Iya</Text>
        </View>
        <View style={{flex:1}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {setChecked(!checked);}}
        />
      </View>
      </View>

      <View style={{flexDirection:"row-reverse",alignItems:'center'}}>
        <View style={{flex: 40}}>
          <Text>Tidak</Text>
        </View>
        <View style={{flex:1}}>
          <Checkbox
            status={checked2 ? 'checked' : 'unchecked'}
            onPress={() => {setChecked2(!checked2);}}
          />
      </View>
      </View>
       
      {/* RadioButton */}
      <View style={{ marginLeft:10, marginBottom:0, marginTop:20}}> 
        <Text style={{ fontSize: 15 }}>Ini RadioButton</Text>
      </View>
      <View style={{flexDirection:"row-reverse",alignItems:'center'}}>
        <View style={{flex: 40}}>
          <Text>Iya</Text>
        </View>
        <View style={{flex:1}}>
          <RadioButton.IOS
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
        </View>
      </View>

      <View style={{flexDirection:"row-reverse",alignItems:'center'}}>
        <View style={{flex: 40}}>
          <Text>Tidak</Text>
        </View>
        <View style={{flex:1}}>
          <RadioButton.IOS
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
        </View>
      </View>

      {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{ marginLeft:19, marginBottom:-5 }}>
        <Text style={{ fontSize: 20 }}>Apakah Saya Ganteng?</Text>
      </View>

      <View style={{ marginLeft:-7, marginBottom:-15 }}>
        <RadioButton.Item
          label="Iya" 
          value="first" 
          style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}/> 
      </View>

      <View style={{ marginLeft:-7 }}>
        <RadioButton.Item
          label="Tidak" 
          value="second" 
          style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }} />
      </View>
      </RadioButton.Group> */}
      
      {/* Button */}
      <Button icon="home" mode="contained" onPress={() => console.log('Pressed')}>Home</Button>

    </PaperProvider>
  );
}