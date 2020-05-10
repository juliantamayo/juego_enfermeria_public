import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage,Dimensions } from 'react-native';

import styles from './../../Style.js';

import C3_Pru_valo1_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion1_dialog";
import C3_Pru_valo2_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion2_dialog";
import C3_Pru_valo3_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion3_dialog";
import C3_Pru_valo4_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion4_dialog";
import C3_Pru_valo5_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion5_dialog";
import C3_Pru_valo6_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion6_dialog";



import { ButtonContainer, RowItemEscena3 } from "../../elementos/RowItem";
const { width, height } = Dimensions.get('window')


export default class menu_caso3 extends React.Component {

  

    state ={
     'save_pregPcte1':0
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
       onPress={() => this.props.navigation.navigate('M_caso3')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
   <View style={style.viewcolsmenu}>

     <RowItemEscena3   
      name="1"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo1_dialogo", {
          title: "1 pruValo1 C3",
          questions: C3_Pru_valo1_dialog,
          color: "#36b1f0"
        })
      }
    />

    <RowItemEscena3
      name="2"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo2_dialogo", {
          title: "2  pruValo2 C3",
          questions: C3_Pru_valo2_dialog,
          color: "#799496"
        })
      }
    />
    </View>

    <View style={style.viewcolsmenu}>

    <RowItemEscena3
      name="3"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo3_dialogo", {
          title: "3 C3",
          questions: C3_Pru_valo3_dialog,
          color: "#799496"
        })
      }
    />
    <RowItemEscena3
      name="4"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo4_dialogo", {
          title: "4 C3",
          questions: C3_Pru_valo4_dialog,
          color: "#799496"
        })
      }
    />

     </View>
   
    <View style={style.viewcolsmenu}>

   <RowItemEscena3
      name="5"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo5_dialogo", {
          title: "5 C3",
          questions: C3_Pru_valo5_dialog,
          color: "#799496"
        })
      }
    />
    <RowItemEscena3
      name="6"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo6_dialogo", {
          title: "6 C3",
          questions: C3_Pru_valo6_dialog,
          color: "#799496"
        })
      }
    />

   </View>


   <Text style={styles.textStyle}>
         hola   {this.state.save_pregPcte1}
           
          </Text>
    </ScrollView>
  </View>
  </ImageBackground>
  );
}
}


const style = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems : 'stretch',
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
  },
  viewcolsmenu:{
    flex:1,
    alignItems : 'center',
    justifyContent : 'center',
    //backgroundColor: 'red',
    flexDirection: "row",
    width: "100%",
    height :'100%',

  },
  viewrowmenu:{
    flex:1,
   // backgroundColor: 'yellow',
    flexDirection: "column"
   

  }
});