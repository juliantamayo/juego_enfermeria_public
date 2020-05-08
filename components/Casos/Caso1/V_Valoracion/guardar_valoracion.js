//This is an example of React Native Global Scope Variables//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, 
  View, 
  Text,
  TouchableOpacity, 
  Button, AsyncStorage,Alert,ImageBackground,
  Image,
  StatusBar,ScrollView } from 'react-native';
import style from '../../../Style.js';
//import all the components we are going to use.
export default class guardar_escena1 extends Component {
 
state = {
       caja:this.props.route.params?.check1,
       caja2:this.props.route.params?.check2
   }

     
  render() {
    return (
      <ImageBackground source={require("../../../../assets/images/background.png")}style={style.container} resizeMode='contain'>
   <View style={styles.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={style.header}>
    
     <View style={style.headerIzquierda}>
     <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Escena4')}>
               <Image style={ style.image } source={require("../../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={style.headerDerecha}>
      <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ style.image } source={require("../../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
   
    <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
            <Text style={styles.textStyle}>
            {/*Global Variable*/}
          </Text>
        </View>
         <Button onPress ={this.saveData} title="guardar" style={styles.button}/>  
          <View style={styles.button}></View>
     
        <Button onPress ={this.removeValue}  title="eliminar cache data"/>  
         <View style={style.margen2}></View>
      
         {this.state.caja ==1 ?
        <View style={styles.viewcheckbody}>
       <View style={styles.viewchecktext}>
        <Text style={styles.text}>
       Check Box 1
        </Text>
        </View>
         <View style={styles.viewcheck}>
        <Text style={styles.textIncorrec}>
          X
        </Text>
        </View>
     
       </View>

         :<View style={styles.viewcheckbody}>
       <View style={styles.viewchecktext}>
        <Text style={styles.text}>
       Check Box 1
        </Text>
        </View>
         <View style={styles.viewcheckCorrect}>
        <Text style={styles.textIncorrec}>
          X
        </Text>
        </View>
     
       </View>} 
     <View style={style.margen2}></View>
        {this.state.caja2 ==1 ?
        <View style={styles.viewcheckbody}>
       <View style={styles.viewchecktext}>
        <Text style={styles.text}>
       Check Box 2
        </Text>
        </View>
         <View style={styles.viewcheck}>
        <Text style={styles.textIncorrec}>
          X
        </Text>
        </View>
     
       </View>

         :null}  


        <View style={styles.button}></View>
               <Text style={styles.textStyle}>   {this.state.caja}  </Text>
               <Text style={styles.textStyle}>   {this.state.caja2}  </Text>
      </View>
      </ScrollView>
  </View>
  </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  
 container: {
    flex: 1,
   // alignItems : 'stretch',
    width: "100%",
    height :'100%'
  
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    //backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
   button: {
  
    margin: 5,
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
  backgroundColor: "red",
 },
 viewcheckCorrect:{
   flex:0.2,
   alignItems :'center',
   justifyContent:'center',
  backgroundColor: "green",
 },

 text:{
  fontSize: 20,
    textAlign: "left",
   marginLeft : 5,
  //backgroundColor: "#00fa9a",
 },
 textIncorrec:{
  fontSize: 20,
  marginLeft : 5,
  fontWeight: "bold"
  //backgroundColor: "#00fa9a",
 }
});