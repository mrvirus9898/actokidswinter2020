/*
Actokids Project
Nick Bennett

Cost slider

*/

import * as React from 'react';
import { StyleSheet, TextInput, View, Dimensions, Text } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Costs() {

    const [value, onChangeValue] = React.useState(0);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>${value}</Text>
        <Slider
            style={{height: 40}}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={value}
            minimumTrackTintColor="#E31212"
            maximumTrackTintColor="#000000"
            onValueChange={value => changeValue(value)}
        />
    </View>
  );

  function changeValue(value: number){
      console.log(value)
      onChangeValue(value)
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20,
      opacity: 1
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: '500',
      margin: 10
    },
  });