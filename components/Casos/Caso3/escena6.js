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
                <Text style={styles.modalText}>Dolor crónico</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Experiencia sensitiva y emocional desagradable ocasionada por una lesión tisular real o potencial, inicio súbito o lento de cualquier intensidad de leve a grave, constante o recurrente sin un final anticipado o previsible y una duración superior a 3 (>3) meses</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Agentes que provocan lesiones, Antecedentes de abuso de sustancias como licor, cigarrillo, gaseosas.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Alteraciones en el patrón de dormir, Anorexia, Expresión facial de dolor, EVA 7</Text>
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
                <Text style={styles.modalText}>Ansiedad</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Sensación vaga e intranquilizadora de malestar o amenaza acompañada de una respuesta autónoma (el origen de la cual con frecuencia es inespecífico o desconocido para la persona); sentimiento de aprensión causado por la anticipación de un peligro. Es una señal de alerta que advierte de un peligro inminente y permite a la persona tomar medidas para afrontar la amenaza</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Crisis situacional, Estresores, necesidades no satisfechas, grandes cambios (el estado de salud, los patrones de interacción, el rol)</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Angustia, Incertidumbre, Incremento de la preocupación, temor, alteraciones del patrón de sueño</Text>
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
                <Text style={styles.modalText}>Gestión ineficaz de la salud</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Patrón de regulación e integración en la vida diaria de un régimen terapéutico para el tratamiento de la enfermedad y sus secuelas que no es adecuado para alcanzar los objetivos de salud específicos</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Complejidad del régimen terapéutico, Percepción de la gravedad de su condición, Percepción de susceptibilidad, Demandas excesivas</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Dificultades con el tratamiento prescrito, En su vida diaria hace elecciones ineficaces para alcanzar objetivos de salud{"\n"}No emprende acciones para reducir los factores de riesgo, no incluye el régimen de tratamiento en la vida diaria</Text>
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
                <Text style={styles.modalText}>Afrontamiento ineficaz</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Incapacidad para formular una apreciación válida de los agentes estresantes, elecciones inadecuadas de respuestas llevadas a la práctica y/o incapacidad para utilizar los recursos disponibles</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Alto grado de amenaza, Apreciación inexacta de las amenazas, Insuficiente sentido de control</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Abuso de sustancias, Acceso insuficiente de apoyo social, Alteración en la concentración, Alteraciones en el patrón de sueño, Conducta de asunción de riesgos, Conducta destructiva hacia sí mismo, ,Enfermedades frecuentes, Estrategias de afrontamiento ineficaces, Habilidades insuficientes para la solución de problemas, Incapacidad para afrontar una situación, Incapacidad para satisfacer las necesidades básicas ,Insuficiente conducta dirigida al logro de objetivos ,Insuficiente resolución de los problemas</Text>
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
                <Text style={styles.modalText}>Incumplimiento</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Conducta de una persona y/o cuidador que no coincide con el plan terapéutico o de promoción de la salud acordado entre la persona (y/o la familia y/o comunidad) y un profesional sanitario. Ante un plan terapéutico o de promoción de la salud acordado, la conducta de la persona o del cuidador es total o parcialmente de no adherencia y puede conducir a resultados clínicos ineficaces o parcialmente ineficaces</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Habilidades insuficientes para realizar el régimen de tratamiento, Motivación insuficiente, Intensidad del régimen de tratamiento, Prolongada duración del régimen de tratamiento</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Conducta indicativa de falta de adhesión{"\n"+"\n"}Desarrollo de complicaciones relacionadas{"\n"+"\n"}Exacerbación de los síntomasFalta de progresos</Text>
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