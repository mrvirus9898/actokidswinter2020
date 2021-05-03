/*
NICK BENNETT
ACTOKIDS

FIlter by Ages and grades for a program
TODO:
Allow users to apply filter options to a program based on Ages and Grades options
*/


import React from 'react';

import CircleSizeSelector from 'react-native-circle-size-selector'

import Colors from '../../constants/Colors'

import { StyleSheet, Text, View } from 'react-native';

export default function FilterCompetitiveScale(props: any) {
    const [skillLevel, setSkillLevel] = React.useState(1)

        function getSkillLevel(key: number){
            //console.log(optionsArray[key-1])
            return(
                <Text style={styles.labelText}>{key}</Text>
            )
        }
    
        function setSkill(key: number){
            if ((key != props.saveCSKey) && (props.saveCSKey != 1)){
                setSkillLevel(key)
                props.setCSKey(key)
                props.modifyCurrentSelections(props.saveCSKey);
                props.modifyCurrentSelections(key);
            }else if ((key != props.saveCSKey) && (props.saveCSKey == 1)){
                setSkillLevel(key)
                props.setCSKey(key)
                props.modifyCurrentSelections(key);
            }
    
        }


    //console.log(item.item)
    return(
        <View style={styles.container}>
            <View style={styles.topLabel}>
                <Text style={styles.upperLabelText}>Competitive Skill</Text>
                {getSkillLevel(skillLevel)}
                <Text>Drag the circle to select Competitiveness</Text>
            </View>
            <View style={styles.parent}>
                <CircleSizeSelector
                    minValue={1}
                    maxValue={10}
                    initialValue={1}
                    outermostCircleStyle={{borderWidth:2,
                                        borderColor: 'black',
                                        backgroundColor: Colors.OffWhite.Transparent}}
                    graduationLineCircleStyle={{borderWidth:2,
                                            borderColor: 'black',
                                            backgroundColor: Colors.OffWhite.Transparent}} 
                    currentValueCircleStyle={{borderWidth:2,
                                            borderColor: 'black',
                                            backgroundColor: Colors.Red.Transparent}} 
                    resizingCurrentValueCircleStyle={{backgroundColor: Colors.Red.CircleTransparent}} 
                    onChange={setSkill}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    parent: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topLabel: {
        alignItems: "center",
        justifyContent: 'center',
        width: 350,
        height: 80,
        elevation: 8,
        backgroundColor: Colors.OffWhite.color,
        padding: 10
      },
      labelText: {
        fontSize: 30,
        color: Colors.Red.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
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
      upperLabelText: {
        fontFamily: 'serif',
        fontSize: 18,
        color: Colors.Blue.color,
        textShadowColor: 'black',
        textShadowRadius: 15,
        justifyContent: 'center',
        fontWeight: 'bold',
        marginHorizontal: 20
    }
  });