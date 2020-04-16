import React, {Component } from 'react';
import {Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableHighlight,
        TouchableOpacity    
      } from 'react-native';
  import styles from './Style.js';
 // import im from '../assets/images/background.png';
 import { CommonActions } from '@react-navigation/native';

export default function menu ({navigation, route}) {


 
    return (
   //  <Imagebackground style={styles.container}>
    <ImageBackground source={require("../assets/images/background.png")}style={styles.container}>
       <View style={styles.header}>   
      <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/button-settings.png")} />
      </TouchableOpacity>
</View>


<View style={styles.headerDerecha}>    
  <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/buttonMinijuegos.png")} />
      </TouchableOpacity>
      
       <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                  params: { key: route.params.key },
                },
                { name: 'pruebaT' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/buttonteory.png")} />
      </TouchableOpacity>
      </View>

      </View>



      <View style={styles.vBody}>
       
        
        <TouchableOpacity style={ styles.imageContainer} activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                  params: { key: route.params.key },
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ styles.image2 } source={require("../assets/images/buttonstart.png")} />
      </TouchableOpacity>
       </View>
    
        </ImageBackground>
  );
  
}
/*
import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Back button!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

*/

