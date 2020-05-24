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
      <Text style={style.title}>Definición Tronco Encefálico</Text>
      
      <Text style={style.text}></Text>
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
    
      
   <Text style={style.text}>{"\n"}  {"\n"}   </Text>
    </View>
    </ScrollView>
  </View>

       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Puente de Varolio</Text>
     <Text style={style.text}>{"\n"} {"\n"}</Text>
     
    
<Text style={style.text}></Text>

     <View style={styles.margen2}></View>
     </View>
      </ScrollView>
      <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Bulbo Raquídeo</Text>
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