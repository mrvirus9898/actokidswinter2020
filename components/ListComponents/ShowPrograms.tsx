/*
Actokids Project
Nick Bennett

Show Programs is the actual component that contains the flat list, and the card

TODO:
*/

import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'

import {
  TouchableHighlight,
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions
} from 'react-native';

import ProgramCards from './ProgramCards';

import Colors from '../../constants/Colors';

export default function ShowPrograms(props: any){

  const [filter, setFilter] = useState<Array<String>>([]);


  function drawCards(){
    let filteredData = applyFilter()
    //console.log("Filter: " + filteredData)
    return( 
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.programListStyle}>
              <TouchableHighlight 
                accessible = {true}
                accessibilityLabel = {item.Program_Name}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                  props.navigation.navigate('ProgramDetailsScreen', {item: item});
                }}>
                <ProgramCards item={item} />
              </TouchableHighlight>
            </View>
          )}
        />
      </View>
    )
  }

  function applyFilter(){
    let output: Array<any> = []

    //console.log("Current Filter: " + filter)
    if(props.searchTerm != ""){
      props.programs.forEach(program => {
        if(props.searchTerm === program.Program_Name){
          console.log("Target Found")
          output.push(program)
        }
      });
      return(output)
    }else{
      return props.programs
    }
  }

  return (drawCards())

}

const styles = StyleSheet.create({
  programListStyle:{
      borderRadius: 6,
      elevation: 3,
      backgroundColor: Colors.OffWhite.color,
      shadowColor: '#333',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal:12,
      marginVertical:4,
  }
});
