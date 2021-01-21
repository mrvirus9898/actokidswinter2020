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

export default function ShowPrograms(params: Array<Array<any>>){

    //console.log(params)
    if(params === undefined)
    {
      console.log("Still Loading")
      return(null)
    }else{
      //console.log("Showing Programs: " + Object.keys(programs.programs))
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

//style={{ marginBotton: 30 }}