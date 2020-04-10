import React, {Component} from 'react';
import {StyleSheet} from 'react-native';




export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   // backgroundImage : 'url(../assets/images/background.png)'
    //backgroundImage: uri('../assets/images/background.png')
  },
  miniButon:{
      flex:0.3,
      flexDirection: 'column',
      backgroundColor: 'lightseagreen',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height :'100%',
      width : '100%'
     },
  imageContainer: {
       margin: 10,
       borderRadius: 60
     },
     image: {
       height:50,
       width: 50,
       borderRadius: 60
     },
     vBody: {
      flex:1,
      alignItems: 'center',
       justifyContent: 'center',
      backgroundColor: 'yellow',
      height :'100%',
      width : '100%'

     },
      image2: {
       height:200,
       width: 200,
       borderRadius: 100
     },
     miniButon:{
      flex:0.3,
      flexDirection: 'column',
      backgroundColor: 'lightseagreen',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height :200,
      width : '100%'
     },
      button: {
     margin: 20,
     height:50,
     width: 270,
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20
  }
});

