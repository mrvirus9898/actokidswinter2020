import React from 'react';

import MapView, { Marker } from 'react-native-maps';


import { AntDesign } from '@expo/vector-icons';

import {
    StyleSheet,
    View,
    Dimensions,
    Pressable
} from 'react-native';

import MapMarkers from '../ListComponents/MapMarkers';

import Colors from '../../constants/Colors';

export default function ShowMap(props: any){

    const returnMapMarker = () => {
        return(
           <MapMarkers mapOfPrograms={props.mapOfPrograms}/>
        )
    }

    return(
        <View style={styles.container}>
            <MapView style={styles.mapStyle}
                showsUserLocation
                zoomControlEnabled={true}
                initialRegion={{
                    latitude: props.mapRegion.latitude,
                    longitude: props.mapRegion.longitude,
                    latitudeDelta: props.mapRegion.latitudeDelta,
                    longitudeDelta: props.mapRegion.longitudeDelta}}>
                {
                    <MapMarkers
                        navigation={props.navigation} 
                        mapOfPrograms={props.mapOfPrograms}
                        programs={props.programs}/>
                }

            </MapView>
            <Pressable
                style={styles.zoomInIconWrapper}
                onPress={() => {
                    //alert("Filter has been cleared")
                    props.zoomIn()
                }}>
                <AntDesign name="pluscircle" size={30} color={'black'} />
            </Pressable>
            <Pressable
                style={styles.zoomOutIconWrapper}
                onPress={() => {
                    //alert("Filter has been cleared")
                    props.zoomOut()
                }}>
                <AntDesign name="minuscircle" size={30} color={'black'} />
            </Pressable>
        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    zoomInIconWrapper: {
        position: 'absolute',
        top: '80%',
        left: '85%',
        alignSelf: 'flex-end'
      },
      zoomOutIconWrapper: {
        position: 'absolute',
        top: '90%',
        left: '85%',
        alignSelf: 'flex-end'
      },    
});

/*
            <Pressable
                style={styles.cancelButton}
                onPress={() => {
                    alert("Filter has been cleared")
                }}>
                <View style={styles.zoomInIconWrapper}>
                        <AntDesign name="pluscircle" size={30} color={'black'} />
                </View>
            </Pressable>
            */


/*
            <TouchableOpacity                          
                accessible = {true}
                accessibilityLabel = {item.title}
                accessibilityHint="Click here to learn more."
                accessibilityRole="imagebutton" 
                onPress= {() => {
                    modifySelectionOrGoBack(item)
                    //alert("Hello")
            }}>
                {renderFilterItemOnOrOff(item)}
            </TouchableOpacity>
*/