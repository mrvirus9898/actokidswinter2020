import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Colors from '../../../../constants/Colors';

export default function FilterReturnButton({setOnPress}: any) {
    return(
        <View style={styles.buttonContainer}>
        <TouchableOpacity    
            style={styles.button}                        
            accessible = {true}
            accessibilityLabel = "Return to Filter Cards"
            accessibilityHint="Click here to learn more."
            accessibilityRole="imagebutton" 
            onPress= {() => {
                setOnPress(9)
            }}>
            <Text style={styles.buttonText}>Return</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
      buttonContainer: {
        alignItems: "center",
        marginHorizontal: 20,
        },
        button: {
            alignItems: "center",
            justifyContent: 'center',
            width: 150,
            height: 50,
            elevation: 8,
            backgroundColor: Colors.OffWhite.color,
        },
        buttonText: {
            fontSize: 20,
            color: Colors.Red.color,
            textShadowColor: 'black',
            textShadowRadius: 1,
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase"
        }
  })
