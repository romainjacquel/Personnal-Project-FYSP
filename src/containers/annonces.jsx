import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {getPost} from '../actions/index'
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
            return <AnnoncesSportItem key={post.id} post={post}/>     
        })
    }
}


render () {

    let {name} = this.props.match.params;
    const NAME = name.toUpperCase();
    

    return (<div className="container">
            <h1>{NAME}</h1>

        <table className='table table-hover'>
        
    <thead>
        <tr>
            <th>Titre</th>
            <th>Autheur</th>
            <th>En savoir plus</th>
            <th>Supprimer</th>
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
    ...bindActionCreators({getPost}, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Annonces)