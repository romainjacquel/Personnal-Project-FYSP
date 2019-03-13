import {SET_AUTHENTIFICATION} from '../actions/action-types'

const initialState = {
    isLoggedIn : false,
    user : null
}

export default function AuthentificationReducer(state=initialState,action){
    switch(action.type){
        case SET_AUTHENTIFICATION:
        return{
            isLoggedIn:action.payload,
            user : action.user
        }
        default:
            return state
    }
}