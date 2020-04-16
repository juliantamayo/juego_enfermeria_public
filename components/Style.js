import React, {Component} from 'react';
import {StyleSheet} from 'react-native';




export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   // backgroundImage : 'url(../assets/images/background.png)'
    //backgroundImage: uri('../assets/images/background.png')
  },header:{
      flex:0.3,
      flexDirection: 'row',
      height :'100%',
      width : '100%'
     },
      headerIzquierda:{
      flex:1,
      alignItems: 'flex-start'
     // backgroundColor: 'red',
     },
     headerDerecha:{
      flex:1,
    //  backgroundColor: 'yellow',
      //justifyContent: 'flex-end',
      alignItems: 'flex-end'
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
       borderRadius: 100
     },
     image: {
       height:60,
       width: 60,
       borderRadius: 100
     },
     vBody: {
      flex:1,
      alignItems: 'center',
       justifyContent: 'center',
     // backgroundColor: 'yellow',
      height :'100%',
      width : '100%'

     },
      image2: {
       height:200,
       width: 200,
       borderRadius: 100
     },
     button: {
     margin: 20,
     height:50,
     width: 270,
    alignItems: "center",
    backgroundColor: "#00fa9a",
    padding: 10,
    borderRadius: 20
  },
  button2: {
     margin: 20,
     height:50,
     width: 270,
    alignItems: "center",
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 20
  },
  button3: {
     margin: 20,
     height:50,
     width: 270,
    alignItems: "center",
    backgroundColor: "#9932cc",
    padding: 10,
    borderRadius: 20
  },
  text:{
    fontSize :20,
   // color: 'rgba(96,100,109, 1)',
    //lineHeight: 50
   // textAlign: 'center',
  },
  colorAqua:{
  backgroundColor: "#00ffff"
  },
 colorVerde1:{
 backgroundColor: "#00fa9a"
},
margen:{
    width : 280,
     margin: 100,

  }

});

