/*
import React, { Component } from 'react'
import {
 AsyncStorage, View, Text
} from 'react-native'

import AsyncStorageExample from './AsyncStorageExample'

export default class HomeContainer extends Component {
 constructor() {
   super();
   this.state = {
    'data': ''
   }
 }
 componentDidMount = () => {
   AsyncStorage.getItem('data').then((value) => {
    this.setState({'data': value});
   });
 }
 setData = (value) => {
   AsyncStorage.setItem('data', value);
   this.setState({'data': value});
 }
 render() {
   return (
<View>

    <AsyncStorageExample
      data = {this.state.data}
      setData = {this.setData}
 
    />
   {this.state.data == 6? <Text>hola</Text>: null }
    </View>

   );
 }
}
*/

//This is an example of React Native Global Scope Variables//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button } from 'react-native';
//import all the components we are going to use.
export default class SecondPage extends Component {
  static navigationOptions = {
    //Title of the Second Screen
    title: 'SecondScreen',
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>
          {global.hola}
          {/*Global Variable*/}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
