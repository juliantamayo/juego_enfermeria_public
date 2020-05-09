import React, {Component, useEffect} from 'react';
import { Button, View, Text, StyleSheet, BackHandler, Alert } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/load';
import Menu from './components/menu';
import M_juegos from './components/Juegos/m_juegos';

//-------------------------------juego2-------------------------
import M_juegos2 from './components/Juegos/Juego2/m_juego2';
import QuizIndex from "./components/Juegos/Juego2/QuizIndex";
import Quiz from "./components/Juegos/Juego2/Quiz";
import Result_Q from './components/Juegos/Juego2/result_q';

//--------------------------------juego1--------------------------------
import juego1_part1 from './components/Juegos/Juego1/juego1_part1';
import juego1_part2 from './components/Juegos/Juego1/juego1_part2';
import Result_QJ1 from './components/Juegos/Juego1/result_qJ1';
import m_juego1 from './components/Juegos/Juego1/m_juego1';
import juego1_teory1 from './components/Juegos/Juego1/juego1_teory1';
import juego1_teory2 from './components/Juegos/Juego1/juego1_teory2';

//--------------------------------juego3----------------------------
import M_juegos3 from './components/Juegos/Juego3/m_juego3';
import juego3 from './components/Juegos/Juego3/juego3';
import Result_QJ3 from './components/Juegos/Juego3/result_qJ3';
//---------------------------------------------------------------
import pruebaT from './components/Teoria/prueba_atras';

//-----------------------casos--------------------------------
import M_casos from './components/Casos/m_casos';

//-------------------------caso1---------------------------------
import M_caso1 from './components/Casos/Caso1/menu_caso1';
import Escena1 from './components/Casos/Caso1/escena1';
import Guardar_escena1 from './components/Casos/Caso1/V_Guardar/guardar_escena1';
//---escena2----
import Escena2 from './components/Casos/Caso1/escena2';
import DialogosC1 from './components/Casos/Caso1/V_Preguntas_Pcte/dialogos';
import V_C1_Resp_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Resp_enfermera';
import PreguntasC1 from './components/Casos/Caso1/V_Preguntas_Pcte/preguntas';
import V_C1_Preg2_dialogo from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg2_dialogo';
import V_C1_Preg2_pregunta from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg2_pregunta';
import V_C1_RespP2_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_RespP2_enfermera';
import V_C1_Preg3_dialogo from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg3_dialogo';
import V_C1_Preg3_pregunta from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg3_pregunta';
import V_C1_RespP3_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_RespP3_enfermera';
import V_C1_Preg4_dialogo from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg4_dialogo';
import V_C1_Preg4_pregunta from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg4_pregunta';
import V_C1_RespP4_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_RespP4_enfermera';

import V_C1_Preg5_dialogo from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg5_dialogo';
import V_C1_Preg5_pregunta from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg5_pregunta';
import V_C1_RespP5_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_RespP5_enfermera';

import V_C1_Preg6_dialogo from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg6_dialogo';
import V_C1_Preg6_pregunta from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg6_pregunta';
import V_C1_RespP6_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_RespP6_enfermera';

import V_C1_Preg7_dialogo from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg7_dialogo';
import V_C1_Preg7_pregunta from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Preg7_pregunta';
import V_C1_RespP7_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_RespP7_enfermera';
//escena3----
import Escena3 from './components/Casos/Caso1/escena3';
import V_C1_PruValo1_dialogo from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo1_dialogo';
import V_C1_PruValo1_pregunta from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo1_pregunta';
import V_C1_RespPruValo1_enfermera from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_RespPruValo1_enfermera';

import V_C1_PruValo2_dialogo from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo2_dialogo';
import V_C1_PruValo2_pregunta from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo2_pregunta';
import V_C1_RespPruValo2_enfermera from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_RespPruValo2_enfermera';

import V_C1_PruValo3_dialogo from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo3_dialogo';
import V_C1_PruValo3_pregunta from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo3_pregunta';
import V_C1_RespPruValo3_enfermera from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_RespPruValo3_enfermera';

import V_C1_PruValo4_dialogo from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo4_dialogo';
import V_C1_PruValo4_pregunta from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo4_pregunta';
import V_C1_RespPruValo4_enfermera from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_RespPruValo4_enfermera';

import V_C1_PruValo5_dialogo from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo5_dialogo';
import V_C1_PruValo5_pregunta from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo5_pregunta';
import V_C1_RespPruValo5_enfermera from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_RespPruValo5_enfermera';

