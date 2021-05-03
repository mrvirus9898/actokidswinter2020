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

export default function FilterSKillLevel(props: any) {
    const [skillLevel, setSkillLevel] = React.useState(1)
    
    let optionsArray = [
        {   title: 'All', 
            key: 1,
        },
        {   title: 'Beginner',
            key: 2,
        },
        {   title: 'Intermediate',
            key: 3,
        },
        {   title: 'Advanced', 
            key: 4,
        }
        ];

        function getSkillLevel(key: number){
            //console.log(optionsArray[key-1])
            return(
                <Text style={styles.labelText}>{optionsArray[key-1].title}</Text>
            )
        }
    
        function clearSkill(){
            if(props.saveSLKey != 1){
                setSkillLevel(1)
                props.setSLKey(1);
                props.modifyCurrentSelections(optionsArray[props.saveSLKey-1].title);
            }
        }
    
        function setSkill(key: number){
            if(key == 1){
                clearSkill()
            }else if ((key != props.saveSLKey) && (props.saveSLKey != 1)){
                setSkillLevel(key)
                props.setSLKey(key)
                props.modifyCurrentSelections(optionsArray[props.saveSLKey-1].title);
                props.modifyCurrentSelections(optionsArray[key-1].title);
            }else if ((key != props.saveSLKey) && (props.saveSLKey == 1)){
                setSkillLevel(key)
                props.setSLKey(key)
                props.modifyCurrentSelections(optionsArray[key-1].title);
            }
    
        }


    //console.log(item.item)
    return(
        <View style={styles.container}>
            <View style={styles.topLabel}>
                {getSkillLevel(skillLevel)}
                <Text>Drag the circle to select Skill Level</Text>
            </View>
            <View style={styles.parent}>
                <CircleSizeSelector
                    minValue={1}
                    maxValue={4}
                    initialValue={1}
                    outermostCircleStyle={{borderWidth:3,
                                        borderColor: 'black',
                                        backgroundColor: Colors.OffWhite.Transparent}}
                    graduationLineCircleStyle={{borderWidth:3,
                                            borderColor: 'black',
                                            backgroundColor: Colors.OffWhite.Transparent}} 
                    currentValueCircleStyle={{borderWidth:3,
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
      }
  });