import React, { useState, useEffect } from "react";
import { View, 
		 StyleSheet, 
		 Text, 
		 Dimensions, 
		 TouchableOpacity, 
		 ScrollView, 
		 StatusBar,
		 Image,
		 ImageBackground } from "react-native";
import sncQuestions from "../data/snc";
import estilo from '../Style.js';
 import { CommonActions } from '@react-navigation/native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function m_casos({navigation, route}) {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
<ImageBackground source={require("../../assets/images/background.png")}style={estilo.container} resizeMode='contain'>

<View style={estilo.header}>   
      <View style={estilo.headerIzquierda}>
     <TouchableOpacity style={ estilo.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'M_casos',
                },
                { name: 'Menu' },
              ],
            })
          )
        }>
               <Image style={ estilo.image } source={require("../../assets/images/button-back.png")} />
      </TouchableOpacity>
</View>


<View style={estilo.headerDerecha}>    
  <TouchableOpacity style={ estilo.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'M_casos',
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ estilo.image } source={require("../../assets/images/buttonMinijuegos.png")} />
      </TouchableOpacity>
      
       <TouchableOpacity style={ estilo.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'M_casos',
             
                },
                { name: 'pruebaT' },
              ],
            })
          )
        }>
               <Image style={ estilo.image } source={require("../../assets/images/buttonteory.png")} />
      </TouchableOpacity>
      </View>
      </View>

    <View style={style.container}>
   

      <TouchableOpacity onPress={() => navigation.navigate('M_caso1')} style={style.button}>
        <Text style={style.text}>Caso 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>
                          navigation.navigate("M_caso2")
                        } style={style.button}>
        <Text style={style.text}>Caso 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('M_juegos3')} style={style.button}>
        <Text style={style.text}>Caso 3</Text>
      </TouchableOpacity>

    </View>

     </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'red',
    width: "100%",
    height :'100%',

  },
  button: {
    backgroundColor: "rgba(3, 33, 0, 0.47)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    height :'15%',
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  }
});

/*
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 50,
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "rgba(3, 33, 0, 0.47)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  text2: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
     backgroundColor: "red",
    justifyContent: "space-between"
  }
});
*/
