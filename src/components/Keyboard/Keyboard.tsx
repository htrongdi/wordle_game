import { spawn } from 'child_process';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decPos, incRow, reset, setBoard } from '../../redux/boardSlice';
import { rootState } from '../interface';
import Key from '../Key/Key';
import "./keyboard.css"
import wordList from "../../words.json"
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';

const Keyboard:React.FC= () => {
    const position = useSelector((state:rootState)=> state.board.pos);
    const board = useSelector((state:rootState) => state.board.board);
    const dispatch = useDispatch();
    const row = useSelector((state:rootState)=>state.board.row);
    const correctWord = useSelector((state:rootState)=>state.board.correctWord);

    const rows:string[] = ["q w e r t y u i o p",
                           "a s d f g h j k l",
                           "z x c v b n m"];

    let allWord:string[] = wordList.words;

    let board5Words : string = `${board[position-5]}${board[position-4]}${board[position-3]}${board[position-2]}${board[position-1]}`.toLowerCase();


    useEffect(()=>{
        console.log("Từ chính xác là " + correctWord + " đó fence");
    },[]);

    const clickBack = () =>{
        if (position<=0) return;
        if (Math.floor((position-1)/5) < row ) return;
        const newBoard = [...board];
        newBoard[position-1] = "";
        dispatch(decPos());
        dispatch(setBoard(newBoard));

    };
    const clickEnter = () => {
        if(allWord.includes(board5Words)) {
            if (position % 5 === 0 && position !== 0) {
            dispatch(incRow());
        }
        }
        else if (!allWord.includes(board5Words)){
            alert("Từ không có nghĩa");
        }
        if(position === 30 && allWord.includes(board5Words)){
            alert("Từ chính xác là: " + correctWord);
        }
        if(board5Words.toUpperCase() === correctWord.toUpperCase()){
            alert("Bạn đã đoán đúng từ là " + correctWord + ", tuyệt vời");
        }
    }

    const clickReset = ()=>{
        
        dispatch(reset());
    }
  return (
    <div className="keyboard-container">
        {rows.map((row, idx)=>{
            return (
                <>
                {
                        idx == 0 && (<div className='reset-button' onClick={clickReset}>Reset</div>)
                    }
                <div className="row">
                    {
                        idx == 2 && (<span className='letter-row' onClick={clickEnter}>Enter</span>)
                    }
                {row.split(" ").map((letter, idx)=>{
                    return (
                        <div className="letter-row">
                            <Key letter={letter.toUpperCase()}/>
                            {letter === "m" && <span className='letter-row' onClick={clickBack}>Back</span>}
                        </div>
                    )
                })}
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Keyboard