import { ICompany } from './../models';
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface IState {
  company?: ICompany[],
  status: string,
  error: string | null | undefined
}
export const fetchPosts = createAsyncThunk('CompanyState/fetchPosts', async (url:string) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    
    if (!response.status) {
      throw new Error("fetch");
    }
  return response.data;
  } catch (error) {

  }

});
const initialState: IState = {
  company : [],
  status: 'idle',
  error: null,
}

export const industrySlice = createSlice({
  name: 'CompanyState',
  initialState,
  reducers: { 
    setDataCompany: (state, action: PayloadAction<ICompany[]>) => {
      state.company = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.company = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

// Action creators are generated for each case reducer function
export const { setDataCompany } = industrySlice.actions;

export default industrySlice.reducer