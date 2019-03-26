import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WelcomeScreen extends Component {
  static navigationOptions = () => ({
      header: null
    })

  render() {
    return (
      <View>
        <Text>First</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
