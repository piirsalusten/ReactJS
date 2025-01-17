import React from 'react';
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Main>
      <TicTacToe />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
