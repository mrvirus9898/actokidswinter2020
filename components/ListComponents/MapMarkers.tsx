import React from 'react';

import { Marker, Callout } from 'react-native-maps';

import Colors from '../../constants/Colors';

import { Ionicons } from '@expo/vector-icons';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

export default function MapMarkers(props: any){
    //console.log(Object.keys(props.mapOfPrograms))
    console.log(props.mapOfPrograms[0])
    return(
        props.mapOfPrograms.map((data, key) => (
        <Marker 
            key={key}
            coordinate={data.coordinates}
            flat={true}>
                <Callout 
                    onPress={() => {props.navigation.navigate('MapProgramDetailsScreen', {item: props.programs[data.program_id]});}}>
                    <View style={styles.container}>
                        <Text>
                            {data.title}
                        </Text>
                        <Text>
                            {data.description}
                        </Text>
                    </View>
                </Callout>
            </Marker>  
        ))
    )
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 6,
    },
});
//props.navigation.navigate('ActivityProgramDetailsScreen', {item: data});
  /*<TouchableOpacity 
                  accessible = {true}
                  accessibilityLabel = {data.activity}
                  accessibilityHint="Click here to learn more."
                  accessibilityRole="imagebutton" 
                  onPress= {() => {
                    alert("Hello");
                  }}>
                    <Image 
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'}} />
                </TouchableOpacity>*/

//<TabBarIcon name="md-rocket" color={Colors.Red.color} />