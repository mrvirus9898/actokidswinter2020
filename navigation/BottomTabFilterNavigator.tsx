import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { NavigationContainer } from '@react-navigation/native';

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

import { BottomTabParamList, FilterParamList, ProgramParamList } from '../types';

const FilterNavigatorStack = createBottomTabNavigator<FilterParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer independent={true}>
    <FilterNavigatorStack.Navigator
        initialRouteName="FilterFormB"
        tabBarOptions={{ 
            activeTintColor: Colors[colorScheme].tint,
            activeBackgroundColor: Colors.Red.color,
            inactiveBackgroundColor: Colors.Red.color,
            labelStyle: {color: Colors.OffWhite.color}
        }}>
        <FilterNavigatorStack.Screen
            name="FilterFormB"
            component={FilterFormB}/>  
        <FilterNavigatorStack.Screen
            name="FilterRootCards"
            component={FilterRootCardStack}/> 
    </FilterNavigatorStack.Navigator>
    </NavigationContainer>
  );
}
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const FilterRootStack = createStackNavigator<FilterParamList>();

function FilterRootCardStack(){
    return(
        <FilterRootStack.Navigator>
        <FilterRootStack.Screen
            name="FilterRootCards"
            component={FilterRootCards}
            options={{
                headerShown: false
            }}/> 
        <FilterRootStack.Screen
            name="FilterAccessOptions"
            component={FilterAccessOptions}/>   
        <FilterRootStack.Screen
            name="FilterAgesGrades"
            component={FilterAgesGrades}/>   
        <FilterRootStack.Screen
            name="FilterCostsAndTravel"
            component={FilterCostsAndTravel}/>   
        <FilterRootStack.Screen
            name="FilterIndividualSports"
            component={FilterIndividualSports}/>   
        <FilterRootStack.Screen
            name="FilterIndoorPrograms"
            component={FilterIndoorPrograms}/>   
        <FilterRootStack.Screen
            name="FilterLanguageOptions"
            component={FilterLanguageOptions}/>   
        <FilterRootStack.Screen
            name="FilterOutdoorPrograms"
            component={FilterOutdoorPrograms}/>   
        <FilterRootStack.Screen
            name="FilterTeamSports"
            component={FilterTeamSports}/>    
        </FilterRootStack.Navigator>);
}