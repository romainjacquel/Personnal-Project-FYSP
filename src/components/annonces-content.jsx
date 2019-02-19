import React from 'react'
import {Link} from 'react-router-dom'

const AnnoncesContent =({post})=>  {


// Faire une sauvegarde dans le state de l'appli pour decrementPlaces()
function decrementPlaces(){
      let {places} = post
      if(places){
            console.log(places)
            places = places -1;
            console.log(places)
            return places
      }
}

return (
        <div className="container detail_annonces">
            <h2>{post.title}</h2>
            <p>Auteur : {post.author}</p>
            <p>{post.content}</p>
            <Link to="/inscriptionOK"><button className="btn btn-success" onclick={decrementPlaces()}>Je participe</button></Link>
      </div>
)
}


export default AnnoncesContent