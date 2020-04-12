import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/load';
import Menu from './components/menu';
import M_juegos from './components/Juegos/m_juegos'
import M_juegos2 from './components/Juegos/Juego2/m_juego2'
//-----------------------------------------------------------
import QuizIndex from "./App/screens/QuizIndex";
import Quiz from "./App/screens/Quiz";
import spaceQuestions from "./App/data/space";
import westernsQuestions from "./App/data/westerns";
import computerQuestions from "./App/data/computers";


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


       })
       
        //  title:  this.props.route.params?.title
          
        }/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  
});

