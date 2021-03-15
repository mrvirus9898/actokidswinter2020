import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import * as SQLite from 'expo-sqlite';

import loadProgramInformation from '../hooks/loadProgramInformation';
import loadTaxonomyInformation from '../hooks/loadTaxonomyInformation';

import FilterCriteria from '../types';
import IncomingFilter from '../types';
import ProgramInformation from '../types';
import Database from '../types';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  function success(){
    console.log('Success')
  }

  function failure(){
    console.log('Failure')
  }

  function print(input){
    console.log(input)
  }


  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    FilterCriteria.Criteria = []
    FilterCriteria.Details = []
    IncomingFilter.IncomingFilterActivties = []
    IncomingFilter.IncomingFilterTaxonomy = []

    //Database.LocalDatabase = SQLite.openDatabase('ActokidsDB')
    //let DB = SQLite.openDatabase('ActokidsDB')
    /*DB.transaction(tx => {
      tx.executeSql("CREATE TABLE taxonomy (id number, value varchar(20));", [], success)
    })*/

    const incomingPrograms = loadProgramInformation().then(function(result)
    {
        ProgramInformation.Programs = result
        //setPrograms(result);
        setLoadingComplete(true);
    })
    const incomingFilter = loadTaxonomyInformation().then(function(result)
    {
        IncomingFilter.IncomingFilterActivties = result.Activities;
        IncomingFilter.IncomingFilterTaxonomy = result.Taxonomy;
        /*DB.transaction(tx => {
          tx.executeSql("INSERT INTO taxonomy (id, value) VALUES (1, 'Cognitive')")
        })*/
        /*DB.transaction(tx => {
          tx.executeSql("SELECT * FROM taxonomy", [], (tx, results) => {
            let data = results.rows.length;
            let users = []

            for (let i = 0; i < data; i++){
              users.push(results.rows.item(i));
            }

            print(users)
          })
        })*/
    })


  }, []);

  return isLoadingComplete;
  
}
/*
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();*/