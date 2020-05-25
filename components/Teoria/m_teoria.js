import React from 'react';
import {  ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper'
import styles from '../Style.js';


import { RowItem } from "../elementos/RowItem";
import { Modal_C1_escena2 } from "../elementos/ModalsTutorial";
const { width, height } = Dimensions.get('window')
const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}
export default class m_teoria extends React.Component {

    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,
    };
    
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

 render() {
  const { modalVisible } = this.state;
  return (
   <ImageBackground source={require("../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
   
    <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
      >

    <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.pop()}>
               <Image style={ styles.image } source={require("../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
                      }}>
               <Image style={ styles.image } source={require("../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
       <RowItem   
        name="1. Sístema Nervioso Periférico"
      color="#F8D95B"
      onPress={() =>
        this.props.navigation.navigate("m_t_snp")}
       />
   
    <RowItem
      name="2. Sístema Nervioso Central"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("m_t_snc")}
       />

    <RowItem
      name="3. Sístema Nervioso Autónomo"
      color="#F8D95B"
       onPress={() =>
        this.props.navigation.navigate("m_t_sna")}
       />
  
    <RowItem
      name="4. Pruebas de Valoración"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("m_t_pruval")}
       />
    </ScrollView>
  </View>
    <ScrollView  >
      <View style={style.container}>
    
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.pop()}>
               <Image style={ styles.image } source={require("../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
                      }}>
               <Image style={ styles.image } source={require("../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>

     <Text style={style.title}> SUBTEMAS</Text>

       <RowItem   
        name=" Pares Craneales"
      color="#F8D95B"
      onPress={() =>
        this.props.navigation.navigate("t_pares_craneales")}
       />
   
    <RowItem
      name="Médula Espinal"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("t_medula_espinal")}
       />

    <RowItem
      name="Nervios Raquídeos"
      color="#F8D95B"
       onPress={() =>
        this.props.navigation.navigate("t_nervios_raquideos")}
       />
  
    <RowItem
      name="Encéfalo"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("t_encefalo")}
       />

    <RowItem
      name="Cerebro"
      color="#F8D95B"
      onPress={() =>
        this.props.navigation.navigate("t_cerebro")}
       />

       <Text style={style.text}> {"\n"}{"\n"}{"\n"}{"\n"}</Text>

     </View>

    </ScrollView>


   </Swiper>
  </ImageBackground>
  );
}
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height :'100%',
   
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 8,
  },
  text: {
    textAlign : 'center',
    fontSize: 20,
  },
   title:{ 

    textAlign : 'center',
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: "gold",
    borderRadius: 50,
    padding: 3


  },
  button: {
    backgroundColor: "rgba(3, 33, 0, 0.47)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "66%",
    height :'30%',
    margin: 20,
    marginLeft : 60,
   
  },
  viewScroll:{
    flex : 1,
    backgroundColor: 'red',
    alignItems: "center",
    width: "100%",
    height :'100%',
  }
});