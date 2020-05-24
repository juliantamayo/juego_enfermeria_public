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

export default class t_nervios_raquideos  extends React.Component {

  
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
     <Text style={style.text}>Los nervios espinales o raquídeos son 31 pares que salen de la columna a través de los agujeros de conjunción, excepto el primero que emerge entre el atlas y el hueso occipital. </Text>
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNP_nervios_cervicales.png")} resizeMode="contain"/>
       
      </View>

    <Text style={style.title}> Disposición </Text>
     <Text style={style.text}><Text style={style.textBold}> > </Text> Ocho pares de nervios cervicales (que se identifican de C1 a C8) </Text>
      <Text style={style.text}><Text style={style.textBold}> > </Text> 12 pares torácicos (T1 a T12)</Text>
      <Text style={style.text}><Text style={style.textBold}> > </Text> Cinco pares lumbares (L1 a L5)</Text>
      <Text style={style.text}><Text style={style.textBold}> > </Text> Cinco pares sacros</Text>
      <Text style={style.text}><Text style={style.textBold}> > </Text> Un par de nervios coccígeos.{"\n"}{"\n"}</Text>
     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Fisiología</Text>
     <Text style={style.text}>El cuerpo humano tiene 31 pares de nervios raquídeos, unidos a la medula espinal y cada nervio inerva a un grupo de músculos (miotoma) y un área cutánea (dermatoma). {"\n"}{"\n"}Cada nervio espinal tiene dos puntos de unión con la medula espinal, una raíz posterior (fibras nerviosas sensitivas) y una raíz anterior  (fibras nerviosas motoras)que se unifican para formar el nervio espinal que sale por un agujero intervertebral.   {"\n"}{"\n"}Un nervio raquídeo es un ejemplo de nervio mixto, porque contiene tanto fibras nerviosas sensitivas(la raìz posterior) como motoras (la raiz anterior){"\n"}{"\n"} </Text>
  
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