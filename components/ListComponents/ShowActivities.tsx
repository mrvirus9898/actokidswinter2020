import React, { useState } from 'react';

import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';

import ActivityCards from './ActivityCards';

export default function ShowActivities(props: any){
    const [refreshList, setRefreshList] = useState(true)  

    function drawCards(){
      let filteredData = applySearch()       
      return( 
        <View>
          <FlatList
            data={filteredData}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) => (
              <View style={styles.activityListStyle}>
                <TouchableOpacity 
                  accessible = {true}
                  accessibilityLabel = {item.activity}
                  accessibilityHint="Click here to learn more."
                  accessibilityRole="imagebutton" 
                  onPress= {() => {
                    props.navigation.navigate('ActivityDetailsScreen', {item: item, programs: props.programs});
                    //console.log(props.navigation);
                  }}>
                  <ActivityCards item={item} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )
    }    

    function applySearch(){
      let output: Array<any> = []

      //console.log("Current Filter: " + filter)
      if(props.searchTerm != ""){

        props.activities.forEach(activity => {
          if(props.searchTerm === activity.activity){
            console.log("Target Found")
            output.push(activity)
          }
        });

        output.sort()

        return(output)
      }else{

        props.activities.forEach(incomingActivity => {
          output.push(incomingActivity)
        });
        output.sort((a,b) => {
          let keyA = a.activity
          let keyB = b.activity
          if(keyA < keyB) {
            return -1
          }
          if(keyA > keyB) {
            return 1
          }
        })
        //console.log(output)
        return output
      }
    }
  
    return (drawCards())
  
  }

const styles = StyleSheet.create({
    activityListStyle:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: Colors.OffWhite.color,
        shadowColor: '#333',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal:4,
        marginVertical:6,
    }
});

/*
      if(IncomingFilter.IncomingFilterActivties === undefined){
        if(props.searchTerm != ""){
          let returnData: any = []
          console.log(IncomingFilter.IncomingFilterActivities)
          
          IncomingFilter.IncomingFilterActivities.forEach(element => {
            if(element.value.localeCompare(props.searchTerm) == 0 ){
              returnData.push(element)
            }
          });
          return returnData
          
          
          return IncomingFilter.IncomingFilterActivities
        }else{
          return IncomingFilter.IncomingFilterActivities
        }
        
      }
      return null
*/