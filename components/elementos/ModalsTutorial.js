import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert, Modal, TouchableHighlight,
  StatusBar,  SafeAreaView,ScrollView, Image, ImageBackground } from "react-native";
import Swiper from 'react-native-swiper';


const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '97%',
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
    elevation: 2
  },
  modalTex3: {
    textAlign: "center",
    color: "#fff"   
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
    flex:0.9,
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 4,
    justifyContent: "center",
    width: '90%',
    height: '90%',
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
   image: {
   width: '90%',
    height: '90%',
  }
});


export const Modal_Menu = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 10
          }}
          loop={false}
        >
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp1.jpg')} resizeMode="cover">
         </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp2.jpg')} resizeMode="cover">
         </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp3.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp4.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp4-1.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp5.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp6.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp7.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp8.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp9.jpg')} resizeMode="cover"> 
        </ImageBackground>
        <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mp10.jpg')} resizeMode="cover"> 
        </ImageBackground>


        </Swiper>
            </View> 
            </View>
            
         
        </Modal>
);


export const Modal_MenuJuego1 = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >

		   <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj1_1.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj1_2.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj1_3.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj1_4.jpg')} resizeMode="cover">
          </ImageBackground>
          
          
        </Swiper>
            </View> 
            </View>
            
         
        </Modal>
);

export const Modal_MenuJuego2 = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj2_1.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj2_2.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj2_3.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj2_4.jpg')} resizeMode="cover">
          </ImageBackground>

        </Swiper>
            </View> 
            </View>
            
        </Modal>
);

export const Modal_MenuJuego3 = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj3_1.jpg')} resizeMode="cover">
          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj3_2.jpg')} resizeMode="cover">
          </ImageBackground>
          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);

export const Modal_MenuCasos = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mc1.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mc2.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mc3.jpg')} resizeMode="cover">
          </ImageBackground>
          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);

export const Modal_MenuJuegos = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj1.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj2.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj3.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mj4.jpg')} resizeMode="cover">
          </ImageBackground>

        </Swiper>
            </View> 
            </View>
            
        </Modal>
);

export const Modal_MenuCaso1 = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro1.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro2.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro7.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/mc3.jpg')} resizeMode="cover">
          </ImageBackground>


          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);
export const Modal_C1_escena1 = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 10
          }}
          loop={false}
        >

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro3.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro4.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro5.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro6.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro7.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/Intro8.jpg')} resizeMode="cover">
          </ImageBackground>

          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);

export const Modal_C1_escena2 = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
         
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp2.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp3.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp4.jpg')} resizeMode="contain">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp5.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp6.jpg')} resizeMode="contain">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp7.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp8.jpg')} resizeMode="cover">
          </ImageBackground>



          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);

export const Modal_C1_escena3 = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pv1.jpg')} resizeMode="contain">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pv2.jpg')} resizeMode="contain">

          </ImageBackground>
          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);
export const Modal_Preguntas = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp2.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp3.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp4.jpg')} resizeMode="contain">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp5.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp6.jpg')} resizeMode="contain">
          </ImageBackground>

        </Swiper>
            </View> 
            </View>
            
        </Modal>
);
export const Modal_Pruebas = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pv1.jpg')} resizeMode="contain">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pv2.jpg')} resizeMode="contain">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp4.jpg')} resizeMode="contain">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp5.jpg')} resizeMode="contain">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/pp6.jpg')} resizeMode="contain">
          </ImageBackground>



          
          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);
export const Modal_Valoracion = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/v1.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/v2.jpg')} resizeMode="cover">
          </ImageBackground>

          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);
export const Modal_Teoria = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper} showsButtons
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 30
          }}
          loop={false}
        >
         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/t1.jpg')} resizeMode="cover">
          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/t2.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/t3.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/t4.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/t5.jpg')} resizeMode="cover">
          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/t6.jpg')} resizeMode="cover">
          </ImageBackground>

          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);