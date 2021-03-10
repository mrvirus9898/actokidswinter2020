import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function PhysicalIntensity() {

  const [selectedOption, setSelection] = React.useState([])

  return (
    <View>
    <DropDownPicker
        items={[
            {label: 'Light', value: 'Light', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Moderate', value: 'Moderate', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Self-Paced', value: 'Self-Paced', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'Chair-Based', value: 'Chair-Based', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        defaultValue={'Light'}
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