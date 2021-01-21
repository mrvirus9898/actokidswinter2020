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
  TouchableNativeFeedbackBase,
  Button
} from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';
import loadProgramInformation from '../hooks/loadProgramInformation';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';

//import ShowPrograms from '../components/ListComponents/ShowPrograms';
const Drawer = createDrawerNavigator();

export default function ProgramList({navigation}) {
    return (
        <NavigationContainer independent={true}>
          <Drawer.Navigator initialRouteName="Programs">
            <Drawer.Screen name="Programs" component={ProgramComponents} />
            <Drawer.Screen name="Sign In" component={LoginSignupComponents} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    
}

function ProgramComponents({ navigation }) {
    const [programs, setPrograms] = useState<Array<Array<any>>>([]);

    //console.log(navigation);

    if(programs.length == 0){
        
        const incomingData = loadProgramInformation().then(function(result)
        {
            setPrograms(result);
        })
        return(null);        
    }else{
        //console.log(Object.keys(programs[0]));
        console.log(programs[0].Program_Name);
        return(
            <View>
                <ShowPrograms programs={programs} navigation={navigation}/>
            </View>
        );
    }
  }

function LoginSignupComponents({ navigation }) {
    return (
      <AppLogin />
    );
  }

//<Text>Program List Top {programs[0].Program_Name} </Text>