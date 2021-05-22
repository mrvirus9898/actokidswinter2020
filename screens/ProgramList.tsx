import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import ShowPrograms from '../components/ListComponents/ShowPrograms';


export default function ProgramList(props: any) {
  return(
      <View style={{flex:1}}>
        <ShowPrograms 
            searchTerm={props.searchTerm} 
            navigation={props.navigation}
            programs={props.programs}
            currentSelectedTaxonomy={props.currentSelectedTaxonomy}
            applyFilter={props.applyFilter}
            setApplyFilter={props.setApplyFilter}
            filterMinMaxAge={props.filterMinMaxAge}
            setFilterMinMaxAge={props.setFilterMinMaxAge}/>
      </View>
  );
}

//<Text>Program List Top {programs[0].Program_Name} </Text>

/*
F8F8FF = Decently light grey, slight blue
*/

/*        
import Dialog, { DialogContent } from 'react-native-popup-dialog';

                <Dialog 
          visible={props.filterOverlayFlag}
          onTouchOutside={() => {
            props.SetFilterOverlay(!props.filterOverlayFlag)
          }}
        >
          <DialogContent>
            <Text>HELLO</Text>
          </DialogContent>
        </Dialog>*/