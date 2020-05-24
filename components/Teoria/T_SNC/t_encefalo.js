import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text, AsyncStorage } from 'react-native';
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

export default class t_encefalo  extends React.Component {

  
    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,
    };
    
  setModalVisible = (visible) => { this.setState({ modalVisible: visible });};

 
 render() {
  const { modalVisible } = this.state;


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
     <Text style={style.title}> Definición</Text>
     <Text style={style.text}>El encéfalo es la masa nerviosa contenida dentro del craneo se encuentra revestido por meninges (duramadre, piamadre y aracnoide), en su interior hay ventrículos cerebrales llenos de líquido cefalorraquídeo. {"\n"}{"\n"}Pesa entre 1450 g  y 1600 g. Recibe el 15% del gasto cardiaco y tiene un sistema de autoregulación para asegurar que el sumninistro de sangre sea constante. {"\n"}{"\n"}La disposicion de las arterias que lo alimentan es única y se comunican entre sí  por una estructura llamada poligono de Willis. </Text>
    <Text style={style.title}> Composición</Text>
    <Text style={style.text}> Como el encéfalo es la masa de tejido nervioso más grande y compleja de todo el organismo, se estudia habitualmente dividiendolo en sus cuatro regiones principales: </Text>
    <Text style={style.subtext}>Hemisferios cerebrales. </Text>
    <Text style={style.subtext}>Diencéfalo.</Text>
    <Text style={style.subtext}>Tronco encefálico. </Text>
    <Text style={style.subtext}>Cerebelo.</Text>

    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/encefalo.png")} resizeMode="contain"/>
    </View>
     <View style={styles.margen2}></View>
    

     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Composición </Text>
           <RowItem
      name="  Cerebro "
      color="#77c6c6"
     onPress={() =>
        this.props.navigation.navigate("t_cerebro")}
       />
      <RowItem
      name="  Diencéfalo "
      color="#77c6c6"
     onPress={() =>
        this.props.navigation.navigate("t_diencefalo")}
       />
              <RowItem
      name="  Tronco Encefálico "
      color="#77c6c6"
     onPress={() =>
        this.props.navigation.navigate("t_tronco_encefalico")}
       />
              <RowItem
      name="  Cerebelo "
      color="#77c6c6"
     onPress={() =>
        this.props.navigation.navigate("t_cerebelo")}
       />
       
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
  textBold:{
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: '#F8D95B',
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
   footer:{
      flex:0.3,
      flexDirection: 'row',
      height :'100%',
      width : '100%',
      margin: 15
     },
});