import V_C1_PruValo6_dialogo from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo6_dialogo';
import V_C1_PruValo6_pregunta from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo6_pregunta';
import V_C1_RespPruValo6_enfermera from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_RespPruValo6_enfermera';

import V_C1_PruValo7_dialogo from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo7_dialogo';
import V_C1_PruValo7_pregunta from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_PruValo7_pregunta';
import V_C1_RespPruValo7_enfermera from './components/Casos/Caso1/V_Pruebas_valoracion/V_C1_RespPruValo7_enfermera';
//escena4-------
import Escena4 from './components/Casos/Caso1/escena4';
import Guardr_valo from './components/Casos/Caso1/V_Valoracion/guardar_valoracion';
//escena5-------
import Escena5 from './components/Casos/Caso1/escena5';
//escena6-------
import Escena6 from './components/Casos/Caso1/escena6';

import Variables from './components/Casos/Caso1/variables_caso1';

//-------------------------caso2---------------------------------
import M_caso2 from './components/Casos/Caso2/menu_caso2';
import C2_Escena1 from './components/Casos/Caso2/escena1';
import C2_Guardar_escena1 from './components/Casos/Caso2/V_Guardar/guardar_escena1';
import C2_Escena2 from './components/Casos/Caso2/escena2';

import V_C2_Preg1_dialogo from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg1_dialogo';
import V_C2_Preg1_pregunta from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg1_pregunta';
import V_C2_RespP1_enfermera from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_RespP1_enfermera';

import V_C2_Preg2_dialogo from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg2_dialogo';
import V_C2_Preg2_pregunta from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg2_pregunta';
import V_C2_RespP2_enfermera from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_RespP2_enfermera';

import V_C2_Preg3_dialogo from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg3_dialogo';
import V_C2_Preg3_pregunta from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg3_pregunta';
import V_C2_RespP3_enfermera from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_RespP3_enfermera';

import V_C2_Preg4_dialogo from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg4_dialogo';
import V_C2_Preg4_pregunta from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg4_pregunta';
import V_C2_RespP4_enfermera from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_RespP4_enfermera';

import V_C2_Preg5_dialogo from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg5_dialogo';
import V_C2_Preg5_pregunta from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_Preg5_pregunta';
import V_C2_RespP5_enfermera from './components/Casos/Caso2/V_Preguntas_Pcte/V_C2_RespP5_enfermera';

//-------------------------caso3---------------------------------
import M_caso3 from './components/Casos/Caso3/menu_caso3';
import C3_Escena1 from './components/Casos/Caso3/escena1';
import C3_Guardar_escena1 from './components/Casos/Caso3/V_Guardar/guardar_escena1';
import C3_Escena2 from './components/Casos/Caso3/escena2';

import V_C3_Preg1_dialogo from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg1_dialogo';
import V_C3_Preg1_pregunta from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg1_pregunta';
import V_C3_RespP1_enfermera from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_RespP1_enfermera';

import V_C3_Preg2_dialogo from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg2_dialogo';
import V_C3_Preg2_pregunta from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg2_pregunta';
import V_C3_RespP2_enfermera from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_RespP2_enfermera';

import V_C3_Preg3_dialogo from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg3_dialogo';
import V_C3_Preg3_pregunta from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg3_pregunta';
import V_C3_RespP3_enfermera from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_RespP3_enfermera';

import V_C3_Preg4_dialogo from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg4_dialogo';
import V_C3_Preg4_pregunta from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_Preg4_pregunta';
import V_C3_RespP4_enfermera from './components/Casos/Caso3/V_Preguntas_Pcte/V_C3_RespP4_enfermera';

const Stack = createStackNavigator();


