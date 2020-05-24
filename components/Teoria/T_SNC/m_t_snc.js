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

export default class m_t_snc  extends React.Component {

  
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
     <Text style={style.text}> El  sistema nervioso central (SNC) está compuesto por el encéfalo y la médula espinal, que ocupan la cavidad dorsal del organismo y actúan como los centros de mando e integración del sistema nervioso. Interpretan la información sensitiva aferente y emiten instrucciones de acuerdo con las experiencias pasadas y las condiciones del momento.  </Text>
    <Text style={style.title}> Composición</Text>
        <RowItem   
      name=" Encéfalo"
      color="#77c6c6"
        onPress={() =>
        this.props.navigation.navigate("t_encefalo")}
       />
    <RowItem
      name=" Médula Espinal"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("t_medula_espinal")}
       />
        <Text style={style.text}>{"\n"}{"\n"} </Text>
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
     backgroundColor: 'blue',
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