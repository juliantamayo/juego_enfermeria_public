
import React, { Component } from 'react';

import { StyleSheet, 
  View, 
  Text,
  TouchableOpacity, 
  Button, AsyncStorage,Alert,ImageBackground,
  Image,
  StatusBar,ScrollView } from 'react-native';
import style from '../../../Style.js';

export default class C3_guardar_valoracion extends Component {

constructor(route) {
    super(route);
    
    global.C3_recibe_valo = 1;
  }


state = {
       C3_arraycheckRecibe:this.props.route.params?.C3_arraycheckR,
       C3_arraycomparar:[1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1],
       'C3_save_valoracion':0
   }


  saveData = (value) => {

       if(JSON.stringify(this.state.C3_arraycheckRecibe) === JSON.stringify(this.state.C3_arraycomparar)) {
         AsyncStorage.setItem('C3_save_valoracion',  global.C3_recibe_valo.toString());
      this.setState({ 'C3_save_valoracion':  global.C3_recibe_valo });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
        
       } else{
         return  this.props.navigation.navigate("M_caso3");
       }  
     
   } 


     
  render() {

   
         var a1 = this.state.C3_arraycheckRecibe;
         var a2 = this.state.C3_arraycomparar;
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
                        <Text style={styles.textmensaje_carita}>¡Bien hecho!</Text>
                        <Text style={styles.carita}>😎</Text>
                        </View>;
            }//else if (JSON.stringify(a1[i])==0 && JSON.stringify(a2[i])==0) {
             //    array2=<Text style={styles.text}>✔</Text>;
           // }
            else if (JSON.stringify(a1) !== JSON.stringify(a2)) {
                 array2=<View style={styles.viewcaritas}>
                        <Text style={styles.textmensaje_carita2}>Ha faltado o se ha seleccionado una de más.</Text>
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
             <Text style={styles.textCheck}>Paciente alerta, cognitivamente orientado.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[1]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Desorientado alopsiquicamente (tiempo y lugar).</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[2]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Capacidad de juzgar objetivamente las situaciones y memoria conservada.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[3]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Presenta signos y síntomas de dolor.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[4]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Afasia de Expresión y apraxia verbal.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[5]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Presenta epigastralgia.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[6]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Está en la capacidad de percibir y describir verbalmente su situación.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[7]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Fascias de dolor.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[8]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Fuerza muscular grado 2 en miembro inferior derecho - hemiparesia derecha, espasticidad grado 3.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[9]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Postura levemente inclinada hacia adelante, movimientos un poco más lentos.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[10]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Postura erguida, movimientos normales, marcha normal.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[11]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Paciente que en la palpación abdominal superficial y profunda presenta fascias y manifestaciones de dolor, al llegar a la zona del epigastrio este se hace más intenso e insoportable.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[12]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Astereognosia en ambos brazos.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[13]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>La faringe de color rojo intenso evidencia la inflamación de la mucosa de la faringe.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[14]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Ptosis palpebral derecha.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[15]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Presencia de reflejo nauseoso sin el estímulo.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[16]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Sin presencia de reflejo nauseoso.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[17]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Cuello simétrico y buen desarrollo muscular, a la palpación piel fría y sensibilidad conservada, sin adenopatías no se palpa tiroides.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[18]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Asimetría facial y contracción de la mandíbula de manera asimétrica.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[19]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Pulso carotideo aumentado por el dolor.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[20]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}> A nivel del tórax se evidencia Buen estado nutricional y desarrollo musculo esquelético.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[21]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Piel integra, pero sudorosa por dolor, tórax elíptico, simétrico.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[22]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}> Paciente dependiente.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[23]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Frémito vocal presente igual en ambos hemitórax, resonancia en todos los campos pulmonares, ruido traqueal, murmullo bronco vesicular y vesicular presentes. PMI visible en el 5 EII con LMC.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[24]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Marcha hemipléjica.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[25]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Se evidencia nauseas con presencia de borborigmos en todos los cuadrantes.  No ruidos vasculares.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[26]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Se percibe sonido timpánico en zona de estómago e intestino subyacente, mate en hígado y bazo.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[27]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Paciente con capacidad para desarrollar prueba dedo-nariz coordinado, firme y rápido, que percibe sensación táctil y dolorosa en todas las áreas del cuerpo.</Text>
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
  backgroundColor: "rgba(0,230,10,0.99)",
  paddingVertical: 5,
  paddingRight : 5,
  paddingLeft :5,
  color: "white",
   borderRadius: 10
 },
 textmensaje_carita2:{
  fontSize: 20,
  textAlign: "center",
   //backgroundColor: 'rgba(255,0,0,0,0.6)',
  fontWeight: 'bold',
  borderWidth: 2,
  backgroundColor: "rgba(255,0, 0, 0.99)",
  paddingVertical: 5,
  paddingRight : 5,
  paddingLeft :5,
  color: "white",
   borderRadius: 10
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
  backgroundColor: "#b2dfdb",
  alignItems :'center',
  color: "#fff",
  flexDirection : 'row',
    width: "100%",
    margin: 5,
 borderRadius:5

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
    backgroundColor: "#23B9B5",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
});