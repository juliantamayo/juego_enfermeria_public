import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text } from 'react-native';
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

export default class t_pares_craneales  extends React.Component {

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
     <Text style={style.text}>El  cerebelo es la segunda estructura más grande del encéfalo. Presenta una forma similar a una mariposa. Se encuentra por debajo de los lóbulos occipitales del cerebro y detrás del puente y el bulbo raquídeo del tronco encefálico.</Text>
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNC_diencefalo_repaso.png")} resizeMode="contain"/>
      </View>
     <View style={styles.margen2}></View>
    <Text style={style.title}> Composición</Text>
    <Text style={style.text}>Se compone de dos hemisferios parcialmente separados conectados por una estructura centralizada estrecha llamada vermis. {"\n"}{"\n"}  El cerebelo se compone principalmente de la materia blanca con una una capa de materia gris en su superficie, llamada la corteza cerebral.{"\n"}{"\n"}{"\n"}</Text>

     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Función Cognoscitiva </Text>
     <Text style={style.text}><Text style={style.textBold}> > </Text>El cerebelo funciona como un centro de reflejo en la coordinación de movimientos complejos de los músculos esqueléticos, el mantenimiento de la postura corporal adecuada y del equilibrio.  {"\n"}{"\n"}<Text style={style.textBold}> > </Text> Si está dañado, puede haber una disminución en el tono muscular, temblores, pérdida de equilibrio y dificultad en los movimientos del músculo esquelético.</Text>
     <Text style={style.text}><Text style={style.textBold}> > </Text>El cerebelo proporciona el control temporal preciso a la actividad de los músculos esqueléticos y controla el equilibrio.{"\n"}{"\n"}<Text style={style.textBold}> > </Text> Su actividad supone que los movimientos del organismo sean suaves y coordinados.{"\n"}{"\n"}<Text style={style.textBold}> > </Text> No funciona tan bien cuando está sedado por el alcohol.{"\n"}{"\n"}<Text style={style.textBold}> > </Text>Las ﬁbras alcanzan el cerebelo desde el aparato del equilibrio del oído interno, el ojo, los propiorreceptores de los músculos esqueléticos y los tendones, y muchas otras áreas.
      {"\n"}{"\n"}<Text style={style.textBold}> > </Text> El cerebelo se puede comparar con un piloto automático, continuamente contrastando las “intenciones” del encéfalo con lo que el organismo está haciendo realmente, vigilando la posición corporal y la tensión existente en distintas partes del organismo.{"\n"}{"\n"}<Text style={style.textBold}> > </Text>  Cuando es necesario, envía mensajes para poner en marcha las medidas correctoras oportunas</Text>
    
     <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNC_diencefalo_repaso.png")} resizeMode="contain"/>
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