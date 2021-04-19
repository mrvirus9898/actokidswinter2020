import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native'

import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';

import {SearchBar} from 'react-native-elements';

import Colors from '../../constants/Colors';

import ActivityCards from './ActivityCards';
import IncomingFilter from '../../types'
import SearchTerms from '../../types'


export default function ShowActivities(){

    //const [filter, setFilter] = useState<Array<any>>([]);
    //const [filter, setFilter] = useState<Array<String>>([]);
    const [searchTerm, SetSearchTerm] = useState("")
    const [refreshList, setRefreshList] = useState(true)

    const isFocused = useIsFocused()

    useEffect(() => {
      console.log("Search Term: " + searchTerm)
      SetSearchTerm(SearchTerms.CurrentSearch)

      //const toggle = setInterval(() => {setRefreshList(!refreshList)}, 1000)
      return () => {
        //clearInterval(toggle)
      }
    })

  
    function drawCards(){
          //console.log("Filter: " + filter)
          if(IncomingFilter.IncomingFilterActivties === undefined)
          {
            console.log("Still Loading")
            return(null)
          }else{
            //console.log("Showing Programs: " + Object.keys(params))
            
            let filteredData = IncomingFilter.IncomingFilterActivties
            applySearch()
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
                          alert(item.pic_url);
                        }}>
                        <ActivityCards item={item} />
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            )
        }
    }    

    function applySearch(){
      if(SearchTerms.CurrentSearch != ""){
        let returnData = []
        //alert(SearchTerms.CurrentSearch)
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