export default function App () {

useEffect(() => {
    const backAction = () => {
      Alert.alert("Advertencia", "esta seguro que desea salir de la aplicacion?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [])
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
        //  headerLayoutPreset: 'center',
          headerShown: false,
          headerLeft: null,
          title: 'My home',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen  name="Menu" component={Menu} 
        options={{
        //  headerShown: false
         headerLeft: null,
          title: 'Menu',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="M_juegos" component={M_juegos} 

        options={{
         // headerShown: false
         headerLeft: null,
          title: 'Minijuegos',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}/>
        <Stack.Screen name="M_juego2" component={M_juegos2} 
        options={{
         headerLeft: null,
          title: 'Preguntas',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="QuizIndex" component={QuizIndex} 
        options={{
        //  headerShown: false
        headerLeft: null,
          title: 'Preguntas',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          }

        }}/>
         <Stack.Screen name="Quiz" component={Quiz} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>
        <Stack.Screen name="Result_Q" component={Result_Q} 
        options={{
           headerLeft: null,
          title: 'Resultado',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

           
         <Stack.Screen name="m_juego1"  component={m_juego1}
          options={{
         headerLeft: null,
          title: 'Juego 1',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="juego1_part1" component={juego1_part1 }
         options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>

        <Stack.Screen name="juego1_part2" component={juego1_part2}
          options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}
         />
        <Stack.Screen name="Result_QJ1" component={Result_QJ1} 
        options={{
          headerLeft: null,
          title: 'ResultadoJ1',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="juego1_teory1" component={juego1_teory1} />
        <Stack.Screen name="juego1_teory2" component={juego1_teory2} />

        <Stack.Screen name="M_juegos3"  component={M_juegos3}
          options={{
         headerLeft: null,
          title: 'Juego 3',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="juego3" component={juego3}
         options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>
      <Stack.Screen name="Result_QJ3" component={Result_QJ3} 
        options={{
           headerLeft: null,
          title: 'ResultadoJ3',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        <Stack.Screen name="M_casos" component={M_casos} 

        options={{
         // headerShown: false
         headerLeft: null,
          title: 'M_casos',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}/>

        <Stack.Screen name="M_caso1"  component={M_caso1}
          options={{
         headerLeft: null,
          title: 'M_caso1',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="Escena1" component={Escena1} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>  

       <Stack.Screen name="Guardar_escena1"  component={Guardar_escena1} />

       <Stack.Screen name="Escena2" component={Escena2} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/> 

        <Stack.Screen name="DialogosC1" component={DialogosC1} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/> 
         <Stack.Screen name="PreguntasC1" component={PreguntasC1} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/> 

         <Stack.Screen name="V_C1_Resp_enfermera" component={V_C1_Resp_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C1_Preg2_dialogo" component={V_C1_Preg2_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C1_Preg2_pregunta" component={V_C1_Preg2_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

      <Stack.Screen name="V_C1_RespP2_enfermera" component={V_C1_RespP2_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C1_Preg3_dialogo" component={V_C1_Preg3_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>
  
        <Stack.Screen name="V_C1_Preg3_pregunta" component={V_C1_Preg3_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>
        <Stack.Screen name="V_C1_RespP3_enfermera" component={V_C1_RespP3_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C1_Preg4_dialogo" component={V_C1_Preg4_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

          <Stack.Screen name="V_C1_Preg4_pregunta" component={V_C1_Preg4_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

       <Stack.Screen name="V_C1_RespP4_enfermera" component={V_C1_RespP4_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

       <Stack.Screen name="V_C1_Preg5_dialogo" component={V_C1_Preg5_dialogo} 
              options={
                 
              ({ navigation, route }) => ({ title: route.params?.title ,
                headerLeft: null,
                headerStyle: {
               backgroundColor: '#fbe122',
               borderBottomColor: route.params?.color
              }

        })}/>

          <Stack.Screen name="V_C1_Preg5_pregunta" component={V_C1_Preg5_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

       <Stack.Screen name="V_C1_RespP5_enfermera" component={V_C1_RespP5_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>
        
        <Stack.Screen name="V_C1_Preg6_dialogo" component={V_C1_Preg6_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

          <Stack.Screen name="V_C1_Preg6_pregunta" component={V_C1_Preg6_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

       <Stack.Screen name="V_C1_RespP6_enfermera" component={V_C1_RespP6_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C1_Preg7_dialogo" component={V_C1_Preg7_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

          <Stack.Screen name="V_C1_Preg7_pregunta" component={V_C1_Preg7_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C1_RespP7_enfermera" component={V_C1_RespP7_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="Escena3" component={Escena3} 
        options={{
        //  headerShown: false
        headerLeft: null,
          title: 'Pruebas de valoración',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
       
        <Stack.Screen name="V_C1_PruValo1_dialogo" component={V_C1_PruValo1_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo1_pregunta" component={V_C1_PruValo1_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_RespPruValo1_enfermera" component={V_C1_RespPruValo1_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo2_dialogo" component={V_C1_PruValo2_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo2_pregunta" component={V_C1_PruValo2_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_RespPruValo2_enfermera" component={V_C1_RespPruValo2_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo3_dialogo" component={V_C1_PruValo3_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo3_pregunta" component={V_C1_PruValo3_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_RespPruValo3_enfermera" component={V_C1_RespPruValo3_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>
       <Stack.Screen name="V_C1_PruValo4_dialogo" component={V_C1_PruValo4_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo4_pregunta" component={V_C1_PruValo4_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_RespPruValo4_enfermera" component={V_C1_RespPruValo4_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>
       <Stack.Screen name="V_C1_PruValo5_dialogo" component={V_C1_PruValo5_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo5_pregunta" component={V_C1_PruValo5_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_RespPruValo5_enfermera" component={V_C1_RespPruValo5_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>
       <Stack.Screen name="V_C1_PruValo6_dialogo" component={V_C1_PruValo6_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo6_pregunta" component={V_C1_PruValo6_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_RespPruValo6_enfermera" component={V_C1_RespPruValo6_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>
       <Stack.Screen name="V_C1_PruValo7_dialogo" component={V_C1_PruValo7_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_PruValo7_pregunta" component={V_C1_PruValo7_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="V_C1_RespPruValo7_enfermera" component={V_C1_RespPruValo7_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }
       })}/>

       <Stack.Screen name="Escena4" component={Escena4} 
        options={{
        //  headerShown: false
        headerLeft: null,
          title: 'Valoración',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name="Guardr_valo" component={Guardr_valo} 
        options={{
        //  headerShown: false
        headerLeft: null,
          title: 'Valoración',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/> 

        <Stack.Screen name="Escena5" component={Escena5} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>

        <Stack.Screen name="Escena6" component={Escena6} 
        options={{
        //  headerShown: false
        
          title: '',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/> 

         <Stack.Screen name="M_caso2"  component={M_caso2}
          options={{
         headerLeft: null,
          title: 'M_caso2',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        
         <Stack.Screen name="C2_Escena1"  component={C2_Escena1}
          options={{
         headerLeft: null,
          title: 'C2_Escena1',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />        


         <Stack.Screen name="C2_Escena2"  component={C2_Escena2}
          options={{
         headerLeft: null,
          title: 'C2_Escena2',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />        


        <Stack.Screen name="V_C2_Preg1_dialogo" component={V_C2_Preg1_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C2_Preg1_pregunta" component={V_C2_Preg1_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C2_RespP1_enfermera" component={V_C2_RespP1_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C2_Preg2_dialogo" component={V_C2_Preg2_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C2_Preg2_pregunta" component={V_C2_Preg2_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C2_RespP2_enfermera" component={V_C2_RespP2_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


        <Stack.Screen name="V_C2_Preg3_dialogo" component={V_C2_Preg3_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C2_Preg3_pregunta" component={V_C2_Preg3_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C2_RespP3_enfermera" component={V_C2_RespP3_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


        <Stack.Screen name="V_C2_Preg4_dialogo" component={V_C2_Preg4_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

       <Stack.Screen name="V_C2_Preg4_pregunta" component={V_C2_Preg4_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C2_RespP4_enfermera" component={V_C2_RespP4_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C2_Preg5_dialogo" component={V_C2_Preg5_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C2_Preg5_pregunta" component={V_C2_Preg5_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C2_RespP5_enfermera" component={V_C2_RespP5_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

         <Stack.Screen name="M_caso3"  component={M_caso3}
          options={{
         headerLeft: null,
          title: 'M_caso3',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

      

         <Stack.Screen name="C3_Escena1"  component={C3_Escena1}
          options={{
         headerLeft: null,
          title: 'C3_Escena1',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />        


         <Stack.Screen name="C3_Escena2"  component={C3_Escena2}
          options={{
         headerLeft: null,
          title: 'C3_Escena2',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />   

             <Stack.Screen name="V_C3_Preg1_dialogo" component={V_C3_Preg1_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

           <Stack.Screen name="V_C3_Preg1_pregunta" component={V_C3_Preg1_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C3_RespP1_enfermera" component={V_C3_RespP1_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>



            <Stack.Screen name="V_C3_Preg2_dialogo" component={V_C3_Preg2_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

           <Stack.Screen name="V_C3_Preg2_pregunta" component={V_C3_Preg2_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C3_RespP2_enfermera" component={V_C3_RespP2_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C3_Preg3_dialogo" component={V_C3_Preg3_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

        <Stack.Screen name="V_C3_Preg3_pregunta" component={V_C3_Preg3_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

       <Stack.Screen name="V_C3_RespP3_enfermera" component={V_C3_RespP3_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


            <Stack.Screen name="V_C3_Preg4_dialogo" component={V_C3_Preg4_dialogo} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>

           <Stack.Screen name="V_C3_Preg4_pregunta" component={V_C3_Preg4_pregunta} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


       <Stack.Screen name="V_C3_RespP4_enfermera" component={V_C3_RespP4_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }

       })}/>


         <Stack.Screen name="pruebaT"  component={pruebaT} />
          <Stack.Screen name="Variables"  component={Variables} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  
});

