import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert, Modal, TouchableHighlight,
  StatusBar,  SafeAreaView,ScrollView } from "react-native";
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(3, 33, 0, 0.47)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between"
  },
  modalView: {
    width: '90%',
    height: '90%',
    margin: 20,
   // backgroundColor: "black",
    backgroundColor: "rgba(0, 185, 188, 0.37)",
    //borderRadius: 20,
    //padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
   backgroundColor: "red",
   // borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
   modalText2: {
   // marginBottom: 15,
    // marginLeft : 20,
    fontSize: 22,
    textAlign: "center",
    // borderColor: "#20232a",
     paddingVertical: 8,
     borderWidth: 4,
      fontWeight: "bold"
   // backgroundColor: "red"
  },
   modalText: {
   // marginBottom: 15,
    textAlign: "center",
    fontSize : 18,
     
  },
  modalTextcuerpo: {
   // marginBottom: 15,
    textAlign: "left",
     marginLeft : 10,
  },
   modalTextnegrilla: {
   // marginBottom: 15,
   fontSize : 18,
    textAlign: "left",
    fontWeight: "bold",
     marginLeft : 3,
  },

  modalTex3: {
   // marginBottom: 15,
    textAlign: "center",
    color: "#fff"
     
  },
  headerModal:{
    flex: 0.1,
    flexDirection : 'row',
    //backgroundColor: "yellow",
    alignItems: 'center',
    
  },
  headerMizq:{
    flex:0.9,
    backgroundColor: "#fbe122"
  },
  headerMDer:{
    flex:0.1,
    backgroundColor: "rgba(0, 0, 0, 0.48)",
  },
  bodyModal:{
    flex:0.9,
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 4,
    justifyContent: "center",
    width: '90%',
    height: '90%',
  },
  margen:{
    margin:5
  },
  wrapper: {
     //backgroundColor: 'white'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});


export const ModalHistorial = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
               <Text style={styles.modalText2}>Historial Paciente</Text>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fecha de consulta: </Text>
                <Text style={styles.modalText}>29/03/20 </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Nombre: </Text>
                <Text style={styles.modalText}>Señor C.J.M </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Edad: </Text>
                <Text style={styles.modalText}> 58 años </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Estado civil: </Text>
                <Text style={styles.modalText}> casado </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Ocupación anterior: </Text>
                <Text style={styles.modalText}> Ingeniero </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Ocupación actual: </Text>
                <Text style={styles.modalText}> Ninguna </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Acompañante: </Text>
                <Text style={styles.modalText}> Esposa </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes patológicos: </Text>
                <Text style={styles.modalText}> Hipertensión, accidente cerebrovascular hace 3 meses.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes farmacológicos: </Text>
                <Text style={styles.modalText}> Antihipertensivos.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Motivo de Consulta: </Text>
                <Text style={styles.modalText}> Dolor al orinar desde hace dos días.</Text>
                </Text>

          </View>

          <View style={styles.slide}>

                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Problema actual: </Text>
                <Text style={styles.modalText}> desde hace dos días presentaba sensación constante y ardor al orinar, con olor fuerte y en poca cantidad, fue hospitalizado para recibir el tratamiento farmacológico correspondiente pero su esposa refiere “desde el accidente cerebrovascular lo observo irritable, de mal humor e  impotente ante todos los cambios que ha tenido y que no puede expresar lo que siente de la manera adecuada”.</Text>
                </Text>

          </View>
          <View style={styles.slide}>
          
           <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Perfil del paciente: </Text>
                <Text style={styles.modalText}>  Vive con su esposa Liliana de 57 años y sus tres hijas, siendo la mayor Lorena, la menor lucia e intermedia Laura, viven en un tercer piso con ascensor, tienen buena relación familiar. 
                    Se le debe asistir en la alimentación porque su esposa dice que “él siempre se le olvida comerse los alimentos del lado derecho del plato” y cuando empezó con el problema de la orina, él estaba en proceso de recuperación y en terapia.</Text>
                </Text>
          </View>
        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


// Caso 1 Modal Pru_valoracion


export const Modal_C1_Pru_valoracion1_procedimiento = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
               <Text style={styles.modalText2}>Procedimiento Prueba</Text>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>En esta prueba el examinador se sienta frente al paciente, a un metro de distancia.  </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>El paciente debe cubrirse el ojo que no se está examinando (con la mano o con un oclusor…) y mirar con el otro ojo a un punto fijo, por ejemplo el ojo contrario del examinador. </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>Para evaluar el campo visual con esta técnica se hace por medio de un estímulo visual (un objeto cualquiera, por ejemplo, un bolígrafo en los meridianos (puntos cardinales: arriba, abajo, derecha e izquierda) principales, de afuera hacia dentro </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4. </Text>
                <Text style={styles.modalText}>Instruya al paciente para que avise cuando vea aparecer el dedo o el bolígrafo en su campo visual. </Text>
                </Text>


          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion1_HN = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
               <Text style={styles.modalText2}>Hallazgos Normales</Text>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Campos visuales normales por confrontación: </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>– Temporal: se extiende 90° de la línea media. </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>– Superior: 50°. </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>– Nasal: 60°.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>– Inferior: 70°.</Text>
                </Text>


          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion2_procedimiento = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
               <Text style={styles.modalText2}>Procedimiento Prueba</Text>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
        <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>Después de observar la abertura palpebral, observamos si  los ojos se mantienen en posición central cuando se encuentran en reposo. </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>Fije la cabeza del sujeto con una mano e instrúyalo a que siga con su vista un dedo, o un lapicero, que movemos frente a sus ojos. Mueva el lapicero o el dedo, primero en dirección horizontal de derecha a izquierda y viceversa, hasta las posiciones extremas </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>después, en sentido vertical de abajo a arriba y viceversa. Seguidamente realice el movimiento en las seis direcciones o puntos cardinales de la mirada, partiendo del centro y retornando al punto central, que corresponde a los movimientos que le imprimen al globo ocular cada uno de los músculos extrínsecos.</Text>
                </Text>

          </View>
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion2_HN = ({ text, onPress = () => {} }) => (
  <Modal
          animationType="slide"
          transparent={true}
          visible={text}
          onRequestClose={() => {
            Alert.alert("Presione la X para cerrar la ventana.");
          }}
        >
        
          
            <View style={styles.modalView}>

            <View style={styles.headerModal}>

            <View style={styles.headerMizq}>
               <Text style={styles.modalText2}>Hallazgos Normales</Text>
            </View>
         <View style={styles.margen}></View>

             <View style={styles.headerMDer}>
               <TouchableHighlight style={styles.openButton}
                
                onPress={onPress}
               >
                  <Text style={styles.modalTex3}>x</Text>
              </TouchableHighlight>
             </View>
            
              
            </View>
            
            <View style={styles.bodyModal}>
              <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'gray',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <ScrollView  >
       <StatusBar barStyle="dark-content" />       
          <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>La simple inspección de la facies permitirá darse cuenta si las dos aberturas palpebrales son de la misma amplitud </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>Recuerde que el párpado superior no cubre la pupila cuando se abre, pero puede cubrir la porción superior del iris; los párpados deben abrirse y cerrarse completamente, sin caída ni retraso </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>Realiza movimientos oculares hacia arriba, abajo, adentro sin  dificultad</Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);