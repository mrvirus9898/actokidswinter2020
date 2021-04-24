import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors'

export default function SearchBarComponent(props: any) {
    const [tempString, SetTemp] = React.useState("")

    function updateSearchTerm(input: string){
        SetTemp(input)
    }

    function whenUpdated(){   
        props.setTerm(tempString)
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