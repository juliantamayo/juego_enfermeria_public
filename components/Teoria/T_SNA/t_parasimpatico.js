import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View,  Image, Dimensions, StatusBar, Text } from 'react-native';
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

export default class t_parasimpatico  extends React.Component {

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
     <Text style={style.text}>La división parasimpática opera en condiciones normales que carecen de estrés. {"\n"}{"\n"}También funciona en la restauración del cuerpo a un estado de descanso después de una experiencia estresante, contrarrestando los efectos de la división simpática. {"\n"}{"\n"}</Text>
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/sistemas_autonomo_repaso.png")} resizeMode="contain"/>
      </View>
    <Text style={style.title}> Función</Text>
    <Text style={style.text}>La división parasimpática, tiene efecto tranquilizante en muchas funciones corporales. Se relaciona con la reducción del gasto de energía y con el mantenimiento corporal normal, incluidas funciones como digestión y eliminación de desechos. Puede considerársele como el estado de “reposo y digestión”. </Text>
     <Text style={style.text}><Text style={style.textBold}> > </Text>La división parasimpática estimula la digestión, micción y defecación.{"\n"}{"\n"}<Text style={style.textBold}> > </Text> También contrarresta los efectos de la división simpática al disminuir el ritmo cardiaco, la presión arterial y disminuir la tasa respiratoria.{"\n"}{"\n"}<Text style={style.textBold}> > </Text> También es responsable de la constricción de la pupila del ojo. {"\n"}{"\n"}<Text style={style.textBold}> > </Text>Esta división en ocasiones es llamada el sistema de descanso y reposo.{"\n"}{"\n"}{"\n"} </Text>
     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
      <Text style={style.title}> Composición</Text>
     <Text style={style.text}><Text style={style.textBold}> > </Text>Las fibras preganglionares de la división parasimpática surgen del tronco encefálico y la región sacra de la médula espinal. {"\n"}{"\n"}<Text style={style.textBold}> > </Text>Conducen hacia el exterior en los nervios craneales y sacrales de los ganglios situados cerca de las vísceras. {"\n"}{"\n"}<Text style={style.textBold}> > </Text>Las fibras postganglionares son cortas y se dirigen a los músculos o las glándulas dentro de las vísceras para producir sus efectos. {"\n"}{"\n"}<Text style={style.textBold}> > </Text>Las fibras preganglionares y postganglionares de la división parasimpática utilizan acetilcolina como neurotransmisor en las sinapsis.</Text>
    
     <Text style={style.title}> Fisiología </Text>
      <Text style={style.text}> También se le denomina división craneosacra, porque surge del encéfalo y la región sacra de la médula espinal. Sus fibras viajan en ciertos pares craneales y nervios sacros.  {"\n"}{"\n"}Los somas de las neuronas preganglionares se localizan en el mesencéfalo, la protuberancia, el bulbo raquídeo, así como en los segmentos S2 a S4 de la médula espinal. {"\n"}{"\n"}
      Tiene largas fibras preganglionares que acaban en ganglios terminales en el órgano de destino, o cerca de él. (Si un ganglio terminal está incrustado en la pared de un órgano de destino, también se le denomina ganglio intramural.)  {"\n"}{"\n"}Por tanto, la división parasimpática tiene fibras  preganglionares largas, que recorren casi todo el camino hasta las células de destino, y fibras posganglionares cortas que cubren el resto de la distancia. {"\n"}{"\n"}
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