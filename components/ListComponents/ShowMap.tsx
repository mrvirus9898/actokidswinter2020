import React from 'react';

import MapView from 'react-native-maps';

import * as Permission from 'expo-permissions'

import { Marker, Callout } from 'react-native-maps';

import { AntDesign } from '@expo/vector-icons';

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Pressable
} from 'react-native';

import MapMarkers from '../ListComponents/MapMarkers';

import Colors from '../../constants/Colors';

export default function ShowMap(props: any){

    const mapReference = React.useRef(null);

    const { status } = askAnsyncPermission()
    const demoUserLocation = {latitude: 47.704110, longitude: -122.332080}

    const [currentMapRegion, setCurrentRegion] = React.useState({
        latitude: props.mapRegion.latitude,
        longitude: props.mapRegion.longitude,
        latitudeDelta: props.mapRegion.latitudeDelta,
        longitudeDelta: props.mapRegion.longitudeDelta,
    });

    const [currentMapZoom, setCurrentZoom] = React.useState(13);

    function displayCurrentRegion(region: any){
        setCurrentRegion(region)
    }

    async function askAnsyncPermission() {
        return await Permission.askAsync(Permission.LOCATION)
    }

    return(
        <View style={styles.container}>
            <MapView style={styles.mapStyle}
                showsUserLocation={true}
                ref={mapReference}
                zoomControlEnabled={true}
                onRegionChange={region => displayCurrentRegion(region)}
                initialRegion={{
                    latitude: props.mapRegion.latitude,
                    longitude: props.mapRegion.longitude,
                    latitudeDelta: props.mapRegion.latitudeDelta,
                    longitudeDelta: props.mapRegion.longitudeDelta}}
                onRegionChangeComplete={region => props.setRegion(region)}>
                <Marker
                    coordinate={demoUserLocation}
                    flat={true}
                    pinColor={"blue"}
                    tracksViewChanges={false}>
                    <Callout 
                        onPress={() => console.log("Your Location Pressed")}>
                        <View style={styles.markerContainer}>
                            <Text>
                                {"Your Current Location"}
                            </Text>
                        </View>
                    </Callout>
                </Marker>
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

                    //Why yes
                    //You -MUST- change the zoom, AND THEN UPDATE THE CURRENT ZOOM
                    //because REASONS, and One Free Shrug

                    mapReference.current.animateCamera(
                        {
                          center: {
                            latitude: currentMapRegion.latitude,
                            longitude: currentMapRegion.longitude
                          },
                          zoom: (currentMapZoom + 1)
                        },
                        1
                      );
                      setCurrentZoom(currentMapZoom + 1)
                }}>
                <AntDesign name="pluscircle" size={30} color={'black'} />
            </Pressable>
            <Pressable
                style={styles.zoomOutIconWrapper}
                onPress={() => {
                    mapReference.current.animateCamera(
                        {
                          center: {
                            latitude: currentMapRegion.latitude,
                            longitude: currentMapRegion.longitude
                          },
                          zoom: (currentMapZoom - 1)
                        },
                        1
                      );
                      setCurrentZoom(currentMapZoom - 1)
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
    markerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 6,
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