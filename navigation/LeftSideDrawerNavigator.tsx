import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLogin from '../components/AppLogin';
import SearchBarComponent from '../components/SearchBar';
import FontSettings from '../components/LeftBarSettings/FontSettings';

import Colors from '../constants/Colors';

import BottomTabNavigation from './BottomTabNavigator';
import BottomTabFilterNavigator from './BottomTabFilterNavigator';

import FilterButton from '../components/FilterButton';


const Drawer = createDrawerNavigator();

export default function LeftSideDrawerNavigator(props: any) {
  //SEARCHTERM LIVES HERE IS IS PASSED THROUGH THE DIFFERENT SCREENS
  const [searchTerm, SetSearchTerm] = React.useState("")

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
        component={ProgramComponents}
        options={{
          headerShown: true,
          drawerLabel: "Home Screen",
          headerTitle: props => HeaderSearchBar(),
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

  function ProgramComponents( ) {
    return(
      <BottomTabNavigation 
        searchTerm={searchTerm}
        incomingData={props.incomingData}/>
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
    return (<BottomTabFilterNavigator 
              taxonomy={props.incomingData[1]}
              currentSelections={props.incomingData[3]}
              modifyCurrentSelections={props.incomingData[4]}
              navigation={navigation}
              setPRR={props.incomingData[5]}
              PRR={props.incomingData[6]}/>);
  }
  
  function HeaderSearchBar(){
    return(<SearchBarComponent 
            searchTerm={searchTerm} 
            setTerm={SetSearchTerm}/>);
  }

  function FilterButtonComponent(){
    return(<FilterButton />);
  }
}