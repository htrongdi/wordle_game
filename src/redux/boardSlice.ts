/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from "@reduxjs/toolkit";
import wordList from "../words.json";

let randomNum = Math.floor(Math.random() * wordList.words.length);

const initialState = {
    board: [
    "", "", "", "", "", 
    "", "", "", "", "", 
    "", "", "", "", "", 
    "", "", "", "", "", 
    "", "", "", "", "", 
    "", "", "", "", "" ],
    pos:0,
    row:0,
    correctWord:wordList.words[randomNum].toUpperCase(),

    }



export const boardSlice = createSlice({

    name:"board",
    initialState,
    reducers:{
        setBoard: (state, action) =>{
            state.board = action.payload
        },
        incPos:(state) =>{
            state.pos++;
        },
        decPos:(state) =>{
            state.pos--;
        },
        incRow:(state) =>{
            state.row++
        },
        reset:(state) =>{
            Object.assign(state,initialState);
        }
    }

});

export const {
    setBoard,
    incPos,
    decPos,
    incRow,
    reset
} = boardSlice.actions;

export default boardSlice.reducer;