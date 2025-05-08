import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, Image, Dimensions, StatusBar, Text } from 'react-native';
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

export default class t_simpatico  extends React.Component {

    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,
    };
    
  setModalVisible = (visible) => { this.setState({ modalVisible: visible });};

 render() {
  const { modalVisible} = this.state;


  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
        
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
     <Text style={style.text}>La división simpática nos prepara para la actividad física al incrementar la presión arterial y el ritmo cardiaco, dilata las vías respiratorias para permitir el aumento de la tasa respiratoria y estimula la sudoración. {"\n"}{"\n"}También provoca la liberación de glucosa desde el hígado como una fuente rápida de energía, mientras que inhibe las actividades digestivas. Este sistema es a veces llamado sistema de corre o defiéndete, ya que nos prepara para enfrentar una situación de peligro o huir rápidamente de ella.</Text>
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/sistemas_autonomo_repaso.png")} resizeMode="contain"/>
      </View>
     <View style={styles.margen2}></View>
    <Text style={style.title}> Función</Text>
    <Text style={style.text}>La división simpática adapta al cuerpo de muchas maneras para la actividad física: aumenta el estado de alerta, el ritmo cardiaco, la presión arterial, el flujo de aire pulmonar, la concentración de glucosa en sangre y la circulación sanguínea a los músculo cardiacos y estriados, pero al mismo tiempo reduce el flujo sanguíneo a la piel y el tubo digestivo.{"\n"}{"\n"} Se puede considerar que las respuestas simpáticas extremas corresponden a la reacción de “pelea o huye”, porque entran en juego cuando el animal debe atacar, defenderse o huir del peligro. {"\n"}{"\n"}En la vida de los humanos, esta reacción ocurre en muchas situaciones que incluyen la excitación, el ejercicio, la competencia, la tensión, el peligro, el traumatismo, la ira o el miedo. {"\n"}{"\n"}Sin embargo, por lo general la división simpática tiene efectos más sutiles, que apenas percibimos, si acaso.{"\n"}{"\n"}{"\n"}</Text>

     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Fisiología </Text>
      <Text style={style.text}> La división simpática también se le denomina división toracolumbar, porque surge de las regiones torácica y lumbar de la médula espinal{"\n"}{"\n"} Tiene fibras preganglionares cortas y posganglionares largas. Los neurosomas de las fibras preganglionares están en las astas laterales y regiones cercanas de la materia gris de la médula espinal.{"\n"}{"\n"} Sus axones salen por los nervios raquídeos T1 a L2 y llegan a la cadena simpática de ganglios (ganglios nerviosos paravertebrales), que está cerca de ellas. {"\n"}{"\n"}Se trata de una serie longitudinal de ganglios nerviosos adyacentes a ambos lados de la columna vertebral, desde el nivel cervical hasta el coccígeo. Están interconectados por algunas cuerdas nerviosas longitudinales. La cantidad de ganglios varía de una persona a otra, pero suele haber tres cervicales (superior, medio e inferior), 11 torácicos, cuatro lumbares y uno coccígeo en cada cadena.{"\n"}{"\n"}
Parece extraño que haya ganglios simpáticos en las regiones cervical, sacra y coccígea, considerando que las fibras simpáticas sólo surgen de las regiones torácica y lumbar de la médula espinal (niveles T1 a L2). {"\n"}{"\n"}Sin embargo, las cuerdas nerviosas de la región torácica ascienden a los ganglios del cuello, y las cuerdas de la región lumbar descienden a los ganglios de las regiones sacra y coccígea. {"\n"}{"\n"}Por tanto, las fibras nerviosas simpáticas se distribuyen a cada nivel del cuerpo.{"\n"}{"\n"} Como regla general, la cabeza recibe señales de salida simpáticas que surgen del segmento T1 de la médula espinal; el cuello, del T2; el tórax y las extremidades superiores, del T3 al T6; el abdomen, del T7 al T11, y las extremidades inferiores, del T12 al L2. {"\n"}{"\n"}Sin embargo, hay considerable superposición y variación individual en este patrón.{"\n"}{"\n"}
 </Text>

   
     <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/sistemas_autonomo_repaso.png")} resizeMode="contain"/>
      </View>
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