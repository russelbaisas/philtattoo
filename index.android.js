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
  ScrollView,
  ListView

} from 'react-native';

import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import GypsyMain from './components/android/gypsymain';
import Profile from './components/android/profile';
import Main from './components/android/main';


class philtatoo extends Component {


  render() {
    return (
          <Router>
            <Scene key="root" hideNavBar={true}>
              <Scene key="main" component={Main} title="Gypsy" initial={true} />
               <Scene key="profile" component={Profile} title="profile"  />
            </Scene>
          </Router>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    contentContainer: {
    height: 200,
  },
  suboptions: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 50,
    padding: 10
  },
    subbutton: {
    height: 30,
    width: 30,
   },
    ficon: {
    height: 20,
    width: 20,
   },

   imgitems: {
    height: 200,

   },
   profilep: {
    height: 40,
    width: 40,
    borderRadius: 20,

   },
    profileView: {

      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 10,
    flex: 1,
    alignItems: 'flex-end'
   },
    hearty: {
      paddingTop: 10,
      paddingLeft: 8
   },
    forumicon: {
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15
  
   },
   namez: {
    fontSize: 15,
    color: 'white'
   },
   subheart: {

    height: 50,
    position: 'absolute'

   },
   subimg: {
    position: 'absolute'
   },
   subrow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#212121',
    opacity: .95,


   },
   contentPic: {
    
   },
   mainpic: {
    top: 1
   }
});

AppRegistry.registerComponent('philtatoo', () => philtatoo);
