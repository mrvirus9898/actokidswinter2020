import * as React from 'react';
import ProgramList from '../screens/ProgramList';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';
import FontSettings from '../components/LeftBarSettings/FontSettings';

import Colors from '../constants/Colors';
import { HeaderTitle } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

export default function LeftSideDrawerNavigator() {


  //I defined the header and style here like in the other navigations, but for some reason it did work. 
  //So I moved the header and those options into the components. One Free  ¯\_(ツ)_/¯
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
      initialRouteName="Programs"
      drawerPosition={"left"}
      drawerStyle={{
        backgroundColor: Colors.OffWhite.Transparent
        
      }}>
        <Drawer.Screen 
          name="Programs" 
          component={ProgramComponents}
          options={{
            drawerLabel: "Home Screen"
          }} 
        />
        <Drawer.Screen 
          name="Sign In" 
          component={LoginSignupComponents}
          options={{
            drawerLabel: "Sign In",
            headerShown: true,
            headerTitle: 'Sign In',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: Colors.OffWhite.color
            },
            headerStyle: {
              backgroundColor: Colors.Red.color
            },
        }}/>
        <Drawer.Screen 
          name="Font Size" 
          component={FontComponents} 
          options={{
            drawerLabel: "Adjust Font",
            headerShown: true,
            headerTitle: 'Adjust Font',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: Colors.OffWhite.color
            },
            headerStyle: {
              backgroundColor: Colors.Red.color
            },
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ProgramComponents() {
    return(
        <ProgramList />
    );
}

function LoginSignupComponents() {
  return (
    <AppLogin />
  );
}

function FontComponents(){
    return(
        <FontSettings />
    )
}
