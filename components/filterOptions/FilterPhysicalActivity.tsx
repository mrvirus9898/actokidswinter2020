/*
NICK BENNETT
ACTOKIDS

*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    FlatList, View, Dimensions, ImageBackground } from 'react-native';
    
import Colors from '../../constants/Colors';

export default function FilterPhysicalActivity(props: any) {
    //console.log(Object.keys(props))

    let optionsArray = [
        {   title: 'Movement based Play',
            key: 0,
            url: "https://i.pinimg.com/originals/98/6d/2a/986d2ab42819c75793392965b01c8efd.jpg"
        },
        {   title: 'Exercise & Fitness',
            key: 1,
            url: "https://static01.nyt.com/images/2018/02/20/well/physed-kids-exercise/physed-kids-exercise-jumbo.jpg"
        },
        {   title: 'Team Sport', 
            key: 2,
            url: "https://static.parenting.com/wp-content/uploads/2010/12/18163927/kids-baseball-1-1200x720.jpg"
        },
        {   title: 'Individual Sport', 
            key: 3,
            url: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-4/12066-Youth_Fitness_Exercise_Helps_Children_Excel_in_School_296x728-header.jpg?w=1155&h=1528"
        },
        {   title: 'Nature based', 
            key: 4,
            url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
        }
        ];

    function modifySelectionOrGoBack(physicalActivity: string){
        props.modifyCurrentSelections(physicalActivity)
        /*if(physicalActivity === 'Accept'){
            props.setOptionSelect(8)
        }else{
            props.modifyCurrentSelections(physicalActivity)
            //alert(props.currentSelections)
        }*/

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
                            <ImageBackground 
                                style={styles.imageDimensions}        
                                source={{uri: item.url}}>
                                <Text style={styles.categoryText}>
                                    {item.title}
                                </Text> 
                            </ImageBackground> 
                        </View>
                </TouchableOpacity>
                </View>


        )
    }

    return(
        <View style={{flex: 1}}>
            <Text style={styles.upperLabelText}>Physical Activity</Text>
            {renderPAList()}
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
        width: (Dimensions.get('window').width / 3), 
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 5),
        width: (Dimensions.get('window').width / 3), 
      },
      itemText: {
        color: '#fff',
      },
      imageDimensions: {
        height: (Dimensions.get('window').height / 5),
        width: (Dimensions.get('window').width / 3), 
      },
      listContainer: {
        flex: 1,
        padding: 10
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