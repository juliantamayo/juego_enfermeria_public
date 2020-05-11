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


export default class result_q extends React.Component  {
   
  render(){
 //const expo = this.props.route.params.experiencia;
 
    return (
  
    <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.vBody}>
       
       <TouchableOpacity activeOpacity={0.8} style={styles.button2}  onPress={() => this.props.navigation.navigate('M_juego2')

     }>
        <Text style={styles.text}> Continuar </Text>
       </TouchableOpacity>
       <View style={style.parametros}>
      
       <Text style={styles.text}>Experiencia: { this.props.route.params.experiencia}</Text>
       
       <Text style={styles.text}>Correctas: { this.props.route.params.correctas}</Text>
      
       <Text style={styles.text}>Erróneas: { this.props.route.params.erroneas}</Text>

       </View>
       </View>
    
        </ImageBackground>
  );
}





saveData() {
  
  let obj = {
    name: 5,

  }
  AsyncStorage.setItem('user', JSON.stringify(obj));
}

displayData = async () => {
  try {
    // statements
    let  user = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(user);
    alert(parsed.name);
  } catch(error) {
    // statements
    alert(error)
  }
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

