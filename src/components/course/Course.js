import React from 'react';
import styled from 'styled-components';

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <SubTitle>{props.subTitle}</SubTitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author>Tought by {props.author}</Author>
    </Content>
  </Container>
);

const Container = styled.TouchableOpacity`
  width: 335px;
  height: 335px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
  elevation: 15;
`;

const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 50;
  left: 50%;
  margin-top: -24px;
  margin-left: -24px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  width: 190px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Content = styled.View`
  height: 75px;
  padding-left: 62px;
  justify-content: center;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  margin-right: 20px;
`;

const Author = styled.Text`
  font-size: 14px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;

export default Course;
