import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';


class juego1_part2 extends Component {
  render(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ESTE ES EL JUEGO 2</Text>
      <Button
        title="ir a menu juegos"
        onPress={() => this.props.navigation.navigate('m_juego1')}
      />
    </View>
  );
}
}


export default juego1_part2;