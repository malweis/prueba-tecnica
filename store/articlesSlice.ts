import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '@/constants/types';

interface ArticlesState {
    articles: Article[];
}

const initialState: ArticlesState = {
    articles: [],
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles(state, action: PayloadAction<Article[]>) {
            state.articles = action.payload;
        },
        addArticle(state, action: PayloadAction<Article>) {
            state.articles.push(action.payload);
        },
    },
});

export const { setArticles, addArticle } = articlesSlice.actions;

export default articlesSlice.reducer;