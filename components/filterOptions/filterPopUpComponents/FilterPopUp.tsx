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

import FilterPopUpOptions from './FilterPopUpOptions';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../../constants/Colors'

export default function FilterPopUp(props: any) {

  const [optionSelect, setOptionSelect] = React.useState(100)

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
          return null
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
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function renderCommunicationFormatFilter(){
    return(
      <AccessCommunicationFilter 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function renderPhysicalAccessibilityFilter(){
    return(
      <AccessPhysicalFeatures 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function renderLanguageComponent(){
    return(
      <FilterLanguageOptionsPopUp 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  
  function renderCostsFilter(){
    return(
      <FilterCostPopUp 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function renderSkillLevelFilter(){
    return(
      <SkillLevelFilter 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function renderCertifcationFilter(){
    return(
      <FilterCertificationsPopUp 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function renderPhysicalIntensityFilter(){
    return(
      <PhysicalIntensityFilter 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function renderCompetitiveStructureFilter(){
    return(
      <CompetitiveStructureFilter 
        setOptionSelect={setOptionSelect} 
        currentSelections={props.currentSelections}
        modifyCurrentSelections={props.modifyCurrentSelections} 
        setPRR={props.setPRR}
        PRR={props.PRR}/>
    )
  }

  function returnDefaultFilterMenu(){
    return(
      <View>
        <View style={styles.filterOptionsRowStyle}>
          <Pressable
              style={styles.searchButton}
              onPress={() => props.SetFilterOverlay(!props.filterOverlayFlag)}>
              <Text style={styles.buttonTextStyle}>Search</Text>
          </Pressable>
          <Pressable
              style={styles.cancelButton}
              onPress={() => props.SetFilterOverlay(!props.filterOverlayFlag)}>
              <View style={styles.closeIconWrapper}>
                <AntDesign name="close" size={22} color="black" />
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
              <View style={styles.modalView}>
                {chooseModalFilterComponents()}
              </View>
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
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 8/12),
      },      
      cancelButton: {
        borderRadius: 20,
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 1/12),
      },
      buttonTextStyle: {
        color: "black",
        textAlign: "center",
        fontSize: 18
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
        alignItems: 'center'
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