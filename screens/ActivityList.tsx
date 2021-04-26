import React from 'react';
import {
  View,
} from 'react-native';

import ShowActivities from '../components/ListComponents/ShowActivities';

import { ActivityProgramCount } from '../types';


export default function ActivityList(props: any) {
    //const [searchTerm, SetSearchTerm] = useState("")
    let currentAPCount: ActivityProgramCount[] = new Array()

    function calculateActivityProgramCount(){
        
        //console.log(props.programs)
        props.activities.forEach(activity => { 
          let count = 0
          
          props.programs.forEach(program => {
            //console.log(program.Program_Types)
            if(activity.value === program.Program_Types){
                count++
            }
          });
          let tempAPCount: ActivityProgramCount = {
              activity: activity.value,
              pic_url: activity.pic_url,
              numberOfPrograms: count
          }
          currentAPCount.push(tempAPCount)
        });
      }

      calculateActivityProgramCount()
      console.log(currentAPCount)  

    return(
        <View style={{flex:1}}>      
            <ShowActivities 
                searchTerm={props.searchTerm}
                activities={currentAPCount}
                programs={props.programs}/>
        </View>
    );
}
