import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text } from 'react-native';
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

export default class t_medula_espinal  extends React.Component {

  
    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,
     modal_snc:false,
     modal_snp:false,
     modal_sna:false,
     modal_pruval:false
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
     <Text style={style.text}>En el adulto promedio, la médula espinal mide entre 42 y 45 cm de largo y se extiende desde el bulbo raquídeo (parte inferior del encéfalo) hasta la parte superior de la segunda vértebra lumbar. {"\n"}{"\n"}La médula espinal se encuentra en el interior del conducto vertebral, que forma un anillo óseo protector. {"\n"}Otras cubiertas que protegen a la médula son las meninges espinales, formadas por tres capas de tejido conjuntivo que se extienden al rededor de la médula.{"\n"}Estas meninges constan de: {"\n"}<Text style={style.textBold}>Piamadre:</Text> La capa interna. {"\n"}<Text style={style.textBold}>Aracnoides:</Text> La capa intermedia.{"\n"}<Text style={style.textBold}>Duramadre:</Text> La capa externa, compuesta de tejido conjuntivo denso e irregular.</Text>
    <Text style={style.title}> Composición</Text>
    <Text style={style.text}> La médula espinal se compone de un conducto central y de sustancia gris y blanca. {"\n"}El conducto central y las meninges contienen líquido cefaloraquídeo. {"\n"}La sustancia gris está formada por cuerpos celulares y sus dendritas, mientras que las áreas blancas constan de axones neuronales que transmiten señales por la médula espinal a través de conductos ascendente y descendente.{"\n"}Estos conductos se cruzan al entrar o salir del encéfalo, lo que explica por qué el lado derecho del encéfalo controla el lado izquiero del cuerpo y visceversa.    {"\n"}{"\n"}{"\n"}</Text>

     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Funciones de la médula espinal</Text>
     <Text style={style.text}>La médula espinal proporciona un medio de comunicación entre el encéfalo y los nervios periféricos que salen de ella. {"\n"}Sus dos principales funciones en el mantenimientos de la homeostasis son: </Text>
  
    <Text style={style.subtext}>Los conductos de la sustancia blanca de la médula espinal transmiten los impulsos sensitivos  al encéfalo y los impulsos motores del encéfalo a los músculos estriados y a otros músculos efectores. </Text>
     
    <Text style={style.subtext}>La sustancia gris de la médula espinal es un sitio para integración de reflejos, que son una acción rápida e involuntaria ante un estímulo particular.</Text>
    <Text style={style.title}> Generalidad de Funciones de{"\n"} la médula espinal</Text>  
      <Text style={style.subtext}><Text style={style.textBold}>1. </Text>La médula espinal lleva los impulsos sensoriales de la periferia hacia el cerebro (tractos ascendentes) y conduce los impulsos motores del cerebro a la periferia (tractos descendentes). </Text>
      <Text style={style.subtext}><Text style={style.textBold}>2. </Text>La médula espinal también integra reflejos.</Text>
      <Text style={style.subtext}><Text style={style.textBold}>3. </Text>Cada par de nervios espinales se conecta a un segmento de la médula espinal mediante dos puntos de unión llamados raíces.</Text>
      <Text style={style.subtext}><Text style={style.textBold}>4. </Text>La raíz posterior o dorsal es sensorial, y se conecta con el asta gris posterior o dorsal de la médula espinal.</Text>
      <Text style={style.subtext}><Text style={style.textBold}>5. </Text>La raíz ventral o anterior es motora, y se conecta con el asta gris anterior o ventral de la médula espinal{"\n"}{"\n"}</Text>

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
      <Text style={style.title}> Composición de la médula espinal </Text>
     <Text style={style.text}>La médula espinal comienza como una continuación de la médula oblonga del tallo cerebral. Tiene una longitud aproximada de 16 a 18 pulgadas (40-45 cm). Su diámetro varía en distintos niveles porque se encuentra rodeada y protegida por el hueso (las vértebras) y por los discos de fibrobrocartílago (los discos intervertebrales).{"\n"}{"\n"}Se compone de una serie de 31 segmentos, cada uno de los cuales da lugar a un par de nervios espinales.{"\n"}{"\n"}Además de la protección anteriormente mencionada, la médula espinal (así como el encéfalo) se encuentran protegidos por las meninges, una serie de membranas de tejido conectivo. Las meninges asociadas específicamente con la médula espinal se conocen como <Text style={style.textBold}>meninges espinales.</Text> </Text>
    <Text style={style.title}> Nervios Espinales</Text>
    <Text style={style.text}>Los nervios espinales o también conocidos como nervios raquídeos son aquellos que se prolongan desde la médula espinal y atraviesan los músculos vertebrales para distribuirse a las zonas del cuerpo.</Text>
  <RowItem
      name="  Nervios Raquídeos"
      color="#77c6c6"
     onPress={() =>
        this.props.navigation.navigate("t_nervios_raquideos")}
       />

  <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNC_medula_repaso.png")} resizeMode="contain"/>
       
      </View>
   
   
   <Text style={style.text}>{"\n"}  {"\n"}   </Text>
    </View>
    </ScrollView>
  </View>

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
    textBold:{
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#F8D95B',
  },
   footer:{
      flex:0.3,
      flexDirection: 'row',
      height :'100%',
      width : '100%',
      margin: 15
     },
});