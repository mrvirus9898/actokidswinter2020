/*
Actokids Project
Nick Bennett

Distance input box

*/

import * as React from 'react';
import { Text, TextInput, View, Dimensions } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { Card } from 'react-native-elements';

export default function DateBox() {
  const [date, setDate] = React.useState(new Date())

  let currentDate = (date.getMonth()+1) + " " + date.getDate() + " " + date.getFullYear()

  console.log(currentDate)
  //console.log(date)

  return (
    <View>
      <Card>
        <Text>{currentDate}</Text>
      </Card>
    </View>
  );
}

/*
      <Text>{showDatePicker()}</Text>
      <DateTimePicker
        value={date}
        mode={'date'}
        onChange={onChange}
        display="default"
      />
*/
/*
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(currentDate)
    //setDate(currentDate)
  }

  const showDatePicker = () => {
    return date.getDate
  }*/
