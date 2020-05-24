
import React, { Component } from 'react';

import { StyleSheet, 
  View, 
  Text,
  TouchableOpacity, 
  Button, AsyncStorage,Alert,ImageBackground,
  Image,
  StatusBar,ScrollView } from 'react-native';
import style from '../../../Style.js';

export default class C2_guardar_valoracion extends Component {

constructor(route) {
    super(route);
    
    global.C2_recibe_valo = 1;
  }


state = {
       C2_arraycheckRecibe:this.props.route.params?.C2_arraycheckR,
       C2_arraycomparar:[1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1],
       'C2_save_valoracion':0
   }


  saveData = (value) => {

       if(JSON.stringify(this.state.C2_arraycheckRecibe) === JSON.stringify(this.state.C2_arraycomparar)) {
         AsyncStorage.setItem('C2_save_valoracion',  global.C2_recibe_valo.toString());
      this.setState({ 'C2_save_valoracion':  global.C2_recibe_valo });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
        
       } else{
         return  this.props.navigation.navigate("M_caso2");
       }  
     
   } 


     
  render() {

   
         var a1 = this.state.C2_arraycheckRecibe;
         var a2 = this.state.C2_arraycomparar;
          var array1=null;
          var array2=null;
         
          for (var i = 0; i <= a1.length; i++) {
           // JSON.stringify(array1) === JSON.stringify(array2)
           //  if(JSON.stringify(a1) != JSON.stringify(a2)) {
             //   for(var j=0;j<= a1.length; j++){
             //    array2=<Text style={styles.text}>no son iguales</Text>;
           //  }//else if (JSON.stringify(a1) == JSON.stringify(a2)) {
            // array1=<Text style={styles.text}>son iguales</Text>;
           // }
             if (JSON.stringify(a1) === JSON.stringify(a2)) {
                 array1=<View style={styles.viewcaritas}>
                        <Text style={styles.textmensaje_carita}>Bien hecho</Text>
                        <Text style={styles.carita}>😎</Text>
                        </View>;
            }//else if (JSON.stringify(a1[i])==0 && JSON.stringify(a2[i])==0) {
             //    array2=<Text style={styles.text}>✔</Text>;
           // }
            else if (JSON.stringify(a1) !== JSON.stringify(a2)) {
                 array2=<View style={styles.viewcaritas}>
                        <Text style={styles.textmensaje_carita2}>Ha faltado o se ha seleccionado una de más</Text>
                        <Text style={styles.carita}>😞</Text>
                        </View>;
            }//else  if (JSON.stringify(a1[i])==1 && JSON.stringify(a2[i])==0){
              //   array4=<Text style={styles.text}>elegiste una que no era</Text>;

          //}
        }

    return (
      <ImageBackground source={require("../../../../assets/images/background.png")}style={style.container} resizeMode='contain'>
   <View style={styles.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={style.header}>
    
     <View style={style.headerIzquierda}>
     
      </View>

      <View style={style.headerDerecha}>
      
      </View>
     
      </View>
   
    <View style={styles.containerBody}>
        
         <View style={styles.button}></View>    
              
      
      {a1[0]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Cuenta con un adecuado estado de salud</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[1]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Es una persona activa, pensante, camina adecuadamente, es independiente.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[2]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>3.  Ve bien de cerca y lejos, percibe olores, sabores y percibe la sensación táctil y dolorosa sin dificultad en todas las áreas del cuerpo.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[3]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>4.  Desorientado alopsiquicamente (tiempo y lugar).</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[4]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>5.  Las respuestas emocionales son acordes al funcionamiento normal en su vida cotidiana y la expresión gestual corresponde a la reacción emocional verbalizada.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[5]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>6.  El paciente que se encuentra bien vestido, alegre, con buen lenguaje y entendible, con marcha estable y espontaneo en lo que responde sin titubear.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[6]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>7.  Fascias de dolor</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[7]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>8.  Memoria conservada.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[8]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>9.  Desorientado alopsiquicamente.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[9]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>10.  Juicio conservado.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[10]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>11.  Bradipsiquia.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[11]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>12.  Patrón de sueño sin alteraciones.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[12]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>13.  Capacidad de diferenciación de olores.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[13]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>14.  Incapacidad de diferenciación de olores</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[14]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>15.  Al estimulo con la torunda de algodón cerca de las fosas nasales presenta estornudo, parpadeo y el lagrimeo.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[15]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>16.   Identificación de sensación de calor y frio en áreas simétricas.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[16]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>17.   En la palpación se evidencia simetría facial y contracción de la mandíbula de manera simétrica</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[17]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>18.  Afasia de Expresión y apraxia verbal.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[18]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>19.  Asimetría facial y contracción de la mandíbula de manera asimétrica.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[19]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>20.  En la percusión contracción rápida en ambos lados del musculo maseterino.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[20]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>21.  Durante la valoración por medio de la inspección se evidencia simetría en ambas hemilenguas.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[21]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>22.  Punta de la lengua desviada, sin capacidad de ejercer fuerza hacia las mejillas</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[22]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>23.   La punta de la lengua se encuentra centrada, fuerza de la lengua ejercida hacia las mejillas.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[23]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>24.  La conducción ósea es la que más predomina</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[24]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>25.   La conducción área es la que más predomina, </Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[25]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>26.  Paciente que lateraliza de lado derecho.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[26]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>27.  El paciente no lateraliza las vibraciones del diapasón.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[27]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>28.  Se evidencia una flexión leve hacia el hombro.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[28]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>29.   Al percutir el tendón del tríceps se consigue la extensión del antebrazo por encima del brazo,</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[29]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>30.   Al percutir el punto medio de la rodilla se evidencia la flexión de la rodilla.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[30]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>31.   Se puede evidenciar el movimiento del pie en flexión plantar.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[31]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>32.   El movimiento de la pared abdominal hacia el lado que se está estimulando con el lápiz.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[32]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>33.  Flexión plantar de los dedos de los pies en forma de abanico.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[33]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>34.  El paciente tiene la capacidad de discriminar los dos puntos en ambas partes del cuerpo, siendo este simétrico.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[34]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>35.  Astereognosia en ambos brazos.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[35]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>36.  Estereognosia en ambos brazos</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      
      <View style={styles.button}></View>
      
               {array1}
               {array2}
             <TouchableOpacity onPress ={this.saveData} style={styles.button2}>
                  <Text style={styles.textBoton}>Continuar</Text>
                </TouchableOpacity>
               <View style={styles.button}></View>
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
  containerBody:{
   alignItems :'center',
   margin:5
    //backgroundColor: '#fff',
  },
   button: {
  
    margin: 5
  },
  viewcheckbody:{
    flex:1,
  backgroundColor: "rgba(3, 33, 0, 0.47)",
  //backgroundColor: "red",
  color: "#fff",
  flexDirection : 'row',
    width: "100%"
  },
 textIncorrect:{
  fontSize: 20,
  fontWeight: "bold",
  color:"red"
  //backgroundColor: "#00fa9a",
 },
 textcorrect:{
  fontSize: 20,
  fontWeight: "bold",
  color:"green"
  //backgroundColor: "#00fa9a",
 },
  textmensaje_carita:{
   fontSize: 20,
  textAlign: "center",
   //backgroundColor: 'rgba(255,0,0,0,0.6)',
  fontWeight: 'bold',
  borderWidth: 2,
  backgroundColor: "rgba(0,240,10,0.7)",
  paddingVertical: 5,
  paddingRight : 5,
  paddingLeft :5,
  color: "white"
 },
 textmensaje_carita2:{
  fontSize: 20,
  textAlign: "center",
   //backgroundColor: 'rgba(255,0,0,0,0.6)',
  fontWeight: 'bold',
  borderWidth: 2,
  backgroundColor: "rgba(255,0, 0, 0.7)",
  paddingVertical: 5,
  paddingRight : 5,
  paddingLeft :5,
  color: "white"
},
carita:{
  fontSize: 40,
  textAlign: "center",
  fontWeight: 'bold',
  paddingVertical: 5,
  paddingRight : 5,
  paddingLeft :5,
  color: "white"
},
viewcaritas:{
   alignItems :'center',
   
},
 viewcheckbody:{
    flex:1,
  backgroundColor: "#C3CDC8",
  alignItems :'center',
  color: "#fff",
  flexDirection : 'row',
    width: "100%",
    margin: 5

  },
  viewchecktext:{
   flex:0.8
  },
 viewcheck:{
   flex:0.2,
   alignItems :'center',
   justifyContent:'center',
  backgroundColor: "white",
  margin:3
 },
 textCheck:{
   fontSize: 20,
    textAlign: "justify",
   marginLeft : 5
 },
 textBoton:{
   fontSize: 20,
    textAlign: "center",
     fontWeight: "bold"
 },
 button2: {
    backgroundColor: "#51B9F1",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
});