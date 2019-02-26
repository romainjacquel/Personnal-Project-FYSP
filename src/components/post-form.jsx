import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {addPost} from '../actions/index'

class PostForm extends Component{

submit = ({title="",content="",places="",author=""})=>{

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
            this.props.addPost(title,content,places,author);
        }
    }

    renderField = ({type,label,input,meta:{touched,error}})=>(
        <div className="form-group">
            <label className="label_form">{label}</label>
            <input className="form-control" {...input} type={type}/>
            {touched && error && 
            <span className="error">{error}</span>}
        </div>
    )

render(){
    return(
<div className="container">
    <h1 className="title">Créer votre propre annonce </h1>
    <form onSubmit={this.props.handleSubmit(this.submit)}>
            <Field label ="Titre" name="title" component={this.renderField} type="text"/>
            <Field label= "Description" name="content" component={this.renderField} type="textarea"/>
            <Field label="Nombre de places" name="places" component={this.renderField} type="number"/>
            <Field label="Organisateur" name="author" component={this.renderField} type="text"/>

    <div className="button_form">
        <Link to={"/"}><button className="btn btn-danger">Retour à l'accueil</button></Link>
        <button className="btn btn-primary button_space" type="submit">Créer</button>
    </div>        
               
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