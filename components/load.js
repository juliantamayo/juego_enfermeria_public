//npm install --save react-native-progress-bar-animated
import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        ImageBackground 
        } from 'react-native';




export default function HomeScreen ({navigation}) {

   return (

    <ImageBackground source={require("../assets/images/overlay.png")}style={styles.container}>
            <View style={styles.container} >

            
                <Button
                    onPress={() => navigation.navigate('Menu')}
                    title="START"
                    color="#841584"
                   
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