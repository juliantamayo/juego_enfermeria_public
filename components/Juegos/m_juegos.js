import React, {useState, Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableHighlight,
        TouchableOpacity,
        SafeAreaView,
        StatusBar
      } from 'react-native';
import styles from './../Style.js';
import { CommonActions } from '@react-navigation/native';
import { Modal_MenuJuegos} from "../elementos/ModalsTutorial";

export default function m_juegos ({navigation, route}) {

const [modalVisible, setModalVisible] = useState(false);

    return (
   
    <ImageBackground source={require("../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
    
     <Modal_MenuJuegos
      
       text={modalVisible}
      onPress={() => {
                setModalVisible(!modalVisible);
              }}
      />

      <View style={styles.header}>

          <View style={styles.headerIzquierda}>
            

              <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
               onPress={() =>
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [
                        {
                          name: 'M_juegos',
                        },
                        { name: 'Menu' },
                      ],
                    })
                  )}>
                       <Image style={ styles.image } source={require("../../assets/images/button-home.png")} />
              </TouchableOpacity>

             <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                 setModalVisible(!modalVisible);
              }}>
               <Image style={ styles.image } source={require("../../assets/images/ayuda.png")} />
              </TouchableOpacity>


          </View>

          <View style={styles.headerDerecha}>

              <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
               onPress={() => navigation.navigate('Menu')}>
                       <Image style={ styles.image } source={require("../../assets/images/buttonteory.png")} />
              </TouchableOpacity>

          </View>
      </View>

     
      <View  style={style.container}>
      <StatusBar barStyle="light-content" />
        <SafeAreaView>
        
           <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => navigation.navigate('m_juego1')}>
            <Text style={styles.text}> Enfrenta al S.N.C y S.N.P  </Text>
           </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.button2}  onPress={() => navigation.navigate('M_juego2')}>
            <Text style={styles.text}> ¡ Ponte a prueba ! </Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.button3}  onPress={() => navigation.navigate('M_juegos3')}>
            <Text style={styles.text}> ¿Listo para el S.N.A? </Text>
           </TouchableOpacity>
            </SafeAreaView>
       </View>
    
        </ImageBackground>

       
  );
  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: 'rgba(47,163,218, .4)',
    alignItems: "center",
    // backgroundColor: 'yellow',
      height :'100%',
      width : '100%'
  }
});