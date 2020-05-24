import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper'
import styles from '../../Style.js';
import { RowItem } from "../../elementos/RowItem";
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

export default class m_t_sna  extends React.Component {

  
    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,

    };
    
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  

 render() {
  const { modalVisible } = this.state;


  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
     
   
       
    <Modal_C1_escena2
      
       text={modalVisible}
       onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
      />
    
     <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
      >


      <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Definición</Text>
     <Text style={style.text}> El  sistema nervioso autónomo es una subdivisión del sistema nervioso periférico eferente. Funciona automáticamente sin esfuerzo consciente. </Text>
      <Text style={style.text}>El sistema nervioso autónomo (SNA) puede definirse como un sistema nervioso motor que controla glándulas y músculos cardiaco y liso. {"\n"}{"\n"}También se le denomina <Text style={style.textBold}> sistema motor visceral </Text>, para distinguirlo del sistema motor somático que controla los músculos estriados.{"\n"}{"\n"} Los órganos de destino primarios del sistema nervioso autónomo son las vísceras de las cavidades torácica y abdominal y algunas estructuras de la pared corporal, incluidos vasos sanguíneos cutáneos, glándulas sudoríparas y músculos piloerectores.{"\n"}{"\n"} Por lo general, el SNA trabaja de manera involuntaria, sin intención consciente, en contraste con la naturaleza voluntaria del sistema motor somático. Sin embargo, esta distinción entre voluntario e involuntario no es tan definitiva como parece. Algunas respuestas del músculo estriado son involuntarias, como los reflejos somáticos, y es difícil, si no imposible, controlar algunos músculos estriados, como los músculos del oído medio.{"\n"}{"\n"} Por otra parte, mediante los usos terapéuticos de la bioretroalimentación se ha demostrado que algunas personas pueden aprender a controlar de manera voluntaria funciones viscerales como la presión sanguínea.</Text> 

    <Text style={style.title}> Función</Text>
    <Text style={style.text}> <Text style={style.textBold}> > </Text>Regula las funciones de los órganos internos controlando las glándulas, los músculos lisos y el músculo cardiaco. </Text>
    <Text style={style.text}> <Text style={style.textBold}> > </Text>Ayuda a mantener la homeostasis mediante el control del ritmo cardiaco, la presión arterial, la respiración y la temperatura corporal. </Text>
    <Text style={style.text}> <Text style={style.textBold}> > </Text>Ayuda a hacer frente a situaciones de emergencia, a las emociones y las actividades físicas. Los receptores presentes en los órganos envían impulsos sensoriales al cerebro y a la médula espinal.{"\n"} Los impulsos motores viajan a lo largo de las fibras nerviosas periféricas que conducen a los ganglios ubicados fuera del sistema nervioso central dentro de los nervios craneales y espinales. Estos ganglios son parte del sistema nervioso autónomo.</Text>

        <Text style={style.text}>{"\n"}{"\n"} </Text>
     </View>
      </ScrollView>

       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> División del SNA</Text>
     <Text style={style.text}> El Sistema nervioso autónomo tiene dos subsistemas: las divisiones simpática y parasimpática.  </Text>
      <Text style={style.text}>Éstas difieren en anatomía y función, pero suelen inervar el mismo tipo de órganos de destino y pueden tener efectos de cooperación o contraste entre sí. </Text> 
      <Text style={style.text}> Esto no significa que el cuerpo alterne entre ambos estados y que esté activo un sistema o el otro. Por lo general, ambos sistemas trabajan al mismo tiempo.{"\n"}{"\n"} 
                    Tienen un ritmo de actividad de fondo que se denomina tono autónomo, y el tono simpático y el parasimpático se reparten el trabajo de acuerdo con las necesidades cambiantes del cuerpo. </Text>
 

        <RowItem   
      name=" División simpática"
      color="#77c6c6"
        onPress={() =>
        this.props.navigation.navigate("t_simpatico")}
       />
    <RowItem
      name=" División parasimpática"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("t_parasimpatico")}
       />


      <Text style={style.text}>La mayoría de los órganos que reciben las neuronas motoras autónomas son inervados por las divisiones simpática y parasimpática.{"\n"}{"\n"} Sin embargo, hay algunas excepciones: los vasos sanguíneos y las glándulas sudoríparas están inervadas únicamente por neuronas simpáticas, y los músculos lisos asociadas con la lente del ojo son controlados exclusivamente por neuronas parasimpáticas.</Text>
        <Text style={style.text}>{"\n"}{"\n"} </Text>


     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Comparación</Text>
      <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/sistemas_autonomo_repaso.png")} resizeMode="contain"/>
      </View>



    

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