import React from 'react';
import { ScrollView, StatusBar, StyleSheet, ImageBackground, View, TouchableOpacity, Button ,  Image, Text, CheckBox, Alert
          ,TextInput} from 'react-native';

import styles from './../../Style.js';

export default class C2_escena4 extends React.Component {
  
  constructor() {
    super();
  
    this.state = {


      check:false,check2:false,check3:false,check4:false,check5:false,
      check6:false,check7:false,check8:false,check9:false,check10:false,
      check11:false,check12:false,check13:false,check14:false,check15:false,
      check16:false,check17:false,check18:false,check19:false,check20:false,
      check21:false,check22:false,check23:false,check24:false,check25:false,
      check26:false,check27:false,check28:false,check29:false,check30:false,
      check31:false,check32:false,check33:false,check34:false,check35:false,check36:false,

      caja1:0,caja2:0,caja3:0,caja4:0,caja5:0,
      caja6:0,caja7:0,caja8:0,caja9:0,caja10:0,
      caja11:0,caja12:0,caja13:0,caja14:0,caja15:0,
      caja16:0,caja17:0,caja18:0,caja19:0,caja20:0,
      caja21:0,caja22:0,caja23:0,caja24:0,caja25:0,
      caja26:0,caja27:0,caja28:0,caja29:0,caja30:0,
      caja31:0,caja32:0,caja33:0,caja34:0,caja35:0,caja36:0,

    }
  }

  CheckBoxTest(){this.setState({check:!this.state.check})}     CheckBoxTest14(){this.setState({check14:!this.state.check14})}
  CheckBoxTest2(){this.setState({check2:!this.state.check2})}   CheckBoxTest15(){this.setState({check15:!this.state.check15})}
  CheckBoxTest3(){this.setState({check3:!this.state.check3})}   CheckBoxTest16(){this.setState({check16:!this.state.check16})}
  CheckBoxTest4(){this.setState({check4:!this.state.check4})}   CheckBoxTest17(){this.setState({check17:!this.state.check17})}
  CheckBoxTest5(){this.setState({check5:!this.state.check5})}   CheckBoxTest18(){this.setState({check18:!this.state.check18})}
  CheckBoxTest6(){this.setState({check6:!this.state.check6})}   CheckBoxTest19(){this.setState({check19:!this.state.check19})}
  CheckBoxTest7(){this.setState({check7:!this.state.check7})}   CheckBoxTest20(){this.setState({check20:!this.state.check20})}
  CheckBoxTest8(){this.setState({check8:!this.state.check8})}   CheckBoxTest21(){this.setState({check21:!this.state.check21})}
  CheckBoxTest9(){this.setState({check9:!this.state.check9})}   CheckBoxTest22(){this.setState({check22:!this.state.check22})}
  CheckBoxTest10(){this.setState({check10:!this.state.check10})}  CheckBoxTest23(){this.setState({check23:!this.state.check23})}
  CheckBoxTest11(){this.setState({check11:!this.state.check11})}  CheckBoxTest24(){this.setState({check24:!this.state.check24})}
  CheckBoxTest12(){this.setState({check12:!this.state.check12})}  CheckBoxTest25(){this.setState({check25:!this.state.check25})}
  CheckBoxTest13(){this.setState({check13:!this.state.check13})}

