import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import FilterFormB from '../components/filterOptions/FilterFormB';
import FilterRootCards from '../components/filterOptions/FilterRootCards';

import { FilterParamList } from '../types';

let category: any[] = new Array();

const FilterNavigatorStack = createBottomTabNavigator<FilterParamList>();

export default function BottomTabFilterNavigator(props: any) {
  const colorScheme = useColorScheme();
  /*props.taxonomy[1].forEach(taxonomy => {
      if(category.indexOf(taxonomy.category) === -1){
        category.push(taxonomy.category)
      }
  });*/
  //console.log(category)

  //console.log("Prop Keys at Bottom Tab Filter Nav: " + Object.keys(props.taxonomy))

  return (
    <FilterNavigatorStack.Navigator
        initialRouteName="FilterRootCards"
        tabBarOptions={{ 
            activeTintColor: Colors[colorScheme].tint,
            activeBackgroundColor: Colors.Red.color,
            inactiveBackgroundColor: Colors.Red.color,
            labelStyle: {color: Colors.OffWhite.color}
        }}>
        <FilterNavigatorStack.Screen
            name="FilterRootCards"
            component={wrapperFilterRootCards}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="md-american-football" color={Colors.OffWhite.color} />,
        }}/> 
        <FilterNavigatorStack.Screen
            name="FilterFormB"
            component={wrapperFilterFormB}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="md-rocket" color={Colors.OffWhite.color} />,
        }}/> 
    </FilterNavigatorStack.Navigator>
  );

    function wrapperFilterRootCards(){
       return( 
            <FilterRootCards 
                navigation={props.navigation}
                currentSelections={props.currentSelections}
                modifyCurrentSelections={props.modifyCurrentSelections}
                setPRR={props.setPRR}
                PRR={props.PRR}/>)
    }

    function wrapperFilterFormB(){
        return(
            <FilterFormB 
                />
        )
    }
}
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
