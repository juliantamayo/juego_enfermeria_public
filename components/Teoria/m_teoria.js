import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';

import styles from '../Style.js';


import { RowItem } from "../elementos/RowItem";
import { Modal_C1_escena2 } from "../elementos/ModalsTutorial";
import { SNC, SNP, SNA, Pruval } from "../elementos/Modals_teoria";

export default class m_teoria extends React.Component {

  
    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,
     modal_snc:false,
     modal_snp:false,
     modal_sna:false,
     modal_pruval:false
    };
    
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  setModalVisible_snc = (visible) => {
    this.setState({ modal_snc: visible });
  };
  setModalVisible_snp = (visible) => {
    this.setState({ modal_snp: visible });
  };
   setModalVisible_sna = (visible) => {
    this.setState({ modal_sna: visible });
  };
    setModalVisible_pruval = (visible) => {
    this.setState({ modal_pruval: visible });
  };


 render() {
  const { modalVisible, modal_snp, modal_snc, modal_sna, modal_pruval } = this.state;


  return (
   <ImageBackground source={require("../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
   
    <Modal_C1_escena2
      
       text={modalVisible}
       onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
      />
        <SNC
      
       text={modal_snc}

       onPress={() => {
                  this.setModalVisible_snc(!modal_snc);
                }}
      />
      <SNP
      
       text={modal_snp}

       onPress={() => {
                  this.setModalVisible_snp(!modal_snp);
                }}
      />
        <SNA
      
       text={modal_sna}

       onPress={() => {
                  this.setModalVisible_sna(!modal_sna);
                }}
        />
         <Pruval
      
       text={modal_pruval}

       onPress={() => {
                  this.setModalVisible_pruval(!modal_pruval);
                }}
        />




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