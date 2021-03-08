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

  const [checkedOptions, setOptions] = React.useState([
    {   label: '5 - 8 Years',
        value: '5 - 8 Years',
        icon: () => <Icon name="flag" size={18} color="#900" />
    },
    {   label: '9 - 12 Years',
        value: '9 - 12 Years',
        icon: () => <Icon name="flag" size={18} color="#900" />
    },
    {   label: '13 - 16 Years', 
        value: '13 - 16 Years',
        icon: () => <Icon name="flag" size={18} color="#900" />
    },
    {   label: 'High School', 
        value: 'High School',
        icon: () => <Icon name="flag" size={18} color="#900" />
    }
  ]);

  function chooseSelection(item){
    console.log(item)
  }


  return (
    <View>
    <DropDownPicker
        items={[
            {label: '5 - 8 Years', value: '5 - 8 Years', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: '9 - 12 Years', value: '9 - 12 Years', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: '13 - 16 Years', value: '13 - 16 Years', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'High School', value: 'High School', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        defaultValue={'5 - 8 Years'}
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