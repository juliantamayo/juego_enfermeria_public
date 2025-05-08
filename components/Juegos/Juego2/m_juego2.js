import React, {Component, useState} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity
      } from 'react-native';
       import styles from './../../Style.js';
import { CommonActions } from '@react-navigation/native';
import { Modal_MenuJuego2 } from "../../elementos/ModalsTutorial";

export default function m_juego2 ({navigation, route}) {

const [modalVisible, setModalVisible] = useState(false);

    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
       
      <Modal_MenuJuego2
              
               text={modalVisible}
              onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
              />
       

      <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('M_juegos')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('Menu')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-home.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('m_teoria')}>
               <Image style={ styles.image } source={require("../../../assets/images/buttonteory.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                 setModalVisible(!modalVisible);
              }}>
                           <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>

      </View>


      <View style={style.container}>
       <View style={styles.margen2}></View>
       <TouchableOpacity activeOpacity={0.8} style={styles.buttonJP}  onPress={() => navigation.navigate('QuizIndex',
         {
        //aqui van los parametros
       })

     }>
        <Text style={styles.text}> JUGAR </Text>
       </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.buttonJP}  onPress={() => navigation.navigate('m_teoria')}>
        <Text style={styles.text}> REPASAR </Text>
       </TouchableOpacity>

       </View>
    
        </ImageBackground>
  );
  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
     //backgroundColor: 'yellow',
      height :'100%',
      width : '100%'
  }
});
