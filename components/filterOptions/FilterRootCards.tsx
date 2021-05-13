/*
NICK BENNETT
ACTOKIDS

FIlter by Root Cards for the filter options
*/

import React from 'react';

import FilterCards from './FilterCards';

import { StyleSheet, Text, View, useWindowDimensions, Dimensions, TouchableOpacity , FlatList , ImageBackground } from 'react-native';

import Colors from '../../constants/Colors';

import FilterPhysicalActivity from './filterCardComponents/FilterPhysicalActivity'
import FilterCompetitiveStructure from './filterCardComponents/FilterCompetitiveStructure'
import FilterPhysicalIntensity from './filterCardComponents/FilterPhysicalIntensity'
import FilterSkillLevel from './filterCardComponents/FilterSkillLevel'
import FilterCompetitiveScale from './FilterCompetitiveScale'
import FilterCostAndTravel from './filterCardComponents/FilterCostsAndTravel'
import FilterCertifications from './filterCardComponents/FilterCertifications'
import FilterAccessibility from './filterCardComponents/FilterAccessibility'
import FilterLanguageOptions from './filterCardComponents/FilterLanguageOptions'

export default function FilterRootCards(props: any) {

    const [optionSelect, setOptionSelect] = React.useState(9)

    const [savePIKey, setPIKey] = React.useState(1)
    const [saveSLKey, setSLKey] = React.useState(1)
    const [saveCSKey, setCSKey] = React.useState(1)


        function chooseComponents(){

            switch(optionSelect){
                case 0:{
                    return renderPhysicalActivityComponent()
                }
                case 1:{
                    return renderPhysicalIntensity()
                }
                case 2:{
                    return renderCompetitiveStructure()
                }
                case 3:{
                    return renderSkillLevel()
                }
                case 4:{
                    return renderCompetitiveScale()
                }
                case 5:{
                    return renderCertifcationComponent()
                }
                case 6:{
                    return renderAccessibilityComponent()
                }
                case 7:{
                    return renderLanguageComponent()
                }
                case 8:{
                    return renderCosts()
                }
                default:{
                    return renderOptionsCards()
                }
            }
        }


        function renderPhysicalActivityComponent(){
            return(
                <FilterPhysicalActivity 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}
                    setPRR={props.setPRR}
                    PRR={props.PRR}/>
            )
        }
    
        function renderCompetitiveStructure(){
            return(
                <FilterCompetitiveStructure 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}/>
            )
        }
    
        function renderPhysicalIntensity(){
            return(
                <FilterPhysicalIntensity 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}
                    savePIKey={savePIKey}
                    setPIKey={setPIKey}/>
            )
        }
    
        function renderSkillLevel(){
            return(
                <FilterSkillLevel 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}
                    saveSLKey={saveSLKey}
                    setSLKey={setSLKey}/>
            )
        }
    
        function renderCompetitiveScale(){
            return(
                <FilterCompetitiveScale 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}
                    saveCSKey={saveCSKey}
                    setCSKey={setCSKey}/>
            )
        }
    
        function renderCosts(){
            return(
                <FilterCostAndTravel 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}/>
            )
        }
        
        function renderCertifcationComponent(){
            return(
                <FilterCertifications 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}/>
            )
        }
    
        function renderAccessibilityComponent(){
            return(
                <FilterAccessibility 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}/>
            )
        }
    
        function renderLanguageComponent(){
            return(
                <FilterLanguageOptions 
                    currentSelections={props.currentSelections}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setOptionSelect={setOptionSelect}/>
            )
        }

        function renderOptionsCards(){
            return(
                <View style={styles.listContainer}>
                    <FilterCards 
                    navigation={props.navigation}
                    currentSelections={props.currentSelections}
                    setOptionSelect={setOptionSelect}
                    modifyCurrentSelections={props.modifyCurrentSelections}
                    setPRR={props.setPRR}
                    PRR={props.PRR}/>
                    <View style={{flex: 0.15, flexDirection: 'row', padding: 10}}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity    
                                style={styles.button}                        
                                accessible = {true}
                                accessibilityLabel = "Return to Filter Cards"
                                accessibilityHint="Click here to learn more."
                                accessibilityRole="imagebutton" 
                                onPress= {() => {
                                    props.modifyCurrentSelections("Clear")
                                    props.navigation.goBack();
                                    //alert("Hello")
                                }}>
                                <Text style={styles.buttonText}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity    
                                style={styles.button}                        
                                accessible = {true}
                                accessibilityLabel = "Return to Filter Cards"
                                accessibilityHint="Click here to learn more."
                                accessibilityRole="imagebutton" 
                                onPress= {() => {
                                    props.setPRR(!props.PRR)
                                    props.navigation.goBack();
                                    //alert("Hello")
                                }}>
                                <Text style={styles.buttonText}>Return</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
    

    return(
        chooseComponents()
        )
}
const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
      },
      buttonText: {
        fontSize: 20,
        color: Colors.Red.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    buttonContainer: {
        alignItems: "center",
        marginHorizontal: 20,
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width: 150,
        height: 50,
        elevation: 8,
        backgroundColor: Colors.OffWhite.color,
    }
});
/*
<FilterCards 
                    category={item.title}
                    url={item.url}/>

            <Card>
                <Text style={styles.paragraph}>Criteria 1</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 2</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 3</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 4</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 5</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 6</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 7</Text>
            </Card>
                  // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={styles.filterRootCardStyle}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      </View>

                      <Card>
                    <Card.Title>{item.title}</Card.Title>
                </Card>
                
                */