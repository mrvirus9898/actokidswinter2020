import React from 'react';
import { Card } from 'react-native-elements';
import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image } from 'react-native';

export default function ActivityCards(item: any) {
    //console.log(item.item)
    let picture_url: string = (item.item.pic_url === undefined) ? 
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*" : item.item.pic_url;

    return(
        <View style={styles.activityCardStyle}>
            <Image 
                style={styles.activityImageStyle}
                source={{uri: picture_url}}/> 
            <Text>
                    {item.item.value}
            </Text>
        </View>

    )
}

/*
        <Card>
            <Card.Image source={{uri: picture_url}} />
            <Text style={styles.titleText}>
                    {item.item.value}
            </Text>
        </Card>

*/

const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'serif',
        fontSize: 24,
        color: 'black'
    },
    activityCardStyle:{
        marginHorizontal:18,
        marginVertical:10,
        flex: 1,
        flexDirection: 'row'
    },
    activityImageStyle:{
        width: 50,
        height: 50
    }
});