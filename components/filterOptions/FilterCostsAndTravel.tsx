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
    const [anyCost, setAnyCost] = React.useState(false)
    const [anyPayment, setAnyPayment] = React.useState(false)

    const [PLEASERERENDER, setPLEASE] = React.useState(false)

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
        },
        {   title: 'WA State Foster Program', 
            key: 11,
        }
        ];

    function setTopLabelSelection(item: number){
        //console.log("Any Cost " + item)
        if(anyCost && (item == 0)){
            for (let i = 1; i < 5; i++) {
                if(isCurrentlyInSelection(i)){
                    props.modifyCurrentSelections(optionsArray[i].title)
                }
            }
            setAnyCost(false)
        }else if(!anyCost && (item == 0)){
            for (let i = 1; i < 5; i++) {
                if(!isCurrentlyInSelection(i)){
                    props.modifyCurrentSelections(optionsArray[i].title)
                }
            }
            setAnyCost(true)
        }else if(anyPayment && (item == 5)){
            for (let i = 6; i < 12; i++) {
                if(isCurrentlyInSelection(i)){
                    props.modifyCurrentSelections(optionsArray[i].title)
                }
            }
            setAnyPayment(false)
        }else if(!anyPayment && (item == 5)){
            for (let i = 6; i < 12; i++) {
                if(!isCurrentlyInSelection(i)){
                    props.modifyCurrentSelections(optionsArray[i].title)
                }
            }
            setAnyPayment(true)
        }
    }

    function setSubLabelSelection(item: number){
        if(isCurrentlyInSelection(item)){
            if(anyCost && (item < 5)){
                setAnyCost(false)
            }else if(anyPayment && (item > 5)){
                setAnyPayment(false)
            }
            props.modifyCurrentSelections(optionsArray[item].title)
            setPLEASE(!PLEASERERENDER)
        }else{
            if(item < 5){
                let straightFlush = true
                for (let i = 1; i < 5; i++){
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
            }else{
                let straightFlush = true
                for (let i = 6; i < 12; i++){
                    if((i != item) && (!isCurrentlyInSelection(i))){
                        straightFlush = false
                    }
                }
                if(straightFlush){
                    setAnyPayment(true)
                }else{
                    setAnyPayment(false)

                }
                props.modifyCurrentSelections(optionsArray[item].title)
                setPLEASE(!PLEASERERENDER)
            }
            
        }
        
    }

    function isCurrentlyInSelection(item: number){
        return(props.currentSelections.indexOf(optionsArray[item].title) != -1)
    }

    function renderTopLabel(item: number){
        if(anyCost && (item == 0)){
            return(labelComponent(styles.topCostSelected, styles.labelCostSelectedText, item, setTopLabelSelection))
        }else if(!anyCost && (item == 0)){
            return(labelComponent(styles.topLabelStyle, styles.labelText, item, setTopLabelSelection))
        }
        else if(anyPayment && (item == 5)){
            return(labelComponent(styles.topPaymentSelected, styles.labelPaymentSelectedText, item, setTopLabelSelection))
        }else{
            return(labelComponent(styles.topLabelStyle, styles.paymentLableText, item, setTopLabelSelection))
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

    function renderPaymentLabel(item: number){
        //console.log(props.currentSelections.indexOf(optionsArray[item].title))
        if(props.currentSelections.indexOf(optionsArray[item].title) == -1){
            return(labelComponent(styles.subLabelStyle, styles.paymentText, item, setSubLabelSelection))
        }else{
            return(labelComponent(styles.subPaymentSelectedStyle, styles.subCostTextSelected, item, setSubLabelSelection))
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
            </View>
            <View style={styles.panelContainer}>
                {renderCostLabel(3)}
                {renderCostLabel(4)}
            </View>
            <View style={{flex:1}}>
                <View style={styles.panelContainer}>
                    {renderTopLabel(5)}
                </View>
            </View>
            <View style={styles.panelContainer}>
                {renderPaymentLabel(6)}
                {renderPaymentLabel(7)}
                {renderPaymentLabel(8)}
            </View>
            <View style={styles.panelContainer}>
                {renderPaymentLabel(9)}
                {renderPaymentLabel(10)}
                {renderPaymentLabel(11)}
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
        height:36,
        backgroundColor: Colors.OffWhite.color
    },
    subLabelSelectedStyle: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        height:36,
        backgroundColor: Colors.Red.color
    },
    subPaymentSelectedStyle: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        height:36,
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

                        /*
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
                        */