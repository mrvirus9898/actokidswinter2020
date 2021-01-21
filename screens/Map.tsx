import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default function Map() {

    const [coordinates, setCoord] = useState([
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
    ]);
    const [loadHook, setLoadHook] = useState(true);

    const [mapRegion, setRegion] = useState({
        latitude: 47.699829,
        longitude: -122.334801,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const returnMapMarker = () => {
        load()
        return(
            coordinates.map((data, key) => (
            <Marker 
                key={key}
                coordinate={data.coordinates}
                title={data.title} />  
            ))
        )
    }

    //fetchData and load are empty for now, until we work more on the back end, and get more input
    

    const fetchData = async () => {

    }
    
    const load = async () => {

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
}
/*        */