import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper'
import styles from '../../Style.js';
import { RowItem, RowItemPares} from "../../elementos/RowItem";
import { Modal_C1_escena2 } from "../../elementos/ModalsTutorial";

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

export default class t_encefálico  extends React.Component {

  
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
      <Text style={style.title}>Anatomía y Función </Text>
      
      <Text style={style.text}>El  tronco encefálico tiene aproximadamente el diámetro de un pulgar y mide unos 7,5 cm de largo. Construye la senda por donde discurren los haces ascendentes y descendentes, el tronco encefálico contiene muchas pequeñas áreas de sustancia gris. {"\n"}{"\n"}Estos núcleos son los responsables de las funciones autónomas rígidamente programadas y necesarias para la supervivencia.{"\n"}{"\n"} Además, algunos son los núcleos de origen de los pares craneales y otros controlan actividades vitales tales como la respiración o la presión arterial.</Text>
      <Text style={style.text}> Es una zona muy delicada del cerebro y los daños, inclusive a áreas pequeñas, pueden causar la muerte.</Text>
      <Text style={style.text}> El tronco encefálico está conformado por: </Text>
      <Text style={style.subtext}>El Mesencéfalo</Text>
       <Text style={style.subtext}>El Puente de Varolio</Text>
        <Text style={style.subtext}>Bulbo Raquídeo</Text>
        <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNC_diencefalo_repaso.png")} resizeMode="contain"/>
      </View>
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
    <Text style={style.title}> Mesencéfalo </Text> 
     <Text style={style.text}> Contiene los pedúnculos cerebrales ventrales, que transmiten los impulsos desde la corteza cerebral al puente y a la médula espinal. También contiene el tectum dorsal, que es un centro reflejo que controla el movimiento de los ojos y de la cabeza en respuesta a estímulos visuales; también controla el movimiento de la cabeza y el tronco en respuesta a estímulos auditivos, tales como ruidos fuertes.</Text>
    <Text style={style.title}> Fisiología </Text> 
     <Text style={style.text}> Es la porción del cerebro que conecta el tronco encefálico con estructuras del cerebro posterior y el cerebro anterior como el cerebelo y el diencéfalo. Los núcleos mesencefálicos relacionados con los pares craneales son: nervio motor ocular común (III) y nervio patético (IV). </Text> 
      
    <Text style={style.title}> Función Cognoscitiva </Text> 
    <Text style={style.text}> La función principal de esta región del cerebro consiste en conducir los impulsos motores tanto de arriba hacia abajo como de abajo hacia arriba. Es decir, desde la corteza cerebral hasta el puente troncoencefálico y desde la médula espinal hasta el tálamo. {"\n"}{"\n"}Controla la audición,  la visión y el movimiento del cuerpo.</Text> 

   <Text style={style.text}>{"\n"}{"\n"}   </Text>
    </View>
    </ScrollView>
  </View>

       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Puente de Varolio</Text>
     <Text style={style.text}> Es un puente que conecta la médula espinal con el encéfalo y las partes diversas partes del encéfalo entre sí. Las fibras longitudinales se comunican con la médula espinal o comunican el bulbo raquídeo con las partes superiores del encéfalo, y las fibras transversales con el cerebelo. Su área pneumotáxica y apneustica ayudan en el control de la respiración.</Text>
    <Text style={style.title}> Anatomía </Text> 
     <Text style={style.text}> Está compuesta principalmente por neuronas y células gliales.  Es convexa, abultada hacia afuera. Dentro del puente de Varolio se encuentra el surco basilar, un pequeño espacio por el que cruza la arteria basilar, una de las principales responsables de mantener con vida las células de amplias zonas del cerebro, la protuberancia forma el inicio del nervio trigémino, uno de los pares craneales más importantes. </Text> 
      
