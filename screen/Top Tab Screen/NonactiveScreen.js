import React from 'react';
import { Text, View} from 'react-native'
// import { Appbar } from 'react-native-paper';

function NonactiveScreen({navigation}) {
    return (
        <View>
            <Text style={{textAlign:"center", fontSize:50, paddingTop:200}}>Nonactive Screen</Text>
        </View>
    );
}

export default NonactiveScreen;