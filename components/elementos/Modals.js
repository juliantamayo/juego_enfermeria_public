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


export const Modal_C1_Pru_valoracion3_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Observe desde el comienzo del examen físico si existe o no desviación de una comisura labial al hablar o la salida de la saliva por un lado de la boca</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>Ordene al sujeto que arrugue la frente (con esta maniobra exploramos el facial superior), que frunza el ceño, que cierre fuertemente los ojos, que se ría, que enseñe los dientes y que silbe y observe la simetría  de los pliegues, de los surcos y de las comisuras labiales. </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>Pídale a la persona que proyecte los labios hacia adelante, mientras usted ejerce presión en contra con sus dedos</Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4. </Text>
                <Text style={styles.modalText}>Pídale, además, que llene de aire la boca y pronuncie ambas mejillas, presiónelas simultáneamente con sus dedos índices y note si se escapa el aire por uno de los lados de la boca. </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5. </Text>
                <Text style={styles.modalText}>Explore la fuerza de cierre de los párpados pidiendo al sujeto que mantenga los ojos fuertemente cerrados, mientras usted trata de abrirlos elevando los párpados con sus pulgares. </Text>
                </Text>
          </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion3_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Movimientos faciales simétricos y sin dificultad </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C1_Pru_valoracion4_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Con el paciente sentado y las piernas que cuelgan sin tocar el piso. Se le pide al paciente que mantenga cada pierna en posición firme y el enfermero trata de extender la pierna contra resistencia.</Text>
                </Text>

          </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion4_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Fuerza muscular grado 5 (arco completo de movilidad, contra gravedad y resistencia fuerte – músculo normal) </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


export const Modal_C1_Pru_valoracion5_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> El enfermero observa los movimientos del paciente al caminar, sentarse, desvestirse, en estas actividades se observa en el paciente la realización de los movimientos de flexión, extensión, abducción, aducción, la amplitud y simetría del movimiento en cada extremidad. </Text>
                </Text>

          </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion5_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>El paciente está en la capacidad de desarrollar todos los movimientos en la amplitud y simetría requerida.

 </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


export const Modal_C1_Pru_valoracion6_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> Se le solicita al paciente que camine un trayecto, regrese, y eventualmente lo repita si es necesario. Mientras esto ocurre, el enfermero observa los distintos aspectos que van implícitos en el caminar: coordinación, postura del tronco, amplitud de los pasos, separación de los pies, equilibrio, fuerza. </Text>
                </Text>

          </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion6_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>La marcha normal es suave, usualmente acompañada de balanceo simétrico de los brazos. Cuando el caminar es normal, el talón debe tocar gentilmente el suelo con la rodilla extendida. El paso debe entonces transferirse armónicamente a lo largo del pie hacia el metatarso. Con la rodilla ligeramente flexionada, el pie debe levantarse del suelo. Los movimientos al caminar deben ser coordinados.
 </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C1_Pru_valoracion7_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> Consiste en determinar si el paciente es capaz de percibir y reconocer un objeto familiar (monedas, llave, lápiz…) mediante la palpación con cada mano y con los ojos cerrados.
