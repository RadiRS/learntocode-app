import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

class WelcomeScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <View>
        <Text>First</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
