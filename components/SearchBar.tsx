import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SearchBarComponent(props: any) {
    const [tempString, SetTemp] = React.useState("")
    const [iconSelection, setIcon] = React.useState(true)

    function updateSearchTerm(input: string){
        SetTemp(input)
    }

    function whenUpdated(){   
        props.setTerm(tempString)
    }

    if(iconSelection){
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        setIcon(false);
                    }}>
                <HeaderIcon 
                    name={"search-outline"} 
                    color={Colors.OffWhite.color}/>
                </TouchableOpacity>
            </View>
        );
    }else{
        return(
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={"Enter Search Term Here"}
                    onChangeText={updateSearchTerm}
                    onSubmitEditing={whenUpdated}
                    value={tempString} />
            </View>
        );
    }

}

function HeaderIcon(props: { name: string; color: string }) {
    return <Ionicons 
            size={30} 
            style={{ marginBottom: -3 }} 
            {...props} />;
  }

const styles = StyleSheet.create({
    input: {
        flex: 1,
        width: '80%',
        borderWidth: 0.5,
        color: Colors.OffWhite.color
    }

});
