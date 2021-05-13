import React, { useState, useEffect } from 'react';
import { View, Text, Modal} from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';


export default function ProgramList(props: any) {
  return(
      <View style={{flex:1}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.filterOverlayFlag}
          onRequestClose={() => {
            alert("Close")
            props.SetFilterOverlay(!props.filterOverlayFlag)
          }}>
            <Text>HELLO</Text>
        </Modal>
        <ShowPrograms 
            searchTerm={props.searchTerm} 
            navigation={props.navigation}
            programs={props.programs}
            currentSelectedTaxonomy={props.currentSelectedTaxonomy}/>
      </View>
  );
}

//<Text>Program List Top {programs[0].Program_Name} </Text>

/*
F8F8FF = Decently light grey, slight blue
*/