Se le pide al paciente que se ubique cómodamente en la silla, se le va indicar cuál es procedimiento a realizar sin que este tenga vista de los mismos, se le indicara que se le colocara una venda en sus ojos y que él debe decir lo que va percibir con sus manos ((monedas, llave, lápiz). 
 </Text>
                </Text>

          </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C1_Pru_valoracion7_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Estereognosia: Capacidad para reconocer la configuración espacial de los objetos por medio de la exploración táctil.
 </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

// CASO 2 HISTORIAL DEL PACIENTE

export const C2_ModalHistorial = ({ text, onPress = () => {} }) => (
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
            bottom: 20
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
                <Text style={styles.modalText}>Señor P.C.P</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Edad: </Text>
                <Text style={styles.modalText}> 55 años </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Estado civil: </Text>
                <Text style={styles.modalText}> Casado </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Ocupación anterior: </Text>
                <Text style={styles.modalText}> Ingeniero civil.  </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Ocupación actual: </Text>
                <Text style={styles.modalText}> Ingeniero contratista. </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Acompañante: </Text>
                <Text style={styles.modalText}> Ninguno </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes Patológicos: </Text>
                <Text style={styles.modalText}> paciente que refiere no tener antecedentes patológicos.  </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes farmacológicos: </Text>
                <Text style={styles.modalText}> Ninguno</Text>
                </Text>

               

          </View>

          <View style={styles.slide}>

              <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes Familiares: </Text>
                <Text style={styles.modalText}> Madre con antecedentes de ACV isquémico con secuelas,  padre hipertenso perteneciente al programa de crónicos.</Text>
                </Text>

            <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Motivo de Consulta: </Text>
                <Text style={styles.modalText}> "Vengo por mi cita de control, ya que quiero saber cómo estoy físicamente" </Text>
                </Text>

            </View>
                  <ScrollView  >
       <StatusBar barStyle="dark-content" />
    
          <View style={styles.slide}>
          
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Perfil del paciente: </Text>
                <Text style={styles.modalText}> {"\n"} Trabaja como ingeniero de obras en la empresa C.P.Y – S.A.S hace 30 años, tiene unas asignación de 5 salarios mínimos legales vigente en pesos colombianos, además de realizar otras actividades fuera de la empresa en la que labora. {"\n"} {"\n"} Vive con su esposa de 52 años en un edificio de 6 pisos y habita en el piso quinto el cual sube por las escaleras siempre.{"\n"} {"\n"} La casa del paciente es propia, tiene 3 habitaciones, cocina, sala, comedor, 2 baños y patio de ropas,  los pisos enchapados, a paredes de material de cemento, además de tener todo el servicio de saneamiento básico, tiene accesos viales con servicio de transporte accesible.{"\n"} {"\n"} El  barrio en el que vive se llama la Colina el cual está a dos cuadras de la central de urgencias que es la mejor institución por referencia del mismo paciente. {"\n"}{"\n"} Paciente que refiere dormir alrededor de 8 ocho horas teniendo un sueño totalmente placido {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </Text>
          </View>
            </ScrollView>

          <View style={styles.slide}>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Alimentación Diaria: </Text>
                <Text style={styles.modalText}>  </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Desayuno </Text>
                <Text style={styles.modalText}> Huevos o caldo, café o chocolate, arepa, jugo de naranja fruta </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Mediasnueves </Text>
                <Text style={styles.modalText}>Jugo de naranja con media manzana. </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Almuerzo </Text>
                <Text style={styles.modalText}>Pollo o carne pero come más pescado, con ensalada, ración pequeña de arroz y jugo  </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Merienda </Text>
                <Text style={styles.modalText}>Jugo con galletas integrales </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Comida </Text>
                <Text style={styles.modalText}>Café o jugo con pan. </Text>
                </Text>

             </View>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);

// CASO 2 MODAL PRUEVA DE VALORACIÒN

export const Modal_C2_Pru_valoracion1_procedimiento = ({ text, onPress = () => {} }) => (
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
            bottom: 20
          }}
          loop={false}
        >
          <View style={styles.slide}>

              

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>la enfermera del servicio deberá tener preparados pequeños frascos con sustancias de olores conocidos, corrientes o comunes, y que no sean irritantes. Entre ellos el olor a clavo, café, jabón, perfume</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}> * </Text>
               <Text style={styles.modalText}> No debe usarse amoniaco, vinagre, formol u otras sustancias, que irritarían las terminaciones sensitivas del V par</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}> Se le pide a la persona a valorar que: con la mano derecha ocluya la fosa nasal derecha con su dedo índice preferiblemente, mantenga la boca cerrada y cierre los ojos, así del mismo modo con la otra fosa nasal. </Text>
                </Text>

            

          </View>
           <View style={styles.slide}>
              <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>Presente varios olores familiares con un intervalo de dos minutos aproximadamente, entre el uno y el otro, ubique el tarro debajo de la fosa nasal que se está examinando (fosa nasal sin ocluir) </Text>
                </Text>

                   <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4. </Text>
                <Text style={styles.modalText}> Cada lado de las fosas nasales debe ser explorado separadamente, la enfermera del servicio le pregunta al paciente que olor fue el que percibió y si la percepción fue leve o no. Repita el procedimiento en la otra fosa nasal. </Text>
                </Text>

                   <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5. </Text>
                <Text style={styles.modalText}> Debemos preguntar primero si siente o no el olor y si responde positivamente, se le insta a que identifique el olor.  </Text>
                </Text>

             </View>


          <View style={styles.slide}>
             <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>6.  </Text>
                <Text style={styles.modalText}>Anótese cuidadosamente señalando para cada fosa nasal, cuál es el resultado de la prueba. </Text>
                </Text>

                   <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>7. </Text>
                <Text style={styles.modalText}>Antes de considerar una prueba como positiva hay que cerciorarse primero de que el sujeto no tiene catarro nasal (estados gripales), u otra afección de las fosas nasales, que impida o altere la circulación del aire por ellas.  </Text>
                </Text>

                   <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>8. </Text>
                <Text style={styles.modalText}>Es importante aclarar que aunque no se identifique exactamente, la apreciación por el sujeto de un olor, es suficiente para excluir la anosmia (pérdida del olfato). </Text>
                </Text> 
             </View>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion1_HN = ({ text, onPress = () => {} }) => (
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
               <Text style={styles.margen}>   </Text>
                <Text style={styles.modalTextcuerpo}>

                <Text style={styles.modalTextnegrilla}> </Text>
                <Text style={styles.modalText}>Se evidencia la diferenciación de olores, proporcionados por el examinador. </Text>
                </Text>


          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion2_procedimiento = ({ text, onPress = () => {} }) => (
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
            bottom: 20
          }}
          loop={false}
        >


          <View style={styles.slide}>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Sensiblilidad Térmica</Text>
                </Text>

                <Text style={styles.margen}>   </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Importante:  </Text>
                <Text style={styles.modalText}> La porción sensitiva se explora en forma similar a la sensibilidad en general; para ello utilizamos torundas de algodón (algodón en forma de bola) o pincel del martillo de reflejos  y objetos fríos o calientes. </Text>
                </Text>

                <Text style={styles.margen}>   </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>se utilizan los tubos de ensayo uno contenido de agua bien caliente y el otro de agua fría u objetos fríos o calientes (mago del martillo de reflejos( al ser este metálico se percibe la sensación de frio), punta del martillo de reflejos ( al ser de plástico este se percibe a temperatura ambiente)  </Text>
                </Text>
          </View>

          <View style={styles.slide}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}> Sensiblilidad Táctil</Text>
                </Text>

                <Text style={styles.margen}>   </Text>

                <Text style={styles.margen}>   </Text>

               <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>se utiliza para ello un pincel o escobillón se irán tocando sucesivamente en región oftálmica, maxilar y mandibular.     </Text>
                </Text>

          </View>

        </Swiper>
            </View>
        
            </View>
            
        </Modal>
);


