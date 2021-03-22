import React, { useState, useEffect } from 'react';
import { View} from 'react-native';

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
        activeBackgroundColor: '#E60F0F',
        inactiveBackgroundColor: '#E60F0F',
        labelStyle: {color:'#F8F8FF'}
      }}>
        <BottomTab.Screen
          name="Programs"
          component={ProgramListNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="md-rocket" color='white' />,
          }}
          
        />
        <BottomTab.Screen
          name="Activities"
          component={ActivityListNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="md-american-football" color='white' />,
          }}
        />
        <BottomTab.Screen
          name="Map"
          component={MapNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="md-map" color='white' />,
            
          }}
        />
    </BottomTab.Navigator>
  );
}

function ProgramComponents({ navigation }) {
    const [programs, setPrograms] = useState<Array<Array<any>>>([]);

    useEffect(() => {
      //console.log(ProgramInformation.Programs);
      //setPrograms(ProgramInformation.Programs);
      }, [])

      

    //console.log(navigation);

    //console.log(Object.keys(programs[0]));
    //console.log(programs[0].Program_Name);
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
            color: '#F8F8FF'
          },
          headerRight: () => (<FilterButton />),
          headerStyle: {
            backgroundColor: '#E60F0F'
          },
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
      <ProgramListStack.Screen
        name="FilterAccessOptions"
        component={FilterAccessOptions}
        options={{ headerTitle: 'Accessibility Options' }}
      />   
      <ProgramListStack.Screen
        name="FilterAgesGrades"
        component={FilterAgesGrades}
        options={{ headerTitle: 'Ages and Grades' }}
      />   
      <ProgramListStack.Screen
        name="FilterCostsAndTravel"
        component={FilterCostsAndTravel}
        options={{ headerTitle: 'Costs and Travel' }}
      />   
      <ProgramListStack.Screen
        name="FilterIndividualSports"
        component={FilterIndividualSports}
        options={{ headerTitle: 'Individual Sports' }}
      />   
      <ProgramListStack.Screen
        name="FilterIndoorPrograms"
        component={FilterIndoorPrograms}
        options={{ headerTitle: 'Indoor Programs' }}
      />   
      <ProgramListStack.Screen
        name="FilterLanguageOptions"
        component={FilterLanguageOptions}
        options={{ headerTitle: 'Language Options' }}
      />   
      <ProgramListStack.Screen
        name="FilterOutdoorPrograms"
        component={FilterOutdoorPrograms}
        options={{ headerTitle: 'Outdoors Programs' }}
      />   
      <ProgramListStack.Screen
        name="FilterTeamSports"
        component={FilterTeamSports}
        options={{ headerTitle: 'Team Sports' }}
      />     
      <ProgramListStack.Screen
        name="FilterFormB"
        component={FilterFormB}
        options={{ headerTitle: 'Filter Form' }}
      />   
      <ProgramListStack.Screen
        name="FilterRootCards"
        component={FilterRootCards}
        options={{ headerTitle: 'Select Filter' }}
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
F8F8FF = Decently light grey, slight blue
*/