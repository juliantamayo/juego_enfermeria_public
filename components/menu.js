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




export default class menu extends Component {


  render() {
    return (
   //  <Imagebackground style={styles.container}>
    <ImageBackground source={require("../assets/images/background.png")}style={styles.container}>
          
      <View style={styles.miniButon}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_juegos')}>
               <Image style={ styles.image } source={require("../assets/images/BtnMgame.png")} />
      </TouchableOpacity>

      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../assets/images/BtnMgame.png")} />
      </TouchableOpacity>

      </View>
      <View style={styles.vBody}>
       
        
        <TouchableOpacity style={ styles.imageContainer} activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image2 } source={require("../assets/images/BtnMgame.png")} />
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
  miniButon:{
      flex:0.3,
      flexDirection: 'column',
      backgroundColor: 'lightseagreen',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      height :'100%',
      width : '100%'
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
      backgroundColor: 'yellow',
      height :'100%',
      width : '100%'

     },
      image2: {
       height:200,
       width: 200,
       borderRadius: 100
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