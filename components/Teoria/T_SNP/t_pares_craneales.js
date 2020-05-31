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

export default class t_pares_craneales  extends React.Component {

  
    state ={
//el componente "state" debe estar para poder recibir las variables locales de otras clases
     modalVisible: false,
      modal_IPAR: false,
      modal_IIPAR: false,
      modal_IIIPAR: false,
      modal_IVPAR: false,
      modal_VPAR: false,
      modal_VIPAR: false,
      modal_VIIPAR: false,
      modal_VIIIPAR: false,
      modal_IXPAR: false,
      modal_XPAR: false,
      modal_XIPAR: false,
      modal_XIIPAR: false
    };
    
  setModalVisible = (visible) => { this.setState({ modalVisible: visible });};
  setModalVisibleIPAR = (visible) => {this.setState({ modal_IPAR: visible }); };
  setModalVisibleIIPAR = (visible) => {this.setState({ modal_IIPAR: visible }); };
  setModalVisibleIIIPAR = (visible) => {this.setState({ modal_IIIPAR: visible }); };
  setModalVisibleIVPAR = (visible) => {this.setState({ modal_IVPAR: visible }); };
  setModalVisibleVPAR = (visible) => {this.setState({ modal_VPAR: visible }); };
  setModalVisibleVIPAR = (visible) => {this.setState({ modal_VIPAR: visible }); };
  setModalVisibleVIIPAR = (visible) => {this.setState({ modal_VIIPAR: visible }); };
  setModalVisibleVIIIPAR = (visible) => {this.setState({ modal_VIIIPAR: visible }); };
  setModalVisibleIXPAR = (visible) => {this.setState({ modal_IXPAR: visible }); };
  setModalVisibleXPAR = (visible) => {this.setState({ modal_XPAR: visible }); };
  setModalVisibleXIPAR = (visible) => {this.setState({ modal_XIPAR: visible }); };
  setModalVisibleXIIPAR = (visible) => {this.setState({ modal_XIIPAR: visible }); };
 

 render() {
  const { modalVisible, modal_IPAR, modal_IIPAR, modal_IIIPAR, modal_IVPAR, modal_VPAR,modal_VIPAR, modal_VIIPAR, modal_VIIIPAR, modal_IXPAR, modal_XPAR, modal_XIPAR, modal_XIIPAR } = this.state;


  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
        
    <Modal_C1_escena2 text={modalVisible} onPress={() => { this.setModalVisible(!modalVisible); }} />
    <IPAR text={modal_IPAR} onPress={() => { this.setModalVisibleIPAR(!modal_IPAR); }} />
    <IIPAR text={modal_IIPAR} onPress={() => { this.setModalVisibleIIPAR(!modal_IIPAR); }} />
    <IIIPAR text={modal_IIIPAR} onPress={() => { this.setModalVisibleIIIPAR(!modal_IIIPAR); }} />
    <IVPAR text={modal_IVPAR} onPress={() => { this.setModalVisibleIVPAR(!modal_IVPAR); }} />
    <VPAR text={modal_VPAR} onPress={() => { this.setModalVisibleVPAR(!modal_VPAR); }} />
    <VIPAR text={modal_VIPAR} onPress={() => { this.setModalVisibleVIPAR(!modal_VIPAR); }} />
    <VIIPAR text={modal_VIIPAR} onPress={() => { this.setModalVisibleVIIPAR(!modal_VIIPAR); }} />
    <VIIIPAR text={modal_VIIIPAR} onPress={() => { this.setModalVisibleVIIIPAR(!modal_VIIIPAR); }} />
    <IXPAR text={modal_IXPAR} onPress={() => { this.setModalVisibleIXPAR(!modal_IXPAR); }} />
    <XPAR text={modal_XPAR} onPress={() => { this.setModalVisibleXPAR(!modal_XPAR); }} />
    <XIPAR text={modal_XIPAR} onPress={() => { this.setModalVisibleXIPAR(!modal_XIPAR); }} />
    <XIIPAR text={modal_XIIPAR} onPress={() => { this.setModalVisibleXIIPAR(!modal_XIIPAR); }} />


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
     <Text style={style.text}>El cuepo humano contiene 12 pares de nervios craneales, que surgen del encéfalo y se distribuyen en diversas estructuras; la mayor parte de ellas se encuentra en la cara y el cuello.   </Text>
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNP_nervios_craneales_repaso.png")} resizeMode="contain"/>
      </View>
     <View style={styles.margen2}></View>
    <Text style={style.title}> Composición</Text>
    <Text style={style.text}> Los 12 pares se diferencian por sus funciones: unos son  <Text style={style.textBold}>nervios sensitivos </Text>(es decir, contienen fibras sensitivas), otros son
     <Text style={style.textBold}> nervios motores</Text> (sólo contienen fibras motoras) y algunos son <Text style={style.textBold}>nervios mixtos </Text> (contienen fibras sensitivas y motoras). {"\n"}{"\n"}{"\n"}</Text>

     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.margen2}></View>
     <View style={style.container}>
     <Text style={style.title}> Distribución </Text>
     <Text style={style.text}> Las 12 parejas de pares craneales abastecen básicamente a la cabeza y el cuello. Sólo una pareja (nervio vago) se distribuye por el torax y el abdomen.{"\n"}{"\n"}Los pares craneales están numerados en orden y en la mayoría de los casos su nombre revela las estructuras más importantes que controlan. {"\n"}{"\n"}Los nervios craneales, al igual que los nervios raquídeos son parte del sistema nervioso periférico y se designan con números romanos y nombres. {"\n"}{"\n"}Los números indican el orden en que nacen los nervios del encéfalo, de anterior a posterior, y el nombre su distribución o función. {"\n"}{"\n"} </Text>
     

     <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNP_nervios_craneales_repaso.png")} resizeMode="contain"/>
      </View>
     <View style={styles.margen2}></View>
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
    <Text style={style.title}> Pares craneales  </Text> 
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/SNP_nervios_craneales_repaso.png")} resizeMode="contain"/>
      </View>


   <View style={style.filas}>
        <RowItemPares  
      name="I"
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleIPAR(true);}}/>

    <RowItemPares
      name=" II "
      color="#ECCEF5"
     onPress={() => { this.setModalVisibleIIPAR(true);}}/>

    <RowItemPares
      name=" III "
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleIIIPAR(true);}}/>
        </View>
        <View style={style.filas}>
    <RowItemPares
      name=" IV "
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleIVPAR(true);}}/>
     <RowItemPares
      name=" V "
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleVPAR(true);}}/>
       <RowItemPares
      name=" VI "
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleVIPAR(true);}}/>
      </View>
      <View style={style.filas}>
       <RowItemPares
      name=" VII "
      color="#ECCEF5"
     onPress={() => { this.setModalVisibleVIIPAR(true);}}/>
       <RowItemPares
      name=" VIII "
      color="#ECCEF5"
     onPress={() => { this.setModalVisibleVIIIPAR(true);}}/>
      <RowItemPares
      name=" IX "
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleIXPAR(true);}}/>
      </View>
      <View style={style.filas}>
      <RowItemPares
      name=" X "
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleXPAR(true);}}/>
      <RowItemPares
      name=" XI "
      color="#ECCEF5"
      onPress={() => { this.setModalVisibleXIPAR(true);}}/>
      <RowItemPares
      name=" XII "
      color="#ECCEF5"
     onPress={() => { this.setModalVisibleXIIPAR(true);}}/>
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