import React from 'react';
import styled from 'styled-components';

const Logo = props => {
  const { image, text } = props;

  return (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: white;
  height: 60px;
  padding: 12px;
  margin: 8px;
  border-radius: 10px;
  elevation: 5;
`;

const Image = styled.Image`
  height: 36px;
  width: 36px;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`;

export default Logo;