export const Modal_C2_Pru_valoracion2_HN = ({ text, onPress = () => {} }) => (
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

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>SENSACIÓN TÁCTIL DE FRIO – CALOR</Text>
                </Text>

                <Text style={styles.margen}>   </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>El paciente es capaz de discriminar entre sensación de calor y frio en áreas simétricas (ambos lados de la cara o el cuerpo tales como codos derecho e izquierdo, antebrazo derecho e izquierdo). El paciente siente el toque suave y la calidad de la sensación debe ser similar en áreas simétricas (en ambos lados de la cara). </Text>
                </Text>

                   </View>
                 <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}> LAGRIMEO Y ESTORNUDO</Text>
                </Text>

                <Text style={styles.margen}>   </Text>


                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}>En la valoración de lagrimeo con el uso de una torunda de algodón, se debe evidenciar el parpadeo y el lagrimeo (salida de lágrimas en el Angulo interno del ojo cerca a la nariz) en los ojos a demás cuando se pase la torunda de algodón en punta cerca a las fosas nasales se evidencia el estornudo.  </Text>
                </Text>

          </View>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


export const Modal_C2_Pru_valoracion3_procedimiento = ({ text, onPress = () => {} }) => (
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
            bottom: 20
          }}
          loop={false}
        >

          <View style={styles.slide}>


                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>La porción motora se explora de dos maneras:  </Text>
                </Text>

                <Text style={styles.margen}>   </Text>
                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}> Palpe los músculos temporales y después los maseteros, mientras ordena a la persona que apriete fuertemente sus dientes o que mastique, lo que permite percibir el endurecimiento de las masas musculares, por la contracción de las mismas.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>Pida al sujeto que abra su boca, mientras con una mano se opone a ello. El masetero se contrae, cuando el paciente abre la boca lentamente se verá que esta su alineación mandibular ( no se debe evidenciar desviación mandibular)  </Text>
             
             </Text>
           </View>

         <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Reflejo Maseterino </Text>
                </Text>

                <Text style={styles.margen}>   </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}> - </Text>
                <Text style={styles.modalText}>se obtiene colocando el dedo índice sobre la parte del mentón con la boca entre abierta y percutiendo con un martillo sobre este.  </Text>
                </Text>

          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion3_HN = ({ text, onPress = () => {} }) => (
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

             <Text style={styles.margen}>   </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Palpación:  </Text>
                              
                  <Text style={styles.modalText}>Se evidencia simetría en la apertura de la boca, fuerza a la masticación</Text>
                </Text>

                <Text style={styles.margen}>   </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Percusión del Reflejo Maseterino:   </Text>
                  <Text style={styles.modalText}>la respuesta será una rápida contracción bilateral de los músculos maseteros y temporales. </Text>
                </Text>

          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion4_procedimiento = ({ text, onPress = () => {} }) => (
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
            bottom: 20
          }}
          loop={false}
        >

          <View style={styles.slide}>

                <Text style={styles.margen}>   </Text>

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. fasciculaciones:  </Text>
                <Text style={styles.modalText}>se le ordena a la persona abrir la boca y se observa la lengua y si sus dos mitades son iguales y simétricas o si hay atrofia de alguna de sus dos mitades. Se observa, además, la existencia o no de fasciculaciones.</Text>
                </Text>

               <Text style={styles.margen}>   </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. Posición de la lengua:  </Text>
                <Text style={styles.modalText}>se le ordena al sujeto que saque la lengua y se observa si la punta está en el centro o se desvía hacia un lado. Téngase cuidado con las falsas desviaciones de la punta de la lengua, cuando hay parálisis facial o cuando faltan piezas dentarias que dan una asimetría del orificio de la abertura de la boca.</Text>
                </Text>

                       </View>

          <View style={styles.slide}>

   

                <Text style={styles.margen}>   </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. Fuerza muscular segmentaria:   </Text>
                <Text style={styles.modalText}>La fuerza muscular segmentaria de la lengua se explora ordenándole al sujeto que presione con la lengua una de las mejillas contra las cuales el examinador ha colocado sus dedos o mano por fuera</Text>
                </Text>


          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion4_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> -  Se observa la lengua y si sus dos mitades son iguales y simétricas. {"\n"} - Se observa si la punta está en el centro o se desvía hacia un lado. {"\n"} - Se explora ordenándole al paciente que presione con la lengua una de las mejillas contra las cuales el examinador ha colocado sus dedos o mano por fuera.</Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


