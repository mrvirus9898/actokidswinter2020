/*
Actokids Project
Nick Bennett

Program Criteria drop down

*/

import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function TaxonomyCriteria() {

  const [selectedOption, setSelection] = React.useState([])


  return (
    <View>
    <DropDownPicker
        items={[
            {label: 'All', value: 'All', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Martial Arts', value: 'Martial Arts', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Track and Field', value: 'Track and Field', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Recreational', value: 'Recreational', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        defaultValue={'All'}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => setSelection(item.value)}
    />
    </View>
  );
}

/*
    <View>
      <DropDownPicker
        items={checkedOptions}
        containerStyle={{height: 40}}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={item => chooseSelection(item.value)}
      />
    </View>
    */