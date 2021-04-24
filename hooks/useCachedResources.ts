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
import SearchTerm from '../types';

export default function useCachedResources() {
  const [isProgramLoadingComplete, setProgramLoadingComplete] = React.useState([[]]);
  const [isTaxonomyLoadingComplete, setTaxonomyLoadingComplete] = React.useState([[]]);

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
    SearchTerm.CurrentSearch = ""


    const incomingPrograms = loadProgramInformation().then(function(result)
    {
        let program = result
        ProgramInformation.Programs = program
        //incomingData.push(program)
        //console.log(program)

        //setPrograms(result);
        setProgramLoadingComplete(result);
    })
    const incomingFilter = loadTaxonomyInformation().then(function(result)
    {
        let incomingData: any = []
        let activities = result.Activities;
        let taxonomy = result.Taxonomy;
        IncomingFilter.IncomingFilterActivties = activities;
        IncomingFilter.IncomingFilterTaxonomy = taxonomy;
        incomingData.push(activities)
        incomingData.push(taxonomy)

        //console.log(incomingData)

        setTaxonomyLoadingComplete(incomingData);
    })


  }, []);

  if(isProgramLoadingComplete && isTaxonomyLoadingComplete){
    //console.log(isProgramLoadingComplete)
    //console.log(isTaxonomyLoadingComplete)
    return [isProgramLoadingComplete, isTaxonomyLoadingComplete]
  }else{
    
  return false
  }
  
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

    //import Database from '../types';

        //Database.LocalDatabase = SQLite.openDatabase('ActokidsDB')
    //let DB = SQLite.openDatabase('ActokidsDB')
    /*DB.transaction(tx => {
      tx.executeSql("CREATE TABLE taxonomy (id number, value varchar(20));", [], success)
    })*/

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