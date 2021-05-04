/*
NICK BENNETT
ACTOKIDS

*/


import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Dimensions, useWindowDimensions, FlatList, ImageBackground } from 'react-native';

import Carousel from 'react-native-snap-carousel';
    
import Colors from '../../constants/Colors';

export default function FilterCompetitiveStructure(props: any) {
    //console.log(props.currentSelections)

    const [pleaseReRenderFlag, setPRRF] = React.useState(true)

    let optionsArray = [
        {   title: 'Competitive (No Cuts)',
            key: 0,
            url: "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/7+Benefits+of+Summer+Swim/Slide-3.jpg"
        },
        {   title: 'Non- Competitive',
            key: 1,
            url: "https://images.squarespace-cdn.com/content/v1/5c9d352b92441b46111a6e9f/1610752022959-6G3QTSF1LZSHTZFZTCN3/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w"
        },
        {   title: 'Competitive (Cuts)', 
            key: 2,
            url: "https://napervillemagazine.com/wp-content/uploads/2013/03/NMAG0812_Feature_Small_1.jpg"
        },
        {   title: 'Sports-Based Youth Development', 
            key: 3,
            url: "https://ntprd.org/wp-content/uploads/2019/09/youth-soccer.jpg"
        }
        ];

        function modifySelectionOrGoBack(competitiveStructure: string){
            props.modifyCurrentSelections(competitiveStructure)
            setPRRF(!pleaseReRenderFlag)    
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
            if(props.currentSelections.indexOf(item.title) == -1){
                return getPAItem(item, styles.dimmerImageDimensions)
            }else{
                return getPAItem(item, styles.brighterImageDimensions)
            }
        }

        function getPAItem(item: any, opacity: any){
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
                                style={opacity}        
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
                <Text style={styles.upperLabelText}>Competitive Structure</Text>
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
    dimmerImageDimensions: {
        height: "100%",
        width: "100%",
        opacity: 0.5
      },
      brighterImageDimensions: {
        height: "100%",
        width: "100%",
        opacity: 1.0
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