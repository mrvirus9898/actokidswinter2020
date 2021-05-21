import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity , FlatList , View , Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';

export default function FilterPopUpOptions(props: any) {

    let optionsArray = [
        {   title: 'Accessibility: Engagement',
            key: "0"
        },
        {   title: 'Accessibility: Communication', 
            key: "1"
        },
        {   title: 'Accessibility: Environment',
            key: "2"
        },
        {   title: 'Language', 
            key: "3"
        },
        {   title: 'Cost', 
            key: "4"
        },
        {   title: 'Skill Level', 
            key: "5"
        },
        {   title: 'Coach/Instructor Certifications', 
            key: "6"
        },
        {   title: 'Physical Activity Intensity Level', 
            key: "7"
        },
        {   title: 'Competitive Structure', 
            key: "8"
        },
        {   title: 'Age', 
            key: "9"
        }
    ];

    function renderFlatlistOfFilterOptions(){
        return(
            <FlatList 
                style={styles.listContainer}
                data={optionsArray} 
                renderItem={renderFilterOptionItem}>
            </FlatList>
        )
    }

    function renderFilterOptionItem({item}){
        //console.log(navigation)
         return(
            <TouchableOpacity                          
                accessible = {true}
                accessibilityLabel = {item.title}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                    props.setOptionSelect(parseInt(item.key));
                    //alert("Hello")
            }}>
            <View style={styles.filterOptionItemStyle}>
                <View style={styles.filterOptionsRowStyle}>
                    <Text style={styles.filterOptionsText}>{item.title}</Text>
                    <AntDesign name="caretright" size={24} color={Colors.Red.color} />
                </View>
            </View>
            </TouchableOpacity>
         )
     }

  return (
    renderFlatlistOfFilterOptions()
  );
}

const styles = StyleSheet.create({
    filterOptionItemStyle: {
        borderColor: Colors.Red.color,
        backgroundColor: Colors.OffWhite.color,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 10,
        width:(Dimensions.get('window').width * 19/24),
        height:(Dimensions.get('window').height / 15),
        justifyContent: 'center'
    },
    listContainer: {
        padding: 10,
    },
    filterOptionsText: {
        marginHorizontal: 5,
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
    },
    filterOptionsRowStyle: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between"
    }    
});

/*
                    <View style={styles.filterImageWrapper}>
                        <View style={styles.item}>
                            <ImageBackground 
                                style={styles.imageDimensions}        
                                source={{uri: item.url}}>
                                <Text style={styles.categoryText}>
                                    {item.title}
                                </Text> 
                            </ImageBackground> 
            
                        </View>
                    </View>
                    */