import * as React from 'react';
import ProgramList from '../screens/ProgramList';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';

const Drawer = createDrawerNavigator();

export default function LeftSideDrawerNavigator() {

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
    return(
        <ProgramList />
    );
}

function LoginSignupComponents({ navigation }) {
  return (
    <AppLogin />
  );
}