import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors'

import SearchTerm from '../types'

export default function SearchBarComponent() {
    const [searchTerm, SetSearchTerm] = React.useState(" ")

    function updateSearchTerm(input: string){
        //console.log(input)
        SetSearchTerm(input)
    }

    function whenUpdated(){
        //alert("Hello")    
        SearchTerm.CurrentSearch = searchTerm
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={"Enter Search Term Here"}
                onChangeText={updateSearchTerm}
                onSubmitEditing={whenUpdated}
                value={searchTerm} />
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