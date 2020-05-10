import React, {Component,useState} from 'react';
import { View, 
         Text, 
         Alert, 
         StyleSheet, 
         ImageBackground,
         Image,
        TouchableOpacity } from 'react-native';
import styles from './../../Style.js';
import { RowItemJuego1} from "../../elementos/RowItemJuego1";
import { ModalHistorial } from "../../elementos/Modals";
import sncQuestions from "../../data/snc";
import snpQuestions from "../../data/snp";

export default function menu_juego1 ({navigation, route}) {

 const [modalVisible, setModalVisible] = useState(false);
 
    return (

<ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>

        <ModalHistorial
              
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
       onPress={() => navigation.navigate('Home')}>
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

          <View style={style.headerbodySNC}>


              <View style={style.hederSNcizq}>
               <View style={style.margen}></View>
                  <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                        onPress={() => {
                 setModalVisible(!modalVisible);
                         }}>
                       <Image style={ styles.image } source={require("../../../assets/images/button-izquierda.png")} />
                  </TouchableOpacity>
                   <Text style={style.textoboton}>ESTUDIAR</Text>
              </View>
                  
              <View style={style.hederSNccenter}>
              <Text style={style.title}> SNC </Text>
              </View>

                <View style={style.hederSNDer}>
                 <View style={style.margen}></View>
                        
                       <RowItemJuego1   
                        name="SNC"
                        color="#20b2aa"
                        onPress={() =>
                          navigation.navigate("juego1_part1", {
                            title: "SNC",
                            questions: sncQuestions,
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
                          onPress={() => navigation.navigate('M_juegos')}>
                         <Image style={ styles.image } source={require("../../../assets/images/button-izquierda.png")} />
                    </TouchableOpacity>
                      <Text style={style.textoboton}>ESTUDIAR</Text>
                </View>
                  
                <View style={style.footerSNPcenter}>
                    <Text style={style.title}> SNP </Text>
                </View>

              <View style={style.footerSNPDer}>
                <View style={style.margen}></View>

                  <RowItemJuego1   
                        name="SNP"
                        color="#98fb98"
                        onPress={() =>
                          navigation.navigate("juego1_part2", {
                            title: "SNP",
                            questions: snpQuestions,
                            color: "#98fb98"
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
    backgroundColor: "#00fa9a",
    color: "#20232a",
    textAlign: "center",
    fontSize: 45,
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
   //paddingVertical: 8,
   // borderWidth: 4,
    borderColor: "#20232a",
   // borderRadius: 6,
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
