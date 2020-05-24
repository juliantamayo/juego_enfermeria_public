import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage,Dimensions } from 'react-native';

import styles from './../../Style.js';

import C2_Pru_valo1_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion1_dialog";
import C2_Pru_valo2_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion2_dialog";
import C2_Pru_valo3_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion3_dialog";
import C2_Pru_valo4_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion4_dialog";
import C2_Pru_valo5_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion5_dialog";
import C2_Pru_valo6_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion6_dialog";
import C2_Pru_valo7_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion7_dialog";
import C2_Pru_valo8_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion8_dialog";
import C2_Pru_valo9_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion9_dialog";
import C2_Pru_valo10_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion10_dialog";
import C2_Pru_valo11_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion11_dialog";
import C2_Pru_valo12_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion12_dialog";
import C2_Pru_valo13_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion13_dialog";
import C2_Pru_valo14_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion14_dialog";
import C2_Pru_valo15_dialog from "../../data/C2_data/C2_Pru_valoracion/D_C2_Pru_Valoracion15_dialog";
 import { Modal_C1_escena3 } from "../../elementos/ModalsTutorial";

import { ButtonContainer, RowItemEscena3 } from "../../elementos/RowItem";
const { width, height } = Dimensions.get('window')


export default class menu_caso2 extends React.Component {

  

    state ={
     'save_pregPcte1':0,
      modalVisible: false,
    };

    componentDidMount= () => {
    let keys = ['C2_save_pruValo1', 'C2_save_pruValo2','C2_save_pruValo3','C2_save_pruValo4','C2_save_pruValo5','C2_save_pruValo6','C2_save_pruValo7',
                 'C2_save_pruValo8','C2_save_pruValo9','C2_save_pruValo10','C2_save_pruValo11','C2_save_pruValo12','C2_save_pruValo13','C2_save_pruValo14',
                 'C2_save_pruValo15'];
    AsyncStorage.multiGet(keys).then(result => {
      this.setState({
        'C2_save_pruValo1':  result[0][1],
        'C2_save_pruValo2':  result[1][1],
        'C2_save_pruValo3':  result[2][1],
        'C2_save_pruValo4':  result[3][1],
        'C2_save_pruValo5':  result[4][1],
        'C2_save_pruValo6':  result[5][1],
        'C2_save_pruValo7':  result[6][1],
        'C2_save_pruValo8':  result[7][1],
        'C2_save_pruValo9':  result[8][1],
        'C2_save_pruValo10':  result[9][1],
        'C2_save_pruValo11':  result[10][1],
        'C2_save_pruValo12':  result[11][1],
        'C2_save_pruValo13':  result[12][1],
        'C2_save_pruValo14':  result[13][1],
        'C2_save_pruValo15':  result[14][1],
      });
    });
  };
    
 setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
   };

