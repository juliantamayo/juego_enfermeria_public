import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity,  Image, Text, AsyncStorage,Dimensions } from 'react-native';

import styles from './../../Style.js';

import C1_Pru_valo1_dialog from "../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion1_dialog";
import C1_Pru_valo2_dialog from "../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion2_dialog";
import C1_Pru_valo3_dialog from "../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion3_dialog";
import C1_Pru_valo4_dialog from "../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion4_dialog";
import C1_Pru_valo5_dialog from "../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion5_dialog";
import C1_Pru_valo6_dialog from "../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion6_dialog";
import C1_Pru_valo7_dialog from "../../data/C1_data/C1_Pru_valoracion/D_C1_Pru_Valoracion7_dialog";

import { ButtonContainer, RowItemEscena3 } from "../../elementos/RowItem";
const { width, height } = Dimensions.get('window')


export default class escena3 extends React.Component {


    state ={
     
    };
   
    componentDidMount= () => {
    let keys = ['save_pruValo1', 'save_pregPcte2','save_pregPcte3','save_pregPcte4','save_pregPcte5','save_pregPcte6','save_pregPcte7'];
    AsyncStorage.multiGet(keys).then(result => {
      this.setState({
        'save_pruValo1': result[0][1],
        'save_pregPcte2': result[1][1],
        'save_pregPcte3': result[2][1],
        'save_pregPcte4': result[3][1],
        'save_pregPcte5': result[4][1],
        'save_pregPcte6': result[5][1],
        'save_pregPcte7': result[6][1],
      });
    });
  }; 
 

render() {
const Esc3=parseFloat(this.state.save_pruValo1);//+parseFloat(this.state.save_pregPcte2)+parseFloat(this.state.save_pregPcte3)+parseFloat(this.state.save_pregPcte4)+parseFloat(this.state.save_pregPcte5)+parseFloat(this.state.save_pregPcte6)+parseFloat(this.state.save_pregPcte7);

  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
   <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_caso1')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
   <View style={style.viewcolsmenu}>

     <RowItemEscena3   
      name="1"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C1_PruValo1_dialogo", {
          title: "1 pruValo1",
          questions: C1_Pru_valo1_dialog,
          color: "#36b1f0"
        })
      }
    />

    <RowItemEscena3
      name="2"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C1_PruValo2_dialogo", {
          title: "2  pruValo2",
          questions: C1_Pru_valo2_dialog,
          color: "#799496"
        })
      }
    />
    </View>

    <View style={style.viewcolsmenu}>

    <RowItemEscena3
      name="3"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C1_PruValo3_dialogo", {
          title: "3",
          questions: C1_Pru_valo3_dialog,
          color: "#799496"
        })
      }
    />
    <RowItemEscena3
      name="4"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C1_PruValo4_dialogo", {
          title: "4",
          questions: C1_Pru_valo4_dialog,
          color: "#799496"
        })
      }
    />

     </View>
   
    <View style={style.viewcolsmenu}>

   <RowItemEscena3
      name="5"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C1_PruValo5_dialogo", {
          title: "5",
          questions: C1_Pru_valo5_dialog,
          color: "#799496"
        })
      }
    />
    <RowItemEscena3
      name="6"
      color="#00b9bc"
      onPress={() =>
        this.props.navigation.navigate("V_C1_PruValo6_dialogo", {
          title: "6",
          questions: C1_Pru_valo6_dialog,
          color: "#799496"
        })
      }
    />

   </View>

    <View style={style.viewcolsmenu}> 

    <RowItemEscena3
      name="7"
      color="#77c6c6"
      onPress={() =>
        this.props.navigation.navigate("V_C1_PruValo7_dialogo", {
          title: "7",
          questions: C1_Pru_valo7_dialog,
          color: "#799496"
        })
      }
    />

   </View>
   <Text style={styles.textStyle}>
         hola   {Esc3}
           
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
    flexDirection: "row",
    width: "100%",
    height :'100%',
  },
  viewrowmenu:{
    flex:1,
    flexDirection: "column"
   

  }
});