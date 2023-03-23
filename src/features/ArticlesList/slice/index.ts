import { createSlice } from '@reduxjs/toolkit';

interface ArticlesListState {
  showAsList: boolean;
  count: number;
}

const initialState: ArticlesListState = {
  showAsList: true,
  count: 0
};

export const ArticlesListSlice = createSlice({
  name: 'articlesListSlice',
  initialState,
  reducers: {
    showList(state) {
      state.showAsList = true;
    },
    showTiles(state) {
      state.showAsList = false;
    },
    setArticlesCount(state, action) {
      state.count = action.payload;
    }
  }
});

export const { showList, showTiles, setArticlesCount } =
  ArticlesListSlice.actions;
