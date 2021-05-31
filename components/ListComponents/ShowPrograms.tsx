/*
Actokids Project
Nick Bennett

Show Programs is the actual component that contains the flat list, and the card

TODO:
*/

import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ProgramCards from './ProgramCards';

import Colors from '../../constants/Colors';

export default function ShowPrograms(props: any){

  const [exclusiveInclusiveToggle, setEIT] = React.useState(true)

  const programNotFound = {
    Program_Image_Url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/intTFNX2AHxk/v0/-1x-1.jpg",
    Program_Name: "NO MATCHING PROGRAMS FOUND",
    Loct_Text: 'Return to Filter to look for different programs',
    Cost: 0,
  }
  //console.log("Root Navigator: " + props.rootNavigation)

  
  function drawCards(){
    let filteredData = applySearch()
    //console.log("Filter: " + filteredData)
    return( 
      <View style={styles.listContainer}>
        {renderReinforcementCard()}
        <FlatList
          data={filteredData}
          keyExtractor={(x, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.programListStyle}>
              <TouchableOpacity 
                accessible = {true}
                accessibilityLabel = {item.Program_Name}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                  props.navigation.navigate('ProgramDetailsScreen', {item: item});
                }}>
                <ProgramCards item={item} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }

  function renderExclusiveInclusive(){
    if(exclusiveInclusiveToggle){
      return(
        <View>
          <TouchableOpacity
              style={styles.appButtonContainer}
              onPress={() => setEIT(false)}
            >
            <Text style={styles.appButtonText}>Inclusive</Text>
            <Text style={styles.appButtonText}>Filtering</Text>
          </TouchableOpacity>
        </View>
      )
    }else{
      return(
        <View>
            <TouchableOpacity
              style={styles.appToggleContainer}
              onPress={() => setEIT(true)}
            >
            <Text style={styles.appToggleText}>Exclusive</Text>
            <Text style={styles.appToggleText}>Filtering</Text>
          </TouchableOpacity>
        </View>
      )
    }

  }

  function renderReinforcementCard(){
    //console.log(props.applyFilter)
    if((props.currentSelectedTaxonomy.length != 0 || (props.filterMinMaxAge[0] != 5 || props.filterMinMaxAge[1] != 18))){
      return(
      <View style={styles.appButtonContainer}>
          {renderExclusiveInclusive()}
          <Text style={styles.currentFilterText}>Current Filter: {
              printCurrentTaxonomy(props.currentSelectedTaxonomy)
          }</Text>
      </View>)
    }else{
      return(null)
    }
  }

  function printCurrentTaxonomy(currentTaxonomy: any){
    let output = ""
    currentTaxonomy.forEach(taxonomy => {
      output = output + taxonomy + " "
    });
    if(props.filterMinMaxAge[0] > 5 || props.filterMinMaxAge[1] < 18){
      output = output + "Minimum Age: " + props.filterMinMaxAge[0] + " Maximum Age: " + props.filterMinMaxAge[1]
    }
    return output
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
      //console.log("Current Tax: " + props.currentSelectedTaxonomy)
      if(props.currentSelectedTaxonomy.length != 0){
        let output: Array<any> = []

        //INCLUSIVE FILTRATION
        //Default toggle is True, or Inclusive

        if(exclusiveInclusiveToggle){
          input.forEach(program => { 
            //NOT PRETTY BUT IT WORKS
            //console.log("Program Name: " + program.language_options)
            let tempProgramTaxonomy = [
              program.Certs,
              program.accessability,
              program.physical_intensity,
              program.competitive_skill,
              program.language_options,
              program.skill_level,
              program.payment_method,
              program.competitive_structure,
              program.Cost
            ]
            //console.log("Assertion: " + tempProgramTaxonomy.some( ai => props.currentSelectedTaxonomy.includes(ai)))
            if(tempProgramTaxonomy.some( ai => props.currentSelectedTaxonomy.includes(ai)) && 
            (props.filterMinMaxAge[0] <= program.MaxAge) && 
            (props.filterMinMaxAge[1] >= program.MinAge)) {
                output.push(program)
            }
          });
        }else{
          //EXCLUSIVE FILTRATION
          input.forEach(program => { 
            let tempProgramTaxonomy = [
              program.Certs,
              program.accessability,
              program.physical_intensity,
              program.competitive_skill,
              program.language_options,
              program.skill_level,
              program.payment_method,
              program.competitive_structure,
              program.Cost
            ]

            if(props.currentSelectedTaxonomy.every( ai => tempProgramTaxonomy.includes(ai)) &&
            (props.filterMinMaxAge[0] <= program.MaxAge) && 
            (props.filterMinMaxAge[1] >= program.MinAge)){
              output.push(program)
            }
          });
           
        }

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
  },
  listContainer: {
    flex: 1,

  },
  currentFilterText: {
    fontSize: 18,
    color: 'black'
},
appButtonContainer: {
  elevation: 8,
  backgroundColor: Colors.OffWhite.color,
  borderRadius: 10,
  paddingHorizontal: 12,
},
appToggleContainer: {
  elevation: 8,
  backgroundColor: Colors.Red.color,
  borderRadius: 10,
  paddingHorizontal: 12,
},
appButtonText: {
  fontSize: 18,
  textShadowColor: 'black',
  textShadowRadius: 1,
  color: Colors.Red.color,
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
appToggleText: {
  fontSize: 18,
  textShadowColor: 'black',
  textShadowRadius: 1,
  color: Colors.OffWhite.color,
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
eifToggleContainer:{
  borderRadius: 6,
  elevation: 3,
  backgroundColor: Colors.OffWhite.color,
  shadowColor: '#333',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.3,
  shadowRadius: 2,
  marginHorizontal:12,
  marginVertical:4,
  justifyContent: 'center'
}
});
