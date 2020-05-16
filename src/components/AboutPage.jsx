import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  width: 200px;
  padding: 20px;
  font-size: 30px;
`

const AboutPage = () => {
  return (
    <Wrapper>
      <Content><i className="fa fa-coffee" /></Content>
      <Content><i className="fa fa-search" /></Content>
      <Content><i className="fa fa-bank" /></Content>
    </Wrapper>
  );
};

export default AboutPage;
