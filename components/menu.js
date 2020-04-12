import React, {Component} from 'react';
import {Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableHighlight,
        TouchableOpacity
      } from 'react-native';
  import styles from './Style.js';
 // import im from '../assets/images/background.png';



export default function menu ({navigation}) {


 
    return (
   //  <Imagebackground style={styles.container}>
    <ImageBackground source={require("../assets/images/background.png")}style={styles.container}>
          
      <View style={styles.miniButon}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('M_juegos')}>
               <Image style={ styles.image } source={require("../assets/images/buttonMinijuegos.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../assets/images/buttonteory.png")} />
      </TouchableOpacity>
  
      </View>



      <View style={styles.vBody}>
       
        
        <TouchableOpacity style={ styles.imageContainer} activeOpacity={0.8}
       onPress={() => navigation.navigate('Home')}>
               <Image style={ styles.image2 } source={require("../assets/images/buttonstart.png")} />
      </TouchableOpacity>
       </View>
    
        </ImageBackground>
  );
  
}

