import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import ShowPrograms from '../components/ListComponents/ShowPrograms';
import FilterButton from '../components/FilterButton';
import { NavigationContainer } from '@react-navigation/native';

import LeftSideDrawer from './LeftSideDrawerNavigator';

import FilterAccessOptions from '../components/filterOptions/FilterAccessOptions';
import FilterAgesGrades from '../components/filterOptions/FilterAgesGrades';
import FilterCostsAndTravel from '../components/filterOptions/FilterCostsAndTravel';
import FilterIndividualSports from '../components/filterOptions/FilterIndividualSports';
import FilterIndoorPrograms from '../components/filterOptions/FilterIndoorPrograms';
import FilterLanguageOptions from '../components/filterOptions/FilterLanguageOptions';
import FilterOutdoorPrograms from '../components/filterOptions/FilterOutdoorPrograms';
import FilterTeamSports from '../components/filterOptions/FilterTeamSports';
import FilterFormB from '../components/filterOptions/FilterFormB';
import FilterRootCards from '../components/filterOptions/FilterRootCards';
import FilterPage from '../screens/FilterPage';

import ProgramList from '../screens/ProgramList';
import ProgramDetails from '../screens/ProgramDetails';
import ActivityList from '../screens/ActivityList';
import Map from '../screens/Map';

import { BottomTabParamList, TabOneParamList, TabTwoParamList, ProgramParamList, ActivityParamList, MapParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer independent={true}>
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
    </NavigationContainer>
  );
}

function ProgramComponents({ navigation }) {
  //console.log("Hit Program Components")
  return(
      <ProgramList navigation={navigation} />
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

const ActivityListStack = createStackNavigator<ActivityParamList>();

function ActivityListNavigator() {
  return (
    <ActivityListStack.Navigator>
      <ActivityListStack.Screen
        name="ActivityListScreen"
        component={ActivityList}
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

const MapStack = createStackNavigator<MapParamList>();

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={Map}
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

/*
<ProgramListStack.Screen
        name="ProgramFilterScreen"
        component={FilterPage}
        options={{ 
          headerTitle: 'Filter',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <ProgramListStack.Screen
        name="FilterAccessOptions"
        component={FilterAccessOptions}
        options={{ 
          headerTitle: 'Accessibility Options',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <ProgramListStack.Screen
        name="FilterAgesGrades"
        component={FilterAgesGrades}
        options={{ 
          headerTitle: 'Ages and Grades',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <ProgramListStack.Screen
        name="FilterCostsAndTravel"
        component={FilterCostsAndTravel}
        options={{ headerTitle: 'Costs and Travel',
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   
      <ProgramListStack.Screen
        name="FilterIndividualSports"
        component={FilterIndividualSports}
        options={{ headerTitle: 'Individual Sports',
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   
      <ProgramListStack.Screen
        name="FilterIndoorPrograms"
        component={FilterIndoorPrograms}
        options={{ headerTitle: 'Indoor Programs',
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        },
      }}/>   
      <ProgramListStack.Screen
        name="FilterLanguageOptions"
        component={FilterLanguageOptions}
        options={{ 
          headerTitle: 'Language Options',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <ProgramListStack.Screen
        name="FilterOutdoorPrograms"
        component={FilterOutdoorPrograms}
        options={{ headerTitle: 'Outdoors Programs',
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   
      <ProgramListStack.Screen
        name="FilterTeamSports"
        component={FilterTeamSports}
        options={{ headerTitle: 'Team Sports',
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        },
      }}/>     
      <ProgramListStack.Screen
        name="FilterFormB"
        component={FilterFormB}
        options={{ 
          headerTitle: 'Filter Form',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          },  
      }}/>   
      <ProgramListStack.Screen
        name="FilterRootCards"
        component={FilterRootCards}
        options={{ headerTitle: 'Select Filter',
        headerShown: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   */