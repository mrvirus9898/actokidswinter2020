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

import DistanceBox from './filterFormComponents/DistanceBox'    
import DateBox from './filterFormComponents/DateBox'  
import AccessOptionsCheckBox from './filterFormComponents/AccessOptionsCheckBox'

export default function FilterFormB() {
    //console.log(item.item)
    return(
    <View>
        <View>
            <Text>Sort By</Text>
        </View>
        <DistanceBox />
        <DateBox />
        <View>
            <Text>Accessibility Options</Text>
        </View>
        <AccessOptionsCheckBox />
        <View>
            <Text>Ages/Grades</Text>
        </View>
    </View>)
}