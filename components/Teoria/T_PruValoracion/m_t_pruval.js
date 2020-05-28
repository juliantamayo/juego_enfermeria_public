import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage } from 'react-native';
import styles from '../../Style.js';
import { RowItem } from "../../elementos/RowItem";
import { Conciencia, Orientacion, juicio, memoria, percepcion, pensamiento, afecto, area_psicomotora } from "../../data/Teoria/D_T_PruVal";

export default class m_t_pruval extends React.Component {

  
    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
    };
    

 render() {



  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
   
   
    <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.pop()}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>

      </View>
     
      </View>
       <RowItem   
      name="1. Conciencia"
      color="#F8D95B"
       onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:Conciencia})}
       />
   
    <RowItem
      name="2. Orientación"
      color="#00bcd4"
     onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:Orientacion})}
       />

    <RowItem
      name="3. Juicio"
      color="#F8D95B"
      onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:juicio})}
       />
  
    <RowItem
      name="4. Memoria"
      color="#00bcd4"
    onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:memoria})}
       />
        <RowItem
      name="5. Percepción"
      color="#F8D95B"
     onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:percepcion})}
       />

    <RowItem
      name="6. Pensamiento"
      color="#00bcd4"
     onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:pensamiento})}
       />

      <RowItem
      name="7. Afecto"
      color="#F8D95B"
     onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:afecto})}
       />

           <RowItem
      name="8. Área Psicomotora"
      color="#00bcd4"
     onPress={() =>
        this.props.navigation.navigate("t_pruval",{prueba:area_psicomotora})}
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