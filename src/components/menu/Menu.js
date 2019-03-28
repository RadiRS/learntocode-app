import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { toggleMenu } from '../../stores/actions';

import { Metrics, Images } from '../../themes';
import MenuItem from './MenuItem';

export class Menu extends Component {
  state = {
    top: new Animated.Value(Metrics.screenHeight)
  };

  componentDidMount() {
    this.handleToggleMenu();
  }

  componentDidUpdate() {
    this.handleToggleMenu();
  }

  handleToggleMenu = () => {
    if (this.props.menu.openMenu) {
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    } else {
      Animated.spring(this.state.top, {
        toValue: Metrics.screenHeight
      }).start();
    }
  };

  render() {
    const { user } = this.props;

    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={Images.background2} />
          <Title>{user.name}</Title>
          <SubTitle>{user.email}</SubTitle>
        </Cover>

        <CloseView onPress={this.props.toggleMenu}>
          <Icon name="ios-close" size={44} color="#546bfb" />
        </CloseView>

        <Content>
          {menus.map((menu, index) => (
            <MenuItem
              key={index}
              icon={menu.icon}
              title={menu.title}
              text={menu.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

const Container = styled.View`
  border-radius: 10;
  overflow: hidden;
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 8px;
`;

const CloseView = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 120;
  left: 50%;
  margin-left: -22px;
  z-index: 1;
  elevation: 15;
`;

const Content = styled.View`
  height: ${Metrics.screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const mapStateToProps = ({ menu }) => ({
  menu
});

const mapDispatchToProps = {
  toggleMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

const menus = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings'
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments'
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course'
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'See you soon!'
  }
];
