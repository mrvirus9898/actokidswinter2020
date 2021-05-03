/*
Actokids Project
Nick Bennett

Show Programs is the actual component that contains the flat list, and the card

TODO:
*/

import React, { useState } from 'react';

import {
  TouchableHighlight,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import ProgramCards from './ProgramCards';

import Colors from '../../constants/Colors';

export default function ShowPrograms(props: any){

  const [filter, setFilter] = useState<Array<String>>([]);

  
  function drawCards(){
    let filteredData = applySearch()
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

  function applySearch(){


    if(props.searchTerm != ""){
      let output: Array<any> = []
      props.programs.forEach(program => {
        if(props.searchTerm === program.Program_Name){
          console.log("Target Found")
          output.push(program)
        }
      });
      return(applyFilter(output))
    }else{
      return applyFilter(props.programs)
    }
  }

  function applyFilter(input: any){
    //console.log("Applying Filter")
    if(props.currentSelectedTaxonomy == undefined){
      //console.log("UNDEFINDED")
      return input
    }else{
      //console.log("Current Selected" + props.currentSelectedTaxonomy)
      if(props.currentSelectedTaxonomy.length != 0){

        let output: Array<any> = []
        input.forEach(program => {  
          console.log(program.Program_Name + ": " + program.Certs)
          if(props.currentSelectedTaxonomy.indexOf(program.Certs) != -1){
            //console.log("Target Found: " + props.currentSelectedTaxonomy.indexOf(program.Certs))
            output.push(program)
          }
          //Stack Ifs as nessisary 
        });

        return output
      }else{
        //console.log(props.currentSelectedTaxonomy)
        return input
      }

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
