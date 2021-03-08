/*
NICK BENNETT
ACTOKIDS

FIlter by Ages and grades for a program
TODO:
Allow users to apply filter options to a program based on Ages and Grades options
*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import DistanceBox from './filterFormComponents/DistanceBox'    
import DateBox from './filterFormComponents/DateBox'  

export default function FilterFormB() {
    //console.log(item.item)
    return(
    <View>
        <View>
            <Text>Sort By</Text>
        </View>
        <DistanceBox />
        <DateBox />
    </View>)
}