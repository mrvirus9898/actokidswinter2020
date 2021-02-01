/*
Actokids Project
Nick Bennett

checkBoxList is used in the filter function to dynamically generate the filter parameters

The code is simple, but will not run cleanly in the file, so have a free shrug ¯\_(ツ)_/¯

TODO: Fix checkedIcon / uncheckedIcon not working

*/

import React from 'react';
import {
  View
} from 'react-native';

import { CheckBox } from 'react-native-elements';

export default function checkBoxList({title}){

    return(
        <View>
            {
                title.map((item, key) => <CheckBox
                    title={item.value}
                    key={key}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' />)
            }
        </View>        
    )
}
