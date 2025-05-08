import React from "react";
import { View, TouchableOpacity, Text, StyleSheet,Image, Dimensions, ImageBackground } from "react-native";
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  MainContainer: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
     height: Dimensions.get('window').height
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textStyle2: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: "white",
    fontWeight: 'bold',
  },
   button: {
  
    margin: 5,
  },
  button3: {
     margin: 20,
     height:50,
     width: 270,
    alignItems: "center",
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center'
  },
  Imagen:{
     width: Dimensions.get('window').width/2,
     height: Dimensions.get('window').height/3,
  },
  ContainerImagen:{
     alignItems: 'center',
    justifyContent: 'center',
   // marginBottom: 5
  },
  parametros: {
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#77c6c6',
     borderRadius:25,  
   paddingHorizontal:5,
    paddingVertical: 30,
    marginBottom: 1,
    borderRadius: 15,
    margin: 25,
   // width:'50%'
   width: Dimensions.get('window').width/1.5,  
  },
  textResult:{
    fontSize:25,
    color: 'white',
    fontWeight: 'bold',
    textAlign : 'center',
    marginLeft: 10,
    marginRight: 10,
    margin: 5
  }  
});

export const Save = ({  onPress = () => {} }) => (    
       <TouchableOpacity activeOpacity={0.8} style={styles.button3}  onPress ={onPress}>
        <Text style={styles.textStyle}> Continuar </Text>
       </TouchableOpacity>
         
);

export const ContainerSave = ({ children }) => (
<ImageBackground style={styles.MainContainer} source={require("../../assets/images/background.png")} >
   <View style={styles.ContainerImagen}>
            <Image style={styles.Imagen} source={require("../../assets/images/felicidades.gif")} resizeMode="contain"/>
            
   </View>
        <View style={styles.button}></View>
            {children}
    <View style={styles.button}></View>
   </ImageBackground>
);

export const Save2 = ({  onPress = () => {} }) => (    
       <TouchableOpacity activeOpacity={0.8} style={styles.button3}  onPress ={onPress}>
        <Text style={styles.textStyle}> Continuar </Text>
       </TouchableOpacity>
         
);

export const ContainerSave2 = ({ text,text2,children }) => (
<ImageBackground style={styles.MainContainer} source={require("../../assets/images/background.png")} >
   <View style={styles.parametros}>
      
        <Text style ={styles.textResult}>RESULTADOS</Text>
       <Text style={styles.textStyle}>✔️ Correctas: {text}</Text>
       <Text style={styles.textStyle}>❌ Erróneas: {text2}</Text>

       </View>
        <View style={styles.button}></View>
            {children}
    <View style={styles.button}></View>
   </ImageBackground>
);






