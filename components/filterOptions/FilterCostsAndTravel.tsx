/*
NICK BENNETT
ACTOKIDS

FIlter by Costs and Travel options for a program
TODO:
Allow users to apply filter options to a program based on Costs and Travel options
*/


import React from 'react';

import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';

export default function FilterCostsAndTravel(props: any) {

    let optionsArray = [
        {   title: 'Any Cost',
            key: 0,
        },
        {   title: 'Free',
            key: 1,
        },
        {   title: 'Equipment Fees', 
            key: 2,
        },
        {   title: 'Travel Fees', 
            key: 3,
        },
        {   title: 'Other Costs', 
            key: 4,
        },
        {   title: 'Any Payment Method',
            key: 5,
        },
        {   title: 'Pay As You Go',
            key: 6,
        },
        {   title: 'Sliding Scale', 
            key: 7,
        },
        {   title: 'Scholarships Available', 
            key: 8,
        },
        {   title: 'WA Apple Health (Medicaid)', 
            key: 9,
        },
        {   title: 'Private Health Insurance', 
            key: 10,
        }
        ];

    function rendertopLabel(item: number){
        return( 
            <TouchableOpacity 
            style={styles.topLabelStyle}
            accessible = {true}
            accessibilityLabel = {optionsArray[item].title}
            accessibilityHint="Click here to learn more."
            accessibilityRole="imagebutton" 
            onPress= {() => {
                props.modifyCurrentSelections(optionsArray[item].title)
            }}>
                <View>
                    <Text style={styles.labelText}>{optionsArray[item].title}</Text>
                </View>
            </TouchableOpacity>)
    }

    function renderSubLabel(item: number){
        return( 
            <TouchableOpacity 
                style={styles.subLabelStyle}
                accessible = {true}
                accessibilityLabel = {optionsArray[item].title}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                    props.modifyCurrentSelections(optionsArray[item].title)
            }}>
                <View>
                    <Text style={styles.subText}>{optionsArray[item].title}</Text>
                </View>
            </TouchableOpacity>)
    }

    return(
        <View style={styles.outerContainer}>
            <View style={{flex:1}}>
                <View style={styles.panelContainer}>
                    {rendertopLabel(0)}
                </View>
            </View>
            <View style={styles.panelContainer}>
                {renderSubLabel(1)}
                {renderSubLabel(2)}
            </View>
            <View style={styles.panelContainer}>
                {renderSubLabel(3)}
                {renderSubLabel(4)}
            </View>
            <View style={{flex:1}}>
                <View style={styles.panelContainer}>
                    {rendertopLabel(5)}
                </View>
            </View>
            <View style={styles.panelContainer}>
                {renderSubLabel(6)}
                {renderSubLabel(7)}
                {renderSubLabel(8)}
            </View>
            <View style={styles.panelContainer}>
                {renderSubLabel(9)}
                {renderSubLabel(10)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        height: Dimensions.get('window').height * (3/5),
      },
    panelContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
    },
    verticalSwitch: {
      transform: [{ rotate: '-90deg'}]
    },
    topLabelStyle: {
        flex:2,
        alignItems: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: Colors.OffWhite.color,
        justifyContent: "center"
    },
    subLabelStyle: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        height:36,
        backgroundColor: Colors.OffWhite.color
    },
    switchStyle: {
        flex:1,
        alignItems: "center"
    },
    labelText: {
        fontSize: 20,
        color: Colors.Red.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      subText: {
        fontSize: 12,
        color: Colors.Red.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
  })

  /*
                          <View style={styles.switchStyle}>
                            <Switch 
                                style={styles.verticalSwitch}
                                value={acceptAny}
                                onTintColor="blue"
                                onValueChange={() =>(setAcceptAny(!acceptAny))}
                            />
                        </View>
  */