import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Dimensions, TouchableOpacity } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Colors from '../../constants/Colors';

import FilterPhysicalActivity from './FilterPhysicalActivity'
import FilterCompetitiveStructure from './FilterCompetitiveStructure'
import FilterPhysicalIntensity from './FilterPhysicalIntensity'
import FilterSkillLevel from './FilterSkillLevel'
import FilterCompetitiveScale from './FilterCompetitiveScale'
import FilterCostAndTravel from './FilterCostsAndTravel'
import FilterCertifications from './FilterCertifications'
import FilterAccessibility from './FilterAccessibility'
import FilterLanguageOptions from './FilterLanguageOptions'

export default function FilterCards(props: any) {
    //console.log("Props at Filter Cards: " + Object.keys(props))
    let windowHeight = (useWindowDimensions().height); 
    let windowWidth = (useWindowDimensions().width); 

    const [carouselIndex, setCarouselIndex] = React.useState(0)
    const [savePIKey, setPIKey] = React.useState(1)
    const [saveSLKey, setSLKey] = React.useState(1)
    const [saveCSKey, setCSKey] = React.useState(1)

    
    let optionsArray = [
        {   title: 'Physical Activity',
            key: 0,
            route: 'FilterPhysicalActivity',
            url: "https://images.indianexpress.com/2019/12/child-physical-activity.jpg"
        },
        {   title: 'Physical Intensity', 
            key: 1,
            route: 'FilterPhysicalIntensity',
            url: "https://ptproductsonline.com/wp-content/uploads/2020/09/IncreaseIntensity.jpg"
        },
        {   title: 'Competitiveness',
            key: 2,
            route: 'FilterCompetitiveStructure',
            url: "https://static.parenting.com/wp-content/uploads/2010/12/18163927/kids-baseball-1-1200x720.jpg"
        },
        {   title: 'Skill Level', 
            key: 3,
            route: 'FilterSkillLevel',
            url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
        },
        {   title: 'Competitive Skill', 
            key: 4,
            route: 'FilterCompetitiveScale',
            url: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_600/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/tacoma/Sunrise_from_Mt_Fremont_623d1268-39d7-4d41-a383-fc543ca3eb9e.jpg"
        },
        {   title: 'Certifications', 
            key: 5,
            route: 'FilterCertifications',
            url: "https://incowrimo.org/wp-content/uploads/2013/01/How-to-Write-a-Letter.jpg"
        },
        {   title: 'Accessibility', 
            key: 6,
            route: 'FilterAccessibility',
            url: "https://incowrimo.org/wp-content/uploads/2013/01/How-to-Write-a-Letter.jpg"
        },
        {   title: 'Language Options', 
            key: 7,
            route: 'FilterLanguageOptions',
            url: "https://i2.wp.com/www.positiveparentingconnection.net/wp-content/uploads/2013/09/questions-for-kids-6.png?fit=560%2C315&ssl=1"
        },
        {   title: 'Cost', 
            key: 8,
            route: 'FilterCostsAndTravel',
            url: "https://lh3.googleusercontent.com/proxy/CPEKhsNlyTWYDfOD_X9NNIIlvrLloH6pvCAgubDrP53zZdXHdjqx13c_DeukMoNXI-KWteSnjfqx3oub0kpkrJKyTqtGLzVXrGH-P6kao7bahqwc8cEwQlq1GLHm2O8D8cS8M1iHaVUj-aSr1Xg"
        }
        ];

        
    function renderCarouselItem({item, index}){

        switch(index){
            case 0:{
                return renderPhysicalActivityComponent()
            }
            case 1:{
                return renderPhysicalIntensity()
            }
            case 2:{
                return renderCompetitiveStructure()
            }
            case 3:{
                return renderSkillLevel()
            }
            case 4:{
                return renderCompetitiveScale()
            }
            case 5:{
                return renderCertifcationComponent()
            }
            case 6:{
                return renderAccessibilityComponent()
            }
            case 7:{
                return renderLanguageComponent()
            }
            case 8:{
                return renderCosts()
            }
            default:{
                return (null)
            }
        }
    }

    function renderPhysicalActivityComponent(){
        return(
            <FilterPhysicalActivity 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setPRR={props.setPRR}
                PRR={props.PRR}/>
        )
    }

    function renderCompetitiveStructure(){
        return(
            <FilterCompetitiveStructure 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}/>
        )
    }

    function renderPhysicalIntensity(){
        return(
            <FilterPhysicalIntensity 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}
                savePIKey={savePIKey}
                setPIKey={setPIKey}/>
        )
    }

    function renderSkillLevel(){
        return(
            <FilterSkillLevel 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}
                saveSLKey={saveSLKey}
                setSLKey={setSLKey}/>
        )
    }

    function renderCompetitiveScale(){
        return(
            <FilterCompetitiveScale 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}
                saveCSKey={saveCSKey}
                setCSKey={setCSKey}/>
        )
    }

    function renderCosts(){
        return(
            <FilterCostAndTravel 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}/>
        )
    }
    
    function renderCertifcationComponent(){
        return(
            <FilterCertifications 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}/>
        )
    }

    function renderAccessibilityComponent(){
        return(
            <FilterAccessibility 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}/>
        )
    }

    function renderLanguageComponent(){
        return(
            <FilterLanguageOptions 
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setOptionSelect={props.setOptionSelect}/>
        )
    }

    return(
        <View style={styles.filterCarouselWrapper}>
            <Carousel 
                layout={'default'}
                ref={ref => true}
                data={optionsArray}
                sliderWidth={windowWidth}
                itemWidth={windowWidth * 0.8}
                sliderHeight={windowHeight * (3/5)}
                renderItem={renderCarouselItem}
                onSnapToItem={index => setCarouselIndex(index)} />
            <View style={{flex: 2, flexDirection: 'row', padding: 10}}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity    
                        style={styles.button}                        
                        accessible = {true}
                        accessibilityLabel = "Return to Filter Cards"
                        accessibilityHint="Click here to learn more."
                        accessibilityRole="imagebutton" 
                        onPress= {() => {
                            props.modifyCurrentSelections("Clear")
                            props.navigation.goBack();
                            //alert("Hello")
                        }}>
                        <Text style={styles.buttonText}>Clear</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity    
                        style={styles.button}                        
                        accessible = {true}
                        accessibilityLabel = "Return to Filter Cards"
                        accessibilityHint="Click here to learn more."
                        accessibilityRole="imagebutton" 
                        onPress= {() => {
                            props.setPRR(!props.PRR)
                            props.navigation.goBack();
                            //alert("Hello")
                        }}>
                        <Text style={styles.buttonText}>Return</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    filterCarouselWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10
    },
    buttonContainer: {
        alignItems: "center",
        marginHorizontal: 10,
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
    },

});

/*


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
           // console.log(item)
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
    

*/