    <Text style={style.title}> Fisiología </Text> 
    <Text style={style.text}> El puente de Varolio es una porción del tronco del encéfalo que se ubica entre el bulbo raquídeo y el mesencéfalo. El tronco del encéfalo es una región cerebral que está formada por el mesencéfalo, el propio puente de Varolio y el bulbo raquídeo. Estas tres estructuras constituyen la mayor ruta de comunicación entre el cerebro anterior y la médula espinal.   Contiene núcleos relacionados con cuatro pares craneales: Nervio trigémino (V), nervio motor ocular externo (VI), nervio facial (VII) y nervio vestibulococlear (VIII).</Text> 

     <Text style={style.title}> Función Cognoscitiva </Text> 
    <Text style={style.text}> Actúa como un puente de transmisión de impulsos cerebrales.{"\n"}{"\n"}Órgano de conducción circulan las vías sensitivas que van de la médula hacia el cerebro y viceversa.{"\n"}{"\n"} Centro funcional: centro de estación de la transmisión de la información.</Text> 

 

     <Text style={style.text}>{"\n"}{"\n"}</Text>
     
    
<Text style={style.text}></Text>

     <View style={styles.margen2}></View>
     </View>
      </ScrollView>
      <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Bulbo Raquídeo</Text>


   <Text style={style.text}> Contiene todos los tractos ascendentes y descendentes que conectan la médula espinal con diversas partes del cerebro. Estos conductos constituyen la sustancia blanca de la médula. {"\n"}Algunos tractos motores se ubican de manera transversal mientras atraviesan el bulbo raquídeo. {"\n"}{"\n"}
El cruce de dichas vías se conoce como decusación de las pirámides y explica el porqué las áreas motoras en un lado de la corteza cerebral controlan los movimientos del músculo esquelético en el lado opuesto del cuerpo. </Text>
   
 <Text style={style.text}>El bulbo raquídeo también presenta un área de materia gris dispersa que contiene algunas fIbras blancas.  Esta zona se llama <Text style={style.textBold}>formación reticular </Text>, y funciona en el mantenimiento de la conciencia y el despertar. 
Dentro de la médula se encuentran tres<Text style={style.textBold}>centros de reflejo vitales </Text> de este sistema reticular:{"\n"}{"\n"} - El centro vaso-motor, que regula el diámetro de los vasos sanguíneos. {"\n"}{"\n"} - El centro cardiaco, que regula la fuerza de contracción y {"\n"}{"\n"} - El ritmo cardiaco, y el área de ritmicidad medular, que ajusta el ritmo básico de la respiración</Text> 

    <Text style={style.title}> Fisiología </Text> 
    <Text style={style.text}> El bulbo raquídeo posee en la cara anterior una fisura mediana anterior que conecta con la médula espinal. En la intersección entre ambas estructuras, se forma una serie de pirámides que forman el<Text style={style.textBold}> tracto corticoespinal de la vía piramidal.</Text>{"\n"}{"\n"}
 El bulbo también contiene núcleos que reciben información sensorial o generan impulsos motores relacionados con cinco pares craneales: nervio vestíbulococlear (VIII), nervio glosofaríngeo (IX), nervio vago (X), nervio espinal (XI) y nervio hipogloso (XII).
</Text> 

     <Text style={style.title}> Función Cognoscitiva </Text> 
     <Text style={style.text}>- Regula el ritmo cardíaco del organismo y controlar su funcionamiento cardiovascular.</Text>
     <Text style={style.text}>- Regula la presión arterial.</Text>
     <Text style={style.text}>- Regula y controla las funciones viscerales.</Text>
     <Text style={style.text}>- Regula el sistema respiratorio.</Text>
     <Text style={style.text}>- Participa en los procesos de deglución.</Text>
     <Text style={style.text}>- Regula la secreción de jugos digestivos.</Text>
     <Text style={style.text}>- Controla el vómito, la tos y el estornudo, así como la acción de los músculos que se requieren para realizar tales acciones.</Text>

     <Text style={style.text}>{"\n"} {"\n"}</Text>
   
    
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