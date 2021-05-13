/*
NICK BENNETT
ACTOKIDS

*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    FlatList, View, Dimensions, ImageBackground } from 'react-native';
    
import Colors from '../../../constants/Colors';

export default function FilterLanguageOptions(props: any) {
    //console.log(props.currentSelections)
    
    const [pleaseReRenderFlag, setPRRF] = React.useState(true)

    let optionsArray = [
        {   title: 'Interpreter Services',
            key: 0,
            url: "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/3/f9/3f9b5d48-1a31-57e5-8b60-4179396a8731/5d1532a976de3.image.jpg?resize=400%2C256"
        },
        {   title: 'Multiliqual Materials',
            key: 1,
            url: "https://pro2-bar-s3-cdn-cf.myportfolio.com/17f5e89a2c1fc5c30c602179f7823bb2/12a3f7e4-544d-40fb-8fd6-a11b4a2054f6_rw_1920.jpg?h=8b03d1953c2812aec27734db107ed7e3"
        },
        {   title: 'English', 
            key: 2,
            url: "https://previews.123rf.com/images/artursz/artursz1908/artursz190800637/128130597-text-sign-showing-english-language-business-photo-showcasing-third-spoken-native-lang-in-world-after.jpg"
        },
        {   title: 'Spanish', 
            key: 3,
            url: "https://educrea.cl/wp-content/uploads/2017/09/espanol1200x630.png"
        },
        {   title: 'Accept', 
            key: 4,
            url: "https://www.seekpng.com/png/detail/134-1348302_white-check-mark-icon-png-download-black-and.png"
        }
        ];

    function modifySelectionOrGoBack(certification: any){
        if(certification.key != 4){
            props.modifyCurrentSelections(certification.title)
            setPRRF(!pleaseReRenderFlag)
        }else{
            props.setOptionSelect(9)
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
        if(props.currentSelections.indexOf(item.title) == -1){
            return getCertItem(item, styles.dimmerImageDimensions)
        }else{
            return getCertItem(item, styles.brighterImageDimensions)
        }
    }

    function getCertItem(item: any, opacity: any){
        return(
            <View style={styles.filterImageWrapper}>
            <TouchableOpacity 
                accessible = {true}
                accessibilityLabel = {item.title}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                    modifySelectionOrGoBack(item)
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
            <Text style={styles.upperLabelText}>Language Options</Text>
            {renderOptionsList()}
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
        height: (Dimensions.get('window').height / 4), 
        width: (Dimensions.get('window').width / 2.5), 
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
        width: (Dimensions.get('window').width / 2.5), 
      },
      itemText: {
        color: '#fff',
      },
      imageDimensions: {
        height: (Dimensions.get('window').height / 4),
        width: (Dimensions.get('window').width / 2.5), 
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