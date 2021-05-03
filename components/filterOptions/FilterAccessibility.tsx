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

export default function FilterAccessibility(props: any) {
    const [anyCost, setAnyCost] = React.useState(false)
    const [anyPayment, setAnyPayment] = React.useState(false)

    const [PLEASERERENDER, setPLEASE] = React.useState(false)

    let optionsArray = [
        {   title: 'All Accessibility Options',
            key: 0,
        },
        {   title: 'Unified',
            key: 1,
        },
        {   title: 'Adaptive', 
            key: 2,
        },
        {   title: 'Chair-based', 
            key: 3,
        },
        {   title: 'Paralympic pathway', 
            key: 4,
        },
        {   title: 'Special Olympics Pathway',
            key: 5,
        },
        {   title: 'Other',
            key: 6,
        },
        {   title: 'Autism Friendly', 
            key: 7,
        },
        {   title: 'Support Person Allowed', 
            key: 8,
        },
        {   title: 'Peer Inclusive', 
            key: 9,
        },
        {   title: 'Personal Support Animials', 
            key: 10,
        },
        {   title: 'Braille', 
            key: 11,
        },
        {   title: 'Audio Materials', 
            key: 12,
        },
        {   title: 'Large Print Materials', 
            key: 13,
        },
        {   title: 'Paved Pathway', 
            key: 14,
        },
        {   title: 'Mechanical Lifts', 
            key: 15,
        },
        {   title: 'Wheelchair Charging', 
            key: 16,
        },        
        {   title: 'Family Bathroom', 
            key: 17,
        },
        {   title: 'Ramps', 
            key: 18,
        }
        ];

    function setTopLabelSelection(item: number){
        //console.log("Any Cost " + item)
        if(anyCost && (item == 0)){
            for (let i = 1; i < 19; i++) {
                if(isCurrentlyInSelection(i)){
                    props.modifyCurrentSelections(optionsArray[i].title)
                }
            }
            setAnyCost(false)
        }else if(!anyCost && (item == 0)){
            for (let i = 1; i < 19; i++) {
                if(!isCurrentlyInSelection(i)){
                    props.modifyCurrentSelections(optionsArray[i].title)
                }
            }
            setAnyCost(true)
        }
    }

    function setSubLabelSelection(item: number){
        if(isCurrentlyInSelection(item)){
            if(anyCost){
                setAnyCost(false)
            }
            props.modifyCurrentSelections(optionsArray[item].title)
            setPLEASE(!PLEASERERENDER)
        }else{
                let straightFlush = true
                for (let i = 1; i < 19; i++){
                    if((i != item) && (!isCurrentlyInSelection(i))){
                        straightFlush = false
                    }
                }
                //console.log(straightFlush)
                if(straightFlush){
                    setAnyCost(true)
                }else{
                    setAnyCost(false)
                }
                props.modifyCurrentSelections(optionsArray[item].title)
                setPLEASE(!PLEASERERENDER)
            }
    }

    function isCurrentlyInSelection(item: number){
        return(props.currentSelections.indexOf(optionsArray[item].title) != -1)
    }

    function renderTopLabel(item: number){
        if(anyCost){
            return(labelComponent(styles.topCostSelected, styles.labelCostSelectedText, item, setTopLabelSelection))
        }else if(!anyCost){
            return(labelComponent(styles.topLabelStyle, styles.labelText, item, setTopLabelSelection))
        }
    }

    function renderCostLabel(item: number){
        //console.log(props.currentSelections.indexOf(optionsArray[item].title))
        if(props.currentSelections.indexOf(optionsArray[item].title) == -1){
            return(labelComponent(styles.subLabelStyle, styles.subText, item, setSubLabelSelection))
        }else{
            return(labelComponent(styles.subLabelSelectedStyle, styles.subCostTextSelected, item, setSubLabelSelection))
        }
    }

    function labelComponent(selectedStyle: any, textStyle: any, item: number, setter: any){
        return(
            <TouchableOpacity 
            style={selectedStyle}
            accessible = {true}
            accessibilityLabel = {optionsArray[item].title}
            accessibilityHint="Click here to learn more."
            accessibilityRole="imagebutton" 
            onPress= {() => {
                setter(item)
        }}>
            <View>
                <Text style={textStyle}>{optionsArray[item].title}</Text>
            </View>
        </TouchableOpacity>)
    }


    return(
        <View style={styles.outerContainer}>
            <View style={{flex:1}}>
                <View style={styles.panelContainer}>
                    {renderTopLabel(0)}
                </View>
            </View>
            <View style={styles.panelContainer}>
                {renderCostLabel(1)}
                {renderCostLabel(2)}
                {renderCostLabel(3)}
                {renderCostLabel(4)}
            </View>
            <View style={styles.panelContainer}>
                {renderCostLabel(5)}
                {renderCostLabel(16)}
                {renderCostLabel(7)}
                {renderCostLabel(17)}
            </View>
            <View style={styles.panelContainer}>
                {renderCostLabel(9)}
                {renderCostLabel(18)}
                {renderCostLabel(11)}
                {renderCostLabel(12)}
            </View>
            <View style={styles.panelContainer}>
                {renderCostLabel(13)}
                {renderCostLabel(14)}
                {renderCostLabel(15)}
                {renderCostLabel(6)}
            </View>
            <View style={styles.panelContainer}>
                {renderCostLabel(8)}
                {renderCostLabel(10)}
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
    topLabelStyle: {
        flex:2,
        alignItems: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: Colors.OffWhite.color,
        justifyContent: "center"
    },
    topCostSelected: {
        flex:2,
        alignItems: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: Colors.Red.color,
        justifyContent: "center"
    },
    topPaymentSelected: {
        flex:2,
        alignItems: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: Colors.Blue.color,
        justifyContent: "center"
    },
    subLabelStyle: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        height:44,
        backgroundColor: Colors.OffWhite.color
    },
    subLabelSelectedStyle: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        height:44,
        backgroundColor: Colors.Red.color
    },
    subPaymentSelectedStyle: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        height:44,
        backgroundColor: Colors.Blue.color
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
      paymentLableText: {
        fontSize: 20,
        color: Colors.Blue.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      labelCostSelectedText: {
        fontSize: 20,
        color: Colors.OffWhite.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      labelPaymentSelectedText: {
        fontSize: 20,
        color: Colors.OffWhite.color,
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
      paymentText: {
        fontSize: 12,
        color: Colors.Blue.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },          
      subCostTextSelected: {
        fontSize: 12,
        color: Colors.OffWhite.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      subPaymentTextSelected: {
        fontSize: 12,
        color: Colors.Blue.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
  })
