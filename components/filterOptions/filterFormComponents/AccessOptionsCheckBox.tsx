/*
Actokids Project
Nick Bennett



*/

import React, {useState, useEffect} from 'react';
import {  View  } from 'react-native';

import { CheckBox } from 'react-native-elements';

export default function checkBoxList(){

    //const [checked, setChecked] = useState(false);

    let optionsArray = [
        {   title: 'Wheelchair Accessible',
            key: 0,
            checked: false
        },
        {   title: 'Autism Friendly',
            key: 1,
            checked: false
        },
        {   title: 'Peer Inclusion', 
            key: 2,
            checked: false
        },
        {   title: 'Family Bathrooms', 
            key: 3,
            checked: false
        },
        {   title: 'Sign Language Interpreter', 
            key: 4,
            checked: false
        },
        {   title: 'Supporters Allowed', 
            key: 5,
            checked: false
        }
    ];
    
    return(       
        <View>
            {
                optionsArray.map((item, key) => <CheckBox
                    title={item.title}
                    key={key}
                    checked={item.checked}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o' 
                    onPress={() => changeCheck(item)}/>)
            }
        </View>  )

    function changeCheck(item){
        //setChecked(!checked)
        item.checked = !item.checked
    }

}
/*
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
    )*/