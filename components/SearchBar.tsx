import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors'

import SearchTerm from '../types'

export default function SearchBarComponent(props: any) {
    const [tempString, SetTemp] = React.useState("")

    function updateSearchTerm(input: string){
        //console.log(input)
        //props.setTerm(input)
        SetTemp(input)
    }

    function whenUpdated(){
        //alert(Object.keys(props))    
        props.setTerm(tempString)
        //SearchTerm.CurrentSearch = props.searchTerm
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={"Enter Search Term Here"}
                onChangeText={updateSearchTerm}
                onSubmitEditing={whenUpdated}
                value={tempString} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        width: '80%',
        borderWidth: 0.5,
        color: Colors.OffWhite.color
    }

});