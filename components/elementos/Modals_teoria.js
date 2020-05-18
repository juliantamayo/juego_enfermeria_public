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
    backgroundColor: "rgba(0, 185, 188, 0.37)",
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
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
   modalText2: {
    fontSize: 22,
    textAlign: "center",

     paddingVertical: 8,
     borderWidth: 4,
      fontWeight: "bold"
  },
   modalText: {
    textAlign: "center",
    fontSize : 18,
     
  },
  modalTextcuerpo: {
    textAlign: "left",
     marginLeft : 10,
  },
   modalTextnegrilla: {

   fontSize : 18,
    textAlign: "left",
    fontWeight: "bold",
     marginLeft : 3,
  },

  modalTex3: {
    textAlign: "center",
    color: "#fff"
     
  },
  headerModal:{
    flex: 0.1,
    flexDirection : 'row',
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
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});


export const SNP = ({ text, onPress = () => {} }) => (
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
               <Text style={styles.modalText2}>S. Nervioso Periférico</Text>
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
          <ScrollView  >
       <StatusBar barStyle="dark-content" />

          <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fibras nerviosas sensitivas o  fibras aferentes: </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>características </Text>
                <Text style={styles.modalText}>La informacipon sensitiva siempre  fluye del sistema nervioso periferico al sistema nervioso central. </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>{"\n"}Conformado </Text>
                <Text style={styles.modalText}>  receptores sensitivos: de sentidos especiales, receptores sensitivos somaticos localizados en la piel, receptores  del sistema nervioso autonomo distribuidos por todo el cuerpo, propiorreceptores que vigilan movimiento, tension y dolor muscular </Text>
                </Text>

          </View>
           </ScrollView>

          <View style={styles.slide}>

                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Conformado: </Text>
                <Text style={styles.modalText}> La información sensitiva se recibe del interior y exterior del cuerpo. Los datos sensitivos de entrada se trasmiten al Sistema nervioso central  a traves de los nervios periféricos</Text>
                </Text>
                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fisiología: </Text>
                <Text style={styles.modalText}> Las dendritas de las neuronas son receptores sensitivos   y cuando son estimulados, el impulso generado viaja hacia la medula espinal y el encefalo (partes del sistema nervisos central)</Text>
                </Text>

          </View>
                    <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Función Cognoscitiva: {"\n"} </Text>
                <Text style={styles.modalText}>Los nervios craneales, al igual que los nervios raquídeos son parte del sistema nervioso periférico y se designan con números romanos y nombres.{"\n"} Los números indican el orden en que nacen los nervios del encéfalo, de anterior a posterior, y el nombre su distribución o función. {"\n"}Los nervios craneales emergen de la nariz (1), los ojos (II), el tronco del encéfalo (III a XII) y la médula espinal (una parte del XI).{"\n"} Los nervios espinales o raquídeos son 31 pares que salen de la columna a través de los agujeros de conjunción, excepto el primero que emerge entre el atlas y el hueso occipital.{"\n"} Los nervios espinales se designan y enumeran según la región y nivel donde emergen de la columna vertebral. {"\n"}Hay ocho pares de nervios cervicales (que se identifican de C1 a C8), 12 pares torácicos (T1 a T12) cinco pares lumbares (L1 a L5), cinco pares sacros y un par de nervios coccígeos.      {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}       </Text>
                </Text>
          </View>
            </ScrollView>
        </Swiper>
            </View>
        
              
            </View>
            
         
        </Modal>
);


// Caso 1 Modal Pru_valoracion


