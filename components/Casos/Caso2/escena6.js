import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ScrollView, StatusBar, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
import style from './../../Style.js';
import styles from '../../Style_escenas6.js'
const { width } = Dimensions.get('window');

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class extends Component {
  render() {
    return (
       <ImageBackground source={require("../../../assets/images/background.png")}style={style.container}>
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
      >
       
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
        <ScrollView  >
       <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00182</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Disposición para mejorar el autocuidado.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Patrón de realización de actividades por parte de la propia persona que ayuda a alcanzar los objetivos relacionados con la salud y que puede ser reforzado.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Asistencia de controles médicos</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Asistencia por su propia cuenta a citas control con enfermería, para valoración integral, participando activamente en el mantenimiento de su salud.{"\n"+"\n"} 
                                              Expresa deseos de aumentar el autocuidado{"\n"+"\n"} 
                                              Expresa deseos de aumentar el conocimiento de estrategias para el autocuidado</Text>
                </Text>
                </View>
          </View>
                </ScrollView>
        </View>

        <View
          style={styles.slide}
          title={<Text numberOfLines={1}></Text>}
        >
        <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00161</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Disposición para mejorar los conocimientos</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>La presencia o adquisición de información cognitiva sobre un tema específico es suficiente para alcanzar los objetivos relacionados con la salud y puede ser reforzada</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Pregunta las inquietudes que él tenga frente a su valoración y está atento a cada procedimiento a realizar.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Paciente que asiste a cita control para tener nuevos conocimientos.{"\n"}Expresa deseo de mejorar en el aprendizaje</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
      </Swiper>
      </ImageBackground>
    )
  }
}