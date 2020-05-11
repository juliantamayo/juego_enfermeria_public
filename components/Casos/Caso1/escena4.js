import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity, Button ,  Image, Text, CheckBox, Alert} from 'react-native';

import styles from './../../Style.js';

export default class menu_caso1 extends React.Component {
  
  constructor() {
    super();
  
    this.state = {
      check:false,
      check2:false,
      caja1:0,
      caja2:0
    }
  }

  CheckBoxTest(){
  	this.setState(
  	{
  		
  		check:!this.state.check,
  	})
  }

  CheckBoxTest2(){
  	this.setState(
  	{
  		
  		check2:!this.state.check2,
  	})
  }
 
 
render() {


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
      <View style={styles.margen2}></View>
      <View style={style.containerBody}>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>
       El Paciente presenta Bradipsiquia
        </Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check} 
                    onChange={()=>this.CheckBoxTest()} 
        />
       </View>
     
       </View>
        <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>
       El paciente presenta dificultad para usar los números o hacer cálculos, aculculia 
        </Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check2} 
                    onChange={()=>this.CheckBoxTest2()} 
        />
       </View>
       </View>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>
       Fuerza muscular grado 2 en brazo derecho - hemiparesia derecha 
        </Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check2} 
                    onChange={()=>this.CheckBoxTest2()} 
        />
       </View>
       </View>
         {/* <Text>Is CheckBox 1: {this.state.check ? this.state.caja1=2: this.state.caja1=1}</Text>
           <Text>Is CheckBox 2: {this.state.check2 ? this.state.caja2=2: this.state.caja2=1}</Text>*/ } 
   
       
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Guardr_valo',{
                               check1:this.state.caja1,check2:this.state.caja2
                             })} style={style.button}>
                  <Text style={style.textBoton}>Continuar</Text>
                </TouchableOpacity>
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
   // alignItems : 'stretch',
    width: "100%",
    height :'100%'
  
  },
  viewcheckbody:{
  	flex:1,
  backgroundColor: "#C3CDC8",
  alignItems :'center',
  color: "#fff",
  flexDirection : 'row',
    width: "100%"
  },
  viewchecktext:{
   flex:0.8
  },
 viewcheck:{
 	flex:0.2,
 	alignItems :'center',
 	justifyContent:'center',
  backgroundColor: "white",
  margin:3
 },
 containerBody:{
   alignItems :'center',
   margin:5
 },
 text:{
  fontSize: 20,
    textAlign: "justify",
   marginLeft : 5,
  //backgroundColor: "#00fa9a",
 },
 textBoton:{
   fontSize: 20,
    textAlign: "center",
     fontWeight: "bold"
 },
 button: {
    backgroundColor: "#51B9F1",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  }
});