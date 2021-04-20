import { createStackNavigator } from '@react-navigation/stack';

import React, { useState, useEffect } from 'react';

import { ProgramParamList } from '../types';
import FilterButton from '../components/FilterButton';
import Colors from '../constants/Colors';

import ProgramList from '../screens/ProgramList';
import ProgramDetails from '../screens/ProgramDetails';

const ProgramListStack = createStackNavigator<ProgramParamList>();

export default function ProgramListNavigator() {
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

  function ProgramComponents({ navigation }) {
    //console.log("Hit Program Components")
    return(
        <ProgramList navigation={navigation} />
    );
  }
}