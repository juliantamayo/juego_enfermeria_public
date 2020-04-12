import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/load';
import Menu from './components/menu';
import M_juegos from './components/Juegos/m_juegos'
import M_juegos2 from './components/Juegos/Juego2/m_juego2'
import Result_Q from './components/Juegos/Juego2/result_q'
//-----------------------------------------------------------
import QuizIndex from "./components/Juegos/Juego2/QuizIndex";
import Quiz from "./components/Juegos/Juego2/Quiz";
import spaceQuestions from "./components/data/space";
import westernsQuestions from "./components/data/westerns";
import computerQuestions from "./components/data/computers";


import juego1_part1 from './components/Juegos/Juego1/juego1_part1';
import juego1_part2 from './components/Juegos/Juego1/juego1_part2';
import m_juego1 from './components/Juegos/Juego1/M_juego1';
import juego1_teory1 from './components/Juegos/Juego1/juego1_teory1';
import juego1_teory2 from './components/Juegos/Juego1/juego1_teory2';


const Stack = createStackNavigator();

export default function App () {
 
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
        //  headerLayoutPreset: 'center',
          headerShown: false,
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen  name="Menu" component={Menu} 
        options={{
        //  headerShown: false
        }}/>
        <Stack.Screen name="M_juegos" component={M_juegos} 

        options={{
         // headerShown: false
        }}/>
        <Stack.Screen name="M_juego2" component={M_juegos2} 
        options={{
        //  headerShown: false
        }}/>
        <Stack.Screen name="QuizIndex" component={QuizIndex} 
        options={{
        //  headerShown: false
        }}/>
         <Stack.Screen name="Quiz" component={Quiz} 
        options={
           //     headerShown: false,
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerStyle: {
          backgroundColor: route.params?.color,
         borderBottomColor: route.params?.color
        }


       })}/>
        <Stack.Screen name="Result_Q" component={Result_Q} 
        options={
           //     headerShown: false,
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerStyle: {
          backgroundColor: route.params?.color,
         borderBottomColor: route.params?.color
        }


       })}/>

           
         <Stack.Screen name="m_juego1"  component={m_juego1} />
        <Stack.Screen name="juego1_part1" component={juego1_part1} />
        <Stack.Screen name="juego1_part2" component={juego1_part2} />
        <Stack.Screen name="juego1_teory1" component={juego1_teory1} />
        <Stack.Screen name="juego1_teory2" component={juego1_teory2} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  
});

