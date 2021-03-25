import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';
import FilterButton from '../components/FilterButton';

import loadProgramInformation from '../hooks/loadProgramInformation';
import loadTaxonomyInformation from '../hooks/loadTaxonomyInformation';
import useColorScheme from '../hooks/useColorScheme';

import ProgramDetails from '../screens/ProgramDetails';
import ActivityList from '../screens/ActivityList';
import Map from '../screens/Map';

import FilterPage from '../screens/FilterPage';
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

import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabParamList, ProgramParamList, ActivityParamList, MapParamList } from '../types';
import IncomingFilter from '../types';
import ProgramInformation from '../types';
import { color } from 'react-native-reanimated';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


export default function ProgramList() {
  const colorScheme = useColorScheme();



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

function ProgramComponents({ navigation }) {
    const [programs, setPrograms] = useState<Array<Array<any>>>([]);

    useEffect(() => {

      }, [])

    return(
        <View>
            <ShowPrograms navigation={navigation}/>
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
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>
      <ProgramListStack.Screen
        name="ProgramFilterScreen"
        component={FilterPage}
        options={{ 
          headerTitle: 'Filter',
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
F8F8FF = Decently light grey, slight blue
*/