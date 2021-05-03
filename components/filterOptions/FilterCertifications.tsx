/*
NICK BENNETT
ACTOKIDS

*/


import React from 'react';

import { StyleSheet, Text,TouchableOpacity,
    FlatList, View, Dimensions, ImageBackground } from 'react-native';
    
import Colors from '../../constants/Colors';

export default function FilterCertifications(props: any) {
    //console.log(props.currentSelections)

    let optionsArray = [
        {   title: 'First Aid/CPR',
            key: 0,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRX93kDFUwThY3VKd7qVIBK3i1dwLESG_GA&usqp=CAU"
        },
        {   title: 'Concussion Protocols',
            key: 1,
            url: "https://cdn.theatlantic.com/assets/media/img/posts/2013/12/phrenoscalp_650/576d30f5a.jpg"
        },
        {   title: 'Safe Sport', 
            key: 2,
            url: "https://www.madisoncounty.ny.gov/ImageRepository/Document?documentId=1074"
        },
        {   title: 'Adaptive Sport', 
            key: 3,
            url: "https://images.squarespace-cdn.com/content/v1/54681802e4b060bcca856e53/1566320414439-1YULZMLUBBZ7XDEJZ0JH/ke17ZwdGBToddI8pDm48kGPVK--wGoWXJsqwlxbZlQN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5enfxu_O4VeONvneR-F6W8oeFhFqSrYyNrfPB9Y70_gvQ/20190623_JR_0824.jpg"
        },
        {   title: 'Social Emotional Learning', 
            key: 4,
            url: "https://s18670.pcdn.co/wp-content/uploads/Smiley-face-on-sticky-note.jpg"
        },
        {   title: 'Youth w/ Disabilities', 
            key: 5,
            url: "https://mma.prnewswire.com/media/1098113/Easter_Seals_Ontario_Accessibility___Inclusion_and_Belonging_for.jpg?p=publish&w=950"
        },
        {   title: 'Paid Coaches', 
            key: 6,
            url: "https://amaymca.org/wp-content/uploads/2018/07/ymca-coach-n-players.jpg"
        },
        {   title: 'Volunteer Coaches', 
            key: 7,
            url: "https://d21gd0ap5v1ndt.cloudfront.net/web04/img.php?src=/images/2013-14/photo_1.jpg&site=swedes&crop"
        }
        ];


    function renderCertList(){
        return(
            <FlatList 
                style={styles.listContainer}
                data={optionsArray} 
                renderItem={renderCertItems} 
                numColumns={2}>
            </FlatList>
        )
    }

    function renderCertItems({item}){
        return(
            <View style={styles.filterImageWrapper}>
            <TouchableOpacity 
                accessible = {true}
                accessibilityLabel = {item.title}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                    props.modifyCurrentSelections(item.title)
                }}>
                    <View style={styles.item}>
                    <ImageBackground 
                            style={styles.imageDimensions}        
                            source={{uri: item.url}}>
                            <Text style={styles.categoryText}>
                                {item.title}
                            </Text> 
                    </ImageBackground> 
                    </View>
            </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={{flex: 1}}>
            <Text style={styles.upperLabelText}>Certifications</Text>
            {renderCertList()}
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
        height: (Dimensions.get('window').height / 7), 
        width: (Dimensions.get('window').width / 3), 
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: (Dimensions.get('window').height / 7),
        width: (Dimensions.get('window').width / 3), 
    },
    itemText: {
        color: '#fff',
    },
    imageDimensions: {
        height: (Dimensions.get('window').height / 7),
        width: (Dimensions.get('window').width / 3), 
    },
    listContainer: {
        flex: 1,
        padding: 10
    },
    upperLabelText: {
        fontFamily: 'serif',
        fontSize: 18,
        color: Colors.Blue.color,
        textShadowColor: 'black',
        textShadowRadius: 15,
        justifyContent: 'center',
        fontWeight: 'bold',
        marginHorizontal: 20
    }
});