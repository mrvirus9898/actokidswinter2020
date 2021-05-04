/*
Actokids Project
Nick Bennett

Show Programs is the actual component that contains the flat list, and the card

TODO:
*/

import React from 'react';

import {
  TouchableHighlight,
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
    if(props.currentSelectedTaxonomy.length != 0){
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
      output = output + taxonomy + ", "
    });
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
      //INCLUSIVE FILTRATION
      if(props.currentSelectedTaxonomy.length != 0){
        let output: Array<any> = []
        if(exclusiveInclusiveToggle){
          input.forEach(program => { 
            //NOT PRETTY BUT IT WORKS
            //console.log(program.Program_Name + ": " + (props.currentSelectedTaxonomy.indexOf((program.competitive_skill))))

            let tempProgramTaxonomy = [
              program.Certs,
              program.accessability,
              program.physical_activity,
              program.physical_intensity,
              program.competitive_skill,
              program.language_options,
              program.skill_level,
              program.payment_method,
              program.competitive_structure
            ]

            if(tempProgramTaxonomy.some( ai => props.currentSelectedTaxonomy.includes(ai))) {
              //console.log("Target Found: " + props.currentSelectedTaxonomy.indexOf(program.Certs))
                output.push(program)
            }
          });
        }else{
          
          input.forEach(program => { 
            let tempProgramTaxonomy = [
              program.Certs,
              program.accessability,
              program.physical_activity,
              program.physical_intensity,
              program.competitive_skill,
              program.language_options,
              program.skill_level,
              program.payment_method,
              program.competitive_structure
            ]

            if(props.currentSelectedTaxonomy.every( ai => tempProgramTaxonomy.includes(ai))){
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
    padding: 10
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
