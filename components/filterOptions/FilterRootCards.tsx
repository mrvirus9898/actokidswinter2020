/*
NICK BENNETT
ACTOKIDS

FIlter by Root Cards for the filter options
*/



import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

export default function FilterRootCards() {
    let demoArray = ['Criteria 1', 'Criteria 2', 'Criteria 3', 'Criteria 4', 'Criteria 5', 'Criteria 6', 'Criteria 7', 'Criteria 8']
    let screenWidth = Dimensions.get("window").width;
    let cols = 3;
    let tileSize = screenWidth / cols

    function renderItem({item}){
        return(
            <View style={{height: tileSize, width: tileSize, backgroundColor: 'powderblue', flex: 1/2}}>
                <Card>
                    <Text style={styles.paragraph}>{item}</Text>
                </Card>
            </View>

        )
    }

    return(
      <FlatList data={demoArray} renderItem={renderItem} numColumns={2}>

      </FlatList>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FF5733',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
      },
    filterRootCardStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    colorDemo:{
        width: 50, 
        height: 50, 
        backgroundColor: 'powderblue'
    }

});

/*
            <Card>
                <Text style={styles.paragraph}>Criteria 1</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 2</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 3</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 4</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 5</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 6</Text>
            </Card>
            <Card>
                <Text style={styles.paragraph}>Criteria 7</Text>
            </Card>
                  // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={styles.filterRootCardStyle}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      </View>
*/