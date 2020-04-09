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
               <Image style={ styles.image } source={require("../../assets/images/BtnMgame.png")} />
      </TouchableOpacity>

      </View>
      <View style={styles.vBody}>
       
        
       <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => this.props.navigation.navigate('Home')}>
        <Text> JUEGO 1 </Text>
       </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => this.props.navigation.navigate('M_juego2')}>
        <Text> JUEGO 2 </Text>
       </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.button}  onPress={() => this.props.navigation.navigate('Home')}>
        <Text> JUEGO 3 </Text>
       </TouchableOpacity>
       </View>
    
        </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  imageContainer: {
       margin: 10,
       borderRadius: 60
     },
     image: {
       height:50,
       width: 50,
       borderRadius: 60
     },
     vBody: {
      flex:1,
      alignItems: 'center',
       justifyContent: 'center',
     // backgroundColor: 'yellow',
      height :'100%',
      width : '100%'
     },
     miniButon:{
      flex:0.3,
      flexDirection: 'column',
      backgroundColor: 'lightseagreen',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height :200,
      width : '100%'
     },
      button: {
     margin: 20,
     height:50,
     width: 270,
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20
  }
});