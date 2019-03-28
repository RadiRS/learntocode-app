import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

// Screen
import { Welcome, Section, Course, Project } from '../screens';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

// Home Stack Navigator
const HomeStackNavigator = createStackNavigator(
  {
    Welcome,
    Section
  },
  { mode: 'modal' }
);

HomeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'Section') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <Icon
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

// Couses Stack Navigator
const CoursesStackNavigator = createStackNavigator({
  Course
});

CoursesStackNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

// Project Stack Navigator
const ProjectStactNavigator = createStackNavigator({
  Project
});

ProjectStactNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

// Tab Navigator
const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeStackNavigator,
  Courses: CoursesStackNavigator,
  Porject: ProjectStactNavigator
});

// App Container
const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer;
