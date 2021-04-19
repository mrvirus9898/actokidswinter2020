import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList,
  TouchableNativeFeedbackBase
} from 'react-native';

import {SearchBar} from 'react-native-elements';

import ShowActivities from '../components/ListComponents/ShowActivities';


export default function ProgramList() {

    const [searchTerm, SetSearchTerm] = useState(" ")

    return(
        <View style={{flex:1}}>      

            <ShowActivities />
        </View>
    );
}
//<AppLogin />
//<AppGoogleLogout />
/*
            <SearchBar
                placeholder="Search for an activity here"
                onChangeText={SetSearchTerm}
                value={searchTerm}/>*/