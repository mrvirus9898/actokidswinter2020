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

let tileSize = (Dimensions.get("window").height / 5) 

export default function FilterRootCards({navigation}) {



    let optionsArray = [
    {   title: 'Physical Activity',
        key: 0,
        route: 'FilterAccessOptions',
        url: "https://images.indianexpress.com/2019/12/child-physical-activity.jpg"
    },
    {   title: 'Competitiveness',
        key: 1,
        route: 'FilterAgesGrades',
        url: "https://static.parenting.com/wp-content/uploads/2010/12/18163927/kids-baseball-1-1200x720.jpg"
    },
    {   title: 'Physical Intensity', 
        key: 2,
        route: 'FilterTeamSports',
        url: "https://ptproductsonline.com/wp-content/uploads/2020/09/IncreaseIntensity.jpg"
    },
    {   title: 'Skill Level', 
        key: 3,
        route: 'FilterIndividualSports',
        url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
    },
    {   title: 'Certifications', 
        key: 4,
        route: 'FilterIndoorPrograms',
        url: "https://incowrimo.org/wp-content/uploads/2013/01/How-to-Write-a-Letter.jpg"
    },
    {   title: 'Cost', 
        key: 5,
        route: 'FilterOutdoorPrograms',
        url: "https://lh3.googleusercontent.com/proxy/CPEKhsNlyTWYDfOD_X9NNIIlvrLloH6pvCAgubDrP53zZdXHdjqx13c_DeukMoNXI-KWteSnjfqx3oub0kpkrJKyTqtGLzVXrGH-P6kao7bahqwc8cEwQlq1GLHm2O8D8cS8M1iHaVUj-aSr1Xg"
    },
    {   title: 'Language Options', 
        key: 6,
        route: 'FilterLanguageOptions',
        url: "https://i2.wp.com/www.positiveparentingconnection.net/wp-content/uploads/2013/09/questions-for-kids-6.png?fit=560%2C315&ssl=1"
    },
    {   title: 'Payment Options', 
        key: 7,
        route: 'FilterCostsAndTravel',
        url: "https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2019/05/Lemonade-stand-800x450.jpg"
    }
    ];

    function renderItem({item}){
       //console.log(navigation)
        return(
            <View >
                <TouchableOpacity 
                    
                    accessible = {true}
                    accessibilityLabel = {item.title}
                    accessibilityHint="Click here to learn more."
                    accessibilityRole="imagebutton" 
                    onPress= {() => {
                        navigation.navigate(item.route);
                }}>
                      <FilterCards 
                    category={item.title}
                    url={item.url}/>
                </TouchableOpacity>
            </View>

        )
    }

    return(
      <FlatList 
        style={styles.listContainer}
        data={optionsArray} 
        renderItem={renderItem} 
        numColumns={2}>

      </FlatList>
    )
}


const styles = StyleSheet.create({
    filterCardContainer: {
        flex: 1/2,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        backgroundColor: Colors.Red.color,
        height: tileSize,
        borderWidth: 5,
    },
    listContainer: {
        flex: 1,
        padding: 10
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 5), // approximate a square
        width: (Dimensions.get('window').width / 2), // approximate a square
      },
      itemText: {
        color: '#fff',
      },
});

/*
<FilterCards 
                    category={item.title}
                    url={item.url}/>

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