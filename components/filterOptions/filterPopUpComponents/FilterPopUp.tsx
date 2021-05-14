/*
NICK BENNETT
ACTOKIDS

FILTER POP UP
*/


import React from 'react';

import {StyleSheet, View, Text, Modal, Pressable} from 'react-native';

import Colors from '../../../constants/Colors'

export default function FilterPopUp(props: any) {
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
                        <Text style={styles.modalText}>Physical Activity</Text>
                        <Text style={styles.modalText}>Physical Intensity</Text>
                        <Text style={styles.modalText}>Competitiveness</Text>
                        <Text style={styles.modalText}>Skill Level</Text>
                        <Text style={styles.modalText}>Competitive Skill</Text>
                        <Text style={styles.modalText}>Certifications</Text>
                        <Text style={styles.modalText}>Accessibility</Text>
                        <Text style={styles.modalText}>Language Options</Text>
                        <Text style={styles.modalText}>Cost</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.SetFilterOverlay(!props.filterOverlayFlag)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

    )
}

const styles = StyleSheet.create({
    transparentModalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.DarkGrey.Transparent
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});