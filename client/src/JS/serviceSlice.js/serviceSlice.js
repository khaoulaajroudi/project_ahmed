
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getservice=createAsyncThunk('service/get',async()=>{
    try{
let result=axios.get('http://localhost:5000/service/all')
return result
    }catch(error){
    console.log(error)
    }
})

export const addservice=createAsyncThunk('service/add',async(service)=>{
    try{
let result=axios.post('http://localhost:5000/service/add',service)
return result
    }catch(error){
    console.log(error)
    }
})
export const deleteservice=createAsyncThunk('service/delete',async(id)=>{
    try{
let result=axios.delete(`http://localhost:5000/service/${id}`)
return result
    }catch(error){
    console.log(error)
    }
})

export const updateservice=createAsyncThunk('service/update',async({id, service})=>{
    try{
let result=axios.put(`http://localhost:5000/service/${id}`,service)
return result
    }catch(error){
    console.log(error)
    }
})


const initialState = {
 service:null,
 status:null
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers:{
    [getservice.pending]:(state)=>{
        state.status="pending";
    },
    [getservice.fulfilled]:(state,action)=>{
        state.status="success";
        state.service=action.payload.data?.service
    },
    [getservice.rejected]:(state,action)=>{
        state.status="failed";
    },
    [addservice.pending]:(state)=>{
        state.status="pending";
    },
    [addservice.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [addservice.rejected]:(state,action)=>{
        state.status="failed";
    },
    [deleteservice.pending]:(state)=>{
        state.status="pending";
    },
    [deleteservice.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [deleteservice.rejected]:(state,action)=>{
        state.status="failed";
    },
    [updateservice.pending]:(state)=>{
        state.status="pending";
    },
    [updateservice.fulfilled]:(state,action)=>{
        state.status="success";
        state.service=action.payload.data?.service
    },
    [updateservice.rejected]:(state,action)=>{
        state.status="failed";
    }

  }
})
// Action creators are generated for each case reducer function
export const {} = serviceSlice.actions

export default serviceSlice.reducer