
import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ScrollView, StatusBar, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
import style from './../../Style.js';
import styles from '../../Style_escenas6.js';

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
                <Text style={styles.modalText}>00125</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Impotencia.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Experiencia de falta de control sobre una situación, incluyendo la percepción de que las propias acciones no afectan significativamente al resultado.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Complejidad del régimen terapéutico.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- Frustración por la incapacidad para realizar las tareas que se realizaban previamente.{"\n"}- Dependencia.{"\n"}- Insuficiente sentido de control.</Text>
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
                <Text style={styles.modalText}>Sensación vaga e intranquilizadora de malestar o amenaza acompañada de una respuesta autónoma (el origen de la cual con frecuencia es inespecífico o desconocido para la persona); sentimiento de aprensión causado por la anticipación de un peligro.{"\n"}Es una señal de alerta que advierte de un peligro inminente y permite a la persona tomar medidas para afrontar la amenaza.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}-Crisis situacional. {"\n"}- Grandes cambios. (p. ej. el estado de salud)</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- Irritabilidad. {"\n"}- Alteración en la atención.{"\n"}- Confusión.{"\n"}- Disminución de la habilidad para resolver problemas.{"\n"}- Disminución del campo perceptivo.{"\n"}- Preocupación por los cambios en acontecimientos vitales.</Text>
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
                <Text style={styles.modalText}>{"\n"}- Crisis situacional. {"\n"}- Incertidumbre.{"\n"}- Insuficiente sentido de control.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}-Cambio en el patrón de la comunicación. {"\n"}- Incapacidad para satisfacer las necesidades básicas.{"\n"}- Insuficiente resolución de los problemas.</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
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
                <Text style={styles.modalText}>00078</Text>
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
                <Text style={styles.modalText}>{"\n"}- Complejidad del régimen terapéutico.{"\n"}- Demandas excesivas.{"\n"}- Impotencia.{"\n"}- Percepción de la gravedad de su condición.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- No incluye el régimen de tratamiento en la vida diaria.{"\n"}- Dificultades con el tratamiento prescrito.</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
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
                <Text style={styles.modalText}>00085</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Deterioro de la movilidad física.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Limitación del movimiento físico independiente intencionado del cuerpo o de una o más extremidades.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}- Deterioro neuromuscular.{"\n"}- Deterioro sensorio perceptivo.{"\n"}- Disminución de la fuerza muscular.{"\n"}- Disminución de la resistencia.{"\n"}- Disminución del control muscular.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}-Alteraciones en la marcha.{"\n"}- Aumento del tiempo de reacción.{"\n"}- Dificultad para girarse.{"\n"}- Disconfort.{"\n"}- Disminución de las habilidades motoras finas.{"\n"}- Disminución de las habilidades motoras gruesas.{"\n"}- Enlentecimiento del movimiento.{"\n"}- Inestabilidad postural.{"\n"}- Limitación de la amplitud de movimientos.{"\n"}- Movimientos descoordinados.{"\n"}- Movimientos espásticos.</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
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
                <Text style={styles.modalText}>00051</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Deterioro de la comunicación verbal.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Disminución, retraso o carencia de la capacidad para recibir, procesar, transmitir y/o usar un sistema de símbolos.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}-Deterioro del sistema nervioso central.{"\n"}- Alteración en la percepción.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}-Dificultad para expresar los pensamientos verbalmente (afasia, apraxia).{"\n"}- Dificultad para formar palabras (disartria).{"\n"}- Dificultad para mantener la comunicación.{"\n"}- Desorientación en el tiempo.</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
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
                <Text style={styles.modalText}>00102</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Déficit de autocuidado: alimentación.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Deterioro de la capacidad para realizar o completar por uno mismo las actividades de autoalimentación.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}-Deterioro neuromuscular.{"\n"}- Desórdenes perceptuales.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- Deterioro de la capacidad para autoalimentarse con una comida completa.{"\n"}- Deterioro de la capacidad para deglutir los alimentos.</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
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
                <Text style={styles.modalText}>00109</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Déficit de autocuidado: vestido.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Deterioro de la capacidad para realizar o completar por uno mismo las actividades de vestido y arreglo personal.</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>{"\n"}- Deterioro neuromuscular.{"\n"}- Desórdenes perceptuales.</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>{"\n"}- Deterioro de la capacidad de ponerse las prendas de vestir necesarias. (p. ej., camisa, calcetines, zapatos).{"\n"}- Deterioro de la capacidad para quitarse las prendas de vestir necesarias. (p. ej., camisa, calcetines, zapatos)</Text>
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