import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    str: "",
    notes:[]
}

export const notesSlice = createSlice({
    name:"notes",
    initialState:initialState,
    reducers:{
        addNote:(state, action)=>{
            const newNote = {
                name: action.payload.name,
                desc: action.payload.desc
            }
            state.notes.push(newNote);
            console.log(action.payload.name);
            console.log("added")
        },
        addString:(state, action)=>{
            state.str = action.payload;
            console.log(action.payload);
        },
        deleteNote:(state, action)=>{
            state.notes = state.notes.filter((note, index)=>{
                return index != action.payload.ind
            })
        },
        updateNote:(state, action)=>{
            state.notes[action.payload.ind] = action.payload.newNote;
        }

    }
})
export const {addNote, addString, deleteNote, updateNote} = notesSlice.actions;
export default notesSlice.reducer;