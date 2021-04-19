import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors'

export default function SearchBarComponent() {
    const [searchTerm, SetSearchTerm] = React.useState(" ")

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={"Enter Search Term Here"}
                onChangeText={SetSearchTerm}
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