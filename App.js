
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
import spaceQuestions from "./components/data/space";
import westernsQuestions from "./components/data/westerns";
import computerQuestions from "./components/data/computers";
import Result_Q from './components/Juegos/Juego2/result_q';
//----------------------------------------------------------------
import juego1_part1 from './components/Juegos/Juego1/juego1_part1';
import juego1_part2 from './components/Juegos/Juego1/juego1_part2';
import m_juego1 from './components/Juegos/Juego1/M_juego1';
import juego1_teory1 from './components/Juegos/Juego1/juego1_teory1';
import juego1_teory2 from './components/Juegos/Juego1/juego1_teory2';
//---------------------------------------------------------------
import pruebaT from './components/Teoria/prueba_atras';


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
          //headerShown: false,
          headerLeft: null,
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
         headerLeft: null,
          title: 'Menu',
          headerStyle: {
            backgroundColor: '#fbe122'
          }
        }}/>
        <Stack.Screen name="M_juegos" component={M_juegos} 

        options={{
         // headerShown: false
         headerLeft: null,
          title: 'Minijuegos',
          headerStyle: {
            backgroundColor: '#fbe122'
          }

        }}/>
        <Stack.Screen name="M_juego2" component={M_juegos2} 
        options={{
         headerLeft: null,
          title: 'Preguntas',
          headerStyle: {
            backgroundColor: '#fbe122'
          }
        }}/>
        <Stack.Screen name="QuizIndex" component={QuizIndex} 
        options={{
        //  headerShown: false
        headerLeft: null,
          title: 'Preguntas',
          headerStyle: {
            backgroundColor: '#fbe122'
          }

        }}/>
         <Stack.Screen name="Quiz" component={Quiz} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
          backgroundColor: route.params?.color,
         borderBottomColor: route.params?.color
        }


       })}/>
        <Stack.Screen name="Result_Q" component={Result_Q} 
        options={{
          headerLeft: null
        //  headerShown: false
        }}/>

           
         <Stack.Screen name="m_juego1"  component={m_juego1} />
        <Stack.Screen name="juego1_part1" component={juego1_part1} />
        <Stack.Screen name="juego1_part2" component={juego1_part2} />
        <Stack.Screen name="juego1_teory1" component={juego1_teory1} />
        <Stack.Screen name="juego1_teory2" component={juego1_teory2} />


         <Stack.Screen name="pruebaT"  component={pruebaT} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  
});

/*
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Navigate to Profile"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Profile',
              params: {
                user: 'jane',
              },
            })
          )
        }
      />
      <Button
        title="Go back"
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      />
    </View>
  );
}

function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile!</Text>
      <Text>{route.params.user}'s profile</Text>
      <Button
        title="Navigate to Home"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Home',
            })
          )
        }
      />
      <Button
        title="Reset navigation state"
        onPress={() =>
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Profile',
                  params: { user: 'jane', key: route.params.key },
                },
                { name: 'Home' },
              ],
            })
          )
        }
      />
      <Button
        title="Change user param"
        onPress={() =>
          navigation.dispatch({
            ...CommonActions.setParams({ user: 'Wojtek' }),
            source: route.key,
          })
        }
      />
      <Button
        title="Go back"
        onPress={() =>
          navigation.dispatch({
            ...CommonActions.goBack(),
            source: route.key,
            target: route?.params?.key,
          })
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/