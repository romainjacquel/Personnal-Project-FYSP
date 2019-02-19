import React from 'react'

const AnnoncesSportItem =(props) => {
const {post} = props
return (
<tr>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td><button className="btn btn-primary">S'inscrire</button></td>
                    <td><button className="btn btn-danger">Supprimer</button></td>
</tr>
)
}


export default AnnoncesSportItem