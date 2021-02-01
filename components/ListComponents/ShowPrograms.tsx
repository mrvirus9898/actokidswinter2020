/*
Actokids Project
Nick Bennett

Show Programs is the actual component that contains the flat list, and the card

TODO:
*/

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';

import ProgramCards from './ProgramCards';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const FilterDrawer = createDrawerNavigator();

export default function ShowPrograms(params: Array<Array<any>>){


  function drawCards(){
        //console.log(params)
        if(params === undefined)
        {
          console.log("Still Loading")
          return(null)
        }else{
          //console.log("Showing Programs: " + Object.keys(params))
          return( 
            <View>
              <FlatList
                data={params.programs}
                keyExtractor={(x, i) => i.toString()}
                renderItem={({ item }) => (
                  <View >
                    <TouchableHighlight 
                      accessible = {true}
                      accessibilityLabel = {item.Program_Name}
                      accessibilityHint="Click here to learn more."
                      accessibilityRole="imagebutton" 
                      onPress= {() => {
                        params.navigation.navigate('ProgramDetailsScreen', {item: item});
                      }}>
                      <ProgramCards item={item} />
                    </TouchableHighlight>
                  </View>
                )}
              />
            </View>
          )
      }
  }

  return (drawCards())

}

//style={{ marginBotton: 30 }}

/*

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

*/