export const SNC = ({ text, onPress = () => {} }) => (
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
               <Text style={styles.modalText2}>Sístema Nervioso Central</Text>
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
                       <ScrollView  >
       <StatusBar barStyle="dark-content" />

           <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                <Text style={styles.modalTextcuerpo}>
                 <Text style={styles.modalTextnegrilla}>Encéfalo {"\n"} Carácterísticas: </Text>
                <Text style={styles.modalText}>{"\n"}El encéfalo es la masa nerviosa contenida dentro del craneo se encuentra revestido por meninges (duramadre, piamadre y aracnoide), en su interior hay ventrículos cerebrales llenos de líquido cefalorraquídeo.{"\n"} Pesa entre 1450 g  y 1600 g (Marieb y hoehn, 2007). Recibe el 15% del gasto cardiaco y tiene un sistema de autoregulación para asegurar que el sumninistro de sangre sea constante.{"\n"} La disposicion de las arterias que lo alimentan es única y se comunican entre sí  por una estructura llamada poligono de Willis.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"} </Text>
                </Text>
               
          </View>
         </ScrollView>
          <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Cerebro{"\n"}Conformado por: </Text>
                <Text style={styles.modalText}>Hemisferios cerebrales {"\n"} </Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Anatomía del Cerebro{"\n"}</Text>
                <Text style={styles.modalText}>Está formado por  sustancia gris (por fuera, formada por cuerpos neuronales y dendritas) y la sustancia blanca (por dentro, formada por haces de  axones y su mielina).{"\n"}Pesa unos 1.200gr. Su superficie tiene arrugas o pliegues llamadas circunvoluciones y  unos surcos denominados cisuras. {"\n"}De ellas, las más notables son llamadas las cisuras de Silvio (lateral), de Rolando (central) y la inter hemisférica. La Cisura inter hemisferica divide la corteza  en dos partes llamados hemisferios cerebrales.  {"\n"}En los hemisferios se distinguen zonas denominadas lóbulos, que llevan el nombre del hueso en que se encuentran en contacto. {"\n"}{"\n"}Los lóbulos subdividen el cerebro según su función:{"\n"}
                 <Text style={styles.modalTextnegrilla}> {"\n"} Lóbulo frontal:</Text> 
                  situado en la parte anterior, por delante de la cisura de Rolando.
                   <Text style={styles.modalTextnegrilla}> {"\n"} Lóbulo parietal:</Text> Se halla por detrás de la cisura de Rolando y por encima de la de Silvio; por detrás limita con la imaginaria cisura perpendicular externa. 
                  <Text style={styles.modalTextnegrilla}> {"\n"} Lóbulo occipital:</Text> Es el casquete posterior cerebral, que en muchos animales tiene límites bien definidos, pero que en el hombre ha perdido su identidad anatómica. 
                 <Text style={styles.modalTextnegrilla}> {"\n"} Lóbulo temporal:</Text> Es una parte del cerebro localizado frente al lóbulo occipital, situado por debajo y detrás de la cisura de Silvio, aproximadamente detrás de cada cien {"\n"}{"\n"}{"\n"} </Text>
                </Text>

          </View>
             </ScrollView>

          <View style={styles.slide}>
            <ScrollView  >
       <StatusBar barStyle="dark-content" />
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fisiología del Cerebro: {"\n"} </Text>
                <Text style={styles.modalText}> <Text style={styles.modalTextnegrilla}>Áreas funcionales de la corteza cerebral{"\n"} </Text> 
                <Text style={styles.modalTextnegrilla}>Áreas sensoriales  </Text> (reciben e interpretan impulsos relacionados con las sensaciones); {"\n"}<Text style={styles.modalTextnegrilla}>Áreas motoras </Text> (inician movimientos); y <Text style={styles.modalTextnegrilla}>{"\n"} Áreas de asociación</Text> (funciones de integración más complejas, como memoria, emociones, etc.).{"\n"}{"\n"}
<Text style={styles.modalTextnegrilla}>Las áreas sensoriales </Text> están situadas principalmente en la parte posterior de la corteza cerebral, detrás de la cisura central. En la corteza, las áreas sensoriales primarias tienen la conexión más directa con receptores sensoriales periféricos.
{"\n"}<Text style={styles.modalTextnegrilla}>1. Área somatosensorial primaria:</Text> se localiza en la circunvolución parietal ascendente, inmediatamente detrás de la cisura central o de Rolando. Recibe sensaciones de receptores sensoriales somáticos relativos al tacto, propioceptivos (posición articular y muscular), dolor y temperatura. 
{"\n"}<Text style={styles.modalTextnegrilla}>2. Área visual: </Text>se localiza en la cara medial del lóbulo occipital 
{"\n"}<Text style={styles.modalTextnegrilla}>3. Área auditiva: </Text>se localiza en el lóbulo temporal 
{"\n"}<Text style={styles.modalTextnegrilla}>4. Área gustativa: </Text>se localiza en la base de la circunvolución parietal ascendente, por encima de la cisura de Silvio.
{"\n"}<Text style={styles.modalTextnegrilla}>5. Área olfatoria:</Text>se localiza en la cara medial del lóbulo temporal. {"\n"}{"\n"}
<Text style={styles.modalTextnegrilla}>Las áreas motoras </Text> están situadas en la corteza cerebral de las regiones anteriores de los hemisferios cerebrales. 
{"\n"}<Text style={styles.modalTextnegrilla}>1. Área motora primaria:</Text> se localiza en la circunvolución prerrolándica, inmediatamente delante de la cisura central o de Rolando.
{"\n"}<Text style={styles.modalTextnegrilla}>2. Área de Broca:</Text> se localiza en uno de los lóbulos frontales (el izquierdo en la mayoría de las personas), en un plano superior a la cisura de Silvio.   {"\n"}{"\n"}  
<Text style={styles.modalTextnegrilla}>Las áreas de asociación  </Text> comprenden algunas áreas motoras y sensoriales,además de grandes áreas en la cara lateral de los lóbulos occipital, parietal y temporal, así como en el lóbulo frontal por delante de las áreas motoras.
 {"\n"}<Text style={styles.modalTextnegrilla}>1. Área de asociación somatosensorial:</Text> se localiza justo posterior al área somatosensorial primaria, recibe impulsos del tálamo.
{"\n"}<Text style={styles.modalTextnegrilla}>2. Área de asociación visual: </Text>se localiza en el lóbulo occipital.
{"\n"}<Text style={styles.modalTextnegrilla}>3. Área de asociación auditiva: </Text>se localiza en un plano posterior al área auditiva.
{"\n"}<Text style={styles.modalTextnegrilla}>4. Área de Wernicke:</Text> se localiza en la región frontera entre los lóbulos temporal y parietal.
{"\n"}<Text style={styles.modalTextnegrilla}>5. Área promotora:</Text> se localiza inmediatamente por delante del área motora primaria.
{"\n"}<Text style={styles.modalTextnegrilla}>6. Área frontal del campo visual.</Text> {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
 </Text>
                </Text>
      </ScrollView>



          </View>
            <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>
          
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Función Cognoscitiva{"\n"}{"\n"} </Text>
                <Text style={styles.modalText}>Los nervios craneales, al igual que los nervios raquídeos son parte del sistema nervioso periférico y se designan con números romanos y nombres.{"\n"} Los números indican el orden en que nacen los nervios del encéfalo, de anterior a posterior, y el nombre su distribución o función. {"\n"}Los nervios craneales emergen de la nariz (1), los ojos (II), el tronco del encéfalo (III a XII) y la médula espinal (una parte del XI).{"\n"} Los nervios espinales o raquídeos son 31 pares que salen de la columna a través de los agujeros de conjunción, excepto el primero que emerge entre el atlas y el hueso occipital. Los nervios espinales se designan y enumeran según la región y nivel donde emergen de la columna vertebral.{"\n"} Hay ocho pares de nervios cervicales (que se identifican de C1 a C8), 12 pares torácicos (T1 a T12) cinco pares lumbares (L1 a L5), cinco pares sacros y un par de nervios coccígeos. {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </Text>
          </View>
                </ScrollView>


        </Swiper>
            </View>
        

              
            </View>
            
         
        </Modal>
);

export const SNA = ({ text, onPress = () => {} }) => (
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
               <Text style={styles.modalText2}>S. Nervioso Autónomo</Text>
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
          <ScrollView  >
       <StatusBar barStyle="dark-content" />

          <View style={styles.slide}>

                <Text style={styles.margen}></Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Sistema Nervioso Simpático</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>características </Text>
                <Text style={styles.modalText}>activa al organismo para situaciones de emergencia, como respuestas de lucha y huída.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>{"\n"}Conformado </Text>
                <Text style={styles.modalText}>  Sistema nervioso compuesto de dos cadenas de 23 ganglios situados a lo largo y a los dos lados de la columna vertebral </Text>
                </Text>

          </View>
           </ScrollView>

            <ScrollView  >
       <StatusBar barStyle="dark-content" />

          <View style={styles.slide}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Sistema Nervioso Simpático</Text>
                </Text>
                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Anatomía </Text>
                <Text style={styles.modalText}> Incluye fibras nerviosas que surgende los 12 segmentos toracicos y los primeros dos lumbares  de la medula espinal, por eso se denomina división toracicolumbar. Los nervios simpáticos tienen origen en la médula espinal entre los segmentos T-1 y L-2 y desde aquí se dirigen a la cadena simpática paravertebral y finalmente a los tejidos y órganos periféricos.</Text>
                </Text>
                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fisiología: </Text>
                <Text style={styles.modalText}> En casos de urgencia, el sistema simpatico libera noradrenalina que ayuda a la reacción de "lucha o huida" (Migliozzi, 2009).En este tipo de situaciones, el sistema nervioso simpático estimula los músculos cardíacos para aumentar la frecuencia cardíaca, dilata los bronquios de los pulmones (incrementa la retención de oxígeno) y causa la dilatación de los vasos sanguíneos que irrigan el corazón y los músculos esqueléticos (aumentando el suministro de sangre).
                La médula suprarrenal es estimulada para liberar epinefrina (adrenalina) y norepinefrina (noradrenalina), lo que a su vez aumenta la tasa metabólica de las células y estimula al hígado para que libere glucosa en la sangre. Las glándulas sudoríparas se preparan para producir sudor. Además, el sistema nervioso simpático reduce la actividad de otras funciones corporales que son menos importantes en emergencias, como la digestión y la micción. La activación simpática tiende a producir efectos generalizados (difusos), que suelen ser perdurables
</Text>
                </Text>

          </View>
                  </ScrollView>
              <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>
                 <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Sistema Nervioso Parasimpático</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>características </Text>
                <Text style={styles.modalText}>El sistema nervioso parasimpático es el responsable del control de funciones internas en condiciones de reposo y normalidad.</Text>
                </Text>

                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>{"\n"}Conformado </Text>
                <Text style={styles.modalText}> Las fibras del sistema nervioso parasimpático se originan en el cráneo y el sacro. La parte craneal se origina en los núcleos parasimpáticos de los pares craneales III, VII, IX y X. La parte sacra se origina en la región lateral de la sustancia gris de la medula sacra, en los niveles S-2 y S-3. </Text>
                </Text>
          </View>
            </ScrollView>
   <ScrollView  >
       <StatusBar barStyle="dark-content" />

          <View style={styles.slide}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Sistema Nervioso Parasimpático</Text>
                </Text>


                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Anatomía </Text>
                <Text style={styles.modalText}> Aproximadamente el 75% de todas las fibras parasimpáticas del organismo se localizan en el nervio vago el cual proporciona inervación parasimpática a las vísceras torácicas y abdominales (corazón, pulmones, el tubo digestivo excepto el colon descendente y el recto, hígado, vesícula biliar, páncreas y las porciones superiores de los uréteres). Las fibras parasimpáticas del III par craneal inervan el músculo pupilar y el músculo del cristalino. Las fibras parasimpáticas que van por el VII par craneal inervan las glándulas salivares y lagrimales. Las fibras del IX par inervan la glándula parótida. Las fibras sacras inervan el colon descendente, el recto, las porciones inferiores de los uréteres, la vejiga urinaria y los órganos genitales externos.</Text>
                </Text>
                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Fisiología: </Text>
                <Text style={styles.modalText}> El  sistema nervioso parasimpático  alcanza su mayor actividad cuando el cuerpo esta en reposo y emplea acetilcolina para controlar  todas las reacciones internas relacionadas con los estados de relajación (Migliozzi, 2009). Esta division del sistema nervioso autonomo contiene fibrss que surgen del extremo inferior de la medula espinal e incluye varios pares craneales.Estimula la producción de enzimas digestivas y estimula los procesos de digestión, micción y defecación. Reduce la presión arterial y las frecuencias cardíaca y respiratoria, y conserva la energía mediante la relajación y el descanso.
Las fibras neuronales salen del SNC (tronco y médula) y viajan por nervios craneales y por nervios espinales sacros (sobre todo el nervio vago). Llegan a ganglios que se encuentran situados en las vísceras o muy cerca de ellas; a diferencia de la división simpática que hacía las sinapsis entre neuronas preganglionares y postganglionares en ganglios localizados muy cerca de la médula, lejos generalmente los órganos efectores.
En los ganglios parasimpáticos, las neuronas preganglionares sinaptan con las postganglionares y liberan acetilcolina.El sistema parasimpático estimula actividades que facilitan el almacenamiento o ahorro de energía. Produce cambios encaminados a conservar y restaurar la energía y asegurar el bienestar a largo plazo (por ejemplo, la digestión), mientras que la activación del simpático sirve para enfrentarnos a emergencias a corto plazo.
Tanto el sistema simpático como el parasimpático están involucrados en la actividad sexual, al igual que las partes del sistema nervioso que controlan las acciones voluntarias y transmiten la sensación de la piel (sistema nervioso somático).
                </Text> 
                 </Text>

          </View>
                  </ScrollView>



        </Swiper>
            </View>
        
              
            </View>
            
         
        </Modal>
);

export const Pruval = ({ text, onPress = () => {} }) => (
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
               <Text style={styles.modalText2}>Pruebas de Valoración</Text>
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
          <ScrollView  >
       <StatusBar barStyle="dark-content" />

          <View style={styles.slide}>

                <Text style={styles.margen}></Text>
                <Text style={styles.modalTextnegrilla}>Campímetría por confrontación </Text>

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
                <Text style={styles.modalText}>Instruya al paciente para que avise cuando vea aparecer el dedo o el bolígrafo en su campo visual.{"\n"}{"\n"}{"\n"}{"\n"} </Text>
                </Text>

          </View>
           </ScrollView>

            <ScrollView  >
       <StatusBar barStyle="dark-content" />

          <View style={styles.slide}>
                  <Text style={styles.modalTextnegrilla}>Motilidad Extínseca del ojo</Text>
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
                <Text style={styles.modalText}>después, en sentido vertical de abajo a arriba y viceversa. Seguidamente realice el movimiento en las seis direcciones o puntos cardinales de la mirada, partiendo del centro y retornando al punto central, que corresponde a los movimientos que le imprimen al globo ocular cada uno de los músculos extrínsecos.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </Text>

          </View>
                  </ScrollView>
              <ScrollView  >
       <StatusBar barStyle="dark-content" />
          <View style={styles.slide}>

           <Text style={styles.modalTextnegrilla}> Simetría y Motilidad Facial </Text>
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
                <Text style={styles.modalText}>Explore la fuerza de cierre de los párpados pidiendo al sujeto que mantenga los ojos fuertemente cerrados, mientras usted trata de abrirlos elevando los párpados con sus pulgares. {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                </Text>
          </View>
            </ScrollView>
  
        </Swiper>
            </View>
        
              
            </View>
            
         
        </Modal>
);
