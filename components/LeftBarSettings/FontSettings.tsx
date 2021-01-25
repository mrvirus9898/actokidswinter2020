import React from 'react';
import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image } from 'react-native';
import NumericInput from 'react-native-numeric-input'

import {
    Input,
    Card,
    Button
} from 'react-native-elements'

export default function FontSettings(){

    let fontValue = 0;

    function setValue(value){
        fontValue = value;
        console.log(fontValue);
    }

    return(
        <Card>
            <View>
            <NumericInput 
                value={fontValue} 
                onChange={value => setValue({value})} 
                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                totalWidth={240} 
                totalHeight={50} 
                iconSize={25}
                step={4}
                valueType='real'
                rounded 
                textColor='#B0228C' 
                iconStyle={{ color: 'white' }} 
                rightButtonBackgroundColor='#EA3788' 
                leftButtonBackgroundColor='#E56B70'/>
            </View>
        </Card>

    );
}