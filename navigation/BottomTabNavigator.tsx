import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import FilterButton from '../components/FilterButton';

import ProgramList from '../screens/ProgramList';
import ProgramDetails from '../screens/ProgramDetails';
import ActivityList from '../screens/ActivityList';
import Map from '../screens/Map';

import { BottomTabParamList, ProgramParamList, ActivityParamList, MapParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

let searchTerm = "";
let incomingData= "";

export default function BottomTabNavigator(props: any) {
  const colorScheme = useColorScheme();

  searchTerm = props.searchTerm
  incomingData = props.incomingData

  return (
      <BottomTab.Navigator
        initialRouteName="Programs"
        tabBarOptions={{ 
          activeTintColor: Colors[colorScheme].tint,
          activeBackgroundColor: Colors.Red.color,
          inactiveBackgroundColor: Colors.Red.color,
          labelStyle: {color: Colors.OffWhite.color}
        }}>
          <BottomTab.Screen
            name="Programs"
            component={ProgramListNavigator}
            options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="md-rocket" color={Colors.OffWhite.color} />,
            }}
            
          />
          <BottomTab.Screen
            name="Activities"
            component={ActivityListNavigator}
            options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="md-american-football" color={Colors.OffWhite.color} />,
            }}
          />
          <BottomTab.Screen
            name="Map"
            component={MapNavigator}
            options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="md-map" color={Colors.OffWhite.color} />,
              
            }}
          />
      </BottomTab.Navigator>
  );

}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const ProgramListStack = createStackNavigator<ProgramParamList>();

function ProgramListNavigator() {
  return (
    <ProgramListStack.Navigator>
      <ProgramListStack.Screen
        name="ProgramListScreen"
        component={ProgramComponents}
        options={{ 
          headerTitle: 'Program Details',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerRight: () => (<FilterButton />),
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>
      <ProgramListStack.Screen
        name="ProgramDetailsScreen"
        component={ProgramDetails}
        options={{ 
          headerTitle: 'Program Details',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>
      
      
    </ProgramListStack.Navigator>
  );
}

function ProgramComponents({ navigation }) {
  //console.log(incomingData[1][0])
  return(
      <ProgramList 
        searchTerm={searchTerm} 
        navigation={navigation} 
        programs={incomingData[0]}/>
  );
}

const ActivityListStack = createStackNavigator<ActivityParamList>();

function ActivityListNavigator() {
  return (
    <ActivityListStack.Navigator>
      <ActivityListStack.Screen
        name="ActivityListScreen"
        component={ActivityListComponent}
        options={{ 
          headerShown: false,
          headerTitle: 'Activity List',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}
      />
    </ActivityListStack.Navigator>
  );
}

function ActivityListComponent(){
  return(<ActivityList 
        searchTerm={searchTerm}
        activities={incomingData[1][0]}/>)
}

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={MapComponents}
        options={{ 
          headerShown: false,
          headerTitle: 'Map',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}
      />
    </MapStack.Navigator>
  );
}

function MapComponents() {
  //console.log(incomingData[0])
  return(
      <Map 
        searchTerm={searchTerm} 
        programs={incomingData[0]}
        mapOfPrograms={incomingData[2]}/>
  );
}
