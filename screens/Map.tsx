import React, { useState } from 'react';

import ShowMap from '../components/ListComponents/ShowMap';

import * as Location from 'expo-location';

export default function Map(props: any) {
    //console.log(Object.keys(props))
    const [mapRegion, setRegion] = useState({
        latitude: 47.699829,
        longitude: -122.334801,
        latitudeDelta: 0.15,
        longitudeDelta: 0.1,
    });

    function zoomIn(){
        setRegion({
            latitude: 47.699829,
            longitude: -122.334801,
            latitudeDelta: mapRegion.latitudeDelta - 0.05,
            longitudeDelta: mapRegion.longitudeDelta - 0.05})
        //alert("Hello")
    }

    function zoomOut(){
        mapRegion.latitudeDelta =  mapRegion.latitudeDelta + 0.05
        mapRegion.longitudeDelta =  mapRegion.longitudeDelta + 0.05
    }

    return(
        <ShowMap 
            navigation={props.navigation}
            mapOfPrograms={props.mapOfPrograms}
            programs={props.programs}
            mapRegion={mapRegion}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            setRegion={setRegion}/>
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

    /*
            setRegion({
            latitude: mapRegion.latitude,
            longitude: mapRegion.longitude,
            latitudeDelta: (mapRegion.latitudeDelta - 0.05),
            longitudeDelta: (mapRegion.longitudeDelta - 0.05),
        })*/