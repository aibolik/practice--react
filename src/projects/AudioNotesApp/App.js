import React, { useState, useReducer, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import TodoList from './components/TodoList';

import Microphone from './assets/mic.png';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:300,400&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
    background: #f5f5f5;
  }

  * {
    box-sizing: border-box;
  }
`;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  font-weight: 100;
  font-size: 80px;
  margin: 50px 0;
`;

const Section = styled.section`
  max-width: 550px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-weight: 100;
  outline: none;

  ::placeholder {
    font-style: italic;
    color: rgba(0, 0, 0, .25);
  }
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 16px;
  width: 100%;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  font-weight: 100;
  font-size: 24px;
`;

const Img = styled.img`
  cursor: pointer;
  margin-right: 6px;
  transition: all .3s;

  ${props => props.active && `
    -webkit-filter: invert(40%) grayscale(100%) brightness(100%) sepia(100%) hue-rotate(-50deg) saturate(400%) contrast(2);
    filter: grayscale(100%) brightness(100%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);
  `}
`;

const Footer = styled.div`
  color: rgba(0, 0, 0, .54);
  font-size: 14px;
  margin-top: 16px;
  text-align: center;

  a {
    color: rgba(175, 47, 47, 0.35);
  }
`;

const initialState = [
  {
    text: 'Clean up my room',
  },
  {
    text: 'Phone brother',
  }
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.payload,
        },
      ];
    case 'DELETE_TODO':
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}

export const TodosContext = React.createContext(null);

function App() {
  const [input, changeInput] = useState('');
  const [isRecording, setRecording] = useState(false);
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter' && input) {
      dispatch({ type: 'ADD_TODO', payload: input });
      changeInput('');
    }
  }

  useEffect(() => {
    let recognition;
    
    if(isRecording) {
      recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
  
        if(e.results[0].isFinal) {
          dispatch({ type: 'ADD_TODO', payload: transcript });
        }
      });
  
      recognition.addEventListener('end', (e) => {
        setRecording(false);
      });
      
      recognition.start();
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    }
  }, [isRecording]);

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Layout>
        <Heading>audio notes</Heading>
        <Section>
          <InputWrapper>
            <Input value={input} onKeyDown={onKeyDownHandler} onChange={e => changeInput(e.target.value)} placeholder="Say what you need to accomplish" />
            <Img src={Microphone} width="24" height="24" active={isRecording} onClick={() => setRecording(!isRecording)} />
          </InputWrapper>
          <TodosContext.Provider value={{ dispatch }}>
            <TodoList todos={todos} />
          </TodosContext.Provider>
        </Section>
        <Footer>
          <p>Icon made by <a href="https://www.flaticon.com/authors/dave-gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/">flaticon.com</a></p>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;