import React from 'react';
import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Dimensions, StatusBar, Text, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper'
import styles from '../../Style.js';


import { RowItem } from "../../elementos/RowItem";
import { Modal_C1_escena2 } from "../../elementos/ModalsTutorial";
import { SNC, SNP, SNA, Pruval } from "../../elementos/Modals_teoria";
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

export default class m_t_snp  extends React.Component {

  
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
  setModalVisible_snc = (visible) => {
    this.setState({ modal_snc: visible });
  };
  setModalVisible_snp = (visible) => {
    this.setState({ modal_snp: visible });
  };
   setModalVisible_sna = (visible) => {
    this.setState({ modal_sna: visible });
  };
    setModalVisible_pruval = (visible) => {
    this.setState({ modal_pruval: visible });
  };


 render() {
  const { modalVisible, modal_snp, modal_snc, modal_sna, modal_pruval } = this.state;


  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
     
   
       
    <Modal_C1_escena2
      
       text={modalVisible}
       onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
      />
    
        <SNC
      
       text={modal_snc}

       onPress={() => {
                  this.setModalVisible_snc(!modal_snc);
                }}
      />
      <SNP
      
       text={modal_snp}

       onPress={() => {
                  this.setModalVisible_snp(!modal_snp);
                }}
      />
        <SNA
      
       text={modal_sna}

       onPress={() => {
                  this.setModalVisible_sna(!modal_sna);
                }}
        />
         <Pruval
      
       text={modal_pruval}

       onPress={() => {
                  this.setModalVisible_pruval(!modal_pruval);
                }}
        />
          <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
      >


      <ScrollView>
      <StatusBar barStyle="dark-content" />
     <View style={style.container}>
     <Text style={style.title}> Definición</Text>
     <Text style={style.text}> El Sistema nervioso periférico conduce información de los sentidos al sistema nervioso central, y lleva información motora fuera de éste.  </Text>
    <Text style={style.title}> Composición</Text>
    <Text style={style.text}>El SNP está compuesto básicamente por: {"\n"}    -Los nervios que nacen del encéfalo y de la médula espinal.{"\n"}    -Los nervios espinales transportan impulsos desde y hacia la médula espinal. {"\n"}    -Los pares craneales transportan impulsos desde y hacia elencéfalo.{"\n"}{"\n"} Estos nervios son cables de comunicación que unen todas las partes del organismo transportando los impulsos desde los receptores sensitivos hasta el CNS y desde el CNS hasta las glándulas o los músculos efectores. {"\n"}{"\n"}{"\n"}</Text>

     </View>
      </ScrollView>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
     <View style={style.container}>
     <Text style={style.title}> Clasificación Funcional</Text>
     <Text style={style.text}> La clasiﬁcación funcional se ocupa tan sólo de las estructuras del SNP. Se clasiﬁca en dos subdivisiones principales  </Text>
    <Text style={style.title}> División Sensitiva o Aferente</Text>
    <Text style={style.text}>Consiste en nervios (compuestos por ﬁbras nerviosas) que transportan impulsos hacia el sistema nervioso central desde los receptores sensitivos situados en distintas partes del organismo.{"\n"}Las ﬁbras sensitivas que transportan los impulsos de la piel, los músculos esqueléticos y las articulaciones se denominan ﬁbras sensitivas (aferentes)  somáticas (de  soma, cuerpo). </Text>
     <Text style={style.title}> División Motora o Eferente</Text>
    <Text style={style.text}>Transporta los impulsos desde el SNC hasta los órganos efectores: músculos y glándulas. Estos impulsos activan los músculos y las glándulas, es decir, efectúan (provocan) una respuesta motora. La división motora se subdivide a su vez en dos partes.</Text>
            <Text style={style.title}> Organización del Sistema Nervioso </Text>
    <View style={style.ContainerImagen}>
     <Image style={style.Imagen} source={require("../../../assets/images/snp.png")} resizeMode="contain"/>
       <Text style={style.text}>Organigrama que muestra cómo el SNC  recibe información mediante las fibras sensitivas y da órdenes mediante las fibras motoras. La fibras sensitivas y motoras, juntas, forman los nervios  que constituyen el SNP {"\n"} {"\n"} </Text>
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
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.pop()}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                   onPress={() => {
                        this.setModalVisible(true);
                      }}>
               <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
       <RowItem   
      name="1. Sístema Nerviosos Periférico"
      color="#F8D95B"
         onPress={() => {
                        this.setModalVisible_snp(true);
                      }}/>
   
    <RowItem
      name="2. Sístema Nervioso Central"
      color="#77c6c6"
     onPress={() => {
                        this.setModalVisible_snc(true);
                      }}/>

    <RowItem
      name="3. Sístema Nervioso Autónomo"
      color="#F8D95B"
       onPress={() => {
                        this.setModalVisible_sna(true);
                      }}/>
  
    <RowItem
      name="4. Pruebas de Valoración"
      color="#77c6c6"
     onPress={() => {
                        this.setModalVisible_pruval(true);
                      }}/>
  
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