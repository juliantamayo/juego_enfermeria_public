import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert, Modal, TouchableHighlight,
  StatusBar,  SafeAreaView,ScrollView, ImageBackground } from "react-native";
import Swiper from 'react-native-swiper';


const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: "rgba(0, 185, 188, 0.37)",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
   backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
     width : '80%',
    borderRadius : 20
  },
  modalTex1: {
    fontSize : 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black"   
  },
  modalTex3: {
    textAlign: "center",
    color: "#fff"   
  },
  modalTex2: {
    textAlign: "center",
    color: "black"   
  },
  headerModal:{
    flex: 0.1,
    flexDirection : 'row',
    alignItems: 'center',
    
  },
  headerMizq:{
    flex:0.9,
    backgroundColor: "#fbe122"
  },
  headerMDer:{
    flex:0.1,
    backgroundColor: "rgba(0, 0, 0, 0.48)",
  },
  bodyModal:{
    flex:0.7,
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 1)",
    //borderWidth: 4,
    borderRadius : 20,
    justifyContent: "center",
    width: '90%',
    height: '50%',
  },
  margen:{
    margin:5
  },
  wrapper: {
     //backgroundColor: 'white'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  Imagen:{
    width: 290,
  height: '100%',
  
  },
  viewBotonGMover:{
    flex:0.1,
    width: '100%',
    alignItems: "center",
   // backgroundColor: 'yellow',

  }
});


export const Modal_gameover = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione en Continuar");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
             
              <View style={styles.slide}>
              <ImageBackground  style={styles.Imagen} source={require('../../assets/images/robot-prod.png')} resizeMode="contain">
              <Text style={styles.modalTex1}>¡Se acabó el tiempo!</Text>
              <Text style={styles.modalTex2}>No te rindas</Text>
              </ImageBackground>
             </View>
           <View style={styles.viewBotonGMover}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>Continuar</Text>
              </TouchableHighlight>
             </View>
            </View> 
            </View>
            
         
        </Modal>
);
