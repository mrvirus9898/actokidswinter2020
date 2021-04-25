import { Marker } from 'react-native-maps';

import Colors from '../../constants/Colors';

export default function ShowMap(props: any){

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