import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class CourseScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Text> Curses Screen </Text>
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseScreen);

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
