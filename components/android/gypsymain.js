'use strict';
import React, { Component } from 'react';


//const SignIn = require('./components/login.js');
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  Image,
  DeviceEventEmitter,
  Navigator,
  ScrollView,
  BackAndroid,
  ToolbarAndroid,
  TextInput,
  AsyncStorage,
  ListView

} from 'react-native';

import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';


class GypsyMain extends Component {

constructor(props) {
    super(props);
    var ds =  new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
    this.state = {
      dataSource: ds.cloneWithRows([{ "picture":"http://beacontobusiness.com/json/image/pic56.jpeg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"},{ "picture":"http://beacontobusiness.com/json/image/pic1.jpg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"},
{"picture":"http://beacontobusiness.com/json/image/pic2.jpg","profilepic":"http://beacontobusiness.com/json/image/katvon.jpg", "lastname":"Margarethe"},{"picture":"http://beacontobusiness.com/json/image/pic3.jpg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"},{"picture":"http://beacontobusiness.com/json/image/pic4.jpg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"}])
    }
  }

  render() {
    return (
      <View style={styles.container}>


              <ListView 
                 dataSource={this.state.dataSource}
                 renderRow={this.renderMyRow}
                />

 
      </View>
    );
  }

  renderMyRow(rowData) {
    return(
          <View style={styles.container}>

            <View style={styles.contentPic}>

            <View style={styles.mainpic}>
            <Image source={{uri: rowData.picture}} style={styles.imgitems} />
            </View>
            <View style={styles.subrow}>
            <View style={styles.hearty}>
            <Image style={styles.subbutton} source={require('./components/android/src/icons/heart-icon-20.png')} />
            </View>
            <View style={styles.forumicon}>
            <Image style={styles.ficon} source={require('./components/android/src/icons/forums.png')} />
            <Text onPress={Actions.profile} > Russel </Text>
            </View>
            <View style={styles.profileView}>
            <Image source={{uri: rowData.profilepic}} style={styles.profilep} />
            </View>
            </View>
              </View>
          </View>
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

AppRegistry.registerComponent('GypsyMain', () => GypsyMain);
