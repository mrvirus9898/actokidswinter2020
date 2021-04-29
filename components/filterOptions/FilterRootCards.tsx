/*
NICK BENNETT
ACTOKIDS

FIlter by Root Cards for the filter options
*/



import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    TouchableHighlight, View, Image, FlatList, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';

import FilterCards from './FilterCards'

import Colors from '../../constants/Colors';

let tileSize = (Dimensions.get("window").width / 3) + (5/3)

export default function FilterRootCards({navigation}) {
    let optionsArray = [
    {   title: 'Physical Activity',
        key: 0,
        route: 'FilterAccessOptions'
    },
    {   title: 'Competitiveness',
        key: 1,
        route: 'FilterAgesGrades'
    },
    {   title: 'Physical Intensity', 
        key: 2,
        route: 'FilterTeamSports'
    },
    {   title: 'Skill Level', 
        key: 3,
        route: 'FilterIndividualSports'
    },
    {   title: 'Certifications', 
        key: 4,
        route: 'FilterIndoorPrograms'
    },
    {   title: 'Payment Options', 
        key: 5,
        route: 'FilterOutdoorPrograms'
    },
    {   title: 'Language Options', 
        key: 6,
        route: 'FilterLanguageOptions'
    },
    {   title: 'Cost and Travel', 
        key: 7,
        route: 'FilterCostsAndTravel'
    }
    ];

    function renderItem({item}){
       //console.log(navigation)
        return(
            <View style={styles.filterCardContainer}>
                <TouchableOpacity 
                    accessible = {true}
                    accessibilityLabel = {item.title}
                    accessibilityHint="Click here to learn more."
                    accessibilityRole="imagebutton" 
                    onPress= {() => {
                    navigation.navigate(item.route);
                }}>
                <FilterCards category={item.title}/>
                </TouchableOpacity>
            </View>

        )
    }

    return(
      <FlatList data={optionsArray} renderItem={renderItem} numColumns={2}>

      </FlatList>
    )
}


const styles = StyleSheet.create({
    filterCardContainer: {
        flex: 1/2,
        backgroundColor: Colors.OffWhite.color,
        height: tileSize,
        justifyContent: 'center',
        borderWidth: 5
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

                      <Card>
                    <Card.Title>{item.title}</Card.Title>
                </Card>
                
                */