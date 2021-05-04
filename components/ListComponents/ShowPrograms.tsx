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
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ProgramCards from './ProgramCards';

import Colors from '../../constants/Colors';

export default function ShowPrograms(props: any){

  const [filter, setFilter] = useState<Array<String>>([]);

  const programNotFound = {
    Program_Image_Url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/intTFNX2AHxk/v0/-1x-1.jpg",
    Program_Name: "NO MATCHING PROGRAMS FOUND",
    Loct_Text: 'Return to Filter to look for different programs',
    Cost: 0,
  }

  
  function drawCards(){
    let filteredData = applySearch()
    //console.log("Filter: " + filteredData)
    return( 
      <View>
        <View>
          <Text>HELLO</Text>
        </View>
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
      //INCLUSIVE FILTRATION
      if(props.currentSelectedTaxonomy.length != 0){

        let output: Array<any> = []
        input.forEach(program => {  
          //console.log(program.Program_Name + ": " + (props.currentSelectedTaxonomy.indexOf((program.competitive_skill))))
          if((props.currentSelectedTaxonomy.indexOf(program.Certs) != -1) || 
              (props.currentSelectedTaxonomy.indexOf(program.accessability) != -1) || 
              (props.currentSelectedTaxonomy.indexOf(program.physical_activity) != -1) ||
              (props.currentSelectedTaxonomy.indexOf(program.physical_intensity) != -1) ||
              (props.currentSelectedTaxonomy.indexOf((program.competitive_skill)) != -1) ||
              (props.currentSelectedTaxonomy.indexOf(program.language_options) != -1) ||
              (props.currentSelectedTaxonomy.indexOf(program.skill_level) != -1) ||
              (props.currentSelectedTaxonomy.indexOf(program.payment_method) != -1) ||
              (props.currentSelectedTaxonomy.indexOf(program.competitive_structure) != -1)) {
            //console.log("Target Found: " + props.currentSelectedTaxonomy.indexOf(program.Certs))
              output.push(program)
          }
        });
        if(output.length == 0){
          output.push(programNotFound)
        }

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
