/*
Actokids Project
Nick Bennett

Distance input box

*/

import * as React from 'react';
import { Text, TextInput, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DateBox() {
  const [value, onChangeText] = React.useState(' Date');

  let screenWidth = Dimensions.get("window").width;
  let cols = 3;
  let tileSize = screenWidth / cols

  return (
    <View>
        <TextInput
            style={{height: 40, borderColor: 'grey', borderWidth: 1, margin: 20, width: tileSize}}
            onChangeText={text => onChangeText(text)}
            value={value} 
        />
    </View>
  );
}