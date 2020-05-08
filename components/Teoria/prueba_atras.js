//------------bloqueo boton atras android
/*
import React, {Component,} from 'react';
import {
    View,
    Text,
    BackHandler,
    ToastAndroid,
} from 'react-native';

export default class BackButtonDemo extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }

    render() {
        return (
            <View>
                <Text>Back button example</Text>
            </View>
        );
    }
}
*/

//------- scroll horizontal pantallas
/*
import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions, Text } from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height
  },
  modalText: {
   // marginBottom: 15,
    textAlign: "center",
     
  }
}

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image source={require('../../assets/images/bg.jpg')} style={styles.imgBackground} />
        <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/2.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
           <Text style={styles.modalText}>Hello World!</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}
*/
/*

//--------hiden
import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default class hideshow extends Component {

  constructor(){

    super();

    this.state ={

      isVisible:false,
      isVisible2:false,
      val:0
    }
  }  


  ToggleFunction = () => {
         if(this.state.val<=0){
    this.setState(state => ({

      isVisible: !state.isVisible,
      
    }));
}else if(this.state.val<=2){
      this.setState(state => ({
       isVisible: !state.isVisible,
      isVisible2: !state.isVisible2

    }));
}
  };


  render() {
     const num = <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World4! </Text>;
    return (

      <View style={styles.MainContainer}>
     <Button title="Toggle Visibility" onPress={this.ToggleFunction} />
      {  

        this.state.isVisible ? <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World! </Text> : null
       
      }
      {  

        this.state.isVisible2 ? <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World2! </Text> : null
      
      }

                    

     
       <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> {this.state.val} </Text>

           {this.state.val <= 0? <Text>data</Text>: null }

      </View>
         
              


    );
  }
}

const styles = StyleSheet.create({

MainContainer :{
justifyContent: 'center',
flex:1,
margin: 10

},
m:{
    flex:0.5,
    width : '100%',
    height : '50%',
    backgroundColor: "gray",
}

});
*/
/*
//This is an example code to understand AsyncStorage// 
import React, { Component } from 'react';
//import react in our code. 

import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity, AsyncStorage } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: 7,
      //to get the value from the TextInput
      getValue: '',
      //to set the value on Text
    };
  }
  saveValueFunction = () => {
    //function to save the value in AsyncStorage
    if(this.state.textInputData){
      //To check the input not empty
      AsyncStorage.setItem('any_key_here', this.state.textInputData);
      //Setting a data to a AsyncStorage with respect to a key 
      this.setState({ textInputData: '' })
      //Resetting the TextInput
      alert('Data Saved');
      //alert to confirm
    }else{
      alert('Please fill data');
      //alert for the empty InputText
    }
  };
  getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(value =>
      //AsyncStorage returns a promise so adding a callback to get the value
      this.setState({ getValue: value })
      //Setting the value in Text 
    );
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Some Text here"
          value={this.state.textInputData}
          onChangeText={data => this.setState({ textInputData: data })}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> SAVE VALUE </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.getValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> GET VALUE </Text>
        </TouchableOpacity>
        <Text style={styles.text}> {this.state.getValue} </Text>

         {this.state.getValue >= 1? <Text>data2</Text>: null }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop:60
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#808000',
  },
  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808000',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
*/
/*
import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => (
  <Swiper style={styles.wrapper} showsButtons loop={false}>
    <View testID="Hello" style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
)
*/

import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
      >
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image style={styles.image} source={require('../../assets/images/bg.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
        >
          <Image style={styles.image} source={require('../../assets/images/2.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
        >
          <Image style={styles.image} source={require('../../assets/images/3.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
          }
        >
          <Image style={styles.image} source={require('../../assets/images/1.jpg')} />
        </View>
      </Swiper>
    )
  }
}