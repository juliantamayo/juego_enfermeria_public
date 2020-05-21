
import React, { Component } from 'react';

import { StyleSheet, 
  View, 
  Text,
  TouchableOpacity, 
  Button, AsyncStorage,Alert,ImageBackground,
  Image,
  StatusBar,ScrollView } from 'react-native';
import style from '../../../Style.js';

export default class guardar_escena1 extends Component {

constructor(route) {
    super(route);
    
    global.recibe_valo = 1;
  }


state = {
       caja:this.props.route.params?.check1,
       caja2:this.props.route.params?.check2,
       arraycheckRecibe:this.props.route.params?.arraycheckR,
       arraycomparar:[1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1],
       save_valoracion:0
   }


  saveData = (value) => {

       if(JSON.stringify(this.state.arraycheckRecibe) === JSON.stringify(this.state.arraycomparar)) {
         AsyncStorage.setItem('save_valo',  global.recibe_valo.toString());
      this.setState({ 'save_valoracion':  global.recibe_valo });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
        
       } else{
         return  this.props.navigation.navigate("M_caso1");
       }  
     
   } 


     
  render() {

   
         var a1 = this.state.arraycheckRecibe;
         var a2 = this.state.arraycomparar;
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
                 array1=<Text style={styles.textcarita}>😎</Text>;
            }//else if (JSON.stringify(a1[i])==0 && JSON.stringify(a2[i])==0) {
             //    array2=<Text style={styles.text}>✔</Text>;
           // }
            else if (JSON.stringify(a1) !== JSON.stringify(a2)) {
                 array2=<View style={styles.viewcaritas}>
                        <Text style={styles.textmensaje_carita2}>Ha faltado o se ha seleccionado una de más</Text>
                        <Text style={styles.textcarita}>😞</Text>
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
             <Text style={styles.textCheck}>Estado de confusión</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[1]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Paciente Independiente</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[2]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Desorientado alopsiquicamente (tiempo y lugar) </Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[3]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Signos y síntomas de dolor</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[4]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Bradipsiquia</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[5]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Acalculia</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[6]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Cognitivamente orientado</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[7]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Afasia de Expresión y apraxia verbal </Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[8]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Paciente con epigastralgia</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[9]==1 ?  <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Fuerza muscular grado 2 en brazo derecho - hemiparesia derecha, espasticidad grado 3. en brazo derecho</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[10]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Fuerza muscular de miembro superior izquierdo grado 5.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[11]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Heminegligencia e hipoestesia derecha 3.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[12]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Hemianopsia homónima izquierda</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[13]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Hemianopsia homónima derecha</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[14]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Ptosis palpebral derecha</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[15]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Ptosis palpebral izquierda</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[16]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Los músculos de la frente, superciliar y orbicular de los párpados se encuentran sólo levemente afectados, borramiento del surco nasogeniano, al pedirle al señor C.J.M que sonría o muestre los dientes, la boca se desvía hacia el lado izquierdo que mantiene la fuerza muscular.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[17]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Fuerza muscular grado 2 en miembro inferior derecho - hemiparesia derecha, Espasticidad grado 3.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[18]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Paciente dependiente</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[19]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Marcha hemipléjica</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[20]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Astereognosia táctil en miembro superior izquierdo</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[21]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Astereognosia táctil en miembro superior derecho</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[22]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Estereognosia en miembro superior izquierdo.</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textcorrect}>✔</Text>
           </View>
      </View>: null}
      {a1[23]==1 ? <View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Estereognosia en miembro superior derecho</Text>
           </View>
           <View style={styles.viewcheck}>
             <Text  style={styles.textIncorrect}>X</Text>
           </View>
      </View>: null}
      {a1[24]==1 ?<View style={styles.viewcheckbody}>
           <View style={styles.viewchecktext}>
             <Text style={styles.textCheck}>Paciente con - hemiparesia derecha fuerza muscular lovet 2, Espasticidad grado 3 y fuerza muscular en miembro inferior izquierdo grado 5 lovet.</Text>
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
    height :'100%',
    
  },
  containerBody:{
   alignItems :'center',
   margin:5
    //backgroundColor: '#fff',
  },
   button: {
  
    margin: 5,
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
  textcarita:{
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
    margin: 5,

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