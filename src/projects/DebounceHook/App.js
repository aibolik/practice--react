import React, { useState, useReducer, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Slider from './components/Slider';
import Table from './components/Table';

import data from './data/people';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:300,400&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
    background: #E9EAF1;
    color: #5B58A9;
  }

  * {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 16px;
`;

const Container = styled.div`
  border-radius: 12px;
  background: white;
  padding: 24px 16px;
  width: 300px;
`;

const Heading = styled.h1`
  font-weight: 100;

  strong {
    font-weight: 700;
  }
`;

function App() {
  const [ageFilter, setAgeFilter] = useState(80);

  const onChange = (value) => {
    setAgeFilter(Number(value));
  }

  const filteredData = data.filter(item => item.age < ageFilter);

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Heading><strong>Range</strong> Filter</Heading>
          <Slider onChange={onChange} />
        </Container>
        <Table data={filteredData} />
      </Wrapper>
    </div>
  );
}

export default App;