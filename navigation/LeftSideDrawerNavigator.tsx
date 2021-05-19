import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppLogin from '../components/AppLogin';
import SearchBarComponent from '../components/SearchBar';
import FontSettings from '../components/LeftBarSettings/FontSettings';

import ProgramList from '../screens/ProgramList';
import ProgramDetails from '../screens/ProgramDetails';
import ActivityList from '../screens/ActivityList';
import ActivityDetails from '../screens/ActivityDetails';
import Map from '../screens/Map'

import Colors from '../constants/Colors';

import BottomTabNavigation from './BottomTabNavigator';
import BottomTabFilterNavigator from './BottomTabFilterNavigator';


import FilterButton from '../components/FilterButton';

import { BottomTabParamList, ProgramParamList, ActivityParamList, MapParamList } from '../types';

const Drawer = createDrawerNavigator();
const ProgramListStack = createStackNavigator<ProgramParamList>();
const ActivityListStack = createStackNavigator<ActivityParamList>();
const MapStack = createStackNavigator<MapParamList>();

export default function LeftSideDrawerNavigator(props: any) {
  //SEARCHTERM LIVES HERE IS IS PASSED THROUGH THE DIFFERENT SCREENS
  const [searchTerm, SetSearchTerm] = React.useState("")

  const [showFilterOverlay, SetFilterOverlay] = React.useState(false)

  //console.log(Object.keys(props.incomingData[1]))
  //console.log(props.incomingData[1])

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
        component={ProgramListNavigator}
        options={{
          headerShown: true,
          drawerLabel: "Home Screen",
          headerTitle: "Actokids",
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerRight: () => FilterButtonComponent(),
          headerStyle: {
            backgroundColor: Colors.Red.color
          },
      }}/>
      <Drawer.Screen 
        name="Search by Sport" 
        component={ActivityListNavigator}
        options={{
          headerShown: true,
          drawerLabel: "Search By Sport",
          headerTitle: "Actokids",
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerRight: () => FilterButtonComponent(),
          headerStyle: {
            backgroundColor: Colors.Red.color
          },
      }}/>
      <Drawer.Screen 
        name="Map" 
        component={MapNavigator}
        options={{
          headerShown: true,
          drawerLabel: "Search The Map",
          headerTitle: "Actokids",
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerRight: () => FilterButtonComponent(),
          headerStyle: {
            backgroundColor: Colors.Red.color
          },
      }}/>
      <Drawer.Screen 
          name="Filter" 
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

function ActivityListNavigator() {
  return (
    <ActivityListStack.Navigator>
      <ActivityListStack.Screen
        name="ActivityListScreen"
        component={ActivityListComponent}
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
      }}/>
      <ActivityListStack.Screen
        name="ActivityDetailsScreen"
        component={ActivityDetails}
        options={{ 
          headerShown: false,
          headerTitle: 'Activity Details',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>
      <ActivityListStack.Screen
        name="ActivityProgramDetailsScreen"
        component={ProgramDetails}
        options={{ 
          headerShown: false,
          headerTitle: 'Activity Details',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.OffWhite.color
          },
          headerStyle: {
            backgroundColor: Colors.Red.color
          }, 
      }}/>
    </ActivityListStack.Navigator>
  );
}

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={MapComponents}
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
      <MapStack.Screen
        name="MapProgramDetailsScreen"
        component={ProgramDetails}
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


  function ProgramComponents({navigation}) {
    return(
      <ProgramList 
        currentSelectedTaxonomy={props.incomingData[3]}
        searchTerm={searchTerm} 
        navigation={navigation} 
        programs={props.incomingData[0]}/>);
  }


  function ActivityListComponent({navigation}){
    return(
      <ActivityList
        navigation={navigation} 
        searchTerm={searchTerm}
        activities={props.incomingData[1][0]}
        programs={props.incomingData[0]}/>)
  }

  function MapComponents({navigation}) {
    //console.log(incomingData[0])
    return(
        <Map 
          navigation={navigation}
          searchTerm={searchTerm} 
          programs={props.incomingData[0]}
          mapOfPrograms={props.incomingData[2]}/>
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
  
  function FilterNavigator({navigation}) {
    return (
      <BottomTabFilterNavigator 
        taxonomy={props.incomingData[1]}
        currentSelections={props.incomingData[3]}
        modifyCurrentSelections={props.incomingData[4]}
        navigation={navigation}
        setPRR={props.incomingData[5]}
        PRR={props.incomingData[6]}/>);
  }
  
  function HeaderSearchBar(){
    return(
      <SearchBarComponent 
        searchTerm={searchTerm} 
        setTerm={SetSearchTerm}/>);
  }

  function FilterButtonComponent(){
    return(
      <FilterButton 
        showFilterOverlay={showFilterOverlay}
        SetFilterOverlay={SetFilterOverlay}/>);
  }
}

/*
          headerTitle: props => HeaderSearchBar(),*/

/*
  function ProgramComponents( ) {
    return(
      <BottomTabNavigation 
        searchTerm={searchTerm}
        incomingData={props.incomingData}
        showFilterOverlay={showFilterOverlay}
        SetFilterOverlay={SetFilterOverlay}
        currentSelections={props.incomingData[3]}
        modifyCurrentSelections={props.incomingData[4]}
        setPRR={props.incomingData[5]}
        PRR={props.incomingData[6]}/>
    );
  }*/