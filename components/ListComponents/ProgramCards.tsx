import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';

import Colors from '../../constants/Colors';



export default function ProgramCards(props: any) {
    //console.log(item.item.Program_Image_Url)
    let imageWidth = (useWindowDimensions().width) * 0.75; 
    let imageHeight = (useWindowDimensions().height) * 0.25; 
    console.log(imageHeight)
    return(
        <View style={styles.programCardStyle}>
            <View style={styles.programImageWrapper}>
                <Image 
                    style={{width: imageWidth, height: imageHeight}}
                    source={{uri: props.item.Program_Image_Url}}/> 
            </View>
            <View style={styles.programTitleWrapper}>
                <Text style={styles.programNameText}>
                        {props.item.Program_Name}
                </Text>
            </View>
            <View style={styles.programDetailsWrapper}>
                <Text style ={styles.locationText}>
                    {props.item.Loct_Text}
                </Text>
                <Text style={styles.costText}>
                    ${props.item.Cost}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    programCardStyle:{
        marginHorizontal:18,
        marginVertical:10,
        flex: 1,
        flexDirection: 'column'
    },
    programImageStyle:{
        width: 308.57,
        height: 150
    },
    programImageWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center'
    },
    programTitleWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center'
    },
    programDetailsWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    programNameText: {
        fontFamily: 'serif',
        fontSize: 24,
        color: 'black',
    },
    locationText: {
        fontSize: 16,
        color: 'black'
    },
    costText: {
        fontSize: 16,
        color: 'black'
    }
});

/*
        <Card containerStyle={{backgroundColor: Colors.OffWhite}}>
            <Card.Image source={{uri: item.item.Program_Image_Url}} />
            <Text style={styles.programNameText}>
                    {item.item.Program_Name}
            </Text>
            <Text style ={styles.locationText}>
                {item.item.Loct_Text}
            </Text>
            <Text style={styles.costText}>
                ${item.item.Cost}
            </Text>
        </Card>
*/