//npm install --save react-native-progress-bar-animated
import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground 
        } from 'react-native';
import { CommonActions } from '@react-navigation/native';




export default function HomeScreen ({navigation}) {

   return (

    <ImageBackground source={require("../assets/images/overlay.png")}style={styles.container}>
            <View style={styles.container} >

            
                 <Button
        title="START"
        color="#841584"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Menu',
              
            })
          )
        }
      />
            </View>
        </ImageBackground>
    
  );
  
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

