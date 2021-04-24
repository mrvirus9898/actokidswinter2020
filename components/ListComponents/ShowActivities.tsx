import React, { useState, useEffect, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native'

import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  AppState
} from 'react-native';

import Colors from '../../constants/Colors';

import ActivityCards from './ActivityCards';

export default function ShowActivities(props: any){

    //const [filter, setFilter] = useState<Array<any>>([]);
    //const [filter, setFilter] = useState<Array<String>>([]);
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
                  accessibilityLabel = {item.value}
                  accessibilityHint="Click here to learn more."
                  accessibilityRole="imagebutton" 
                  onPress= {() => {
                    alert("Hello");
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
          if(props.searchTerm === activity.value){
            console.log("Target Found")
            output.push(activity)
          }
        });
        return(output)
      }else{
        return props.activities
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

  /*function applyFilter(filter: Array<String>){
      let output: Array<any> = []
  
      //console.log("Current Filter: " + filter)
  
      if(filter.length != 0){
        params.programs.forEach(element => {
          if(element.accessability.localeCompare(filter[0]) == 0){
            //console.log(filter[0])
            output.push(element)
          }
          //console.log(output)
        });
      }else{
        output = params.programs
      }
      //console.log(output)
      return(output)
    }*/

    /*                <SearchBar
                  placeholder="Search for an activity here"
                  onChangeText={SetSearchTerm}
                  value={searchTerm}/>*/

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