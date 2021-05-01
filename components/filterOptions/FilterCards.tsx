import React from 'react';
import { StyleSheet, Text, View, FlatList, useWindowDimensions, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';



export default function FilterCards(props: any) {
    console.log(useWindowDimensions().height)
    //let imageHeight = (useWindowDimensions().height) / 4; 
    //let imageWidth = (useWindowDimensions().width) / 3; 

    
    let optionsArray = [
        {   title: 'Physical Activity',
            key: 0,
            route: 'FilterPhysicalActivity',
            url: "https://images.indianexpress.com/2019/12/child-physical-activity.jpg"
        },
        {   title: 'Competitiveness',
            key: 1,
            route: 'FilterCompetitiveStructure',
            url: "https://static.parenting.com/wp-content/uploads/2010/12/18163927/kids-baseball-1-1200x720.jpg"
        },
        {   title: 'Physical Intensity', 
            key: 2,
            route: 'FilterPhysicalIntensity',
            url: "https://ptproductsonline.com/wp-content/uploads/2020/09/IncreaseIntensity.jpg"
        },
        {   title: 'Skill Level', 
            key: 3,
            route: 'FilterSkillLevel',
            url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
        },
        {   title: 'Certifications', 
            key: 4,
            route: 'FilterCertifications',
            url: "https://incowrimo.org/wp-content/uploads/2013/01/How-to-Write-a-Letter.jpg"
        },
        {   title: 'Cost', 
            key: 5,
            route: 'FilterCostsAndTravel',
            url: "https://lh3.googleusercontent.com/proxy/CPEKhsNlyTWYDfOD_X9NNIIlvrLloH6pvCAgubDrP53zZdXHdjqx13c_DeukMoNXI-KWteSnjfqx3oub0kpkrJKyTqtGLzVXrGH-P6kao7bahqwc8cEwQlq1GLHm2O8D8cS8M1iHaVUj-aSr1Xg"
        },
        {   title: 'Language Options', 
            key: 6,
            route: 'FilterLanguageOptions',
            url: "https://i2.wp.com/www.positiveparentingconnection.net/wp-content/uploads/2013/09/questions-for-kids-6.png?fit=560%2C315&ssl=1"
        },
        {   title: 'Payment Options', 
            key: 7,
            route: 'FilterPaymentOptions',
            url: "https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2019/05/Lemonade-stand-800x450.jpg"
        }
        ];

        function renderFlatlistOfCards(){
            return(
                <FlatList 
                    style={styles.listContainer}
                    data={optionsArray} 
                    renderItem={renderCardItems} 
                    numColumns={2}>
              </FlatList>
            )
        }

        function renderCardItems({item}){
            //console.log(navigation)
             return(
                 <View >
                     <TouchableOpacity 
                         
                         accessible = {true}
                         accessibilityLabel = {item.title}
                         accessibilityHint="Click here to learn more."
                         accessibilityRole="imagebutton" 
                         onPress= {() => {
                             props.setOptionSelect(item.key);
                             //alert("Hello")
                     }}>
                        <View style={styles.filterImageWrapper}>
                            <View style={styles.item}>
                                <ImageBackground 
                                    style={styles.imageDimensions}        
                                    source={{uri: item.url}}>
                                    <Text style={styles.categoryText}>
                                        {item.title}
                                    </Text> 
                                </ImageBackground> 
                
                            </View>
                        </View>
                     </TouchableOpacity>
                 </View>
     
             )
         }
    

    return(
        renderFlatlistOfCards()
    )

}


const styles = StyleSheet.create({
    categoryText: {
        fontFamily: 'serif',
        fontSize: 18,
        color: Colors.OffWhite.color,
        textShadowColor: 'black',
        textShadowRadius: 15,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    filterImageWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 5), 
        width: (Dimensions.get('window').width / 2), 
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 5),
        width: (Dimensions.get('window').width / 2), 
      },
      itemText: {
        color: '#fff',
      },
      imageDimensions: {
        height: (Dimensions.get('window').height / 5),
        width: (Dimensions.get('window').width / 2), 
      },
      listContainer: {
        flex: 1,
        padding: 10
    },

});

/*
            <View style={styles.filterImageWrapper}>
                <Image 
                    style={{width: imageHeight, height: imageHeight}}        
                    source={{uri: item.url}}/> 
            </View>
            <View style={{width: imageHeight, height: imageHeight}}>
                <Text style={styles.categoryText}>
                    {item.category}
                </Text> 
            </View>   

                                  <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>

*/