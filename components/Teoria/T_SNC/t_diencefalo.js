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

export default class t_diencefalo  extends React.Component {

  
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
      <Text style={style.title}>Diencéfalo</Text>
      
      <Text style={style.text}>El diencéfalo se localiza en la parte superior del mesencéfalo y entre los dos hemisferios cerebrales.También rodea el tercer ventrículo. Se divide en dos áreas principales:  <Text style={style.textBold}> el tálamo y el hipotálamo.</Text> {"\n"}{"\n"}También contiene los tractos ópticos y el quiasma óptico, donde los nervios ópticos se cruzan entre sí; el infundíbulo, que se inserta en la glándula pituitaria; los cuerpos mamilares, que intervienen en la memoria y las respuestas emocionales al olor; y la glándula pineal, que forma parte del  <Text style={style.textBold}> epitálamo. </Text>{"\n"}{"\n"} La glándula pineal es una glándula endocrina en forma de piña que segrega la melatonina, que afecta a nuestro estado de ánimo y nuestro comportamiento. </Text>
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
    <Text style={style.title}> Tálamo </Text> 
    <Text style={style.text}>Es la parte superior del diencéfalo y  <Text style={style.textBold}>la estación principal de transmisión de impulsos sensoriales</Text> que llegan a la corteza cerebral procedentes de la médula espinal, tronco encefálico, y de las distintas partes del cerebro. </Text> 
   <Text style={style.title}> Función </Text> 
    <Text style={style.text}>El tálamo, que rodea el superﬁcial tercer ventrículo del encéfalo, es una estación de paso de los impulsos sensitivos que suben hacia la corteza sensorial.{"\n"}{"\n"} Cuando los impulsos atraviesan el tálamo se obtiene un reconocimiento grosero de si la sensación que se va a sentir es agradable o desagradable. {"\n"}{"\n"}Son las neuronas de la corteza sensorial las que realmente localizan e interpretan esa sensación.{"\n"}{"\n"}También desarrolla una función importante como <Text style={style.textBold}>centro de interpretación </Text> para el reconocimiento consciente del dolor y la temperatura y de cierta percepción de la presión y el tacto. </Text> 
      
   <Text style={style.text}>{"\n"}{"\n"}   </Text>
    </View>
    </ScrollView>
  </View>

       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> El Hipotálamo</Text>
     <Text style={style.text}>El hipotálamo (literalmente, “debajo del tálamo”) constituye el suelo del diencéfalo. Es un centro importante del sistema nervioso autónomo porque interviene en la regulación de la temperatura, el equilibrio hídrico y el metabolismo del organismo.{"\n"}{"\n"} Es la parte inferior del diencéfalo y, a pesar de su pequeño tamaño, controla muchas funciones corporales relacionadas con la homeostasis. {"\n"}{"\n"}Controla e integra el sistema nervioso autónomo.{"\n"}{"\n"} Recibe impulsos sensoriales de los órganos internos.{"\n"}{"\n"} Es el intermediario entre el sistema nervioso y el sistema endocrino, ya que envía señales y controla la glándula pituitaria.{"\n"}{"\n"} Es el centro de los fenómenos del poder de la mente sobre el cuerpo. </Text>
     <Text style={style.title}> Principales funciones</Text>
     <Text style={style.text}><Text style={style.textBold}>1. Regulación del sistema nervioso autónomo: </Text> El hipotálamo controla e integra las actividades de este sistema nervioso, que su vez regula la contracción del músculo liso, el cardíaco, así como las secreciones de muchas glándulas.</Text> 
     <Text style={style.text}><Text style={style.textBold}>2. Regulación de la hipófisis:</Text> El hipotálamo regula la secreción de las hormonas de la hipófisis anterior a través de las hormonas reguladoras hipotalámicas. Además, axones de los núcleos supraóptico y paraventricular hipotalámicos, llegan a la hipófisis posterior. Estos núcleos sintetizan la oxitocina y la hormona antidiurética, las cuales a través de los axones se transportan al lóbulo posterior de la hipófisis, donde se almacenan y liberan.</Text> 
     <Text style={style.text}><Text style={style.textBold}>3. Regulación de las emociones y el comportamiento: </Text> Junto con el sistema límbico, el hipotálamo regula comportamientos relacionados con la ira, agresividad, dolor, placer y excitación sexual.</Text> 
     <Text style={style.text}><Text style={style.textBold}>4. Regulación de la ingestión de bebidas y alimentos:</Text>Forman parte del hipotálamo el centro de la alimentación, el cual controla la sensación de hambre y saciedad, y el centro de la sed, el cual se estimula ante cambios en la presión osmótica del espacio extracelular. </Text> 
     <Text style={style.text}><Text style={style.textBold}>5. Regulación de la temperatura corporal:</Text> Ante cambios en la temperatura corporal, el hipotálamo estimula mecanismos que favorecen la pérdida o retención de calor a través de estímulos que viajan por el sistema nervioso autónomo.</Text> 
     <Text style={style.text}><Text style={style.textBold}>6. Regulación de los ritmos circadianos y del estado de conciencia:</Text>El hipotálamo regula los hábitos de sueño y vigilia estableciendo un ritmo circadiano (diario). </Text> 
     <Text style={style.text}><Text style={style.textBold}></Text> </Text> 

     <Text style={style.text}>{"\n"} {"\n"}</Text>
     
    
<Text style={style.text}></Text>

     <View style={styles.margen2}></View>
     </View>
      </ScrollView>
      <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> El Epitálamo</Text>
       <Text style={style.text}>Es un área pequeña ubicada en la zona superior y posterior del tálamo. Contiene algunos núcleos pequeños involucrados en las respuestas emocionales y viscerales al olor.<Text style={style.textBold}> Contiene la glándula pineal.</Text></Text>
     <Text style={style.text}>El epitálamo forma el techo del tercer ventrículo. Partes importantes del epitálamo son la epífisis o glándula pineal (parte del sistema endocrino) y los plexos coroideos del tercer ventrículo. Los plexos coroideos, ovillos capilares dentro de cada ventrículo, forman el líquido cefalorraquídeo.</Text>
      <Text style={style.title}> Función</Text>
      <Text style={style.text}>Secreta la hormona melatonina, responsable de los ciclos de sueño y vigila.</Text>

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