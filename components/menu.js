import React, {Component, useState  } from 'react';
import {Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity    
      } from 'react-native';
import styles from './Style.js';

import { CommonActions } from '@react-navigation/native';
import { Modal_Menu } from "./elementos/ModalsTutorial";

export default function menu ({navigation, route}) {

 const [modalVisible, setModalVisible] = useState(false);

    return (
    <ImageBackground source={require("../assets/images/background.png")}style={styles.container}>

    <Modal_Menu
      
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
                  name: 'Menu',
                },
                { name: 'Creditos' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/button-settings.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                 setModalVisible(!modalVisible);
              }}>
                           <Image style={ styles.image } source={require("../assets/images/ayuda.png")} />
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
        onPress={() => navigation.navigate('m_teoria')}>
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
                },
                { name: 'M_casos' },
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


