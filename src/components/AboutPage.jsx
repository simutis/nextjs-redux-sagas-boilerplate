import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 200px;
  padding: 20px;
`

const AboutPage = () => {
  return (
    <Wrapper>
      <Content>Styled component...</Content>
      <Content>Styled component...</Content>
      <Content>Styled component...</Content>
    </Wrapper>
  );
};

export default AboutPage;
