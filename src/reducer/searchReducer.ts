import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface SearchState {
  target: string;
  page: number;
  lastPageNum: number;
  totalCount: number | null;
  articlesBlock: any | null;
}

const initialState: SearchState = {
  target: '',
  page: 1,
  lastPageNum: 0,
  totalCount: null,
  articlesBlock: null,
};

export const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchSetup: (state, action: PayloadAction<any>) => {
      state.target = action.payload.target;
      state.page = action.payload.page;
    },
    paginationSetup: (state, action: PayloadAction<any>) => {
      const { lastPageNum, totalCount, articlesBlock } = action.payload;
      state.lastPageNum = lastPageNum;
      state.totalCount = totalCount;
      state.articlesBlock = articlesBlock;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchSetup, paginationSetup } = searchReducer.actions;

export const searchSelector = (state: RootState) => state.search;

export default searchReducer.reducer;
