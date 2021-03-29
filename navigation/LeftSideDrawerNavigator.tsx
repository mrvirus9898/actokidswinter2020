import * as React from 'react';
import ProgramList from '../screens/ProgramList';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';
import FontSettings from '../components/LeftBarSettings/FontSettings';

import Colors from '../constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderTitle } from '@react-navigation/stack';

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

import ProgramDetails from '../screens/ProgramDetails';

import BottomTabNavigation from './BottomTabNavigator';
import BottomTabFilterNavigator from './BottomTabFilterNavigator';

import FilterButton from '../components/FilterButton';

import { FilterParamList, ProgramParamList} from '../types';

const Drawer = createDrawerNavigator();

export default function LeftSideDrawerNavigator() {


  //I defined the header and style here like in the other navigations, but for some reason it did work. 
  //So I moved the header and those options into the components. One free  ¯\_(ツ)_/¯

  //Update, now it works, forget what I said about. Get another free ¯\_(ツ)_/¯
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
          headerShown: true,
          drawerLabel: "Home Screen",
          headerTitle: "Program List",
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerRight: () => (<FilterButton />),
          headerStyle: {
            backgroundColor: Colors.Red.color
          },
      }}/>
      <Drawer.Screen 
          name="FilterRootCards" 
          component={FilterNavigator}
          options={{
            drawerLabel: "Filter",
            headerShown: true,
            headerTitle: 'Filter',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: Colors.OffWhite.color
            },
            headerStyle: {
              backgroundColor: Colors.Red.color
            },
      }}/>
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
      }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ProgramComponents( ) {
  return(
    <BottomTabNavigation />
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

const FilterNavigatorStack = createStackNavigator<FilterParamList>();

function FilterNavigator() {
  return (<BottomTabFilterNavigator />);
}

/*
      <Drawer.Screen 
        name="Programs" 
        component={ProgramComponents}
        options={{
          headerShown: true,
          drawerLabel: "Home Screen",
          headerTitle: "Program List",
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerRight: () => (<FilterButton />),
          headerStyle: {
            backgroundColor: Colors.Red.color
          },
        }} 
      />
      <Drawer.Screen
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
      <Drawer.Screen
        name="ProgramFilterScreen"
        component={FilterPage}
        options={{ 
          headerShown: true,
          headerTitle: 'Filter',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <Drawer.Screen
        name="FilterAccessOptions"
        component={FilterAccessOptions}
        options={{ 
          headerShown: true,
          headerTitle: 'Accessibility Options',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <Drawer.Screen
        name="FilterAgesGrades"
        component={FilterAgesGrades}
        options={{ 
          headerShown: true,
          headerTitle: 'Ages and Grades',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <Drawer.Screen
        name="FilterCostsAndTravel"
        component={FilterCostsAndTravel}
        options={{ 
          headerTitle: 'Costs and Travel',
          headerShown: true,
          headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   
      <Drawer.Screen
        name="FilterIndividualSports"
        component={FilterIndividualSports}
        options={{
          headerTitle: 'Individual Sports',
          headerShown: true,
          headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   
      <Drawer.Screen
        name="FilterIndoorPrograms"
        component={FilterIndoorPrograms}
        options={{ 
          headerTitle: 'Indoor Programs',
          headerShown: true,
          headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        },
      }}/>   
      <Drawer.Screen
        name="FilterLanguageOptions"
        component={FilterLanguageOptions}
        options={{ 
          headerTitle: 'Language Options',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>   
      <Drawer.Screen
        name="FilterOutdoorPrograms"
        component={FilterOutdoorPrograms}
        options={{ 
          headerTitle: 'Outdoors Programs',
          headerShown: true,
          headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   
      <Drawer.Screen
        name="FilterTeamSports"
        component={FilterTeamSports}
        options={{ 
          headerTitle: 'Team Sports',
          headerShown: true,
          headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        },
      }}/>     
      <Drawer.Screen
        name="FilterFormB"
        component={FilterFormB}
        options={{ 
          headerTitle: 'Filter Form',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          },  
      }}/>   
      <Drawer.Screen
        name="FilterRootCards"
        component={FilterRootCards}
        options={{ 
          headerTitle: 'Select Filter',
          headerShown: true,
          headerTitleStyle: {
          fontWeight: 'bold',
          color: Colors.OffWhite.color
        },
        headerStyle: {
          backgroundColor: Colors.Red.color
        }, 
      }}/>   
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
        />*
        
        */