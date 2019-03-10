import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification"
import ReducerPosts from './reducer-posts'
import ReducerActivePost from './reducer-activePost'
import decrementPlaces from "./reducer-decrementPlaces";
import {reducer as formReducer} from "redux-form"
import {reducer as form} from "redux-form"
import ErrorsReducer from './errors'

const rootReducer = combineReducers({
    authentification : AuthentificationReducer,
    posts : ReducerPosts,
    activePost: ReducerActivePost,
    nbPlaces : decrementPlaces,
    form : formReducer,
    formUser : form,
    errors : ErrorsReducer
});

export default rootReducer;