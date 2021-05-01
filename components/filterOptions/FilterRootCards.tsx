/*
NICK BENNETT
ACTOKIDS

FIlter by Root Cards for the filter options
*/



import React from 'react';

import { StyleSheet, TouchableOpacity, View, FlatList, Dimensions } from 'react-native';

import FilterCards from './FilterCards';

import FilterPhysicalActivity from './FilterPhysicalActivity'

import FilterCertifications from './FilterCertifications'
import FilterLanguageOptions from './FilterLanguageOptions'


export default function FilterRootCards(props: any) {

    const [optionSelect, setOptionSelect] = React.useState(8)

    function renderPhysicalActivityComponent(){
        return(
            <FilterPhysicalActivity 
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
            <FilterCards 
                setOptionSelect={setOptionSelect}/>
        )
    }

    function componentSelector(){
        switch(optionSelect){
            case 0:{
                return renderPhysicalActivityComponent()
            }
            case 1:{
                break;
            }
            case 2:{
                break;
            }
            case 3:{
                break;
            }
            case 4:{
                return renderCertifcationComponent()
            }
            case 5:{
                return renderCertifcationComponent()
            }
            case 6:{
                return renderLanguageComponent()
            }
            case 7:{
                break;
            }
            default:{
                return renderOptionsCards()
            }
        }
    }

    return(
        componentSelector()
    )
}

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