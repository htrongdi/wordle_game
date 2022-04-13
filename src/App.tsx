import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Board from './components/Board/Board';
import Heading from './components/Heading/Heading';
import { rootState } from './components/interface';


function App() {
  const board = useSelector((state:rootState) => state.board.board)

  return (
    <>
      <Heading type="h2" text="Create by htrongdi"/>
      <Heading type="h1" text="Wordiee"/>
      <div className="board-container">
        <Board board={board}/>
      </div>
    </>
  );
}

export default App;
