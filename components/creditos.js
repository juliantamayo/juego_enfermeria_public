import React, {Component, useState  } from 'react';
import {Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity,
        StyleSheet  ,
         Dimensions,
         ScrollView
      } from 'react-native';
  import styles from './Style.js';
  import Swiper from 'react-native-swiper'

 import { CommonActions } from '@react-navigation/native';
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


export default function creditos ({navigation, route}) {

 
    return (
   //  <Imagebackground style={styles.container}>
    <ImageBackground source={require("../assets/images/background.png")}style={styles.container}>
        <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
     //   nextButton={<Text style={{ color: 'red',fontSize: 60,backgroundColor : 'transparent' }}>›</Text>}
     //   prevButton={<Text style={{ color: 'red',fontSize: 60,backgroundColor : 'transparent' }}>‹</Text>} 
      >

  <ScrollView  >
           <View style={escudo.margen}>  
        </View>
       <Text style={escudo.title}>Créditos </Text>
         <View style={escudo.margen}>  
        </View>
        <View style={escudo.cuerpo}>
         <View style={escudo.opacidad}>
           <Image style={ escudo.escudo} source={require("../assets/images/escudo.png")} resizeMode='contain' />
        </View>


         <Text style={escudo.textbold}>Diseñado y Desarrollado por:</Text>
         <Text style={escudo.textnormal}>Julian D. Tamayo & Karla N. Cárdenas</Text>

         <Text style={escudo.textbold}>Ilustraciones:</Text>
         <Text style={escudo.textnormal}> Karla N. Cárdenas </Text>
 
         <Text style={escudo.textbold}>Asesor Metodológico:</Text>
         <Text style={escudo.textnormal}>Ing. Ana Esperanza Merchán</Text>

        <Text style={escudo.textbold}>Asesor y Diseñador de Contenidos:</Text>
         <Text style={escudo.textnormal}> Enf. Adriana Hernández</Text>
         <Text style={escudo.textbold}>Estudiante de Apoyo Enfermería: </Text>
         <Text style={escudo.textnormal}> Cristhian J. García </Text>

        <Text style={escudo.textbold}>Todos los Derechos Reservados </Text>
          <View style={escudo.margen}>  
        </View>
        <View style={escudo.margen}>  
        </View>
         <View style={escudo.margen}>  
        </View>
        <View style={escudo.margen}>  
        </View>
        <View style={escudo.margen}>  
        </View>
        
      <View style={escudo.container}>
        <View style={escudo.margen}>  
        </View>
        <Text style={escudo.title}>Contacto:</Text>
        <Text style={escudo.text3}><Text style={escudo.textbold}>- Julian D. Tamayo: </Text>jdtamayo@ucundinamarca.edu.co</Text>
        <Text style={escudo.text3}><Text style={escudo.textbold}>- Karla N. Cárdenas: </Text>kncardenas@ucundinamarca.edu.co </Text>
        <Text style={escudo.text3}><Text style={escudo.textbold}>- Ing. Ana Esperanza Merchán: </Text> anaesperanzamerchan@ucundinamarca.edu.co</Text>
        <Text style={escudo.text3}><Text style={escudo.textbold}>- Enf. Adriana Hernández: </Text>ahernandezb@ucundinamarca.edu.co</Text>
        <Text style={escudo.text3}><Text style={escudo.textbold}>- Cristhian J. García: </Text> cjosegarcia@ucundinamarca.edu.co {"\n"}{"\n"} {"\n"} </Text>
         </View>
       </View>
    </ScrollView>
      <ScrollView >
      <View style={escudo.container}>
        <View style={escudo.margen}>  
        </View>
     <Text style={escudo.title}>Objetivos de Aprendizaje</Text>
     <Text style={escudo.text2}>Teniendo en cuenta que el presente proyecto, hace parte parte del Macroproyecto “Impacto De La Implementación de un Modelo De Aula Invertida Para El Proceso De Enseñanza  Aprendizaje  en el Componente Básico Profesional Del Programa De Enfermería”.{"\n"} {"\n"}Los objetivos de aprendizaje fueron planteados en pro a dar cumplimiento a los objetivos dispuestos en el macroproyecto, redactados por la docente de Enfermería  Adriana Hernández definiéndose de la siguiente manera: </Text>
      <Text style={escudo.text2}><Text style={escudo.textBold2}> > OBJETIVO DE APRENDIZAJE 1: </Text> Identificar los órganos que hacen parte del sistema nervioso central, periférico, autónomo. </Text>
     <Text style={escudo.text2}><Text style={escudo.textBold2}> > OBJETIVO DE APRENDIZAJE 2: </Text> Relacionar la fisiología de cada órgano de los diferentes sistemas nerviosos con las áreas a valorar</Text> 
      <Text style={escudo.text2}><Text style={escudo.textBold2}> > OBJETIVO DE APRENDIZAJE 3: </Text> Asociar la función cognoscitiva con la conceptualización, imágenes de cada prueba a valorar y órganos que intervienen en cada función cognoscitiva.</Text>
      <Text style={escudo.text2}><Text style={escudo.textBold2}> > OBJETIVOS DE APRENDIZAJE ABARCADOS EN LOS CASOS DE ESTUDIO</Text></Text>
      <Text style={escudo.subtext}><Text style={escudo.textBold2}> > </Text>Valorar  la esfera mental ( conciencia, orientación, juicio, memoria, percepción, pensamiento, afecto, área psicomotora), a través del análisis de cada área en la situación en los casos presentados. </Text>
      <Text style={escudo.subtext}><Text style={escudo.textBold2}> > </Text>Determinar número de par craneal, su nombre, función, valoración, técnica y hallazgos, en cada caso. </Text>
      <Text style={escudo.subtext}><Text style={escudo.textBold2}> > </Text>Identificar cómo se valora la función motora (marcha) en el componente neurológico. </Text>
      <Text style={escudo.subtext}><Text style={escudo.textBold2}> > </Text>Desarrollar las pruebas de coordinación (dedo-nariz, movimiento alterno) sus hallazgos normales y anormales en la respectiva situación.</Text>
      <Text style={escudo.subtext}><Text style={escudo.textBold2}> > </Text>Identificar pruebas para valorar sensibilidad superficial, profunda y fina y sus hallazgos normales y anormales en la situación correspondiente. </Text>
      <Text style={escudo.subtext}><Text style={escudo.textBold2}> > </Text>Comprender a través de una situación con animación el compromiso de los reflejos superficiales y profundos. {"\n"} {"\n"}{"\n"} {"\n"} </Text>

     </View>
      </ScrollView>
        <ScrollView >

      <View style={escudo.container}>
        <View style={escudo.margen}>  
        </View>
     <Text style={escudo.title}>Referencias Bibliográficas</Text>

     <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Marieb EN. Anatomía y fisiología humana. : Pearson Educación; 2008.</Text>
      <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text> Peate I, Nair M. Anatomía y fisiología para enfermeras. : Manual Moderno; 2012.</Text>
     <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text> Saladín, K.  Anatomía y fisiología.:McGraw-Hill Interamericana;2013.</Text> 
      <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Rizzo D. Fundamentos de anatomía y fisiología . : Cengage Learning; 2011.</Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Gomes TSC. Sistema Nervioso Autónomo. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Drake RL, Vogl W, Mitchell AM. Gray. Anatomía básica StudentConsult. : Elsevier; 2018. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Daniel Tomás. IES Abastos, Valencia. El encéfalo. Available at: http://www.mclibre.org/otros/daniel_tomas/3eso/nervioso/encefalo3eso.html. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Goldman SA, MD, PhD, University of Rochester Medical Center. Manual MSD. Versión para público general. Proveedor confiable de información médica desde 1899 . 2018; Available at: https://www.msdmanuals.com/es-co/hogar/enfermedades-cerebrales,-medulares-y-nerviosas/biolog%C3%ADa-del-sistema-nervioso/m%C3%A9dula-espinal. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Moore KL, Dalley AF. Anatomía con orientación clínica.  Ed. Médica Panamericana; 2009. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Rexed B. A cytoarchitectonic atlas of the spinal coed in the cat. J Comp Neurol 1954;100(2):297-379. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Martínez E, Lerma J. Valoración del estado de salud. 1990. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Chú Lee ÁJ, Cuenca Buele S, López Bravo M. Anatomía y fisiología del sistema nervioso. 2015. </Text>
       <Text style={escudo.text2}><Text style={escudo.textBold2}> > </Text>Navarro X. Fisiología del sistema nervioso autónomo. Revista Neurológica 2002;35(6):553-562. {"\n"}{"\n"}{"\n"}{"\n"}</Text>

     </View>


        </ScrollView>
    </Swiper>
        </ImageBackground>
  );
  
}


const escudo = StyleSheet.create({
  escudo: {
  height: Dimensions.get('window').height/4,
  width: Dimensions.get('window').width/4

  },
  margen:{
    margin:5
  },
  opacidad: {
    backgroundColor: "rgba(255, 255, 255, 0.90)" ,
    borderRadius: 20,
    alignItems: 'center'
  },
     cuerpo: {
      flex:1,
      alignItems: 'center',
     },
     subtext: {
    textAlign : 'justify',
    fontSize: 18,
    marginLeft: 35,
    marginRight: 10,
    margin: 10
  },

      textnormal: {
        backgroundColor: "rgba(255, 255, 255, 1)" ,
    fontSize: 19,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    //color: "#fff",

    textAlign: 'center'
  },     

   textbold: {
     backgroundColor: "rgba(255, 255, 255, 1)" ,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,

  },
title:{ 

    textAlign : 'center',
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#77c6c6',
    borderRadius: 50,
    padding: 3


  },
  text2: {
    textAlign : 'justify',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    margin: 10

  },
    text3: {
    textAlign : 'left',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    margin: 10

  },
  
   container: {
    flex: 1,
    width: "100%",
    height :'100%',
    backgroundColor: 'white',
  },
 textBold2:{
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#F8D95B',
  }

})