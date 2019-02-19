import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification"
import ReducerPosts from './reducer-posts'
import ReducerActivePost from './reducer-activePost'

const rootReducer = combineReducers({
    authentification : AuthentificationReducer,
    posts : ReducerPosts,
    activePost: ReducerActivePost
});

export default rootReducer;