  CheckBoxTest26(){this.setState({check26:!this.state.check26})}   CheckBoxTest32(){this.setState({check32:!this.state.check32})}
  CheckBoxTest27(){this.setState({check27:!this.state.check27})}   CheckBoxTest33(){this.setState({check33:!this.state.check33})}
  CheckBoxTest28(){this.setState({check28:!this.state.check28})}   CheckBoxTest34(){this.setState({check34:!this.state.check34})}
  CheckBoxTest29(){this.setState({check29:!this.state.check29})}   CheckBoxTest35(){this.setState({check35:!this.state.check35})}
  CheckBoxTest30(){this.setState({check30:!this.state.check30})}   CheckBoxTest36(){this.setState({check36:!this.state.ch36eck36})}
  CheckBoxTest31(){this.setState({check31:!this.state.check31})}


validarCheckBox = (value) => {

  const vali1=this.state.caja1;    const vali2=this.state.caja2;    const vali3=this.state.caja3;
  const vali4=this.state.caja4;    const vali5=this.state.caja5;    const vali6=this.state.caja6; 
  const vali7=this.state.caja7;    const vali8=this.state.caja8;    const vali9=this.state.caja9;
  const vali10=this.state.caja10;  const vali11=this.state.caja11;  const vali12=this.state.caja12;
  const vali13=this.state.caja13;  const vali14=this.state.caja14;  const vali15=this.state.caja15;
  const vali16=this.state.caja16;  const vali17=this.state.caja17;  const vali18=this.state.caja18;
  const vali19=this.state.caja19;  const vali20=this.state.caja20;  const vali21=this.state.caja21;
  const vali22=this.state.caja22;  const vali23=this.state.caja23;  const vali24=this.state.caja24;
  const vali25=this.state.caja25;  const vali26=this.state.caja26;  const vali27=this.state.caja27;
  const vali28=this.state.caja28;  const vali29=this.state.caja29;  const vali30=this.state.caja30;
  const vali31=this.state.caja31;  const vali32=this.state.caja32;  const vali33=this.state.caja33;
  const vali34=this.state.caja34;  const vali35=this.state.caja35;  const vali36=this.state.caja36;

 var checkArray = [ vali1, vali2, vali3, vali4, vali5, vali6,vali7,vali8,vali9,vali10,vali11,vali12,
                         vali13,vali14,vali15,vali16,vali17,vali18,vali19,vali20,vali21,vali22,vali23,vali24,vali25,
                         vali26,vali27,vali28,vali29,vali30,vali31,vali32,vali33,vali34,vali35,vali36 ];
 var suma = 0;                        

  checkArray.forEach (function(checkArray){
        suma += checkArray;
    });                       

  if (vali1==0 && vali2==0   && vali3==0  && vali4==0  && vali5==0  && vali6==0  && vali7==0  && 
      vali8==0  && vali9==0  && vali10==0 && vali11==0 && vali12==0 && vali13==0 && vali14==0 &&
      vali15==0 && vali16==0 && vali17==0 && vali18==0 && vali19==0 && vali20==0 && vali21==0 &&
      vali22==0 && vali23==0 && vali24==0 && vali25==0 && vali26==0 && vali27==0 && vali28==0 &&
      vali29==0 && vali30==0 && vali31==0 && vali32==0 && vali33==0 && vali34==0 && vali35==0 &&
      vali36==0) {
       Alert.alert("Mensaje","No ha seleccionado ningun hallazgo ");

    }else if (suma >=30) {
       Alert.alert("Mensaje","Debes elegir bien los hallazgos del paciente");
    }
    else {
        Alert.alert("Mensaje","Recuerda que puedes hacer la valoración de nuevo si lo deseas", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("C2_Guardr_valo",{C2_arraycheckR:[ vali1, vali2, vali3, vali4, vali5, vali6,vali7,vali8,vali9,vali10,vali11,vali12,
                         vali13,vali14,vali15,vali16,vali17,vali18,vali19,vali20,vali21,vali22,vali23,vali24,vali25,
                         vali26,vali27,vali28,vali29,vali30,vali31,vali32,vali33,vali34,vali35,vali36 ]}) }
     ]);
    }  
   } 

 
 
