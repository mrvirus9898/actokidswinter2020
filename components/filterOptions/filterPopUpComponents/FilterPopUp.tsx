/*
NICK BENNETT
ACTOKIDS

FILTER POP UP
*/


import React from 'react';

import {StyleSheet, View, Text, Modal, Pressable, Dimensions} from 'react-native';

import AccessEngagementFilter from './AccessEngagementFilter';
import AccessCommunicationFilter from './AccessCommunicationFilter';
import AccessPhysicalFeatures from './AccessPhysicalFeatures';
import CompetitiveStructureFilter from './CompetitiveStructureFilter';
import PhysicalIntensityFilter from './PhysicalIntensityFilter';
import SkillLevelFilter from './SkillLevelFilter';
import FilterCertificationsPopUp from './FilterCertificationsPopUp';
import FilterLanguageOptionsPopUp from './FilterLanguageOptionsPopUp';
import FilterCostPopUp from './FilterCostsPopUp';
import FilterAgeRange from './FilterAgeRange';

import FilterPopUpOptions from './FilterPopUpOptions';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../../constants/Colors'

export default function FilterPopUp(props: any) {

  let initialCST: string[] = new Array
  const [optionSelect, setOptionSelect] = React.useState(100)
  const [selectedModalOptions, modifyModalSelections] = React.useState(initialCST)
  const [minMaxAge, setAges] = React.useState([5, 18])

  function modifySelectedFilter(selection: string){
    let tempSelection: string[] = selectedModalOptions
    let index = tempSelection.indexOf(selection,0)
    console.log("Temp Selection: " + selection)

    if(selection === "Clear"){
      if(tempSelection.length != 0){
        tempSelection.length = 0
        modifyModalSelections(tempSelection)
      }
      minMaxAge[0] = 5
      minMaxAge[1] = 18
      //setFilterMinMaxAge([5,18])

    }else if(index > -1){
      tempSelection.splice(index, 1)
      modifyModalSelections(tempSelection)
    }else{
      tempSelection.push(selection)
      modifyModalSelections(tempSelection)
    }
    //console.log("Current Taxonomy: " + currentSelectedTaxonomy)
  }

  function chooseModalFilterComponents(){

    //console.log(optionSelect)
    switch(optionSelect){
        case 0:{
          return renderEngagementFilter()
        }
        case 1:{
          return renderCommunicationFormatFilter()
        }
        case 2:{
          return renderPhysicalAccessibilityFilter()
        }
        case 3:{
          return renderLanguageComponent()
        }
        case 4:{
          return renderCostsFilter()
        }
        case 5:{
          return renderSkillLevelFilter()
        }
        case 6:{
          return renderCertifcationFilter()
        }
        case 7:{
          return renderPhysicalIntensityFilter()
        }
        case 8:{
          return renderCompetitiveStructureFilter()
        }
        case 9: {
          return renderFilterAgeRange()
        }
        default:{
          return returnDefaultFilterMenu()
        }
    }
  }
  function renderEngagementFilter(){
    return(
      <AccessEngagementFilter 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderCommunicationFormatFilter(){
    return(
      <AccessCommunicationFilter 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderPhysicalAccessibilityFilter(){
    return(
      <AccessPhysicalFeatures 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderLanguageComponent(){
    return(
      <FilterLanguageOptionsPopUp 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  
  function renderCostsFilter(){
    return(
      <FilterCostPopUp 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderSkillLevelFilter(){
    return(
      <SkillLevelFilter 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderCertifcationFilter(){
    return(
      <FilterCertificationsPopUp 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderPhysicalIntensityFilter(){
    return(
      <PhysicalIntensityFilter 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderCompetitiveStructureFilter(){
    return(
      <CompetitiveStructureFilter 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}/>
    )
  }

  function renderFilterAgeRange(){
    return(
      <FilterAgeRange 
        setOptionSelect={setOptionSelect} 
        SetFilterOverlay={props.SetFilterOverlay}
        currentSelections={selectedModalOptions}
        modifyCurrentSelections={modifySelectedFilter} 
        setPRR={props.setPRR}
        PRR={props.PRR}
        setApplyFilter={props.setApplyFilter}
        filterMinMaxAge={minMaxAge}
        setFilterMinMaxAge={setAges}/>
    )
  }

  function clearFilter(){
    //alert("Filter has been cleared")
    props.modifyModalSelections("Clear")
    props.setApplyFilter(false)
    props.SetFilterOverlay(false)
  }

  function returnDefaultFilterMenu(){
    return(
      <View>
        <View style={styles.filterOptionsRowStyle}>
          <Pressable
              style={styles.cancelButton}
              onPress={() => props.SetFilterOverlay(!props.filterOverlayFlag)}>
              <View style={styles.closeIconWrapper}>
                <AntDesign name="caretleft" size={22} color={Colors.Red.color} />
              </View>
          </Pressable>
          <Pressable
              style={styles.searchButton}
              onPress={() => {
                props.setApplyFilter(true)
                props.SetFilterOverlay(false)
              }}>
              <Text style={styles.buttonTextStyle}>Search</Text>
          </Pressable>
          <Pressable
              style={styles.cancelButton}
              onPress={() => clearFilter()}>
              <View style={styles.closeIconWrapper}>
                <AntDesign name="close" size={22} color={Colors.Red.color} />
              </View>
          </Pressable>
          </View>
        <FilterPopUpOptions 
          setOptionSelect={setOptionSelect} />
      </View>
    )
  }

    return(
      <Modal
          animationType="fade"
          transparent={true}
          statusBarTranslucent={true}
          visible={props.filterOverlayFlag}
          onRequestClose={() => {
              //alert("Close")
              props.SetFilterOverlay(!props.filterOverlayFlag)
          }}>
          <Pressable
            style={styles.transparentModalOverlay}
            onPress={() => props.SetFilterOverlay(!props.filterOverlayFlag)}>
              <Pressable
                style={{flex: 1}}
                onPress={() => {}}>
              <View style={styles.modalView}>
                {chooseModalFilterComponents()}
              </View>
              </Pressable>
          </Pressable>
      </Modal>
    )
}

const styles = StyleSheet.create({
    transparentModalOverlay: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.DarkGrey.Transparent
      },
      modalView: {
        marginVertical: 30,
        padding: 3,
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: (Dimensions.get('window').width * 21/24),
        height: (Dimensions.get('window').height * 11/12 ) 
      },
      searchButton: {
        borderRadius: 20,
        borderColor: Colors.Red.color,
        borderWidth: 1,
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 7/12),
        height: (Dimensions.get('window').height * 1/24 ) 
      },      
      cancelButton: {
        borderRadius: 20,
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 1/12),
        height: (Dimensions.get('window').height * 1/24 ) 
      },
      buttonTextStyle: {
        color: "black",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      filterOptionsRowStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
      },
      closeIconWrapper: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.Red.color
      }   
});

/*
  function renderPhysicalActivityFilter(){
    return(
      <PhysicalActivityFilterList 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

    function renderAccessibilityFilter(){
    alert("Hello")
    return(null)
  }

    function renderCompetitiveScaleFilter(){
    alert("Hello")
    return(null)
  }


*/