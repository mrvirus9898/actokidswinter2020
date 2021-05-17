import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity , FlatList , View , Dimensions} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Colors from '../../../../constants/Colors';

export default function FilterPopUpListGenerator(props: any) {

    //console.log("Hit Generator")

    const [pleaseReRenderFlag, setPRRF] = React.useState(true)

    
    function modifySelectionOrGoBack(item: any){
        props.modifyCurrentSelections(item.title)
        setPRRF(!pleaseReRenderFlag)
    }

    function renderFlatlistOfFilterOptions(){
        return(
            <FlatList 
                style={styles.listContainer}
                data={props.optionsArray} 
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
                    modifySelectionOrGoBack(item)
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