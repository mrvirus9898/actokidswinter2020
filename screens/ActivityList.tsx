import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList,
  TouchableNativeFeedbackBase
} from 'react-native';

import AppLogin from '../components/AppLogin'
import AppSignup from '../components/AppSignup'
import AppGoogleLogout from '../components/AppLogout'

import { Button, Card } from 'react-native-elements';

export default function ProgramList() {

    return(
        <View>
            <Text>Activity List Top Component</Text>
            
            <AppLogin />

        </View>
    );
}
//<AppLogin />
//<AppGoogleLogout />