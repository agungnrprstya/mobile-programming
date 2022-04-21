import React from 'react';
import { Text, View} from 'react-native'
// import { Appbar } from 'react-native-paper';

function ActiveScreen({navigation}) {
    return (
        <View>
            <Text style={{textAlign:"center", fontSize:50, paddingTop:200}}>Active</Text>
        </View>
    );
}

export default ActiveScreen;