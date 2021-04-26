import React from 'react';

import MapView, { Marker } from 'react-native-maps';

import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity
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
});
