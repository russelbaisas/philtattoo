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
  Navigator,
  ListView

} from 'react-native';

import GiftedSpinner from 'react-native-gifted-spinner';
import Drawer from 'react-native-drawer';

import Header from './header';
import LeftButton from './leftbutton';
import RightButton from './rightbutton';
import Profile from './profile';

import { Actions} from 'react-native-router-flux';

export default class main extends Component {

  constructor(props) {
    super(props);
    var ds =  new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
    this.state = {
      dataSource: ds.cloneWithRows([{ "picture":"http://beacontobusiness.com/json/image/pic56.jpeg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"},{ "picture":"http://beacontobusiness.com/json/image/pic1.jpg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"},
{"picture":"http://beacontobusiness.com/json/image/pic2.jpg","profilepic":"http://beacontobusiness.com/json/image/katvon.jpg", "lastname":"Margarethe"},{"picture":"http://beacontobusiness.com/json/image/pic3.jpg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"},{"picture":"http://beacontobusiness.com/json/image/pic4.jpg","profilepic":"http://beacontobusiness.com/json/image/russ.jpg", "lastname":"Baisas"}])
    }
  }

  render() {
    return(

    <View style={styles.Containter}>
        <View>
        <Header text="Gypsy" />
        </View>

            <ListView 
                 dataSource={this.state.dataSource}
                 renderRow={this.renderMyRow}
            />

      </View>      
  )}

  renderMyRow(rowData) {
    return(
          <View style={styles.container}>

            <View style={styles.contentPic}>

            <View style={styles.mainpic}>
            <Image source={{uri: rowData.picture}} style={styles.imgitems} />
            </View>
            <View style={styles.subrow}>
            <View style={styles.hearty}>
            <Image style={styles.subbutton} source={require('./src/icons/heart-icon-20.png')} />
            </View>
            <View style={styles.forumicon}>
            <Image style={styles.ficon} source={require('./src/icons/forums.png')} />
            </View>
            <View style={styles.profileView}>
            <TouchableHighlight onPress={Actions.profile} >
            <Image source={{uri: rowData.profilepic}} style={styles.profilep} />
            </TouchableHighlight>
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
     contentPic: {
    
   },
    mainpic: {
    top: 1
   },
    imgitems: {
    height: 200,
   },  
      subrow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#212121',
    opacity: .95,
   },
    hearty: {
      paddingTop: 10,
      paddingLeft: 8
   },
       subbutton: {
    height: 30,
    width: 30,
   },
       ficon: {
    height: 20,
    width: 20,
   },
      forumicon: {
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15
  
   },
       profileView: {

      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 10,
    flex: 1,
    alignItems: 'flex-end'
   },
     profilep: {
    height: 40,
    width: 40,
    borderRadius: 20,

   },
});

AppRegistry.registerComponent('main', () => main);