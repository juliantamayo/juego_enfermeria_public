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
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m1.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m2.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m3.jpg')} resizeMode="cover">

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
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m8.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m9.jpg')} resizeMode="cover">

          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m11.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m10.jpg')} resizeMode="cover">

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
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m12.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m13.jpg')} resizeMode="cover">

          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m14.jpg')} resizeMode="cover">

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
          <ImageBackground style={styles.slide} source={require('../../assets/images/WhatsApp2.jpeg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/images/WhatsApp2.jpeg')} resizeMode="cover">

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
         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m15.jpg')} resizeMode="cover">

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
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m4.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m5.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m6.jpg')} resizeMode="cover">

          </ImageBackground>

         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m7.jpg')} resizeMode="cover">

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
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m17.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m18.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m19.jpg')} resizeMode="cover">

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
            bottom: 30
          }}
          loop={false}
        >
            <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m17.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m20.jpg')} resizeMode="cover">

          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m21.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m22.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m23.jpg')} resizeMode="cover">

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
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m24.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m25.jpg')} resizeMode="cover">

          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m26.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m27.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m28.jpg')} resizeMode="cover">

          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m29.jpg')} resizeMode="cover">

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
         <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m30.jpg')} resizeMode="contain">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m31.jpg')} resizeMode="contain">

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
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m24.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m25.jpg')} resizeMode="cover">

          </ImageBackground>
          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m27.jpg')} resizeMode="cover">

          </ImageBackground>

          <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m28.jpg')} resizeMode="cover">

          </ImageBackground>
           <ImageBackground style={styles.slide} source={require('../../assets/ayudas/m29.jpg')} resizeMode="cover">

          </ImageBackground>
          
        </Swiper>
            </View> 
            </View>
            
        </Modal>
);