import React from 'react';

import MapView, { Marker } from 'react-native-maps';

import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

import Colors from '../../constants/Colors';

export default function ShowMap(props: any){

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
                    returnMapMarker()
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
