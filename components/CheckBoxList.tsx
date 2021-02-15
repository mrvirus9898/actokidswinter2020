/*
Actokids Project
Nick Bennett

checkBoxList is used in the filter function to dynamically generate the filter parameters

The code is simple, but will not run cleanly in the file, so have a free shrug ¯\_(ツ)_/¯

TODO: Fix checkedIcon / uncheckedIcon not working

*/

import React, {useState} from 'react';
import {
  View
} from 'react-native';

import { CheckBox } from 'react-native-elements';

export default function checkBoxList({title}){

    const [filterCriteria, setFilter] = useState([]);
    //Checked only true purpose is to force a state update on the checkbox component after the filter has been modified.
    //It does not actually track what has or has not been checked. That is done by logic.
    const [checked, setChecked] = useState(false);

    //console.log(title)

    return(
        <View>
            {
                title.map((item, key) => <CheckBox
                    title={item.value}
                    key={key}
                    checked={filterCriteria.includes(item.value)}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' 
                    onPress={() => changeCheck(item)}/>)
            }
        </View>        
    )

    function changeCheck(item){
        changeFilter(item.value)
        setChecked(!checked)
        console.log(filterCriteria)
    }

    function changeFilter(item){
        //console.log(filterCriteria.indexOf(item))
        //console.log(filterCriteria.includes(item))
        if(!filterCriteria.includes(item)){
            filterCriteria.push(item)
        }else{
            filterCriteria.pop(item)
        }
        
    }
}
