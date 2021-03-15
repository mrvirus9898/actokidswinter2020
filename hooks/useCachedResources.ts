import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import loadProgramInformation from '../hooks/loadProgramInformation';
import loadTaxonomyInformation from '../hooks/loadTaxonomyInformation';

import FilterCriteria from '../types';
import IncomingFilter from '../types'
import ProgramInformation from '../types';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    FilterCriteria.Criteria = []
    FilterCriteria.Details = []
    IncomingFilter.IncomingFilterActivties = []
    IncomingFilter.IncomingFilterTaxonomy = []

    
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