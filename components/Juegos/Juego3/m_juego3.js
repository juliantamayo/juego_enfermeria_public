import React, {Component, useState} from 'react';
import { View, 
         Text, 
         Alert, 
         StyleSheet, 
         ImageBackground,
         Image,
         Dimensions,
        TouchableOpacity } from 'react-native';
import styles from './../../Style.js';
import { RowItemJuego1} from "../../elementos/RowItemJuego1";
import { Modal_MenuJuego3 } from "../../elementos/ModalsTutorial";
import { ModalSNA } from "../../elementos/ModalsRepaso";
import {questions,questions2,questions3} from "../../data/sna";
const { width, height } = Dimensions.get('window')
export default function menu_juego3 ({navigation, route}) {

 const [modalVisible, setModalVisible] = useState(false);
 const [modalVisible2, setModalVisible2] = useState(false);
  var listadopj3 = new Array(questions,questions2,questions3);
 var cLetra = listadopj3[Math.floor(Math.random()*listadopj3.length)];
 
    return (
<ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>

    <Modal_MenuJuego3
              
               text={modalVisible}
              onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
              />

      <ModalSNA
              
             text={modalVisible2}
             onPress={() => {
                setModalVisible2(!modalVisible2);
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

             
          
            <View style={style.footerbodySNP}>


              <View style={style.footerSNPizq}>
                <View style={style.margen}></View>
                    <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                        onPress={() =>navigation.navigate("m_t_sna")}>
                       <Image style={ styles.image } source={require("../../../assets/images/button-izquierda.png")} />
                  </TouchableOpacity>
                      <Text style={style.textoboton}>ESTUDIAR</Text>
                </View>
                  
                <View style={style.footerSNPcenter}>
                 <View style={style.containerText}>
                    <Text style={style.title}>SNA</Text>
                   </View>
                </View>

              <View style={style.footerSNPDer}>
                <View style={style.margen}></View>

                  <RowItemJuego1   
                        onPress={() =>
                          navigation.navigate("juego3", {
                            title: "SNP",
                           questions:listadopj3[Math.floor(Math.random()*listadopj3.length)],
                            color: "#10a6a4"
                          })
                        }
                      />
                  <Text style={style.textoboton2}>JUGAR</Text>
              </View>

          </View>
    
      </View>
     </ImageBackground>
 );
  
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height :'100%',
    width : '100%'
  },

   footerbodySNP: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent : 'center',
    height :'100%',
    width : '100%'
    },
     containerText:{ 
     paddingHorizontal:5,
    paddingVertical: 10,
    marginBottom: 1,
    borderRadius: 50,
    margin: 10,
   // width:'50%'
   width: Dimensions.get('window').width/3,
  },
    footerSNPizq: {
     flex: 1,
     alignItems : 'flex-end',
     justifyContent: 'center',
     height :'100%',
     width : '100%'

    },
    footerSNPcenter: {
     flex: 1,
     alignItems : 'center',
     justifyContent: 'center',
     height :'100%',
     width : '100%'

    },
    footerSNPDer: {
     flex: 1,
     alignItems : 'flex-start',
      justifyContent: 'center',
     height :'100%',
     width : '100%'

    },
   title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#F3DD11",
    color: "#20232a",
    textAlign: "center",
    fontSize: 35,
    paddingVertical: 4,
    paddingRight : 3,
    paddingLeft :3,
    fontWeight: "bold"
  },
  textoboton: {
    marginRight : 10,
    borderColor: "#20232a",
    backgroundColor: "white",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
   textoboton2: {
    marginLeft : 15,
    borderColor: "#20232a",
    backgroundColor: "white",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  margen:{
    margin:10
  }
});
