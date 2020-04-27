import React, {Component} from 'react';
import { View, 
         Text, 
         Alert, 
         StyleSheet, 
         ImageBackground,
         Image,
        TouchableOpacity } from 'react-native';
import styles from './../../Style.js';
import { RowItemJuego1} from "../../elementos/RowItemJuego1";
import snaQuestions from "../../data/sna";



export default ({ navigation, route }) => (
<ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>

    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('M_juegos')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('Menu')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-home.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../../assets/images/buttonteory.png")} />
      </TouchableOpacity>
      </View>

      </View>
      <View style={style.container}>

          <View style={style.headerbodySNC}>


             
                
               
                </View>
             
          
            <View style={style.footerbodySNP}>


              <View style={style.footerSNPizq}>
                <View style={style.margen}></View>
                    <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
                          onPress={() => navigation.navigate('M_juegos')}>
                         <Image style={ styles.image } source={require("../../../assets/images/button-izquierda.png")} />
                    </TouchableOpacity>
                      <Text style={style.textoboton}>ESTUDIAR</Text>
                </View>
                  
                <View style={style.footerSNPcenter}>
                    <Text style={style.title}> SNA </Text>
                </View>

              <View style={style.footerSNPDer}>
                <View style={style.margen}></View>

                  <RowItemJuego1   
                        name="SNP"
                        color="#98fb98"
                        onPress={() =>
                          navigation.navigate("juego3", {
                            title: "SNP",
                            questions: snaQuestions,
                            color: "#98fb98"
                          })
                        }
                      />
                  <Text style={style.textoboton2}>JUGAR</Text>
              </View>

          </View>
    
      </View>
     </ImageBackground>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //backgroundColor: 'red',
    height :'100%',
    width : '100%'
  },
  headerbodySNC: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent : 'center',
   //  backgroundColor: 'blue',
      height :'100%',
      width : '100%'
    },
    hederSNcizq: {
     flex: 1,
     alignItems : 'flex-end',
     justifyContent : 'center',
    // backgroundColor: '#ffe4c4',
     height :'100%',
     width : '100%'

    },
    hederSNccenter: {
     flex: 1,
     alignItems : 'center',
     justifyContent : 'center',
   //  backgroundColor: '#7fffd4',
     height :'100%',
     width : '100%'

    },
    hederSNDer: {
     flex: 1,
     alignItems : 'flex-start',
     justifyContent : 'center',
   //  backgroundColor: 'yellow',
     height :'100%',
     width : '100%'

    },
   footerbodySNP: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent : 'center',
   // backgroundColor: 'yellow',
    height :'100%',
    width : '100%'
    },
    footerSNPizq: {
     flex: 1,
     alignItems : 'flex-end',
    //justifyContent : 'center',
    // backgroundColor: 'gray',
     height :'100%',
     width : '100%'

    },
    footerSNPcenter: {
     flex: 1,
     alignItems : 'center',
     //justifyContent : 'center',
    // backgroundColor: 'red',
     height :'100%',
     width : '100%'

    },
    footerSNPDer: {
     flex: 1,
     alignItems : 'flex-start',
    // justifyContent : 'center',
    // backgroundColor: 'yellow',
     height :'100%',
     width : '100%'

    },
   title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#9932cc",
    color: "#20232a",
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold"
  },
  textoboton: {
    marginRight : 10,
   //paddingVertical: 8,
   // borderWidth: 4,
    borderColor: "#20232a",
   // borderRadius: 6,
    backgroundColor: "white",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
   textoboton2: {
    marginLeft : 15,
   //paddingVertical: 8,
   // borderWidth: 4,
    borderColor: "#20232a",
   // borderRadius: 6,
    backgroundColor: "white",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  margen:{
    margin:10
  }
});







/*
function Welcome(props) {
  let a=parseInt(props.value);

 let suma=a + 10;
  return  <Text>Hello, {suma} , {props.name}</Text>;
}

class M_juego1 extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount() {
   this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
     let variable= this.state.count
      Alert.alert("Clicked    "+ variable +"  times")
  }

 render(){
   // name.valor=name.valor+200;

  return (
    <View style={styles.container}>
        <View style={styles.arriba}>
        <Button style={styles.button}
        title="ir a JUEGO 1 TEORIA 1"
        onPress={() => this.props.navigation.navigate('juego1_teory1')}
         />
        <Text>SNC</Text>
      <Button
        title="ir a JUEGO 1 PARTE 1"
        onPress={() => this.props.navigation.navigate('juego1_part1')}
      />


         </View>
        <View style={styles.abajo}> 

         <Button
        title="cambiar valores"
         onPress={
          () => this._onPressButton()
        }
              />

      <Welcome value='8' name="julian"/> 


          <Button
              title= "vamooooossssssssssss"
              onPress={() => this.updateCount()}
            >
              
            </Button>



        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'palevioletred',
    flexDirection: 'column',
  },

  arriba: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'turquoise',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  abajo: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'mediumturquoise',
  },
  button:{
     color: '#f194ff',
     borderRadius: 50,

  }

})

export default M_juego1;
*/
