import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class ProjectScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Text> Project Screen </Text>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectScreen);

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
