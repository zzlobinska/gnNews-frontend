import { configureStore } from '@reduxjs/toolkit';

import { ArticlesListSlice } from 'src/features/ArticlesList/slice';

const store = configureStore({
  reducer: {
    articlesList: ArticlesListSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
