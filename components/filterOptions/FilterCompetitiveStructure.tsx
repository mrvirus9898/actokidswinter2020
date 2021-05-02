/*
NICK BENNETT
ACTOKIDS

*/


import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Dimensions, useWindowDimensions, FlatList } from 'react-native';

import Carousel from 'react-native-snap-carousel';
    
import Colors from '../../constants/Colors';

export default function FilterCompetitiveStructure(props: any) {
    //console.log(props.currentSelections)
    const [carouselIndex, setCarouselIndex] = React.useState(0)

    let imageWidth = (useWindowDimensions().width); 
    let imageHeight = (useWindowDimensions().height); 

    let optionsArray = [
        {   title: 'Competitive (No Cuts)',
            key: 0,
            url: "https://images.indianexpress.com/2019/12/child-physical-activity.jpg"
        },
        {   title: 'Non-competitive',
            key: 1,
            url: "https://static.parenting.com/wp-content/uploads/2010/12/18163927/kids-baseball-1-1200x720.jpg"
        },
        {   title: 'Competitive (Cuts)', 
            key: 2,
            url: "https://ptproductsonline.com/wp-content/uploads/2020/09/IncreaseIntensity.jpg"
        },
        {   title: 'Sports-Based Youth Development', 
            key: 3,
            url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
        }
        ];


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
                        props.modifyCurrentSelections(item.title)
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
    filterCarouselWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10
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
    buttonText: {
        fontSize: 20,
        color: Colors.Red.color,
        textShadowColor: 'black',
        textShadowRadius: 1,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
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
      filterImageWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 4), 
        width: (Dimensions.get('window').width / 3), 
    },
});

/*
    function renderItem({item, index}){
        return(
            <View style={{
                backgroundColor:Colors.OffWhite.color,
                borderRadius: 5,
                height: imageHeight * (3/5) }}>
              <Text style={{fontSize: 20}}>{item.title}</Text>
            </View>
        )
    }

    return(
        <View style={styles.filterCarouselWrapper}>
            <Carousel 
                layout={'default'}
                ref={ref => true}
                data={optionsArray}
                sliderWidth={imageWidth}
                itemWidth={imageWidth * 0.8}
                sliderHeight={imageHeight * (3/5)}
                renderItem={renderItem}
                onSnapToItem={index => setCarouselIndex(index)} />
               <View style={styles.buttonContainer}>
                    <TouchableOpacity    
                        style={styles.button}                        
                        accessible = {true}
                        accessibilityLabel = "Return to Filter Cards"
                        accessibilityHint="Click here to learn more."
                        accessibilityRole="imagebutton" 
                        onPress= {() => {
                            props.setOptionSelect(8);
                            //alert("Hello")
                        }}>
                        <Text style={styles.buttonText}>Return</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )*/