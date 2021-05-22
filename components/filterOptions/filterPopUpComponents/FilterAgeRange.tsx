import * as React from 'react';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Colors from '../../../constants/Colors';

import { AntDesign } from '@expo/vector-icons';

import { Text, StyleSheet, TouchableOpacity , FlatList , View , Dimensions , Pressable} from 'react-native';

export default function FilterAgeRange(props: any) {

    const [minMaxAge, setAges] = React.useState([props.filterMinMaxAge[0],props.filterMinMaxAge[1]])

    let minMaxAgeChange = values => setAges(values)

    function reduceMinAge(){
        console.log(minMaxAge[0])
        if(minMaxAge[0] > 5){
            setAges([minMaxAge[0]-1,minMaxAge[1]])
        }
    }

    function reduceMaxAge(){
        console.log(minMaxAge[1])
        if(minMaxAge[1] > minMaxAge[0]+1){
            setAges([minMaxAge[0],minMaxAge[1]-1])
        }
    }

    function increaseMinAge(){
        console.log(minMaxAge[0])
        if(minMaxAge[0]+1 < minMaxAge[1]){
            setAges([minMaxAge[0]+1,minMaxAge[1]])
        }
    }

    function increaseMaxAge(){
        console.log(minMaxAge[1])
        if(minMaxAge[1] < 25){
            setAges([minMaxAge[0],minMaxAge[1]+1])
        }
    }

    function commitSearch(){
        props.setApplyFilter(true)
        props.setFilterMinMaxAge(minMaxAge)
    }

    function AgeSlider(){
        return(
            <View style={styles.multiSliderWrapper}>
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
                        onPress={() => commitSearch()}>
                        <Text style={styles.buttonTextStyle}>Search</Text>
                    </Pressable>
                    <Pressable
                        style={styles.cancelButton}
                        onPress={() => {
                            alert("Filter has been cleared")
                            props.modifyCurrentSelections("Clear")
                        }}>
                        <View style={styles.closeIconWrapper}>
                            <AntDesign name="close" size={22} color={Colors.Red.color} />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.multiSliderCard}>
                    <View style={styles.labelRowStyle}>
                        <Text style={styles.numberText}>
                            Minimum Age
                        </Text>
                        <Text style={styles.numberText}>
                            Maximum Age
                        </Text>
                    </View>
                    <View style={styles.numberRowStyle}>
                        <Pressable
                            onPress={() => {reduceMinAge()}}>
                            <View style={styles.numberIconWrapper}>
                                <AntDesign name="stepbackward" size={18} color={Colors.Red.color} />
                            </View>
                        </Pressable>
                        <Text style={styles.numberText}>
                            {minMaxAge[0]}
                        </Text>
                        <Pressable
                            onPress={() => {increaseMinAge()}}>
                            <View style={styles.numberIconWrapper}>
                                <AntDesign name="stepforward" size={18} color={Colors.Red.color} />
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={() => {reduceMaxAge()}}>
                            <View style={styles.numberIconWrapper}>
                                <AntDesign name="stepbackward" size={18} color={Colors.Red.color} />
                            </View>
                        </Pressable>
                        <Text style={styles.numberText}>
                            {minMaxAge[1]}
                        </Text>
                        <Pressable
                            onPress={() => {increaseMaxAge()}}>
                            <View style={styles.numberIconWrapper}>
                                <AntDesign name="stepforward" size={18} color={Colors.Red.color} />
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.filterOptionsRowStyle}>
                        <MultiSlider
                            values={[minMaxAge[0], minMaxAge[1]]}
                            sliderLength={(Dimensions.get('window').width * 9/12)}
                            onValuesChange={minMaxAgeChange}
                            min={5}
                            max={25}
                            step={1}/>
                    </View>
                </View>
            </View>)
    }

     return (AgeSlider());
}

const styles = StyleSheet.create({
    multiSliderWrapper: {
        flex: 1,
    },
    filterOptionsRowStyle: {
        flexDirection: "row",
        justifyContent: "center",
    },
    labelRowStyle: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
    },
    numberRowStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 5,
    },
    multiSliderCard:{
        backgroundColor: Colors.OffWhite.color,
        borderRadius: 25,
        borderColor: Colors.Red.color,
        borderWidth: 1,
        width: (Dimensions.get('window').width * 10/12),
        alignContent: 'center'
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
      numberIconWrapper: {
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
      numberText: {
          fontSize: 18,
          fontWeight: 'bold'
      }
})