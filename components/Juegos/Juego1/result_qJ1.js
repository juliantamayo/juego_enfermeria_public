import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity,
        AsyncStorage
      } from 'react-native';
       import styles from './../../Style.js';


export default class result_qJ1 extends React.Component  {

 saveData(){  
    let name = "Michal";  
    AsyncStorage.setItem('user',name);  
  }  
  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      alert(user);  
    }  
    catch(error){  
      alert(error)  
    }  
  }
   
  render(){
 //const expo = this.props.route.params.experiencia;
 
    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.vBody}>
       
       <TouchableOpacity activeOpacity={0.8} style={styles.button2}  onPress={() => this.props.navigation.navigate('m_juego1')

     }>
        <Text style={styles.text}> Continuar </Text>
       </TouchableOpacity>
       <View style={style.parametros}>
      
       <Text style={styles.text}>experiencia: { this.props.route.params.experiencia}</Text>
       
       <Text style={styles.text}>correctas: { this.props.route.params.correctas}</Text>
   


        <TouchableOpacity activeOpacity={0.8} style={styles.button2}  onPress={ this.saveData

     }>
        <Text style={styles.text}> Guardar </Text>
       </TouchableOpacity>

       <TouchableOpacity activeOpacity={0.8} style={styles.button2}  onPress={ this.displayData

     }>
        <Text style={styles.text}> Mostrar </Text>
       </TouchableOpacity>
       </View>
       </View>
    
        </ImageBackground>
  );
}


}

const style = StyleSheet.create({
  parametros: {
     height:200,
     width: 200,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'yellow',     
  }
});

