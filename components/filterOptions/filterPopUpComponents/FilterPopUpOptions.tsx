import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity , FlatList , View , Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';

export default function FilterPopUpOptions(props: any) {

    let optionsArray = [
        {   title: 'Physical Activity',
            key: "0"
        },
        {   title: 'Physical Intensity', 
            key: "1"
        },
        {   title: 'Competitiveness',
            key: "2"
        },
        {   title: 'Skill Level', 
            key: "3"
        },
        {   title: 'Competitive Skill', 
            key: "4"
        },
        {   title: 'Certifications', 
            key: "5"
        },
        {   title: 'Accessibility', 
            key: "6"
        },
        {   title: 'Language Options', 
            key: "7"
        },
        {   title: 'Cost', 
            key: "8"
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
                         //props.setOptionSelect(item.key);
                         alert("Hello")
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
        width:(Dimensions.get('window').width * 9/12),
        height:(Dimensions.get('window').height / 15),
        justifyContent: 'center'
    },
    listContainer: {
        padding: 10,
    },
    filterOptionsText: {
        marginHorizontal: 5,
        color: 'black',
        fontSize: 18,
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