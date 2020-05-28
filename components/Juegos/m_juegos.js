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
        StatusBar,
        ScrollView
      } from 'react-native';
import styles from './../Style.js';
import { CommonActions } from '@react-navigation/native';
import { Modal_MenuJuegos} from "../elementos/ModalsTutorial";
import { RowItemMjuegos } from "../elementos/RowItem";

export default function m_juegos ({navigation, route}) {

const [modalVisible, setModalVisible] = useState(false);

    return (
   
    <ImageBackground source={require("../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
     <ScrollView>
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
                onPress={() => navigation.navigate('m_teoria')}>
                       <Image style={ styles.image } source={require("../../assets/images/buttonteory.png")} />
              </TouchableOpacity>

          </View>
      </View>

     
      <View  style={style.container}>
      <StatusBar barStyle="light-content" />
        <SafeAreaView>


          <RowItemMjuegos   
                name="Enfrenta al S.N.C y S.N.P"
                color="#ADE827"
                onPress={() =>navigation.navigate("m_juego1")}
             />

            <RowItemMjuegos   
                name=" ¡ Ponte a prueba ! "
                color='gold'
                onPress={() =>navigation.navigate("M_juego2")}
             />
             <RowItemMjuegos    
                name="¿Listo para el S.N.A?"
                color="#ADE827"
                onPress={() =>navigation.navigate("M_juegos3")}
             />


            </SafeAreaView>
       </View>
      </ScrollView>
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