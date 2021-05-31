import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity , FlatList , View , Dimensions , Pressable} from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';

import Colors from '../../../../constants/Colors';

export default function FilterPopUpListGenerator(props: any) {

    //console.log("Hit Generator")

    const [pleaseReRenderFlag, setPRRF] = React.useState(true)

    
    function modifySelectionOrGoBack(item: any){
        props.modifyCurrentSelections(item.title)
        setPRRF(!pleaseReRenderFlag)
    }

    function shortSearch(){
        props.setApplyFilter()
    }

    function clearLocalFilter(){
        //console.log(props.optionsArray)
        props.optionsArray.forEach(element => {
            if(props.currentSelections.indexOf(element.title) != -1){
                //console.log("Target FOund")
                props.currentSelections.splice(props.currentSelections.indexOf(element.title), 1)
                setPRRF(!pleaseReRenderFlag)
            }
        });
    }

    function renderFlatlistOfFilterOptions(){
        return(
            <View>
                <View style={styles.filterOptionsRowStyle}>
                    <Pressable
                        style={styles.cancelButton}
                        onPress={() => props.setOptionSelect(10)}>
                        <View style={styles.closeIconWrapper}>
                            <AntDesign name="caretleft" size={22} color={Colors.Red.color} />
                        </View>
                    </Pressable>
                    <Pressable
                        style={styles.searchButton}
                        onPress={() => {
                            shortSearch()
                        }}>
                        <Text style={styles.buttonTextStyle}>Click Here to Search</Text>
                    </Pressable>
                    <Pressable
                        style={styles.cancelButton}
                        onPress={() => {
                            //alert("Filter has been cleared")
                            clearLocalFilter()
                        }}>
                        <View style={styles.closeIconWrapper}>
                            <AntDesign name="close" size={22} color={Colors.Red.color} />
                        </View>
                    </Pressable>
                </View>
                <FlatList 
                    style={styles.listContainer}
                    data={props.optionsArray} 
                    renderItem={renderFilterOptionItem}>
                </FlatList>
            </View>
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
                {renderFilterItemOnOrOff(item)}
            </TouchableOpacity>
         )
     }

     function renderFilterItemOnOrOff(item: any){
         if(props.currentSelections.indexOf(item.title) == -1){
            return(
                <View style={styles.filterOptionItemStyleOff}>
                    <View style={styles.filterSelectionRowStyle}>
                        <Text style={styles.filterOptionsTextOff}>{item.title}</Text>
                        <Entypo name="squared-plus" size={24} color={Colors.Red.color} />
                    </View>
                </View>
             )
         }else{
            return(
                <View style={styles.filterOptionItemStyleOn}>
                    <View style={styles.filterSelectionRowStyle}>
                        <Text style={styles.filterOptionsTextOn}>{item.title}</Text>
                        <Entypo name="squared-cross" size={24} color={Colors.OffWhite.color} />
                    </View>
                </View>
             )
         }
         //console.log(props.currentSelections.indexOf(item.title))
     }

     return (
        renderFlatlistOfFilterOptions()
      );

}

const styles = StyleSheet.create({
    filterOptionItemStyleOff: {
        borderColor: Colors.Red.color,
        backgroundColor: Colors.OffWhite.color,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 10,
        width:(Dimensions.get('window').width * 19/24),
        height:(Dimensions.get('window').height / 15),
        justifyContent: 'center'
    },
    filterOptionItemStyleOn: {
        borderColor: Colors.OffWhite.color,
        backgroundColor: Colors.Red.color,
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
    filterOptionsTextOn: {
        marginHorizontal: 5,
        color: Colors.OffWhite.color,
        fontSize: 18,
        fontWeight: "bold",
    },
    filterOptionsTextOff: {
        marginHorizontal: 5,
        color: 'black',
        fontSize: 18,
        fontWeight: "bold",
    },
    filterSelectionRowStyle: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between"
    },
    filterOptionsRowStyle: {
        flexDirection: "row",
        justifyContent: "center",
      },
    cancelButton: {
        borderRadius: 20,
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 1/12),
        height: (Dimensions.get('window').height * 1/24 ) 
      },    
      closeIconWrapper: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.Red.color
      },
      searchButton: {
        borderRadius: 20,
        borderColor: Colors.Red.color,
        borderWidth: 1,
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 7/12),
        height: (Dimensions.get('window').height * 1/24 ) 
      },      
      buttonTextStyle: {
        color: "black",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
      },

});