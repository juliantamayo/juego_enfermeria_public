import React, {Component} from 'react';
import { Button, View, Text, Alert } from 'react-native';
import App, {name} from '../../../app'


class juego1_part1 extends Component {

	 _onPressButton() {
		// name.valor=name.valor+100,
	   //name.valoresNuevos= ['julian David', name.valor],
   // alert('los nuevos valores son'+name.nombreCompleto)
   //Alert.alert('ESTI FUNCIONA PPOR LO MENOS')
  }

  render(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ESTE ES EL JUEGO 1</Text>
      <Button
        title="ir a menu juegos"
        onPress={() => this.props.navigation.navigate('m_juego1')}
      />

      <Button 
        title="presioname"
        onPress={
         this._onPressButton
        }
      />

       <Text>  </Text>
    </View>

  );
}
}


export default juego1_part1;