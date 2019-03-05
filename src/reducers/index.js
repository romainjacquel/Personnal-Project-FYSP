import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification"
import ReducerPosts from './reducer-posts'
import ReducerActivePost from './reducer-activePost'
import decrementPlaces from "./reducer-decrementPlaces";
import {reducer as formReducer} from "redux-form"
import {reducer as formUser} from "redux-form"

const rootReducer = combineReducers({
    authentification : AuthentificationReducer,
    posts : ReducerPosts,
    activePost: ReducerActivePost,
    nbPlaces : decrementPlaces,
    form : formReducer,
    formUser
});

export default rootReducer;