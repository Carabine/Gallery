import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk'
import { GalleryReducer } from "./reducers/gallery";

const rootReducer = combineReducers({
    gallery: GalleryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
