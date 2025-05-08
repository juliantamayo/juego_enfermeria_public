import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text } from 'react-native';
import Swiper from 'react-native-swiper'
import styles from '../../Style.js';


import { RowItem, RowItemPares} from "../../elementos/RowItem";
import { Modal_C1_escena2 } from "../../elementos/ModalsTutorial";
import { IPAR, IIPAR, IIIPAR, IVPAR, VPAR,VIPAR, VIIPAR, VIIIPAR, IXPAR, XPAR, XIPAR, XIIPAR} from "../../elementos/Modals_teoria";
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

export default class t_cerebro  extends React.Component {

  
    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,
    };
 
 render() {
  const { modalVisible} = this.state;


  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
        
    <Modal_C1_escena2 text={modalVisible} onPress={() => { this.setModalVisible(!modalVisible); }} />

     <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
      >


      <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
      <View style={style.container}>
      <Text style={style.title}>Cerebro</Text>
       <Text style={style.text}>Se trata de la mayor estructura encefálica. Está dividido en hemisferios izquierdo y derecho por la cisura cerebral longitudinal. Cada hemisferio se divide en lóbulos (Occipital, frontal, parietal y temporal).{"\n"} {"\n"} A la capa externa del cerebro se le denomina corteza cerebral y está formada por sustancia gris (cuerpos neuronales); debajo de ella se encuentra sustancia blanca (fibras nerviosas). {"\n"} {"\n"}La corteza cerebral es responsable de la mente consciente y está compuesta por interneuronas ( neuronas que se localizan entre las sensitivas y las motoras).  </Text>
      <Text style={style.text}>Está formado por  sustancia gris (por fuera, formada por cuerpos neuronales y dendritas) y la sustancia blanca (por dentro, formada por haces de  axones y su mielina). Pesa unos 1.200gr.{"\n"} {"\n"}Su superficie tiene arrugas o pliegues llamadas circunvoluciones y  unos surcos denominados cisuras. De ellas, las más notables son llamadas las cisuras de Silvio (lateral), de Rolando (central) y la inter hemisférica. </Text>
      <Text style={style.title}>Hemisferios Cerebrales</Text>
      <Text style={style.text}> La Cisura inter hemisferica divide la corteza  en dos partes llamados <Text style={style.textBold}>hemisferios cerebrales.</Text> En los hemisferios se distinguen zonas denominadas <Text style={style.textBold}>lóbulos,</Text> que llevan el nombre del hueso en que se encuentran en contacto. {"\n"}{"\n"}Los lóbulos subdividen el cerebro según su función: </Text>
       <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNC_partes_cerebro_repaso.png")} resizeMode="contain"/>
      </View>
      <Text style={style.subtext}> <Text style={style.textBold}>Lóbulo frontal:</Text>Este da la capacidad de moverse (corteza motora), de razonar y resolución de problemas, parte del lenguaje y emociones.{"\n"} {"\n"} Situado en la parte anterior, por delante de la cisura de Rolando.</Text>
      <Text style={style.subtext}> <Text style={style.textBold}>Lóbulo parietal:</Text>Encargado de las percepciones sensoriales externas (manos, pies, etc.): sensibilidad, tacto, percepción, presión, temperatura y dolor.{"\n"} {"\n"} Se halla por detrás de la cisura de Rolando y por encima de la de Silvio; por detrás limita con la imaginaria cisura perpendicular externa.   </Text>
      <Text style={style.subtext}> <Text style={style.textBold}>Lóbulo occipital:</Text>Encargado de la producción de imágenes. Es el casquete posterior cerebral, que en muchos animales tiene límites bien definidos, pero que en el hombre ha perdido su identidad anatómica</Text>
      <Text style={style.subtext}> <Text style={style.textBold}>Lóbulo temporal:</Text>Desempeña un papel importante en tareas visuales complejas como el reconocimiento de caras. Está encargado de la audición, equilibrio y coordinación. Es el «centro primario del olfato» del cerebro. También recibe y procesa información de los oídos contribuye al balance y el equilibrio, y regula emociones y motivaciones como la ansiedad, el placer y la ira. </Text>
      <Text style={style.text}>{"\n"}  {"\n"}   </Text>

     </View>
      </ScrollView>

       <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >

    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={style.container}>
    <Text style={style.title}> Áreas Funcionales </Text> 
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNC_partes_cerebro_repaso.png")} resizeMode="contain"/>
      </View>
      <Text style={style.title}>  Áreas sensoriales </Text>
      <Text style={style.text}> <Text style={style.textBold}>1. Área somatosensorial primaria:</Text>Su función principal es localizar con exactitud los puntos del cuerpo donde se originan las sensaciones.</Text>
      <Text style={style.text}> <Text style={style.textBold}>2. Área visual: </Text>Recibe impulsos que transmiten información visual (forma, color y movimiento de los estímulos visuales).</Text>
      <Text style={style.text}> <Text style={style.textBold}>3. Área auditiva: </Text>Interpreta las características básicas de los sonidos, como su tonalidad y ritmo.</Text>
      <Text style={style.text}> <Text style={style.textBold}>4. Área gustativa: </Text>Percibe estímulos gustativos.</Text>
      <Text style={style.text}> <Text style={style.textBold}>5. Área olfatoria:</Text> Interpreta la información sobre olores que envía la nariz a través de los nervios olfatorios.</Text>
      <Text style={style.title}>  Áreas motoras</Text>
      <Text style={style.text}> <Text style={style.textBold}>1. Área motora primaria:</Text>Cada región del área controla la contracción voluntaria de músculos o grupos musculares específicos.</Text>
      <Text style={style.text}> <Text style={style.textBold}>2. Área de Broca: </Text>Controla el movimiento de los músculos necesarios para hablar y articular correctamente los sonidos.</Text>
      <Text style={style.title}>  Áreas de Asociación</Text>
      <Text style={style.text}> <Text style={style.textBold}>1. Área de asociación somatosensorial:</Text>Su función es integrar e interpretar las sensaciones (p.e. determinar la forma y textura de un objeto sin verlo).</Text>
      <Text style={style.text}> <Text style={style.textBold}>2. Área de asociación visual:</Text>Su función es relacionar las experiencias visuales previas y actuales, además de ser esencial para reconocer y evaluar lo que se observa.</Text>
      <Text style={style.text}> <Text style={style.textBold}>3. Área de asociación auditiva: </Text>Permite discernir si los sonidos corresponden al habla, la música o ruido.</Text>
      <Text style={style.text}> <Text style={style.textBold}>4. Área de Wernicke: </Text>Permite interpretar el significado del habla y el contenido emocional del lenguaje hablado (p.e enfado, alegría)</Text>
      <Text style={style.text}> <Text style={style.textBold}>5. Área promotora: </Text>Se localiza inmediatamente por delante del área motora primaria y permite la ejecución de actividades motoras de carácter complejo y secuencial o aprendidos ( poner una carta dentro de un sobre,amarrarse los zapatos, aprender a pintar ).</Text>
      <Text style={style.text}> <Text style={style.textBold}>6. Área frontal del campo visual: </Text>Regula los movimientos visuales voluntarios de seguimiento ( leer una frase). </Text>

   <Text style={style.text}>{"\n"}  {"\n"}   </Text>
    </View>
    </ScrollView>
  </View>

       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Áreas Funcionales </Text>
     <Text style={style.text}>La corteza cerebral se divide en áreas funcionales que fueron señaladas por K. Brodmann en 1906. {"\n"} {"\n"} Se han identificado áreas funcionales y estructurales del cerebro, pero es importante recordar que estas áreas no actuan de manera independiente de las demás y que la lesión de una estructura puede tener consecuencias en otra y otras.{"\n"} {"\n"}</Text>
     <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNC_partes_cerebro_repaso.png")} resizeMode="contain"/>
      </View>
      <Text style={style.title}> Área Motora </Text>
     <Text style={style.text}>La primera de las áreas funcionales es la motora.{"\n"} {"\n"}  Las áreas motoras están situadas en la corteza cerebral de las regiones anteriores de los hemisferios cerebrales. se subdivide como sigue: </Text>
      <Text style={style.text}> <Text style={style.textBold}>Área motora primaria: </Text>responsable de la contracción de los músculos estriados. Se localiza en la circunvolución prerrolándica, inmediatamente delante de la cisura central o de Rolando.  </Text>
      <Text style={style.text}> <Text style={style.textBold}>Área premotora: </Text>Participa en movimientos finos de los músculos estriados y genera la deztreza manual que se logra por movimientos motores repetitivos o aprendidos (p. ej., amarrar los cordones de los zapatos, aprender a pintar, etc.) </Text>
       <Text style={style.text}> <Text style={style.textBold}>Área de Broca </Text>Gobierna los movimientos motores necesarios para producir el habla.  Se localiza en uno de los lóbulos frontales (el izquierdo en la mayoría de las personas), en un plano superior a la cisura de Silvio. </Text>
        <Text style={style.text}> <Text style={style.textBold}>Área de campo visual frontal: </Text>Controla los movimientos voluntarios de los ojos. </Text>
         <Text style={style.title}> Área Sensitiva </Text>
     <Text style={style.text}>La segunda área funcional es la sensitiva, que constituye la sede de la conciencia sensitiva.{"\n"} {"\n"}
     Las áreas sensoriales están situadas principalmente en la parte posterior de la corteza cerebral, detrás de la cisura central. En la corteza, las áreas sensoriales primarias tienen la conexión más directa con receptores sensoriales periféricos.{"\n"} {"\n"} Se puede dividir de la siguiente manera: </Text>
         <Text style={style.text}> <Text style={style.textBold}>Área somatosensitiva primaria: </Text>Recibe información sensitiva de la piel y también de los propiorreceptores de músculos esqueléticos.  se localiza en la circunvolución parietal ascendente, inmediatamente detrás de la cisura central o de Rolando. Recibe sensaciones de receptores sensoriales somáticos relativos al tacto, propioceptivos (posición articular y muscular), dolor y temperatura. </Text>
          <Text style={style.text}> <Text style={style.textBold}>Área de relación somatosensitiva: </Text>Integra la información sensitiva recibida por el área somatosensitiva primaria y aporta información sobre tamaño, textura y experiencias anteriores.  </Text>
           <Text style={style.text}> <Text style={style.textBold}>Áreas visuales </Text>El área visual primaria recibe la información que envían los ojos y el área de relación visual ayuda a conectar esta información con la de experiencias visuales anteriores.Se localiza en la cara medial del lóbulo occipital.  </Text>
            <Text style={style.text}> <Text style={style.textBold}>Área de la audición: </Text>Se relacionan con la interpretación de sonidos.Se localiza en el lóbulo temporal  </Text>
             <Text style={style.text}> <Text style={style.textBold}>Área del olfato: </Text>Interpreta la información sobre olores que envía la nariz a través de los nervios olfatorios. Se localiza en la cara medial del lóbulo temporal.  </Text>     
          <Text style={style.text}> <Text style={style.textBold}>Área del gusto: </Text>Interpreta la sensaciones de sabor. Se localiza en la base de la circunvolución parietal ascendente, por encima de la cisura de Silvio. </Text>
      <Text style={style.title}> Área de asociación </Text>
     <Text style={style.text}>Las áreas de asociación comprenden algunas áreas motoras y sensoriales,además de grandes áreas en la cara lateral de los lóbulos occipital, parietal y temporal, así como en el lóbulo frontal por delante de las áreas motoras.</Text>
       <Text style={style.text}> <Text style={style.textBold}>Área de asociación somatosensorial: </Text>Se localiza justo posterior al área somatosensorial primaria, recibe impulsos del tálamo.</Text>
         <Text style={style.text}> <Text style={style.textBold}>Área de asociación visual:</Text> Se localiza en el lóbulo occipital.</Text>
          <Text style={style.text}> <Text style={style.textBold}>Área de asociación auditiva: </Text>Se localiza en un plano posterior al área auditiva.</Text>
           <Text style={style.text}> <Text style={style.textBold}>Área de Wernicke:</Text> Se localiza en la región frontera entre los lóbulos temporal y parietal.</Text>
            <Text style={style.text}> <Text style={style.textBold}>Área promotora:</Text>Se localiza inmediatamente por delante del área motora primaria.</Text>
<Text style={style.text}></Text>

     <View style={styles.margen2}></View>
     </View>
      </ScrollView>

      </Swiper>

  </ImageBackground>
  );
}
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height :'100%',
    backgroundColor: 'white',
  },
  Imagen:{
    
     height: Dimensions.get('window').height/2,
  },
   ContainerImagen:{
     alignItems: 'center',
    justifyContent: 'center',
    
   // marginBottom: 5
  },
  filas:{
   flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 8,
  },

  title:{ 

    textAlign : 'center',
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#77c6c6',
    borderRadius: 50,
    padding: 3


  },
  text: {
    textAlign : 'left',
    fontSize: 19,
    marginLeft: 10,
    marginRight: 10,
    margin: 10
  },
  subtext: {
    textAlign : 'left',
    fontSize: 19,
    marginLeft: 35,
    marginRight: 10,
    margin: 10
  },
  textBold:{
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#F8D95B',
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
   footer:{
      flex:0.3,
      flexDirection: 'row',
      height :'100%',
      width : '100%',
      margin: 15
     },
});