export const Modal_C2_Pru_valoracion5_procedimiento = ({ text, onPress = () => {} }) => (
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

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}>  El examinador Hace vibrar el diapasón y lo coloca sobre la apófisis mastoides del lado cuyo oído estamos explorando (detrás del oído bien sea derecho o izquierdo). {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.   </Text>
                <Text style={styles.modalText}> Se Pide al paciente que avise inmediatamente cuando deje de percibir el sonido (o el zumbido).  {"\n"} </Text>
                </Text>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.   </Text>
                <Text style={styles.modalText}> Al avisar, el examinador traslada el diapasón, que estará vibrando débilmente, frente al conducto auditivo externo (cerca de la oreja sin que esta la toque). {"\n"} </Text>
                </Text>

                  </View>
      
                 <View style={styles.slide}>

                   <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4.   </Text>
                <Text style={styles.modalText}> El examinador le Pregunta al paciente si vuelve a percibir la vibración, normalmente debe oírse de nuevo la vibración cuando el diapasón se coloca frente al conducto auditivo externo, pues la conducción aérea es mayor que la ósea, repetir el mismo procedimiento con el conducto auditivo pendiente por valorar.{"\n"} </Text>
                </Text>


                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5.   </Text>
                <Text style={styles.modalText}> En las lesiones del oído interno y en los casos de sordera intensa de causa nerviosa no se percibe el diapasón en ninguna de las dos posiciones en que se coloque. {"\n"} </Text>
                </Text>

          </View>
      



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion5_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>{"\n"}   Debe predominar por más segundos la conducción aérea que la ósea {"\n"}  </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


export const Modal_C2_Pru_valoracion6_procedimiento = ({ text, onPress = () => {} }) => (
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
            bottom: 20
          }}
          loop={false}
        >
        <View style={styles.slide}>

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}> La enfermera coge el diapasón si tocar la parte de la Y (las dos ramas del instrumento de valoración), lo Hace vibrar, golpeándolo con la otra mano y lo coloca sobre el vértice del cráneo (parte  media superior de la cabeza).  {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.   </Text>
                <Text style={styles.modalText}> Se le Pregunta al paciente dónde siente el sonido y si lo oye en ambos oídos, se le pregunta si lo siente más intenso en un oído que en otro. En los casos normales se oye de inmediato y por igual en ambos oídos, no hay lateralización del sonido.  {"\n"} </Text>
                </Text>

                </View>
      
                 <View style={styles.slide}>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.   </Text>
                <Text style={styles.modalText}> Si se siente más intenso o solo se oye en uno de los oídos, se dice que el Weber está lateralizado hacia el lado donde aumenta su intensidad. Cuando el “aparato de trasmisión” está afectado, la percepción ósea aumenta y la misma es más intensa en el lado enfermo y cuando está afectado el nervio, la percepción es más intensa, o solo ocurre, en el lado sano.  {"\n"} </Text>
                </Text>

                  </View>
      
                 <View style={styles.slide}>

                   <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4.   </Text>
                <Text style={styles.modalText}> Si el Weber está lateralizado, repita la prueba ocluyendo primero, el oído que se está explorando y después el otro. Normalmente el diapasón se oye mejor cuando el oído tiene ocluido su conducto auditivo externo.{"\n"} Si con el oído que ha sido ocluido por la enfermera no se oye nada, entonces estamos en presencia de una sordera troncular o nerviosa de ese lado y si las vibraciones del diapasón ahora se sienten con intensidad similar en ambos oídos, se trata de una sordera ósea o de trasmisión, del lado no ocluido. </Text>
                </Text>
                  </View>
      
                 <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5.   </Text>
                <Text style={styles.modalText}> Seguidamente se realizan pruebas con vistas a comparar la capacidad para percibir la conducción ósea contra la conducción aérea.{"\n"} </Text>
                </Text>

          </View>

        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion6_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> {"\n"} El paciente no lateraliza  {"\n"} </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion7_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}>   {"\n"} El paciente puede estar acostado o sentado.   {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.   </Text>
                <Text style={styles.modalText}>  Se investiga sobre la cara interna del codo, a nivel del tendón del bíceps en su inserción distal en el antebrazo o flexura del codo (donde el brazo se dobla internamente) percutiendo sobre el dedo pulgar colocado encima de dicha inserción.   {"\n"} </Text>
                </Text>

                </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion7_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>-  Este reflejo pone en evidencia la raíz C5 y C6 del raquis cervical y produce la flexión del antebrazo sobre el brazo.</Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion8_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}> El paciente debe estar en completa relajación muscular en posición sedente (sentado) sin actividad muscular.  {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.  </Text>
                <Text style={styles.modalText}> Con una mano se toma el antebrazo del paciente a la altura del codo y se deja caer el antebrazo buscando generar un ángulo recto.   {"\n"} </Text>
                </Text>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.  </Text>
                <Text style={styles.modalText}>Se procede a percutir el tendón del tríceps; como resultado, se consigue la extensión del antebrazo por encima del brazo.  {"\n"} </Text>
                </Text>

                </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion8_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> {"\n"}Se procede a percutir el tendón del tríceps; como resultado, se consigue la extensión del antebrazo por encima del brazo.</Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion9_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}> El paciente debe estar en sedestacion (sentado), apoyar el codo sobre abdomen levemente en pronación.  {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.  </Text>
                <Text style={styles.modalText}>percuta el radio con el martillo de reflejos, a unos 2,5 cm a 5 cm de la muñeca.   {"\n"} </Text>
                </Text>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.  </Text>
                <Text style={styles.modalText}>Valore la flexión y la supinación de la muñeca.   {"\n"} </Text>
                </Text>

                </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion9_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>-  Se evidencia la flexión y la supinación de la muñeca. 
 </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion10_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}>El paciente se debe ubicar en sedestacion, donde se pueda visualizar la flexión de la rodillas.   {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.  </Text>
                <Text style={styles.modalText}>Percuta rápidamente el tendón rotuliano, justo por debajo de la rótula.   {"\n"} </Text>
                </Text>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.  </Text>
                <Text style={styles.modalText}>Observe la contracción de los cuádriceps con extensión de la rodilla. (retirado del eje del cuerpo).  {"\n"} </Text>
                </Text>

                </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion10_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> Observe la contracción de los cuádriceps con extensión de la rodilla. (retirado del eje del cuerpo).
 </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion11_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}> Se le pide al paciente que se ubique sobre la camilla, el cual debe estar arrodillado, con lo pies por fuera de la misma, teniendo en cuenta las precauciones siempre velando por la seguridad del paciente, este reflejo se busca percutiendo el Tendón de Aquiles.   {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.  </Text>
                <Text style={styles.modalText}> Se puede evidenciar la flexión plantar.  {"\n"} </Text>
                </Text>

                </View>
      
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion11_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Evidencia de la flexión plantar. </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion12_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}>Se roza la piel del vientre desde la parte lateral hacia la línea media con un objeto afilado sin causar ruptura de la piel (lápiz).   {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.  </Text>
                <Text style={styles.modalText}>La contracción muscular subyacente mueve la pared abdominal y arrastra el ombligo hacia el lado estimulado {"\n"} </Text>
                </Text>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.  </Text>
                <Text style={styles.modalText}>Para el reflejo abdominal superior se estimula por abajo del reborde costal y para el reflejo abdominal inferior por arriba del pliegue inguinal{"\n"} </Text>
                </Text>

                </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion12_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>- Contracción muscular subyacente moviendo la pared abdominal y arrastra el ombligo hacia el lado estimulado. {"\n"}{"\n"} -  Para el reflejo abdominal superior se estimula por abajo del reborde costal y para el reflejo abdominal inferior por arriba del pliegue inguinal </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion13_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}>Paciente en decúbito dorsal (acostado) y el miembro inferior extendido. {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.  </Text>
                <Text style={styles.modalText}> Se roza la planta del pie en su parte externa desde el talón hacia arriba con un objeto romo. {"\n"} </Text>
                </Text>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.  </Text>
                <Text style={styles.modalText}> La respuesta que se obtiene es la flexión plantar de los dedos.{"\n"} </Text>
                </Text>

                </View>
      
      </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion13_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>{"\n"} -  flexión plantar de los dedos. </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion14_procedimiento = ({ text, onPress = () => {} }) => (
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

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1.  </Text>
                <Text style={styles.modalText}>Esta prueba valora la capacidad de discrimar dos puntos separados que se aplican simultáneamente sobre la piel (manos o brazos). El objetivo es determinar la distancia mínima de separación a partir de la cual los estímulos se identifican como separados. {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2.  </Text>
                <Text style={styles.modalText}> Se evalúa usando un compás de puntas romas. Se abren las puntas de 3-4 cm de distancia. Se coloca sobre la piel asegurándose de que las dos puntas toquen la piel de forma simultánea. {"\n"} </Text>
                </Text>

           </View>

             <View style={styles.slide}>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3.  </Text>
                <Text style={styles.modalText}> Se le pide al paciente que informe si siente uno o dos contactos. {"\n"} </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4.  </Text>
                <Text style={styles.modalText}>Si el paciente responde “uno” cuando las puntas del compás tienen 4 cms de separación se abren hasta que sea capaz de distinguir cuando es tocado en 2 puntos. {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5.  </Text>
                <Text style={styles.modalText}>Debe realizarse comparando áreas simétricas del cuerpo (ejemplo: ambas manos o brazos). {"\n"} </Text>
                </Text>

                </View>

        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion14_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> {"\n"} Capacidad de discriminar dos puntos separados que se aplican simultáneamente sobre la piel, se debe evidenciar en un paciente normal la discriminación simétrica (ambas partes del cuerpo derecho e izquierdo). </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C2_Pru_valoracion15_procedimiento = ({ text, onPress = () => {} }) => (
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

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}> -  </Text>
                <Text style={styles.modalText}> {"\n"}Consiste en la capacidad de identificar objetos por palpación. {"\n"}</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalText}> {"\n"} Para examinarla se le coloca al paciente en la mano un objeto de uso común y se le pide que lo identifique con los ojos cerrados y así sucesivamente con otros dos objetos (llaves, marcador, lápiz, etc.) y se hace el mismo procedimiento en la mano contraria {"\n"} </Text>
                </Text>

           </View>
          
        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C2_Pru_valoracion15_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> {"\n"} -  El paciente identifica sin ningún problema el objeto al cual se le ubica primero en una mano y luego en la otra con los ojos cerrados.  </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

// Historial Caso 3

export const C3_ModalHistorial = ({ text, onPress = () => {} }) => (
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
            bottom: 20
          }}
          loop={false}
        >
          <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fecha de consulta: </Text>
                <Text style={styles.modalText}>17/09/2020</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Nombre: </Text>
                <Text style={styles.modalText}>Señor A.T</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Edad: </Text>
                <Text style={styles.modalText}> 50 años </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Estado civil: </Text>
                <Text style={styles.modalText}> Divorciado </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Ocupación actual: </Text>
                <Text style={styles.modalText}> Vendedor </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Acompañante: </Text>
                <Text style={styles.modalText}> Ninguno</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes patológicos: </Text>
                <Text style={styles.modalText}> Gastritis </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Antecedentes farmacológicos: </Text>
                <Text style={styles.modalText}> Milanta.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Motivo de Consulta: </Text>
                <Text style={styles.modalText}> Dolor en el abdomen en su parte superior y nauseas desde hace 2 días. </Text>
                </Text>

          </View>


        <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Problema actual: </Text>
                <Text style={styles.modalText}> Le apareció un dolor en la parte superior del abdomen, Tratando de aliviar un poco su dolor tomó un jugo de aloe vera, pero con poca mejoría, aunque por tener tanta ocupación ha tratado de no prestarle atención, al segundo día el dolor se intensificó, acompañado de náuseas, se siente cansado por que no ha podido dormir bien, desde hace 3 años ha presentado episodios similares que pueden durar entre 1 o 2 meses.</Text>
                </Text>

                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Manifiesta: </Text>
                <Text style={styles.modalText}> “lo único que le importa es que le quiten ese ardor o cólico en la boca del estómago”.   Comenta que además del dolor le preocupa que sus dos hijos adolescentes que viven con él están solos y sin quien esté pendiente de ellos, además de sus obligaciones laborales. Refiere que en las anteriores ocasiones el médico le ha ordenado tomar MILANTA 5cc cada 8 horas antes de las comidas, pero solo lo toma cuando tiene el dolor, no lo consume habitualmente por que se le olvida y porque mantiene ocupado en su trabajo.</Text>
                </Text>

                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>-  </Text>
                <Text style={styles.modalText}>   El paciente consume gaseosa de manera ocasional y licor moderadamente cada 15 días, fuma un paquete de cigarrillos al día y dice que en los últimos días ha comido muy poco, pues no tiene apetito y se llena con mucha facilidad. Consumo de lácteos: diariamente consume entre 1 y 2 vasos de leche deslactosada, además de pan, galletas, pasteles hojaldrados cada 8 días.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </Text>

          </View>
            </ScrollView>

        <ScrollView  >
       <StatusBar barStyle="dark-content" />

          <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Importante {"\n"} </Text>
                <Text style={styles.modalText}> Al momento de la valoración, el paciente reconoce diferentes olores, su agudeza visual es AO,AI y OD 20/20, realiza movimientos oculares sin dificultad,  pupilas que reaccionan a la luz, con buena acomodación y convergencia, parpados con buena oclusión y posicion del borde sin alteración en ambos ojos, reconoce la sensación táctil y dolorosa en toda la cara, pestañea al estimular la córnea con un algodón, sus movimientos faciales son simétricos, reconoce diferentes sabores, escucha el tic tac del reloj a 30 cm cada oído, mantiene el equilibrio, lengua centrada y con fuerza, úvula móvil y central, reflejo nauseoso presente sin estimulo, está en la capacidad de realizar contra resistencia de cuello y hombros.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </Text>

          </View>
           </ScrollView>


        <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>
          

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Importante{"\n"} </Text>
                <Text style={styles.modalText}>  Paciente con implantación de pestañas adecuada, permeabilidad e integridad de aparato lacrimal y de todas las estructuras de los ojos, mucosas húmedas y rosadas. Pabellón auricular bien implantado, blando, no doloroso, con tamaño proporcional al resto del cuerpo; el meato acústico externo mide 2.5 cm con piel integra y presencia de poco cerumen amarillento en ambos oídos, la membrana timpánica se observa integra, el paciente escucha el susurro de la voz a 40 cm, con audición conservada en ambos oídos. Nariz simétrica, proporcional al resto del cuerpo, permeable, en la rinoscopia se observó mucosa nasal pálida y un poco seca debido a la respiración rápida por el dolor. Labios,  mucosa oral, paladar íntegros, rosados, secos por el dolor, dientes completos.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </Text>
          </View>
                </ScrollView>
        </Swiper>
            </View>
        
            </View>
            
         
        </Modal>
);


// CASO 3 PRUEBAS DE VALORACIÒN

export const Modal_C3_Pru_valoracion1_procedimiento = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> Se dirige el rayo de luz de la linterna  a la faringe y se coloca el bajalenguas en el tercio medio de la lengua </Text>
                </Text>


          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C3_Pru_valoracion1_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Faringe de color rosado intenso con integridad lisa y al tocar el tercio medio de la lengua no se debe presentar el reflejo nauseoso</Text>
                </Text>

          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C3_Pru_valoracion2_procedimiento = ({ text, onPress = () => {} }) => (
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

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>Paciente que se le explica el procedimiento de auscultación, en donde se requiere que el halla desocupado su vejiga previamente {"\n"}  </Text>
                </Text>  

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>en decúbito dorsal, con almohada debajo de la cabeza y rodillas flexionadas, con área de abdomen descubierta, buena iluminación, el enfermero se ubica de frente o lateral al paciente.   {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>Pregúntele a la persona si hay algún área abdominal en la que sienta molestia o dolor. Estas áreas deben examinarse último. {"\n"} </Text>
                </Text>


          </View>
          <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4. </Text>
                <Text style={styles.modalText}>  El enfermero divide imaginariamente el abdomen en 4 cuadrantes, empieza a auscultar desde la región umbilical y continuar ordenadamente  en todos los cuadrantes {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5. </Text>
                <Text style={styles.modalText}>Siga la expresión facial del paciente y su lenguaje corporal.   {"\n"} </Text>
                </Text>


          </View>
      
        </Swiper>
            </View>
        
            </View>
            
         
        </Modal>
);


export const Modal_C3_Pru_valoracion2_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> {"\n"} Los ruidos intestinales normales son sonidos de tono alto. Tienen características de gorgoteo (glu-glu), con una frecuencia de 5 a 35 por minuto como suma total de todos los cuadrantes. </Text>
                </Text>

          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


export const Modal_C3_Pru_valoracion3_procedimiento = ({ text, onPress = () => {} }) => (
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

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>El paciente con su abdomen descubierto y en decúbito dorsal {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>el enfermero con la superficie palmar con la ayuda de sus dedos, empieza a presionar a una profundidad máxima de 1 cm  {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>con movimientos rotatorios, suaves y lentos, se debe recorrer el abdomen en su totalidad con el fin de relajar los músculos, detectar distensión abdominal, masas o dolor, preparandose para la palpación profunda.{"\n"} </Text>
                </Text>
              </View>

                <View style={styles.slide}>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4. </Text>
                <Text style={styles.modalText}>Anime al paciente a respirar lenta y profundamente, y a exhalar con la boca abierta, mientras palpa. El abdomen debe sentirse relajado con la espiración {"\n"}  </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5. </Text>
                <Text style={styles.modalText}>También se capta si existen o no, alteraciones de los distintos planos que integran la pared abdominal, Se podrán explorar posibles masas que pertenecen a la pared, persisten al sentarse el enfermo, al inspirar o al elevar su cabeza o sus pies.{"\n"}  </Text>
                </Text>
          </View>



        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C3_Pru_valoracion3_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}>Abdomen plano, simétrico, blando, depresible, no doloroso. Con la palpación superficial, los músculos abdominales deben sentirse relajados. {"\n"}</Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);

export const Modal_C3_Pru_valoracion4_procedimiento = ({ text, onPress = () => {} }) => (
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
            bottom: 20
          }}
          loop={false}
        >

          <View style={styles.slide}>

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>El paciente se mantiene acostado en decúbito dorsal {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>La palpación visceral varía según la respiración, de modo que el enfermero debe conocer la influencia fisiológica de la respiración (movimiento del diafragma y vísceras) en este sentido.   {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>Puede usarse la palpación  bimanual con los índices en contacto. Utilizando la palpación bimanual, palpe profundamente los cuadrantes abdominales, utilice toda la superficie flexora de los dedos, deprímalos todos a la vez, con un movimiento flexor de las articulaciones metacarpofalángicas.{"\n"} </Text>
                </Text>
              </View>

                <View style={styles.slide}>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4. </Text>
                <Text style={styles.modalText}>Anime de nuevo al examinado a respirar lenta y profundamente, y a exhalar con la boca abierta, mientras palpa {"\n"}  </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5. </Text>
                <Text style={styles.modalText}>Si el abdomen es difícil de deprimir repita la palpación, colocando una mano sobre la otra (palpación bimanual con las manos superpuestas).{"\n"}  </Text>
                </Text>
          </View>
      


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C3_Pru_valoracion4_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> {"\n"}  Abdomen blando, depresible, no doloroso a la palpación  profunda, no masas palpables.</Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


export const Modal_C3_Pru_valoracion5_procedimiento = ({ text, onPress = () => {} }) => (
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

                  <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>1. </Text>
                <Text style={styles.modalText}>Se realiza con el paciente acostado boca arriba.  {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>2. </Text>
                <Text style={styles.modalText}>La técnica seguida es la de Gerhardt o dígito-digital.  {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>3. </Text>
                <Text style={styles.modalText}>Los golpes de percusión se difunden fácilmente en el abdomen, por tanto, se aconseja que se realicen con extrema suavidad.{"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>4. </Text>
                <Text style={styles.modalText}>La percusión del hígado se ejecuta siguiendo la línea hemiclavicular; se comienza en el tercer espacio intercostal y se desciende espacio por espacio.  {"\n"}  </Text>
                </Text>
              </View>

                <View style={styles.slide}>
               
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>5. </Text>
                <Text style={styles.modalText}>La percusión del bazo debe ser una percusión suave. {"\n"}  </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>6. </Text>
                <Text style={styles.modalText}>Con el paciente en decúbito lateral derecho, se la inicia sobre la línea axilar media, hasta el nivel de los arcos costales noveno y décimo. {"\n"}  </Text>
                </Text>

                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>7. </Text>
                <Text style={styles.modalText}>También se debe percutir el hipocondrio izquierdo y También se percutirán las fosas lumbares con la superficie cubital del puño derecho cerrado. {"\n"}  </Text>
                </Text>


          </View>
      

        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);


export const Modal_C3_Pru_valoracion5_HN = ({ text, onPress = () => {} }) => (
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
                <Text style={styles.modalText}> {"\n"}- Matidez a nivel del hígado y bazo {"\n"}- Timpanismo del aire gástrico en hipocondrio izquierdo {"\n"}- Sonido submate por la interposición del pulmón sobre el borde superior del hígado </Text>
                </Text>


          </View>

        </ScrollView>

        </Swiper>
            </View>
        

              
            </View>
            
        
        </Modal>
);


