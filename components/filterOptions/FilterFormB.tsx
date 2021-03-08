/*
NICK BENNETT
ACTOKIDS

FIlter by Ages and grades for a program
TODO:
Allow users to apply filter options to a program based on Ages and Grades options
*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    SafeAreaView , View, ScrollView } from 'react-native';

import DistanceBox from './filterFormComponents/DistanceBox'    
import DateBox from './filterFormComponents/DateBox'  
import AccessOptionsCheckBox from './filterFormComponents/AccessOptionsCheckBox'
import AgesAndGrades from './filterFormComponents/AgesAndGrades'
import Costs from './filterFormComponents/Costs'

export default function FilterFormB() {
    //console.log(item.item)
    return(
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View>
                <Text style={styles.text}>Sort By</Text>
            </View>
            <DistanceBox />
            <DateBox />
            <View>
                <Text style={styles.text}>Accessibility Options</Text>
            </View>
            <AccessOptionsCheckBox />
            <View>
                <Text style={styles.text}>Ages/Grades</Text>
            </View>
            <AgesAndGrades />
            <View>
                <Text style={styles.text}>Cost</Text>
            </View>
            <Costs />
        </ScrollView>
    </SafeAreaView>)
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: 'white',
    },
    text: {
      fontSize: 24,
    },
  });