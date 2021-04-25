import React, { useState } from 'react';

import ShowMap from '../components/ListComponents/ShowMap';

import * as Location from 'expo-location';

export default function Map(props: any) {
    const [mapRegion, setRegion] = useState({
        latitude: 47.699829,
        longitude: -122.334801,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    return(
        <ShowMap 
            mapOfPrograms={props.mapOfPrograms}
            mapRegion={mapRegion}/>
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