import React, {Component,useState} from 'react';
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
import { ModalSNC, ModalSNP } from "../../elementos/ModalsRepaso";
import { Modal_MenuJuego1 } from "../../elementos/ModalsTutorial";

import {J2questions,J2questions2,J2questions3} from "../../data/snp";

import {questions,questions2,questions3} from "../../data/C1_data/D_c1_juego_part1";
const { width, height } = Dimensions.get('window')
export default function menu_juego1 ({navigation, route}) {

 const [modalVisible, setModalVisible] = useState(false);
 const [modalVisible2, setModalVisible2] = useState(false);
 const [modalVisible3, setModalVisible3] = useState(false);

 var listadopPJ1 = new Array(questions,questions2,questions3);
 var listadopPJ2 = new Array(J2questions,J2questions2,J2questions3);


 
    return (

<ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>

        <ModalSNC
              
             text={modalVisible}
             onPress={() => {
                      setModalVisible(!modalVisible);
                      }}
              />

        <ModalSNP
              
             text={modalVisible2}
             onPress={() => {
                setModalVisible2(!modalVisible2);
                    }}
              />

              <Modal_MenuJuego1
              
             text={modalVisible3}
             onPress={() => {
                setModalVisible3(!modalVisible3);
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
                 setModalVisible3(!modalVisible3);
              }}>
                           <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>

      </View>
      <View style={style.container}>

          <View style={style.headerbodySNC}>


              <View style={style.hederSNcizq}>
               <View style={style.margen}></View>
                  <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                       onPress={() => navigation.navigate("m_t_snc")}>

                       <Image style={ styles.image } source={require("../../../assets/images/button-izquierda.png")} />
                  </TouchableOpacity>
                   <Text style={style.textoboton}>ESTUDIAR</Text>
              </View>
                  
              <View style={style.hederSNccenter}>
               <View style={style.containerText}>
              <Text style={style.title}>SNC</Text>
               </View>
              </View>

                <View style={style.hederSNDer}>
                 <View style={style.margen}></View>
                        
                       <RowItemJuego1   
                        name="SNC"
                        color="#20b2aa"
                        onPress={() =>
                          navigation.navigate("juego1_part1", {
                            title: "SNC",
                            questions:listadopPJ1[Math.floor(Math.random()*listadopPJ1.length)],
                            color: "#20b2aa"
                          })
                        }
                      />
    
   
                       <Text style={style.textoboton2}>JUGAR</Text>
                </View>
                
               
                </View>
             
          
            <View style={style.footerbodySNP}>


              <View style={style.footerSNPizq}>
                <View style={style.margen}></View>
                    <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                         onPress={() => navigation.navigate("m_t_snp")}>
                       <Image style={ styles.image } source={require("../../../assets/images/button-izquierda.png")} />
                  </TouchableOpacity>
                      <Text style={style.textoboton}>ESTUDIAR</Text>
                </View>
                  
                <View style={style.footerSNPcenter}>
                <View style={style.containerText}>
                    <Text style={style.title}>SNP</Text>
                </View>
                </View>

              <View style={style.footerSNPDer}>
                <View style={style.margen}></View>

                  <RowItemJuego1   
                        name="SNP"
                        color="#98fb98"
                        onPress={() =>
                          navigation.navigate("juego1_part2", {
                            title: "SNP",
                            questions:listadopPJ2[Math.floor(Math.random()*listadopPJ2.length)],
                            color: "#20b2aa"
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
  containerText:{ 
     paddingHorizontal:5,
    paddingVertical: 10,
    marginBottom: 1,
    borderRadius: 50,
    margin: 10,
   // width:'50%'
   width: Dimensions.get('window').width/3,
  },
  headerbodySNC: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent : 'center',
      height :'100%',
      width : '100%'
    },
    hederSNcizq: {
     flex: 1,
     alignItems : 'flex-end',
     justifyContent : 'center',
     height :'100%',
     width : '100%'

    },
    hederSNccenter: {
     flex: 1,
     alignItems : 'center',
     justifyContent : 'center',
     height :'100%',
     width : '100%'

    },
    hederSNDer: {
     flex: 1,
     alignItems : 'flex-start',
     justifyContent : 'center',
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
    footerSNPizq: {
     flex: 1,
     alignItems : 'flex-end',
     height :'100%',
     width : '100%'

    },
    footerSNPcenter: {
     flex: 1,
     alignItems : 'center',
     height :'100%',
     width : '100%'

    },
    footerSNPDer: {
     flex: 1,
     alignItems : 'flex-start',
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
