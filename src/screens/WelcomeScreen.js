import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import Card from '../components/common/card';
import Menu from '../components/menu';
import Course from '../components/course';
import { NotificationIcon } from '../components/icon';
import { Colors, Fonts, Images } from '../themes';
import Logo from '../components/logo';
import images from '../themes/images';

class WelcomeScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TitleBar>
              <Avatar source={Images.avatar} />
              <Title>Welcome back,</Title>
              <Name>Radi Rusadi</Name>
              <NotificationIcon
                style={{ position: 'absolute', right: 20, top: 5 }}
              />
            </TitleBar>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                flexDirection: 'row',
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>

            <SubTitle>Continue Learning</SubTitle>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  logo={card.logo}
                  caption={card.caption}
                  subTitle={card.subTitle}
                />
              ))}
            </ScrollView>

            <SubTitle>Populer Course</SubTitle>

            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                logo={course.logo}
                subTitle={course.subtitle}
                title={course.title}
                avatar={course.avatar}
                caption={course.caption}
                author={course.author}
              />
            ))}
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
  margin-top: 10px;
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

const logos = [
  {
    image: images.logoFigma,
    text: 'Figma'
  },
  {
    image: images.logoFramerx,
    text: 'Frame X'
  },
  {
    image: images.logoStudio,
    text: 'Studio'
  },
  {
    image: images.logoReact,
    text: 'React'
  },
  {
    image: images.logoSwift,
    text: 'Swift'
  },
  {
    image: images.logoSketch,
    text: 'Sketch'
  }
];

const cards = [
  {
    title: 'React Native for designer',
    image: images.background11,
    subTitle: 'React Native',
    caption: '1 of 12 Section',
    logo: images.logoReact
  },
  {
    title: 'Styled Components',
    image: images.background12,
    subTitle: 'React Native',
    caption: '2 of 12 Section',
    logo: images.logoReact
  },
  {
    title: 'Props and Icons',
    image: images.background13,
    subTitle: 'React Native',
    caption: '3 of 12 Section',
    logo: images.logoReact
  },
  {
    title: 'Static Data and Loop',
    image: images.background14,
    subTitle: 'React Native',
    caption: '4 of 12 Section',
    logo: images.logoReact
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 Sections',
    image: images.background13,
    logo: images.logoStudio,
    author: 'Raiza Ro',
    avatar: images.avatar,
    caption: 'Design and interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 Sections',
    image: images.background11,
    logo: images.logoReact,
    author: 'Bambang Ok',
    avatar: images.avatar,
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 Sections',
    image: images.background14,
    logo: images.logoFramerx,
    author: 'Steven Jack',
    avatar: images.avatar,
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 Sections',
    image: images.background16,
    logo: images.logoFigma,
    author: 'Bella Alyano',
    avatar: images.avatar,
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
];
