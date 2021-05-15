/*
NICK BENNETT
ACTOKIDS

FILTER POP UP
*/


import React from 'react';

import {StyleSheet, View, Text, Modal, Pressable, Dimensions} from 'react-native';

import FilterPopUpOptions from './FilterPopUpOptions';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../../constants/Colors'

export default function FilterPopUp(props: any) {


    function returnDefaultFilterMenu(){
      return(
        <View>
        <View style={styles.filterOptionsRowStyle}>
          <Pressable
              style={styles.searchButton}
              onPress={() => props.SetFilterOverlay(!props.filterOverlayFlag)}>
              <Text style={styles.buttonTextStyle}>Search</Text>
          </Pressable>
          <Pressable
              style={styles.cancelButton}
              onPress={() => props.SetFilterOverlay(!props.filterOverlayFlag)}>
              <View style={styles.closeIconWrapper}>
                <AntDesign name="close" size={22} color="black" />
              </View>
          </Pressable>
          </View>
        <FilterPopUpOptions />
      </View>
      )
    }

    return(
            <Modal
                animationType="fade"
                transparent={true}
                statusBarTranslucent={true}
                visible={props.filterOverlayFlag}
                onRequestClose={() => {
                    //alert("Close")
                    props.SetFilterOverlay(!props.filterOverlayFlag)
                }}>
                <View style={styles.transparentModalOverlay}>
                    <View style={styles.modalView}>
                      {returnDefaultFilterMenu()}
                    </View>
                </View>
            </Modal>

    )
}

const styles = StyleSheet.create({
    transparentModalOverlay: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.DarkGrey.Transparent
      },
      modalView: {
        marginVertical: 30,
        padding: 3,
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: (Dimensions.get('window').width * 5/6),
        height: (Dimensions.get('window').height * 5/6 ) 
      },
      searchButton: {
        borderRadius: 20,
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 8/12),
      },      
      cancelButton: {
        borderRadius: 20,
        elevation: 2,
        backgroundColor: Colors.OffWhite.color,
        width:(Dimensions.get('window').width * 1/12),
      },
      buttonTextStyle: {
        color: "black",
        textAlign: "center",
        fontSize: 18
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      filterOptionsRowStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
      },
      closeIconWrapper: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      }   
});

/*
*/