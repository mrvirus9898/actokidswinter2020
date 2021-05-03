import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import loadProgramInformation from '../hooks/loadProgramInformation';
import loadTaxonomyInformation from '../hooks/loadTaxonomyInformation';

import {ProgramLocation, Coordinates} from '../types';

export default function useCachedResources() {
  let initialCST: string[] = new Array
  const [isProgramLoadingComplete, setProgramLoadingComplete] = React.useState([[]]);
  const [isMapProcessingComplete, setMapProcessingComplete] = React.useState([[]]);
  const [isTaxonomyLoadingComplete, setTaxonomyLoadingComplete] = React.useState([[]]);
  const [currentSelectedTaxonomy, setCurrentSelectedTaxonomy] = React.useState(initialCST);

  function modifyCurrentSelectedTaxonomy(selection: string){
    let tempSelection: string[] = currentSelectedTaxonomy
    let index = tempSelection.indexOf(selection,0)
    console.log("Taxonomy Selection: " + selection)

    //if the selected taxonomy criteria is already in the current taxonomy then remove it
    //if Clear is passed, clear the whole thing
    //else add it
    if(index > -1){
      tempSelection.splice(index, 1)
      setCurrentSelectedTaxonomy(tempSelection)
    }else if(selection === "Clear"){
      let clearSelection: string[] = new Array
      setCurrentSelectedTaxonomy(clearSelection)
    }else{
      tempSelection.push(selection)
      setCurrentSelectedTaxonomy(tempSelection)
    }
    console.log("Current Taxonomy: " + currentSelectedTaxonomy)
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {

    const incomingPrograms = loadProgramInformation().then(function(result)
    {
        let program = result;
        program.sort((a, b) => (a.Program_Id > b.Program_Id) ? 1 : -1)
        setProgramLoadingComplete(program);
        let tempLocations: any = [];
        let count = 0;
        program.forEach(program => {
          //console.log(element)
          let tempCoord: Coordinates = {
            //turns out you can convert string to number by using the plus sign
            //One Free ¯\_(ツ)_/¯
            latitude: +program.lat,
            longitude: +program.long,
          }
          let tempProLocation: ProgramLocation = {
            title: program.Program_Name,
            key: count,
            coordinates: tempCoord,
            description: program.Program_Types,
            program_id: program.Program_Id
          }
          //searchProgramActivities(program.Program_name)
          tempLocations.push(tempProLocation)
          count++
        })
        setMapProcessingComplete(tempLocations)
    }) 

    const incomingFilter = loadTaxonomyInformation().then(function(result)
    {
        let incomingData: any = []
        let activities = result.Activities;
        let taxonomy = result.Taxonomy;
        taxonomy.sort((a, b) => (a.genre_id > b.genre_id) ? 1 : -1)
        incomingData.push(activities)
        incomingData.push(taxonomy)     
        //console.log(incomingData)

        setTaxonomyLoadingComplete(incomingData);
    })


  }, []);

  if(isProgramLoadingComplete && isTaxonomyLoadingComplete && isMapProcessingComplete){
    //console.log(isProgramLoadingComplete)
    //console.log(isTaxonomyLoadingComplete)
    return [isProgramLoadingComplete, isTaxonomyLoadingComplete, isMapProcessingComplete, currentSelectedTaxonomy, modifyCurrentSelectedTaxonomy]
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