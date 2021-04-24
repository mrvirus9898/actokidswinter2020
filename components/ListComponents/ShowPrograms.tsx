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
  FlatList
} from 'react-native';

import ProgramCards from './ProgramCards';

export default function ShowPrograms(props: any){

  const [filter, setFilter] = useState<Array<String>>([]);

  const isFocused = useIsFocused()

    useEffect(() => {
      //console.log("Current Filter: " + FilterCriteria.Criteria)
    } , [isFocused])


  function drawCards(){
    let filteredData = applyFilter()
    //console.log("Filter: " + filteredData)
    return( 
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) => (
            <View >
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
