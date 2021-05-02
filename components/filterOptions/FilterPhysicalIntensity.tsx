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

import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';

export default function FilterPhysicalIntensity(props: any) {
    const [physicalIntensity, setPhysicalIntensity] = React.useState(1)
    
    let optionsArray = [
        {   title: 'Self-Paced',
            key: 1,
        },
        {   title: 'Light',
            key: 2,
        },
        {   title: 'Moderate', 
            key: 3,
        },
        {   title: 'Vigorous', 
            key: 4,
        },
        {   title: 'Accept', 
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
        if(props.savePIKey != ""){
            props.modifyCurrentSelections(optionsArray[props.savePIKey-1].title);
            props.setPIKey("");
        }
        props.setOptionSelect(8);
    }

    function setIntensity(key: number){
        //console.log(optionsArray[key-1].title);
        //console.log("Save: " + props.savePIKey);
        //console.log("Key: " + key);
        if(props.savePIKey == ""){
            props.modifyCurrentSelections(optionsArray[key-1].title);
            props.setPIKey(key);
        }else if(props.savePIKey != key){
            props.modifyCurrentSelections(optionsArray[props.savePIKey-1].title);
            props.modifyCurrentSelections(optionsArray[key-1].title);
            props.setPIKey(key);
        }        
        props.setOptionSelect(8);
    }


    //console.log(item.item)
    return(
        <View style={styles.container}>
            <View style={styles.topLabel}>
                {getIntensity(physicalIntensity)}
                <Text>Drag the circle to select Intensity</Text>
            </View>
            <View style={{ borderColor: 'lightgray', borderBottomWidth: 2, marginTop: 30, marginBottom: 20 }}></View>
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
                onChange={setPhysicalIntensity}/>
            </View>
            <View style={{ borderColor: 'lightgray', borderBottomWidth: 2, marginTop: 30, marginBottom: 20 }}></View>
            <View style={styles.buttonRowWrapper}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}                          
                        accessible = {true}
                        accessibilityLabel = "Return to Filter Cards"
                        accessibilityHint="Click here to learn more."
                        accessibilityRole="imagebutton" 
                        onPress= {() => {
                            clearIntensity();
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
                            setIntensity(physicalIntensity);
                            //alert("Hello")
                        }}>
                        <Text style={styles.buttonText}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    parent: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
      },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textShadowColor: Colors.OffWhite.color,
        textShadowRadius: 15,
        justifyContent: 'center'
      },
      buttonRowWrapper: {
          flex: 1,
          flexDirection: 'row',
      },
      buttonContainer: {
        alignItems: "center",
        marginHorizontal: 10,
      },
      button: {
        alignItems: "center",
        justifyContent: 'center',
        width: 150,
        height: 50,
        elevation: 8,
        backgroundColor: Colors.OffWhite.color,
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
        fontSize: 40,
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