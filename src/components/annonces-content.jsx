import React, { Component } from 'react'

const AnnoncesContent =({post})=>  {

return (
        <div>
            <h2>{post.title}</h2>
            <p>Auteur : {post.author}</p>
            <p>{post.content}</p>
      </div>
)
}


export default AnnoncesContent