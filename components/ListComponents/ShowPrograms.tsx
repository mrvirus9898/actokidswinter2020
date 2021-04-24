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

  //const [filter, setFilter] = useState<Array<any>>([]);
  const [filter, setFilter] = useState<Array<String>>([]);

  const isFocused = useIsFocused()

    useEffect(() => {
      //console.log("Current Filter: " + FilterCriteria.Criteria)
    } , [isFocused])


  function drawCards(){
    //console.log("Filter: " + filter)
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

//style={{ marginBotton: 30 }}

/*
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const FilterDrawer = createDrawerNavigator();

function rightFilterDrawer(){
    return(
      <NavigationContainer independent={true}>
        <FilterDrawer.Navigator 
        initialRouteName="Programs"
        drawerPosition={"right"}>
          <FilterDrawer.Screen name="Programs" component={drawCards} />
        </FilterDrawer.Navigator>
      </NavigationContainer>
    )
  }


      if(filter.length != 0){
      input.forEach(element => {
        if(element.accessability.localeCompare(filter[0]) == 0){
          //console.log(filter[0])
          output.push(element)
        }
        //console.log(output)
      });
    }else{
      output = input
    }

*/