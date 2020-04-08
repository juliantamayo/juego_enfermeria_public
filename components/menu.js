import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';




export default class DetailsScreen extends Component {


  render() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => this.props.navigation.navigate('Details')}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
 
});