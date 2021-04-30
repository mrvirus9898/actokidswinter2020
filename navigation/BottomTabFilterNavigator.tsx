import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import FilterPhysicalActivity from '../components/filterOptions/FilterPhysicalActivity';
import FilterCompetitiveStructure from '../components/filterOptions/FilterCompetitiveStructure';
import FilterCostsAndTravel from '../components/filterOptions/FilterCostsAndTravel';
import FilterPhysicalIntensity from '../components/filterOptions/FilterPhysicalIntensity';
import FilterSkillLevel from '../components/filterOptions/FilterSkillLevel';
import FilterLanguageOptions from '../components/filterOptions/FilterLanguageOptions';

import FilterCertifications from '../components/filterOptions/FilterCertifications';
import FilterPaymentOptions from '../components/filterOptions/FilterPaymentOptions';
import FilterFormB from '../components/filterOptions/FilterFormB';
import FilterRootCards from '../components/filterOptions/FilterRootCards';

import { FilterParamList } from '../types';

let category: any[] = new Array();

const FilterNavigatorStack = createBottomTabNavigator<FilterParamList>();

export default function BottomTabFilterNavigator(props: any) {
  const colorScheme = useColorScheme();
  props.taxonomy[1].forEach(taxonomy => {
      if(category.indexOf(taxonomy.category) === -1){
        category.push(taxonomy.category)
      }
  });
  console.log(category)

  //console.log("Prop Keys at Bottom Tab Filter Nav: " + Object.keys(props.taxonomy))

  return (
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
            component={FilterFormB}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="md-rocket" color={Colors.OffWhite.color} />,
        }}/>  
        <FilterNavigatorStack.Screen
            name="FilterRootCards"
            component={FilterCardStack}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="md-american-football" color={Colors.OffWhite.color} />,
        }}/> 
    </FilterNavigatorStack.Navigator>
  );
}
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const FilterRootStack = createStackNavigator<FilterParamList>();

function FilterCardStack(){
    return(
        <FilterRootStack.Navigator>
        <FilterRootStack.Screen
            name="FilterRootCards"
            component={FilterRootCards}
            options={{
                headerShown: false,
        }}/> 
        <FilterRootStack.Screen
            name="FilterPhysicalActivity"
            component={FilterPhysicalActivity}            
            options={{
                headerShown: false,
        }}/>   
        <FilterRootStack.Screen
            name="FilterCompetitiveStructure"
            component={FilterCompetitiveStructure}
            options={{
                headerShown: false,
        }}/>   
        <FilterRootStack.Screen
            name="FilterCostsAndTravel"
            component={FilterCostsAndTravel}
            options={{
                headerShown: false,
        }}/>   
        <FilterRootStack.Screen
            name="FilterPhysicalIntensity"
            component={FilterPhysicalIntensity}
            options={{
                headerShown: false,
        }}/>   
        <FilterRootStack.Screen
            name="FilterSkillLevel"
            component={FilterSkillLevel}
            options={{
                headerShown: false,
        }}/>   
        <FilterRootStack.Screen
            name="FilterLanguageOptions"
            component={FilterLanguageOptions}
            options={{
                headerShown: false,
        }}/>   
        <FilterRootStack.Screen
            name="FilterCertifications"
            component={FilterCertifications}
            options={{
                headerShown: false,
        }}/>   
        <FilterRootStack.Screen
            name="FilterPaymentOptions"
            component={FilterPaymentOptions}
            options={{
                headerShown: false,
        }}/>    
        </FilterRootStack.Navigator>);
}