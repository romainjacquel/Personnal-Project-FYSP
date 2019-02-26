import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {addPost} from '../actions/index'

class PostForm extends Component{

submit = ({title,content,places,author})=>{

        let error = {}
        let isError = false;
    
        if(title.trim()===""){
            error.title = "Veuillez remplir le champ titre"
            isError = true;
        }
    
        if(content.trim()===""){
            error.content = "Veuillez remplir le champ description"
            isError = true;
        }
    
        if(places.trim()===""){
            error.places = "Veuillez indiquer le nombre de places"
            isError = true;
        }
    
        if(author.trim()===""){
            error.author = "Veuillez remplir le champ auteur"
            isError = true;
        }
    
        if(isError){
            throw new SubmissionError(error);
        }else{
            console.log(title,content,places,author)
            this.props.addPost(title,content,places,author);
        }
    }

render(){
    return(
<div className="container">
    <h1 className="title">Créer votre propre annonce </h1>
    <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div className="form-group">
            <label>Titre</label>
            <Field className="form-control" name="title" component="input" type="text"/>
        </div>
        <div className="form-group">
            <label>Description</label>
            <Field className="form-control" name="content" component="input" type="textarea"/>
        </div>
        <div className="form-group">
            <label>Nombre de places</label>
            <Field className="form-control" name="places" component="input" type="number"/>
        </div>
        <div className="form-group">
            <label>Organisateur</label>
            <Field className="form-control" name="author" component="input" type="text"/>
        </div>
        <Link to={"/"}><button className="btn btn-danger">Retour à l'accueil</button></Link>
        <button className="btn btn-primary button_space" type="submit">Créer</button>
               
    </form>
    </div>
        )
    }
}


const mapDispatchToProps =(dispatch)=> ({
    ...bindActionCreators({addPost}, dispatch)
})

PostForm = reduxForm({
        form:'create-post'
    })(PostForm)

export default connect(null,mapDispatchToProps) (PostForm)