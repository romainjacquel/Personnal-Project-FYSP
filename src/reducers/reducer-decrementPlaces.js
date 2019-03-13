import {AT_POSTS} from '../actions/action-types'

const initialState = {
    places : null
}

export default function decrementPlaces(state= initialState,action){
    switch(action.type){
        case AT_POSTS.DECREMENT_PLACES : return {...state,place : action.newPlaces}
    }
    return state;
}