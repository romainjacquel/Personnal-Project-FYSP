import React from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import {Link} from 'react-router-dom'


const submit = ({title,content,places,author})=>{

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
        // importer la fonction addPost dans les props et l'utiliser ici ! ( enfin je pense )
    }
}

const PostFormFunction = ({handleSubmit})=>(
<div className="container">
    <h1 className="title">Créer votre propre annonce </h1>
    <form onSubmit={handleSubmit(submit)}>
        <div className="form-group">
        <div>
            <label>Titre</label>
            <Field name="title" component="input" type="text"/>
        </div>
        <div>
            <label>Description</label>
            <Field name="content" component="input" type="textarea"/>
        </div>
        <div>
            <label>Nombre de places</label>
            <Field name="places" component="input" type="number"/>
        </div>
        <div>
            <label>Organisateur</label>
            <Field name="author" component="input" type="text"/>
        </div>
        <Link to={"/"}><button className="btn btn-danger">Retour à l'accueil</button></Link>
        <button className="btn btn-primary" type="submit">Créer</button>
        </div>        
    </form>
    </div>
)



    // Decorate the form component

  const PostForm = reduxForm({
        form:'create-post'
    })(PostFormFunction)

export default PostForm