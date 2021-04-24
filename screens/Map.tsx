import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';

import Colors from '../constants/Colors';

import {ProgramLocation, Coordinates} from '../types';

export default function Map(props: any) {
    const [mapRegion, setRegion] = useState({
        latitude: 47.699829,
        longitude: -122.334801,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const returnMapMarker = () => {
        return(
            props.mapOfPrograms.map((data, key) => (
            <Marker 
                key={key}
                coordinate={data.coordinates}
                title={data.title}
                description={data.description}
                pinColor={Colors.Red.color}
                opacity={0.9} 
                flat={true}
                onPress={() => alert("Hello")}/>  
            ))
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
    });

    return(
        <View style={styles.container}>
            <MapView style={styles.mapStyle}
                showsUserLocation
                initialRegion={{
                    latitude: mapRegion.latitude,
                    longitude: mapRegion.longitude,
                    latitudeDelta: mapRegion.latitudeDelta,
                    longitudeDelta: mapRegion.longitudeDelta}}>
                {
                    returnMapMarker()
                }
            </MapView>
        </View>
    );

    async function getCurrentLocation(){
        let currentLocation = await Location.getCurrentPositionAsync({});
        return currentLocation
    }
}

/*
    const [programCoordinates, setProgramCoordinates] = useState([]);
    useEffect(() => {
        //console.log(props.programs);
        let tempLocations: any = [];
        let count = 0;
        props.programs.forEach(program => {
            //console.log(element)
            let tempCoord: Coordinates = {
                //turns out you can convert string to number by using the plus sign
                //One Free ¯\_(ツ)_/¯
                latitude: +program.lat,
                longitude: +program.long,
            }
            let tempProLocation: ProgramLocation = {
                title: program.Program_Name,
                key: count,
                coordinates: tempCoord,
                description: program.Program_Types
            }
            count++
            if((tempProLocation.title === props.searchTerm) || (props.searchTerm === '')){
                tempLocations.push(tempProLocation)
           }
        });
        //console.log(tempLocations);
        setProgramCoordinates(tempLocations);
        return () => {
            
        }
    }, [])
    
    */