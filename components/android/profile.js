'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import GiftedSpinner from 'react-native-gifted-spinner';
import Drawer from 'react-native-drawer';


import LeftButton from './leftbutton';
import RightButton from './rightbutton';
import Header from './header';


export default class profile extends Component {

  render() {
    return(


    <View style={styles.Containter}>
        <View>
        <Header text="Gypsy" />
        </View>

      </View>
      
  )}
}

const styles = StyleSheet.create({
    headerContainter: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'black',
  }

});

AppRegistry.registerComponent('profile', () => profile);