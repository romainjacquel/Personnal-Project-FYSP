import axios from 'axios'
import {SET_AUTHENTIFICATION,GET_SPORT} from "./action-types"
import {AT_POSTS} from "./action-types"

const END_POINT = "http://localhost:3000"

export function setAuthentification(isLoggedIn){
    return function(dispatch) {
        dispatch({
            type:SET_AUTHENTIFICATION,
            payload:isLoggedIn
        })
    }
}

export function getSport(isLoggedIn){
    return function(dispatch) {
        dispatch({
            type:GET_SPORT,
            payload:isLoggedIn
        })
    }
}


// Générerer les ids 

function getIdSport(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function getIdUser(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
  }

////////////

export function getPost(idSport){
    return function (dispatch){
        axios.get(`${END_POINT}/posts?idSport=${idSport}`).then((response)=>{
            dispatch({type:AT_POSTS.GET_POST, payload:response.data})
        })
    }
}

export function getActivePost(id){
    return function(dispatch){
        axios.get(`${END_POINT}/posts/${id}`).then((response)=>{
            dispatch({type:AT_POSTS.GET_ACTIVE_POST,payload:response.data})
        })
    }
}

export function deletePost(id){
    return function (dispatch){
        axios.delete(`${END_POINT}/posts/${id}`).then((response)=>{
            dispatch({type:AT_POSTS.DELETE_POST, payload:id})
        })
    }
}

export function addPost(title,content,places,author){
    return function (dispatch){
        axios.post(`${END_POINT}/posts/`,
        {   
            idUser: getIdUser(1,11),
            idSport : getIdSport(1,4),
            title: title,
            content:content,
            places : places,
            author :author

        }
        ).then((response)=>{
            dispatch({type:AT_POSTS.ADD_POST, payload:response.data})
        })
    }
}

export function decrementPlaces(){

}
