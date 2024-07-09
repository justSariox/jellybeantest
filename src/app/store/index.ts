import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { beansApi, combinationsApi, factsApi, historyApi, recipesApi } from "@/services";

const middlewares = [
    combinationsApi.middleware,
    beansApi.middleware,
    factsApi.middleware,
    historyApi.middleware,
    recipesApi.middleware
]

const rootReducer = combineReducers({
    [beansApi.reducerPath]: beansApi.reducer,
    [factsApi.reducerPath]: factsApi.reducer,
    [combinationsApi.reducerPath]: combinationsApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
})