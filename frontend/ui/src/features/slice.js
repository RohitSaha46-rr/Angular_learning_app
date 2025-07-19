import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
export const fetchTopics=createAsyncThunk('topics/fetchTopics',async ()=>{
    const res=await axios.get("http://localhost:5000/api/topics");
    return res.data;
})
export const fetchContent=createAsyncThunk("topics/fetchContent",async(title)=>{
    const res=await axios.get(`http://localhost:5000/api/topics/data/${title}`)
    return res.data;
})

const slice=createSlice({
    name:"topics",
    initialState:{
        topics:[],
        content:[],
        selectedTopic:null,
        error:null,
        status:"idle"
    },
    reducers:{
        setSelectedTopic:(state,action)=>{
            state.selectedTopic=action.payload
        }
    },
   extraReducers:(builder)=>{
    builder
    .addCase(fetchTopics.pending,(state)=>{
        state.status="loading"
    })
    .addCase(fetchTopics.fulfilled,(state,action)=>{
        state.status="success",
        state.topics=action.payload
    })
    .addCase(fetchTopics.rejected,(state,action)=>{
        state.status="failure",
        state.error=action.error.message
    })
     .addCase(fetchContent.fulfilled, (state, action) => {
        state.status="success"
        state.content = action.payload;
        console.log(state.content);
      })
   }
})
export const {setSelectedTopic}=slice.actions;
export default slice.reducer;