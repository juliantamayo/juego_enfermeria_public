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
    <Text style={style.subtext}>Cerebro: Dividido en Hemisferios cerebrales. </Text>
    <Text style={style.subtext}>Diencéfalo: Que consiste del tálamo, hipotálamo y Epitalamo</Text>
    <Text style={style.subtext}>Tronco encefálico: Que consta de tres áreas más pequeñas: el bulbo raquídeo, el puente de Varolio y el mesencéfalo </Text>
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
     <Text style={style.title}> Fisiologia</Text>
     <Text style={style.text}> El encéfalo está protegido por los huesos del cráneo y las meninges. {"\n"}{"\n"}
     <Text style={style.textBold}>Las meninges craneales </Text> es el nombre que se le atribuye a las meninges que protegen el cerebro y tienen la misma estructura de las espinales:{"\n"}{"\n"} la duramadre externa, {"\n"}{"\n"}la aracnoides media {"\n"}{"\n"}y la piamadre interna  </Text>
    <Text style={style.text}>El encéfalo, al igual que la médula espinal, están protegidos por el líquido cefalorraquídeo que circula a través del espacio subaracnoideo que lo rodea, a la médula espinal, y a través de los ventrículos del mismo. {"\n"}{"\n"} 
    <Text style={style.textBold}>Los ventrículos </Text> son cavidades dentro del encéfalo que se conectan entre sí, con el espacio subaracnoideo de las meninges y con el canal central de la médula espinal.{"\n"}{"\n"}
     El líquido cefalorraquídeo sirve como un amortiguador para el sistema nervioso central y hace circular los nutrientes  </Text>

    <Text style={style.title}> División </Text>
    <Text style={style.text}> <Text style={style.textBold}>El encéfalo posee cuatro ventrículos: </Text> </Text>
    <Text style={style.text}> Hay <Text style={style.textBold}>dos ventrículos laterales</Text> en cada lado o hemisferio del cerebro ubicados debajo del cuerpo calloso.{"\n"}{"\n"} <Text style={style.textBold}>El tercer ventrículo</Text> es una rendija ubicada entre y por debajo de las dos mitades (la izquierda y la derecha) del tálamo, y se encuentra entre los ventrículos laterales. {"\n"}{"\n"}Cada ventrículo lateral se conecta con el tercer ventrículo por una estrecha abertura ovalada llamado foramen interventricular o foramen de Monroe.
    {"\n"}{"\n"} <Text style={style.textBold}> El cuarto ventrículo </Text> se encuentra entre el cerebelo y el tronco encefálico inferior. Se conecta con el tercer ventrículo a través del acue-ducto cerebral, también conocido como el acueducto de Sylvius.{"\n"}{"\n"}  El techo de este cuarto ventrículo cuenta con tres aberturas mediante las cuales se conecta con el espacio subaracnoideo de las meninges del encéfalo y la médula espinal; esto permite el flujo de líquido cefalorraquídeo a través de la médula espinal, el encéfalo y sus ventrículos.</Text>

 
   

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
      color="#FF6347"
     onPress={() =>
        this.props.navigation.navigate("t_cerebro")}
       />
      <RowItem
      name="  Diencéfalo "
      color="#ADFF2F"
     onPress={() =>
        this.props.navigation.navigate("t_diencefalo")}
       />
              <RowItem
      name="  Tronco Encefálico "
      color="#FFD700"
     onPress={() =>
        this.props.navigation.navigate("t_tronco_encefalico")}
       />
              <RowItem
      name="  Cerebelo "
      color="#DDA0DD"
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