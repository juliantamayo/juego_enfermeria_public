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
                <Text style={styles.modalText}>00133</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Dolor crónico.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Experiencia sensitiva y emocional desagradable ocasionada por una lesión tisular real o potencial, inicio súbito o lento de cualquier intensidad de leve a grave, constante o recurrente sin un final anticipado o previsible y una duración superior a 3 (>3) meses.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}- Agentes que provocan lesiones.{"\n"}- Antecedentes de abuso de sustancias como licor, cigarrillo, gaseosas.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- Alteraciones en el patrón de dormir.{"\n"}- Anorexia.{"\n"}- Expresión facial de dolor, EVA 7{"\n"}</Text>
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
                <Text style={styles.modalText}>00146</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Ansiedad.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Sensación vaga e intranquilizadora de malestar o amenaza acompañada de una respuesta autónoma (el origen de la cual con frecuencia es inespecífico o desconocido para la persona); sentimiento de aprensión causado por la anticipación de un peligro.{"\n"}{"\n"} Es una señal de alerta que advierte de un peligro inminente y permite a la persona tomar medidas para afrontar la amenaza.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}- Crisis situacional.{"\n"}- Estresores.{"\n"}- Necesidades no satisfechas.{"\n"}- Grandes cambios (el estado de salud, los patrones de interacción, el rol){"\n"}</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- Angustia.{"\n"}- Incertidumbre.{"\n"}- Incremento de la preocupación.{"\n"}- Temor. {"\n"}- Alteraciones del patrón de sueño.</Text>
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
                <Text style={styles.modalText}>000781</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Gestión ineficaz de la salud.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Patrón de regulación e integración en la vida diaria de un régimen terapéutico para el tratamiento de la enfermedad y sus secuelas que no es adecuado para alcanzar los objetivos de salud específicos.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}- Complejidad del régimen terapéutico.{"\n"}- Percepción de la gravedad de su condición.{"\n"}- Percepción de susceptibilidad.{"\n"}- Demandas excesivas.{"\n"}</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- Dificultades con el tratamiento prescrito.{"\n"}- En su vida diaria hace elecciones ineficaces para alcanzar objetivos de salud.{"\n"}-No emprende acciones para reducir los factores de riesgo.{"\n"}- No incluye el régimen de tratamiento en la vida diaria.{"\n"}</Text>
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
                <Text style={styles.modalText}>00069</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Afrontamiento ineficaz.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Incapacidad para formular una apreciación válida de los agentes estresantes, elecciones inadecuadas de respuestas llevadas a la práctica y/o incapacidad para utilizar los recursos disponibles.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}-Alto grado de amenaza.{"\n"}- Apreciación inexacta de las amenazas.{"\n"}- Insuficiente sentido de control.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}-Abuso de sustancias.{"\n"}- Acceso insuficiente de apoyo social.{"\n"}- Alteración en la concentración.{"\n"}- Alteraciones en el patrón de sueño.{"\n"}- Conducta de asunción de riesgos.{"\n"}- Conducta destructiva hacia sí mismo.{"\n"}- Enfermedades frecuentes.{"\n"}- Estrategias de afrontamiento ineficaces.{"\n"}- Habilidades insuficientes para la solución de problemas.{"\n"}- Incapacidad para afrontar una situación.{"\n"}- Incapacidad para satisfacer las necesidades básicas.{"\n"}- Insuficiente conducta dirigida al logro de objetivos.{"\n"}- Insuficiente resolución de los problemas{"\n"}{"\n"}</Text>
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
                <Text style={styles.modalText}>00079</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Incumplimiento.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>{"\n"} Conducta de una persona y/o cuidador que no coincide con el plan terapéutico o de promoción de la salud acordado entre la persona (y/o la familia y/o comunidad) y un profesional sanitario.{"\n"}{"\n"} Ante un plan terapéutico o de promoción de la salud acordado, la conducta de la persona o del cuidador es total o parcialmente de no adherencia y puede conducir a resultados clínicos ineficaces o parcialmente ineficaces.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}- Habilidades insuficientes para realizar el régimen de tratamiento.{"\n"}- Motivación insuficiente.{"\n"}- Intensidad del régimen de tratamiento.{"\n"}- Prolongada duración del régimen de tratamiento.{"\n"}</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}-Conducta indicativa de falta de adhesión. {"\n"}- Desarrollo de complicaciones relacionadas. {"\n"}- Exacerbación de los síntomasFalta de progresos.{"\n"}{"\n"}{"\n"}</Text>
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