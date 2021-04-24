import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';

import Colors from '../constants/Colors';

export default function Map(props: any) {

    type coordinates = {
        latitude: number;
        longitude: number;
    };

    type programLocation = {
        title: string;
        key: number;
        coordinates: coordinates;
        description: string;
    };

    const [programCoordinates, setProgramCoordinates] = useState([]);

    useEffect(() => {
        //console.log(props.programs);
        let tempLocations = [];
        let count = 0;
        props.programs.forEach(program => {
            //console.log(element)
            let tempCoord: coordinates = {
                //turns out you can convert string to number by using the plus sign
                //One Free ¯\_(ツ)_/¯
                latitude: +program.lat,
                longitude: +program.long,
            }
            let tempProLocation: programLocation = {
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


    const [mapRegion, setRegion] = useState({
        latitude: 47.699829,
        longitude: -122.334801,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const returnMapMarker = () => {
        return(
            programCoordinates.map((data, key) => (
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

    function applyFilter(){
        let output: Array<any> = []
    
        //console.log("Current Filter: " + filter)
        if(props.searchTerm != ""){
          props.programs.forEach(program => {
            if(props.searchTerm === program.Program_Name){
              console.log("Target Found")
              output.push(program)
            }
          });
          return(output)
        }else{
          return props.programs
        }
      }


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
        let tempCoordinates = [];
        ProgramInformation.Programs.forEach(element => {
            //console.log(element)
            let tempArray =[];
            let coordinates = [element.lat, element.long]
            tempArray.push(element.Program_Name)   
            tempArray.push(coordinates)   
            tempCoordinates.push(tempArray)      
        });
        console.log(tempCoordinates) 
        
            const [thesecoordinates, setCoord] = useState([
        {   title: 'North Seattle College',
            key: 0,
            coordinates: {
                latitude: 47.699829, 
                longitude: -122.334801
            },
        },
        {   title: 'The Home Depot',
            key: 1,
            coordinates: {
                latitude: 47.714050, 
                longitude: -122.342903 
            },
        },
        {   title: 'UW Medical', 
            key: 2,
            coordinates: {
                latitude: 47.714130, 
                longitude: -122.336998 
            },
        }
    ]);*/