import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity, Button ,  Image, Text, CheckBox, Alert} from 'react-native';

import styles from './../../Style.js';

export default class menu_caso1 extends React.Component {
  
  constructor() {
    super();
  
    this.state = {
      check:false,
      check2:false,
      caja1:1,
      caja2:1
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
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>
       Check Box 1
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
       Check Box 2
        </Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check2} 
                    onChange={()=>this.CheckBoxTest2()} 
        />
       </View>
     
       </View>
           <Text>Is CheckBox selected: {this.state.check ? this.state.caja1=2: this.state.caja1=1}</Text>
           <Text>Is CheckBox selected: {this.state.check2 ? this.state.caja2=2: this.state.caja2=1}</Text>
       <Text>{this.state.caja1}</Text>
       <Button onPress={() => this.props.navigation.navigate('Guardr_valo',{
       	check1:this.state.caja1,check2:this.state.caja2
       })} title="mostrar" /> 
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
  backgroundColor: "rgba(3, 33, 0, 0.47)",
  //backgroundColor: "red",
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
 },

 text:{
  fontSize: 20,
    textAlign: "left",
   marginLeft : 5,
  //backgroundColor: "#00fa9a",
 }
});