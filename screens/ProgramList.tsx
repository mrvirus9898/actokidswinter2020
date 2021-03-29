import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';


export default function ProgramList({navigation}) {
  const [programs, setPrograms] = useState<Array<Array<any>>>([]);

  useEffect(() => {

    }, [])

  return(
      <View>
          <ShowPrograms navigation={navigation}/>
      </View>
  );
}

//<Text>Program List Top {programs[0].Program_Name} </Text>

/*
F8F8FF = Decently light grey, slight blue
*/