render() {
      const { modalVisible } = this.state;
  const C2_pruValo1= parseInt(this.state.C2_save_pruValo1);
  const C2_pruValo2= parseInt(this.state.C2_save_pruValo2);
  const C2_pruValo3= parseInt(this.state.C2_save_pruValo3);
  const C2_pruValo4= parseInt(this.state.C2_save_pruValo4);
  const C2_pruValo5= parseInt(this.state.C2_save_pruValo5);
  const C2_pruValo6= parseInt(this.state.C2_save_pruValo6);
  const C2_pruValo7= parseInt(this.state.C2_save_pruValo7);
  const C2_pruValo8= parseInt(this.state.C2_save_pruValo8);
  const C2_pruValo9= parseInt(this.state.C2_save_pruValo9);
  const C2_pruValo10= parseInt(this.state.C2_save_pruValo10);
  const C2_pruValo11= parseInt(this.state.C2_save_pruValo11);
  const C2_pruValo12= parseInt(this.state.C2_save_pruValo12);
  const C2_pruValo13= parseInt(this.state.C2_save_pruValo13);
  const C2_pruValo14= parseInt(this.state.C2_save_pruValo14);
  const C2_pruValo15= parseInt(this.state.C2_save_pruValo15);

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
       onPress={() => this.props.navigation.navigate('M_caso2')}>
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

   {C2_pruValo1 == 1?
     <RowItemEscena3   
      name="1"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo1_dialogo", {
          title: "1 pruValo1 C2",
          questions: C2_Pru_valo1_dialog,
          color: "#36b1f0"
        })
      }
    />:
    <RowItemEscena3   
      name="1"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo1_dialogo", {
          title: "1 pruValo1 C2",
          questions: C2_Pru_valo1_dialog,
          color: "#36b1f0"
        })
      }
    />
  }
  {C2_pruValo2 == 1?
    <RowItemEscena3
      name="2"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo2_dialogo", {
          title: "2  pruValo2 C2",
          questions: C2_Pru_valo2_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="2"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo2_dialogo", {
          title: "2  pruValo2 C2",
          questions: C2_Pru_valo2_dialog,
          color: "#799496"
        })
      }
    />
   }
    </View>

    <View style={style.viewcolsmenu}>
 {C2_pruValo3 == 1?
    <RowItemEscena3
      name="3"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo3_dialogo", {
          title: "3 C2",
          questions: C2_Pru_valo3_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="3"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo3_dialogo", {
          title: "3 C2",
          questions: C2_Pru_valo3_dialog,
          color: "#799496"
        })
      }
    />
  }
  {C2_pruValo4 == 1?
    <RowItemEscena3
      name="4"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo4_dialogo", {
          title: "4 C2",
          questions: C2_Pru_valo4_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="4"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo4_dialogo", {
          title: "4 C2",
          questions: C2_Pru_valo4_dialog,
          color: "#799496"
        })
      }
    />
  }

     </View>
   
    <View style={style.viewcolsmenu}>
  {C2_pruValo5 == 1?
   <RowItemEscena3
      name="5"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo5_dialogo", {
          title: "5 C2",
          questions: C2_Pru_valo5_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="5"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo5_dialogo", {
          title: "5 C2",
          questions: C2_Pru_valo5_dialog,
          color: "#799496"
        })
      }
    />
  }
  {C2_pruValo6 == 1?
    <RowItemEscena3
      name="6"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo6_dialogo", {
          title: "6 C2",
          questions: C2_Pru_valo6_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="6"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo6_dialogo", {
          title: "6 C2",
          questions: C2_Pru_valo6_dialog,
          color: "#799496"
        })
      }
    />
  }

   </View>

    <View style={style.viewcolsmenu}> 
  {C2_pruValo7 == 1?
    <RowItemEscena3
      name="7"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo7_dialogo", {
          title: "7 C2",
          questions: C2_Pru_valo7_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="7"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo7_dialogo", {
          title: "7 C2",
          questions: C2_Pru_valo7_dialog,
          color: "#799496"
        })
      }
    />
  }
  {C2_pruValo8 == 1?
     <RowItemEscena3
      name="8"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo8_dialogo", {
          title: "8 C2",
          questions: C2_Pru_valo8_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="8"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo8_dialogo", {
          title: "8 C2",
          questions: C2_Pru_valo8_dialog,
          color: "#799496"
        })
      }
    />
  }

   </View>

    <View style={style.viewcolsmenu}> 
 {C2_pruValo9 == 1?
    <RowItemEscena3
      name="9"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo9_dialogo", {
          title: "9 C2",
          questions: C2_Pru_valo9_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="9"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo9_dialogo", {
          title: "9 C2",
          questions: C2_Pru_valo9_dialog,
          color: "#799496"
        })
      }
    />
  }
  {C2_pruValo10 == 1?
     <RowItemEscena3
      name="10"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo10_dialogo", {
          title: "10 C2",
          questions: C2_Pru_valo10_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="10"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo10_dialogo", {
          title: "10 C2",
          questions: C2_Pru_valo10_dialog,
          color: "#799496"
        })
      }
    />
  }

   </View>

    <View style={style.viewcolsmenu}> 
 {C2_pruValo11 == 1? 
    <RowItemEscena3
      name="11"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo11_dialogo", {
          title: "11 C2",
          questions: C2_Pru_valo11_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="11"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo11_dialogo", {
          title: "11 C2",
          questions: C2_Pru_valo11_dialog,
          color: "#799496"
        })
      }
    />
 }
 {C2_pruValo12 == 1?
     <RowItemEscena3
      name="12"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo12_dialogo", {
          title: "12 C2",
          questions: C2_Pru_valo12_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="12"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo12_dialogo", {
          title: "12 C2",
          questions: C2_Pru_valo12_dialog,
          color: "#799496"
        })
      }
    />
  }

   </View>
    <View style={style.viewcolsmenu}> 
 {C2_pruValo13 == 1?
    <RowItemEscena3
      name="13"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo13_dialogo", {
          title: "13 C2",
          questions: C2_Pru_valo13_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="13"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo13_dialogo", {
          title: "13 C2",
          questions: C2_Pru_valo13_dialog,
          color: "#799496"
        })
      }
    />
  }
{C2_pruValo14 == 1?
     <RowItemEscena3
      name="14"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo14_dialogo", {
          title: "14 C2",
          questions: C2_Pru_valo14_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="14"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo14_dialogo", {
          title: "14 C2",
          questions: C2_Pru_valo14_dialog,
          color: "#799496"
        })
      }
    />
  }

   </View>
       <View style={style.viewcolsmenu}> 
 {C2_pruValo15 == 1?
    <RowItemEscena3
      name="15"
      color="#82E0AA"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo15_dialogo", {
          title: "15 C2",
          questions: C2_Pru_valo15_dialog,
          color: "#799496"
        })
      }
    />:
    <RowItemEscena3
      name="15"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C2_PruValo15_dialogo", {
          title: "15 C2",
          questions: C2_Pru_valo15_dialog,
          color: "#799496"
        })
      }
    />
  }

   </View>

    </ScrollView>
  </View>
  </ImageBackground>
  );
}
}


const style = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection: "row",
    width: "100%",
    height :'100%',

  },
  viewrowmenu:{
    flex:1,
    flexDirection: "column"

  }
});