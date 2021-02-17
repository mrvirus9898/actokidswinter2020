import React, { useState, useEffect } from 'react';
import { View} from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';
import FilterButton from '../components/FilterButton';

import loadProgramInformation from '../hooks/loadProgramInformation';
import useColorScheme from '../hooks/useColorScheme';

import ProgramDetails from '../screens/ProgramDetails';
import ActivityList from '../screens/ActivityList';
import Map from '../screens/Map';
import FilterPage from '../screens/FilterPage';

import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabParamList, ProgramParamList, ActivityParamList, MapParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function ProgramList() {
  const colorScheme = useColorScheme();



  return (
    <BottomTab.Navigator
      initialRouteName="Programs"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Programs"
        component={ProgramListNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-rocket" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Activities"
        component={ActivityListNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-american-football" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-map" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function ProgramComponents({ navigation }) {
    const [programs, setPrograms] = useState<Array<Array<any>>>([]);

    useEffect(() => {
      const incomingData = loadProgramInformation().then(function(result)
          {
              setPrograms(result);
          })
      }, [])

    //console.log(navigation);

    //console.log(Object.keys(programs[0]));
    //console.log(programs[0].Program_Name);
    return(
        <View>
            <ShowPrograms programs={programs} navigation={navigation}/>
        </View>
    );
  }


  // You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const ProgramListStack = createStackNavigator<ProgramParamList>();

function ProgramListNavigator() {
  return (
    <ProgramListStack.Navigator>
      <ProgramListStack.Screen
        name="ProgramListScreen"
        component={ProgramComponents}
        options={{ 
          headerTitle: 'Program List',
          headerRight: () => (<FilterButton />)
      }}/>
      <ProgramListStack.Screen
        name="ProgramDetailsScreen"
        component={ProgramDetails}
        options={{ headerTitle: 'Program Details' }}
      />
      <ProgramListStack.Screen
        name="ProgramFilterScreen"
        component={FilterPage}
        options={{ headerTitle: 'Filter' }}
      />      
    </ProgramListStack.Navigator>
  );
}

const ActivityListStack = createStackNavigator<ActivityParamList>();

function ActivityListNavigator() {
  return (
    <ActivityListStack.Navigator>
      <ActivityListStack.Screen
        name="ActivityListScreen"
        component={ActivityList}
        options={{ headerTitle: 'Activity List' }}
      />
    </ActivityListStack.Navigator>
  );
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={Map}
        options={{ headerTitle: 'Map' }}
      />
    </MapStack.Navigator>
  );
}

//<Text>Program List Top {programs[0].Program_Name} </Text>

/*
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

*/