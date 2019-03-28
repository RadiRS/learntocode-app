import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../themes';

class SectionSreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor(Colors.silver, true);
  }

  render() {
    const { section } = this.props.navigation.state.params;

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <SubTitle>{section.title}</SubTitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <CloseView onPress={() => this.props.navigation.goBack()}>
          <Icon name="ios-close" color="#4775f2" size={24} />
        </CloseView>
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

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 20px;
`;

const Logo = styled.Image`
  height: 24px;
  width: 24px;
`;

const SubTitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  font-size: 17px;
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const CloseView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: white;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  position: absolute;
  top: 20px;
  right: 20px;
  elevation: 15;
`;
