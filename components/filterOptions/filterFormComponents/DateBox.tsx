/*
Actokids Project
Nick Bennett

Distance input box

*/

import * as React from 'react';
import { Text, TextInput, View, Dimensions } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateBox() {
  const [value, onChangeText] = React.useState(' Date');
  const [date, setDate] = React.useState(new Date())

  let screenWidth = Dimensions.get("window").width;
  let cols = 3;
  let tileSize = screenWidth / cols

  return (
    <View>
      <DateTimePicker
        value={date}
        mode={'date'}
        onChange={setSelectedDate}
      />
    </View>
  );

  function setSelectedDate(date){
    console.log(date)
  }
}

/*
        <TextInput
            style={{height: 40, borderColor: 'grey', borderWidth: 1, margin: 20, width: tileSize}}
            onChangeText={text => onChangeText(text)}
            value={value} 
        />*/