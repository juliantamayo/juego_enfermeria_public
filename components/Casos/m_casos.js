import React, { useState, useEffect } from "react";
import { View, 
		 StyleSheet, 
		 Text, 
		 Dimensions, 
		 TouchableOpacity, 
		 ScrollView, 
		 StatusBar,
		 Image,
		 ImageBackground } from "react-native";

import estilo from '../Style.js';
 import { CommonActions } from '@react-navigation/native';
import { Modal_MenuCasos} from "../elementos/ModalsTutorial";

export default function m_casos({navigation, route}) {
  
const [modalVisible, setModalVisible] = useState(false);

  return (
<ImageBackground source={require("../../assets/images/background.png")}style={estilo.container} resizeMode='contain'>

 <Modal_MenuCasos
      
       text={modalVisible}
      onPress={() => {
                setModalVisible(!modalVisible);
              }}
      />
   

<View style={estilo.header}>   
      <View style={estilo.headerIzquierda}>

      
     <TouchableOpacity style={ estilo.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'M_casos',
                },
                { name: 'Menu' },
              ],
            })
          )
        }>
               <Image style={ estilo.image } source={require("../../assets/images/button-back.png")} />
      </TouchableOpacity>

        <TouchableOpacity style={ estilo.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                 setModalVisible(!modalVisible);
              }}>
        <Image style={ estilo.image } source={require("../../assets/images/ayuda.png")} />
      </TouchableOpacity>
</View>


<View style={estilo.headerDerecha}>    
  <TouchableOpacity style={ estilo.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'M_casos',
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ estilo.image } source={require("../../assets/images/buttonMinijuegos.png")} />
      </TouchableOpacity>
      
       <TouchableOpacity style={ estilo.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('m_teoria')}>
               <Image style={ estilo.image } source={require("../../assets/images/buttonteory.png")} />
      </TouchableOpacity>
      </View>
      </View>

    <View style={style.container}>
   

      <TouchableOpacity onPress={() => navigation.navigate('M_caso1')} style={style.button}>
        <Text style={style.text}>Caso 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>
                          navigation.navigate("M_caso2")
                        } style={style.button}>
        <Text style={style.text}>Caso 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('M_caso3')} style={style.button}>
        <Text style={style.text}>Caso 3</Text>
      </TouchableOpacity>

    </View>

     </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'red',
    width: "100%",
    height :'100%',

  },
  button: {
    backgroundColor: "rgba(3, 110, 101, 0.7)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    height :'15%',
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "bold"
  }
});

