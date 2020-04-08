import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Button,
        } from 'react-native';




export default class HomeScreen  extends Component  {
  render() {
   return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => this.props.navigation.navigate('Details')}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
 
});