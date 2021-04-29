import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ActivityCards(category: any) {
    console.log(category.category)

    return(
        <View>
            <Text style={styles.categoryText}>
                {category.category}
            </Text>
        </View>

    )

}


const styles = StyleSheet.create({
    categoryText: {
        fontFamily: 'serif',
        fontSize: 18,
        color: 'black'
    }
});

/*            */