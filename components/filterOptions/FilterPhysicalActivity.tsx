/*
NICK BENNETT
ACTOKIDS

*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    FlatList, View, Dimensions } from 'react-native';
    
import Colors from '../../constants/Colors';

export default function FilterPhysicalActivity(props: any) {
    console.log(props.currentSelections)

    let optionsArray = [
        {   title: 'Movement-based Play',
            key: 0,
            url: "https://images.indianexpress.com/2019/12/child-physical-activity.jpg"
        },
        {   title: 'Exercise & Fitness',
            key: 1,
            url: "https://static.parenting.com/wp-content/uploads/2010/12/18163927/kids-baseball-1-1200x720.jpg"
        },
        {   title: 'Team Sport', 
            key: 2,
            url: "https://ptproductsonline.com/wp-content/uploads/2020/09/IncreaseIntensity.jpg"
        },
        {   title: 'Individual Sport', 
            key: 3,
            url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
        },
        {   title: 'Nature-based', 
            key: 4,
            url: "https://incowrimo.org/wp-content/uploads/2013/01/How-to-Write-a-Letter.jpg"
        },
        {   title: 'Accept', 
            key: 5,
            url: "https://lh3.googleusercontent.com/proxy/CPEKhsNlyTWYDfOD_X9NNIIlvrLloH6pvCAgubDrP53zZdXHdjqx13c_DeukMoNXI-KWteSnjfqx3oub0kpkrJKyTqtGLzVXrGH-P6kao7bahqwc8cEwQlq1GLHm2O8D8cS8M1iHaVUj-aSr1Xg"
        }
        ];

    function modifySelectionOrGoBack(physicalActivity: string){
        if(physicalActivity === 'Accept'){
            props.setOptionSelect(8)
        }else{
            props.modifyCurrentSelections(physicalActivity)
            //alert(props.currentSelections)
        }

    }

    function renderPAList(){
        return(
            <FlatList 
                style={styles.listContainer}
                data={optionsArray} 
                renderItem={renderPAItems} 
                numColumns={2}>
            </FlatList>
        )
    }

    function renderPAItems({item}){
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
        renderPAList()
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