render() {


  return (
   <ImageBackground source={require("../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>
   <View style={style.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={styles.margen2}></View>
    <View style={styles.header}>
    
     <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('M_caso1')}>
               <Image style={ styles.image } source={require("../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={styles.headerDerecha}>
      <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Home')}>
               <Image style={ styles.image } source={require("../../../assets/images/ayuda.png")} />
      </TouchableOpacity>
      </View>
     
      </View>
      <View style={styles.margen2}></View>
      <View style={style.containerBody}>
      <Text style={style.textTitulo}>Hallazgos en el Paciente</Text>
      
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Cuenta con un adecuado estado de salud</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check} 
                    onChange={()=>this.CheckBoxTest()} 
        />
       </View>
       </View>
       <Text  style={style.text_transparent}>Is CheckBox 1: {this.state.check ? this.state.caja1=1 : this.state.caja1=0}</Text>
        <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Es una persona activa, pensante, camina adecuadamente, es independiente.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check2} 
                    onChange={()=>this.CheckBoxTest2()} 
        />
       </View>
       </View>
       <Text style={style.text_transparent}>Is CheckBox 2: {this.state.check2 ? this.state.caja2=1 : this.state.caja2=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Ve bien de cerca y lejos, percibe olores, sabores y   percibe la sensación táctil y dolorosa sin dificultad en todas las áreas del cuerpo</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check3} 
                    onChange={()=>this.CheckBoxTest3()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 3: {this.state.check3 ? this.state.caja3=1: this.state.caja3=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Desorientado alopsiquicamente (tiempo y lugar).</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check4} 
                    onChange={()=>this.CheckBoxTest4()} 
        />
       </View>
       </View>
      <Text style={style.text_transparent}>Is CheckBox 4 {this.state.check4 ? this.state.caja4=1: this.state.caja4=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Las respuestas emocionales son acordes al funcionamiento normal en su vida cotidiana y la expresión gestual corresponde a la reacción emocional verbalizada.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check5} 
                    onChange={()=>this.CheckBoxTest5()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 5 {this.state.check5 ? this.state.caja5=1: this.state.caja5=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>El paciente que se encuentra bien vestido, alegre, con buen lenguaje y entendible, con marcha estable y espontaneo en lo que responde sin titubear.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check6} 
                    onChange={()=>this.CheckBoxTest6()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 6 {this.state.check6 ? this.state.caja6=1: this.state.caja6=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Fascias de dolor</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check7} 
                    onChange={()=>this.CheckBoxTest7()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 7 {this.state.check7 ? this.state.caja7=1: this.state.caja7=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Memoria conservada</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check8} 
                    onChange={()=>this.CheckBoxTest8()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 8 {this.state.check8 ? this.state.caja8=1: this.state.caja8=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Desorientado alopsiquicamente</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check9} 
                    onChange={()=>this.CheckBoxTest9()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 9 {this.state.check9 ? this.state.caja9=1: this.state.caja9=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Juicio conservado, </Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check10} 
                    onChange={()=>this.CheckBoxTest10()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 10 {this.state.check10 ? this.state.caja10=1: this.state.caja10=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Bradipsiquia.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check11} 
                    onChange={()=>this.CheckBoxTest11()} 
        />
       </View>
       </View>
   <Text style={style.text_transparent}>Is CheckBox 11 {this.state.check11 ? this.state.caja11=1: this.state.caja11=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Patrón de sueño sin alteraciones.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check12} 
                    onChange={()=>this.CheckBoxTest12()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 12 {this.state.check12 ? this.state.caja12=1: this.state.caja12=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Capacidad de diferenciación de olores.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check13} 
                    onChange={()=>this.CheckBoxTest13()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 13 {this.state.check13 ? this.state.caja13=1: this.state.caja13=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Incapacidad de diferenciación de olores</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check14} 
                    onChange={()=>this.CheckBoxTest14()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 14 {this.state.check14 ? this.state.caja14=1: this.state.caja14=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Al estimulo con la  torunda de algodón cerca de las fosas nasales presenta  estornudo, parpadeo y el lagrimeo.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check15} 
                    onChange={()=>this.CheckBoxTest15()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 15 {this.state.check15 ? this.state.caja15=1: this.state.caja15=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Identificación de sensación de calor y frio en áreas simétricas.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check16} 
                    onChange={()=>this.CheckBoxTest16()} 
        />
       </View>
       </View>
  <Text style={style.text_transparent}>Is CheckBox 16 {this.state.check16 ? this.state.caja16=1: this.state.caja16=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>En la palpación se evidencia simetría facial y contracción de la mandíbula de manera simétrica.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check17} 
                    onChange={()=>this.CheckBoxTest17()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 17 {this.state.check17 ? this.state.caja17=1: this.state.caja17=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Afasia de Expresión y apraxia verbal.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check18} 
                    onChange={()=>this.CheckBoxTest18()} 
        />
       </View>
       </View>
        <Text style={style.text_transparent}>Is CheckBox 18 {this.state.check18 ? this.state.caja18=1: this.state.caja18=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Asimetría facial y contracción de la mandíbula de manera asimétrica.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check19} 
                    onChange={()=>this.CheckBoxTest19()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 19 {this.state.check19 ? this.state.caja19=1: this.state.caja19=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>En la percusión contracción rápida en ambos lados del musculo maseterino.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check20} 
                    onChange={()=>this.CheckBoxTest20()} 
        />
       </View>
       </View>
  <Text style={style.text_transparent}>Is CheckBox 20 {this.state.check20 ? this.state.caja20=1: this.state.caja20=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Durante la valoración por medio de la inspección se evidencia simetría en ambas hemilenguas.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check21} 
                    onChange={()=>this.CheckBoxTest21()} 
        />
       </View>
       </View>
   <Text style={style.text_transparent}>Is CheckBox 21 {this.state.check21 ? this.state.caja21=1: this.state.caja21=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Punta de la lengua desviada, sin capacidad de ejercer fuerza hacia las mejillas.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check22} 
                    onChange={()=>this.CheckBoxTest22()} 
        />
       </View>
       </View>
   <Text style={style.text_transparent}>Is CheckBox 22 {this.state.check22 ? this.state.caja22=1: this.state.caja22=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>La punta de la lengua se encuentra centrada, fuerza de la lengua ejercida hacia las mejillas.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check23} 
                    onChange={()=>this.CheckBoxTest23()} 
        />
       </View>
       </View>
     <Text style={style.text_transparent}>Is CheckBox 23 {this.state.check23 ? this.state.caja23=1: this.state.caja23=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>La conducción ósea es la que más predomina</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check24} 
                    onChange={()=>this.CheckBoxTest24()} 
        />
       </View>
       </View>
 <Text style={style.text_transparent}>Is CheckBox 24 {this.state.check24 ? this.state.caja24=1: this.state.caja24=0}</Text>
       <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>La conducción área es la que más predomina, </Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check25} 
                    onChange={()=>this.CheckBoxTest25()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 25 {this.state.check25 ? this.state.caja25=1: this.state.caja25=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Paciente que lateraliza de lado derecho</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check26} 
                    onChange={()=>this.CheckBoxTest26()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 26 {this.state.check26 ? this.state.caja26=1: this.state.caja26=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>El paciente no lateraliza las vibraciones del diapasón.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check27} 
                    onChange={()=>this.CheckBoxTest27()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 27 {this.state.check27 ? this.state.caja27=1: this.state.caja27=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Se evidencia una flexión leve hacia el hombro.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check28} 
                    onChange={()=>this.CheckBoxTest28()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 28 {this.state.check28 ? this.state.caja28=1: this.state.caja28=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Al percutir el tendón del tríceps se consigue la extensión del antebrazo por encima del brazo.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check29} 
                    onChange={()=>this.CheckBoxTest29()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 29 {this.state.check29 ? this.state.caja29=1: this.state.caja29=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Al percutir el punto medio de la rodilla se evidencia la flexión de la rodilla.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check30} 
                    onChange={()=>this.CheckBoxTest30()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 30 {this.state.check30 ? this.state.caja30=1: this.state.caja30=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Se puede evidenciar el movimiento del pie en flexión plantar.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check31} 
                    onChange={()=>this.CheckBoxTest31()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 31{this.state.check31 ? this.state.caja31=1: this.state.caja31=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>El movimiento de la pared abdominal hacia el lado que se está estimulando con el lápiz.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check32} 
                    onChange={()=>this.CheckBoxTest32()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 32 {this.state.check32 ? this.state.caja32=1: this.state.caja32=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Flexión plantar de los dedos de los pies en forma de abanico.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check33} 
                    onChange={()=>this.CheckBoxTest33()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 33 {this.state.check33 ? this.state.caja33=1: this.state.caja33=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>El paciente tiene la capacidad de discriminar los dos puntos en ambas partes del cuerpo, siendo este simétrico.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check34} 
                    onChange={()=>this.CheckBoxTest34()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 34 {this.state.check34 ? this.state.caja34=1: this.state.caja34=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Astereognosia en ambos brazos.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check35} 
                    onChange={()=>this.CheckBoxTest35()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 35 {this.state.check35 ? this.state.caja35=1: this.state.caja35=0}</Text>
    <View style={styles.margen2}></View>
       <View style={style.viewcheckbody}>
       <View style={style.viewchecktext}>
        <Text style={style.text}>Estereognosia en ambos brazos.</Text>
        </View>
         <View style={style.viewcheck}>
       <CheckBox  
                   value={this.state.check36} 
                    onChange={()=>this.CheckBoxTest36()} 
        />
       </View>
       </View>
    <Text style={style.text_transparent}>Is CheckBox 36 {this.state.check36 ? this.state.caja36=1: this.state.caja36=0}</Text>
       
  
                <TouchableOpacity onPress={this.validarCheckBox} style={style.button}>
                  <Text style={style.textBoton}>Continuar</Text>
                </TouchableOpacity>
        </View>
    </ScrollView>
  </View>
  </ImageBackground>
  );
}
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height :'100%'
  
  },
  viewcheckbody:{
  	flex:1,
  backgroundColor: "#C3CDC8",
  alignItems :'center',
  color: "#fff",
  flexDirection : 'row',
    width: "100%"
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
 containerBody:{
   alignItems :'center',
   margin:5
 },
 text:{
  fontSize: 20,
    textAlign: "justify",
   marginLeft : 5,
 },
 textBoton:{
   fontSize: 20,
    textAlign: "center",
     fontWeight: "bold"
 },
 button: {
    backgroundColor: "#51B9F1",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  textTitulo:{
  fontSize: 20,
  textAlign: "center",
  fontWeight: 'bold',
  borderWidth: 2,
  backgroundColor: "white",
  paddingVertical: 5,
  paddingRight : 5,
  paddingLeft :5
 },
 text_transparent:{
   color: 'transparent',
   fontSize:1
 }
});