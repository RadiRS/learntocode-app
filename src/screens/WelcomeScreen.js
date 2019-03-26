import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Card from '../components/common/card';
import { NotificationIcon } from '../components/icon/Icons';
import { Colors, Fonts, Images } from '../themes';

class WelcomeScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <Avatar source={Images.avatar} />
              <Title>Welcome back,</Title>
              <Name>Radi</Name>
              <NotificationIcon
                style={{ position: 'absolute', right: 20, top: 5 }}
              />
            </TitleBar>
            <SubTitle>Continue Learning</SubTitle>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              <Card
                title="Styled Components"
                image={Images.background1}
                logo={Images.logo}
                caption="React Native"
                subTitle="2 of 12 section"
              />
              <Card
                title="Props & Icons"
                image={Images.background2}
                logo={Images.logo}
                caption="React Native"
                subTitle="3 of 12 section"
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.silver};
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  /* text-transform: uppercase; (issue / error) */
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: ${Fonts.size.regular};
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export default WelcomeScreen;
