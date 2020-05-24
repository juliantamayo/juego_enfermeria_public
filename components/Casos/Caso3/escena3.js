import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage,Dimensions } from 'react-native';

import styles from './../../Style.js';

import C3_Pru_valo1_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion1_dialog";
import C3_Pru_valo2_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion2_dialog";
import C3_Pru_valo3_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion3_dialog";
import C3_Pru_valo4_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion4_dialog";
import C3_Pru_valo5_dialog from "../../data/C3_data/C3_Pru_valoracion/D_C3_Pru_Valoracion5_dialog";

import { Modal_C1_escena3 } from "../../elementos/ModalsTutorial";

import { ButtonContainer, RowItemEscena3 } from "../../elementos/RowItem";
const { width, height } = Dimensions.get('window')


export default class C3_escena3 extends React.Component {

  

    state ={

      modalVisible: false,
    };

    componentDidMount= () => {
    let keys = ['C3_save_pruValo1', 'C3_save_pruValo2','C3_save_pruValo3','C3_save_pruValo4','C3_save_pruValo5'];
    AsyncStorage.multiGet(keys).then(result => {
      this.setState({
        'C3_save_pruValo1':  result[0][1],
        'C3_save_pruValo2':  result[1][1],
        'C3_save_pruValo3':  result[2][1],
        'C3_save_pruValo4':  result[3][1],
        'C3_save_pruValo5':  result[4][1],
      });
    });
  };
    
 setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
   };

render() {
    const { modalVisible } = this.state;
    const C3_pruValo1= parseInt(this.state.C3_save_pruValo1);
    const C3_pruValo2= parseInt(this.state.C3_save_pruValo2);
    const C3_pruValo3= parseInt(this.state.C3_save_pruValo3);
    const C3_pruValo4= parseInt(this.state.C3_save_pruValo4);
    const C3_pruValo5= parseInt(this.state.C3_save_pruValo5);


  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
     <Modal_C1_escena3
         text={modalVisible}
          onPress={() => {
       this.setModalVisible(!modalVisible);
            }}
                />

   <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_caso3')}>
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
   <View style={style.viewcolsmenu}>
 {C3_pruValo1 == 1?
     <RowItemEscena3   
      name="1"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo1_dialogo", {
          title: "Caso 3. Prueba de valoración 1 ",
          questions: C3_Pru_valo1_dialog,
          color: "#36b1f0"
        })
      }
    />:
    <RowItemEscena3   
      name="1"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo1_dialogo", {
          title: "Caso 3. Prueba de valoración 1 ",
          questions: C3_Pru_valo1_dialog,
          color: "#36b1f0"
        })
      }
    />
  }
 {C3_pruValo2 == 1?
    <RowItemEscena3
      name="2"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo2_dialogo", {
          title: "Caso 3. Prueba de valoración 2",
          questions: C3_Pru_valo2_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="2"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo2_dialogo", {
          title: "Caso 3. Prueba de valoración 2",
          questions: C3_Pru_valo2_dialog,
          color: "#799496"
        })
      }
    />
  }
    </View>

    <View style={style.viewcolsmenu}>
 {C3_pruValo3 == 1?
    <RowItemEscena3
      name="3"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo3_dialogo", {
          title: "Caso 3. Prueba de valoración 3",
          questions: C3_Pru_valo3_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="3"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo3_dialogo", {
          title: "Caso 3. Prueba de valoración 3",
          questions: C3_Pru_valo3_dialog,
          color: "#799496"
        })
      }
    />
  }
  {C3_pruValo4 == 1?
    <RowItemEscena3
      name="4"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo4_dialogo", {
          title: "Caso 3. Prueba de valoración 4",
          questions: C3_Pru_valo4_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="4"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo4_dialogo", {
          title: "Caso 3. Prueba de valoración 4",
          questions: C3_Pru_valo4_dialog,
          color: "#799496"
        })
      }
    />
  }

     </View>
   
    <View style={style.viewcolsmenu}>
{C3_pruValo5 == 1?
   <RowItemEscena3
      name="5"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo5_dialogo", {
          title: "Caso 3. Prueba de valoración 5",
          questions: C3_Pru_valo5_dialog,
          color: "#799496"
        })
      }
    />:
   <RowItemEscena3
      name="5"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C3_PruValo5_dialogo", {
          title: "Caso 3. Prueba de valoración 5",
          questions: C3_Pru_valo5_dialog,
          color: "#799496"
        })
      }
    /> 
  }

   </View>


   <Text style={styles.textStyle}>
         hola   {this.state.save_pregPcte1}
           
          </Text>
    </ScrollView>
  </View>
  </ImageBackground>
  );
}
}


const style = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems : 'stretch',
    width: "100%",
    height :'100%',
   
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 8,
  },
  text: {
    textAlign : 'center',
    fontSize: 20,
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
  viewcolsmenu:{
    flex:1,
    alignItems : 'center',
    justifyContent : 'center',
    //backgroundColor: 'red',
    flexDirection: "row",
    width: "100%",
    height :'100%',

  },
  viewrowmenu:{
    flex:1,
   // backgroundColor: 'yellow',
    flexDirection: "column"
   

  }
});