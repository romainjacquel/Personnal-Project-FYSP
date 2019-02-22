import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {getPost,deletePost} from '../actions/index'
import AnnoncesSportItem from '../components/annonces-sport-item';

class Annonces extends Component  {

// Chargement des posts avant affichage
componentWillMount(){
    this.props.getPost(this.props.match.params.idSport)
}

renderPosts(){
    const {posts} = this.props;
    console.log(posts)
    if(posts){
       return posts.map((post)=>{
            return <AnnoncesSportItem key={post.id} post={post} deletePostCallBack={(post)=>{this.deletePostCallBack(post)}}/>     
        })
    }
}

deletePostCallBack(post){
    console.log("delete",post)
    this.props.deletePost(post.id)
}


render () {

    let {name} = this.props.match.params;
    const NAME = name.toUpperCase();
    

    return (<div className="container">
            <h1 className="title">{NAME}</h1>

        <table className='table table-hover'>
        
    <thead>
        <tr>
            <th>Titre</th>
            <th>Autheur</th>
            <th>Places restantes</th>
            <th>En savoir plus</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {this.renderPosts()}
    </tbody>
        </table>
        
            
        </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}

const mapDispatchToProps =(dispatch)=> ({
    ...bindActionCreators({getPost,deletePost}, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Annonces)