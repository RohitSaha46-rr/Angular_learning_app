import { createSlice } from "@reduxjs/toolkit";
import type { Topic } from './apiSlice';
interface TopicsState {
  selectedTopic: Topic | null;
}

const initialState: TopicsState = {
  selectedTopic: null,
};

const slice=createSlice({
    name:"topics",
    initialState,
    reducers:{
        setSelectedTopic:(state,action)=>{
            state.selectedTopic=action.payload
        }
    },
  
})

export const selectSelectedTopic = (state: { topics: TopicsState }) => 
  state.topics.selectedTopic;
export const {setSelectedTopic}=slice.actions;
export default slice.reducer;