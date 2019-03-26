import React from 'react';
import styled from 'styled-components';

const Card = props => {
  const { image, title, logo, caption, subTitle } = props;

  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={logo} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <SubTitle>{subTitle}</SubTitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 0px 20px 20px;
  elevation: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  margin-top: 2px;
`;

export default Card;
