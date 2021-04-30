import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions, Dimensions, ImageBackground } from 'react-native';

import Colors from '../../constants/Colors';



export default function FilterCards(item: any) {
    console.log(useWindowDimensions().height)
    //let imageHeight = (useWindowDimensions().height) / 4; 
    //let imageWidth = (useWindowDimensions().width) / 3; 
    

    return(
        <View style={styles.filterImageWrapper}>
            <View style={styles.item}>
                <ImageBackground 
                    style={styles.imageDimensions}        
                    source={{uri: item.url}}>
                    <Text style={styles.categoryText}>
                        {item.category}
                    </Text> 
                </ImageBackground> 

            </View>
        </View>

    )

}


const styles = StyleSheet.create({
    categoryText: {
        fontFamily: 'serif',
        fontSize: 18,
        color: Colors.OffWhite.color,
        textShadowColor: 'black',
        textShadowRadius: 15,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    filterImageWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 5), 
        width: (Dimensions.get('window').width / 2), 
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 5),
        width: (Dimensions.get('window').width / 2), 
      },
      itemText: {
        color: '#fff',
      },
      imageDimensions: {
        height: (Dimensions.get('window').height / 5),
        width: (Dimensions.get('window').width / 2), 
      }

});

/*
            <View style={styles.filterImageWrapper}>
                <Image 
                    style={{width: imageHeight, height: imageHeight}}        
                    source={{uri: item.url}}/> 
            </View>
            <View style={{width: imageHeight, height: imageHeight}}>
                <Text style={styles.categoryText}>
                    {item.category}
                </Text> 
            </View>   

                                  <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>

*/