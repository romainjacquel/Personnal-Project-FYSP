import React from 'react'
import {Link} from 'react-router-dom'

const AnnoncesSportItem =(props) => {
const {post} = props
return (
<tr>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.places}</td>
                    <td><Link to={`/post/${post.id}`}><button className="btn btn-primary">En savoir plus</button></Link></td>
                    <td><button className="btn btn-danger" onClick={()=>deletePost(post)}>Supprimer</button></td>
</tr>
)
function deletePost(post){
    props.deletePostCallBack(post)
}

}


export default AnnoncesSportItem