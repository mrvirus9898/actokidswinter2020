/*
NICK BENNETT
ACTOKIDS

*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    FlatList, View, Dimensions } from 'react-native';
    
import Colors from '../../constants/Colors';

export default function FilterLanguageOptions(props: any) {
    //console.log(props.currentSelections)

    let optionsArray = [
        {   title: 'Interpreter Services',
            key: 0,
            url: "https://images.indianexpress.com/2019/12/child-physical-activity.jpg"
        },
        {   title: 'Multiliqual Materials',
            key: 1,
            url: "https://static.parenting.com/wp-content/uploads/2010/12/18163927/kids-baseball-1-1200x720.jpg"
        },
        {   title: 'English', 
            key: 2,
            url: "https://ptproductsonline.com/wp-content/uploads/2020/09/IncreaseIntensity.jpg"
        },
        {   title: 'Spanish', 
            key: 3,
            url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
        }
        ];

    function modifySelectionOrGoBack(certification: string){
        if(certification === 'Accept'){
            props.setOptionSelect(8)
        }else{
            props.modifyCurrentSelections(certification)
            //alert(props.currentSelections)
        }

    }

    function renderOptionsList(){
        return(
            <FlatList 
                style={styles.listContainer}
                data={optionsArray} 
                renderItem={renderOptionsItems} 
                numColumns={2}>
            </FlatList>
        )
    }

    function renderOptionsItems({item}){
        return(

                <View style={styles.filterImageWrapper}>
                <TouchableOpacity 
                    accessible = {true}
                    accessibilityLabel = {item.title}
                    accessibilityHint="Click here to learn more."
                    accessibilityRole="imagebutton" 
                    onPress= {() => {
                        modifySelectionOrGoBack(item.title)
                    }}>
                        <View style={styles.item}>
                            <Text>{item.title}</Text>
                        </View>
                </TouchableOpacity>
                </View>


        )
    }

    return(
        renderOptionsList()
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
        height: (Dimensions.get('window').height / 4), 
        width: (Dimensions.get('window').width / 3), 
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 4),
        width: (Dimensions.get('window').width / 3), 
      },
      itemText: {
        color: '#fff',
      },
      imageDimensions: {
        height: (Dimensions.get('window').height / 4),
        width: (Dimensions.get('window').width / 3), 
      },
      listContainer: {
        flex: 1,
        padding: 10
    },

});