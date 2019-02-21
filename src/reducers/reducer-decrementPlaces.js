import {AT_POSTS} from '../actions/action-types'

export default function decrementPlaces(state=null,action){
    switch(action.type){
        case AT_POSTS.DECREMENT_PLACES : return action.payload
    }
    return state;
}