import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class SectionSreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Text> Section Screen </Text>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionSreen);

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
