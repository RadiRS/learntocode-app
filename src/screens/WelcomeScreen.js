import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from 'react-native';
import styled from 'styled-components';

// Actions
import { toggleMenu, getUser } from '../stores/actions';

// Components
import Card from '../components/common/card';
import Menu from '../components/menu';
import Course from '../components/course';
import Logo from '../components/logo';
import Avatar from '../components/avatar';
import { NotificationIcon } from '../components/icon';
import { Colors, Fonts } from '../themes';
import images from '../themes/images';

class WelcomeScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    radius: new Animated.Value(0)
  };

  componentDidMount() {
    StatusBar.setBackgroundColor(Colors.silver, true);
    StatusBar.setBarStyle('dark-content');
    this.props.getUser();
  }

  componentDidUpdate() {
    this.handleTogleMenu();
  }

  handleTogleMenu = () => {
    if (this.props.menu.openMenu) {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 200,
        easing: Easing.in()
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      Animated.spring(this.state.radius, {
        toValue: 10
      }).start();

      StatusBar.setBackgroundColor('black', true);
      StatusBar.setBarStyle('light-content');
    } else {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 200,
        easing: Easing.in()
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      Animated.spring(this.state.radius, {
        toValue: 0
      }).start();

      StatusBar.setBackgroundColor(Colors.silver, true);
      StatusBar.setBarStyle('dark-content');
    }
  };

  render() {
    const { user, navigation } = this.props;

    return (
      <RootView>
        <Menu user={user} />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
            borderRadius: this.state.radius
          }}
        >
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.toggleMenu}
                  style={{
                    marginLeft: 20,
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                >
                  <Avatar photo={user.photo} />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>{user.name}</Name>
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
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate('Section', { section: card })
                    }
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      logo={card.logo}
                      caption={card.caption}
                      subTitle={card.subTitle}
                    />
                  </TouchableOpacity>
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
        </AnimatedContainer>
      </RootView>
    );
  }
}

const mapStateToProps = ({ menu, user }) => ({
  menu,
  user: user.user
});

const mapDispatchToProps = {
  toggleMenu,
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);

const RootView = styled.View`
  flex: 1;
  background: black;
`;

const Container = styled.View`
  flex: 1;
  /* border-top-left-radius: 10;
  border-top-right-radius: 10; */
  background-color: ${Colors.silver};
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

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

const logos = [
  {
    image: images.logoNet,
    text: '.Net'
  },
  {
    image: images.logoNodejs,
    text: 'NodeJS'
  },
  {
    image: images.logoPhp,
    text: 'PHP'
  },
  {
    image: images.logoPython,
    text: 'Python'
  },
  {
    image: images.logoRuby,
    text: 'Ruby'
  },
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
    title: 'Getting Started',
    image: images.background25,
    subTitle: 'React Native',
    caption: '1 of 12 Section',
    logo: images.logoReact
  },
  {
    title: 'Diving in to the Basics',
    image: images.background22,
    subTitle: 'React Native',
    caption: '2 of 12 Section',
    logo: images.logoReact
  },
  {
    title: 'Using Redux with React Native',
    image: images.background23,
    subTitle: 'React Native',
    caption: '3 of 12 Section',
    logo: images.logoReact
  },
  {
    title: 'Lingking and Using Third Party Library',
    image: images.background24,
    subTitle: 'React Native',
    caption: '4 of 12 Section',
    logo: images.logoReact
  }
];

const courses = [
  {
    title: 'Python for Beginner',
    subtitle: '11 Sections',
    image: images.background17,
    logo: images.logoPython,
    author: 'Muclics Ahar',
    avatar: images.avatar,
    caption: 'Build python game for fun'
  },
  {
    title: 'Front End With ReactJS',
    subtitle: '22 Sections',
    image: images.background18,
    logo: images.logoReact,
    author: 'Mark Arham',
    avatar: images.avatar,
    caption: 'Learn to build web app with ReactJS'
  },
  {
    title: 'Creative Design with Figma',
    subtitle: '8 Sections',
    image: images.background19,
    logo: images.logoFigma,
    author: 'Ayu Nangsi',
    avatar: images.avatar,
    caption: 'Design your journey'
  },
  {
    title: 'NodeJS Complate Course',
    subtitle: '23 Sections',
    image: images.background20,
    logo: images.logoNodejs,
    author: 'Arya Widoyo',
    avatar: images.avatar,
    caption: 'Complete guide to dev to deploy Node App'
  },
  {
    title: 'Java Master',
    subtitle: '15 Sections',
    image: images.background21,
    logo: images.logoReact,
    author: 'Sulis Tiwa',
    avatar: images.avatar,
    caption: 'Learn how to become Java Engineer'
  },
  {
    title: 'Algoritma & Data Structure',
    subtitle: '11 Sections',
    image: images.background22,
    logo: images.logoPhp,
    author: 'Rendy Ajax',
    avatar: images.avatar,
    caption: 'Learn data structure and algoritma in PHP'
  },
  {
    title: 'Native PHP Build Sosial App',
    subtitle: '13 Sections',
    image: images.background23,
    logo: images.logoPhp,
    author: 'Julio Secar',
    avatar: images.avatar,
    caption: 'Building media sosial app with PHP'
  },
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
