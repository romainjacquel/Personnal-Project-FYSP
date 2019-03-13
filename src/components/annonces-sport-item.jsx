import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { setAuthentification } from "../actions/index";


class AnnoncesSportItem extends Component{


renderDeleteButton=()=>{
    if(!this.props.isLoggedIn){
      return <td>Aucune</td>  
    }else{
        return <td><button className="btn btn-danger" onClick={()=>this.deletePost(this.post)}>Supprimer</button></td>
    }
    
}
render(){
    const {post} = this.props
    const {isLoggedIn} = this.props
    const {deletePostCallBack} = this.props

    function deletePost(post){
        deletePostCallBack(post)
    }

    function renderDeleteButton(){
        if(!isLoggedIn){
          return <td>Pas connecté</td>  
        }else{
            return <td><button className="btn btn-danger" onClick={()=>deletePost(post)}>Supprimer</button></td>
        }
        
    }

    return (
        <tr>
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{post.places}</td>
            <td><Link to={`/post/${post.id}`}><button className="btn btn-primary">En savoir plus</button></Link></td>
            {renderDeleteButton()}
        </tr>
        )        
    }
} 

const mapStateToProps = state => ({
    isLoggedIn: state.authentification.isLoggedIn
});

const mapDispatchToProps = {
    setAuthentification
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnoncesSportItem)