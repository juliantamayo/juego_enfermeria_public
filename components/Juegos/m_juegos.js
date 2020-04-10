import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableHighlight,
        TouchableOpacity
      } from 'react-native';
import styles from './../Style.js';



export default class m_juegos extends Component {


  render() {
    return (
   //  <Imagebackground style={styles.container}>
    <ImageBackground source={require("../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
          
      <View style={styles.miniButon}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../assets/images/BtnMgame.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../assets/images/buttonteory.png")} />
      </TouchableOpacity>

      </View>
      <View style={styles.vBody}>
       
        
       <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.text}> JUEGO 1 </Text>
       </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => this.props.navigation.navigate('M_juego2')}>
        <Text style={styles.text}> JUEGO 2 </Text>
       </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.text}> JUEGO 3 </Text>
       </TouchableOpacity>
       </View>
    
        </ImageBackground>
  );
  }
}

