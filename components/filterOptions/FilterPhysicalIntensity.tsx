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

export default function FilterPhysicalIntensity(props: any) {
    const [physicalIntensity, setPhysicalIntensity] = React.useState(1)
    
    let optionsArray = [
        {   title: 'Any', 
            key: 1,
        },
        {   title: 'Self-Paced',
            key: 2,
        },
        {   title: 'Light',
            key: 3,
        },
        {   title: 'Moderate', 
            key: 4,
        },
        {   title: 'Vigorous', 
            key: 5,
        }
        ];

    function getIntensity(key: number){
        //console.log(optionsArray[key-1])
        return(
            <Text style={styles.labelText}>{optionsArray[key-1].title}</Text>
        )
    }

    function clearIntensity(){
        if(props.savePIKey != 1){
            setPhysicalIntensity(1)
            props.setPIKey(1);
            props.modifyCurrentSelections(optionsArray[props.savePIKey-1].title);
        }
    }

    function setIntensity(key: number){
        if(key == 1){
            clearIntensity()
        }else if ((key != props.savePIKey) && (props.savePIKey != 1)){
            setPhysicalIntensity(key)
            props.setPIKey(key)
            props.modifyCurrentSelections(optionsArray[props.savePIKey-1].title);
            props.modifyCurrentSelections(optionsArray[key-1].title);
        }else if ((key != props.savePIKey) && (props.savePIKey == 1)){
            setPhysicalIntensity(key)
            props.setPIKey(key)
            props.modifyCurrentSelections(optionsArray[key-1].title);
        }

    }


    //console.log(item.item)
    return(
        <View style={styles.container}>
            <View style={styles.topLabel}>
                <Text style={styles.upperLabelText}>Physical Activity</Text>
                {getIntensity(physicalIntensity)}
                <Text>Drag the circle to select Intensity</Text>
            </View>
            <View style={styles.parent}>
                <CircleSizeSelector
                    minValue={1}
                    maxValue={5}
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
                    onChange={setIntensity}/>
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
  /*
          if(props.savePIKey == ""){
            props.modifyCurrentSelections(optionsArray[key-1].title);
            props.setPIKey(key);
        }else if(props.savePIKey != key){
            props.modifyCurrentSelections(optionsArray[props.savePIKey-1].title);
            props.modifyCurrentSelections(optionsArray[key-1].title);
            props.setPIKey(key);
        }        
        props.setOptionSelect(8);*/