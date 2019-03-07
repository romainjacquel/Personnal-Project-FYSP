import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import * as actions from '../actions'
import {connect} from 'react-redux'

const FIELDS = {email : "email", password : "password"}

class Signin extends Component{

    handleSubmit = (credentials) =>{
        this.props.signinUser(credentials,this.props.history)
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="row justify-content-md-center">
                    <h1 className='title'>Connexion</h1>
                </div>
                <div className="row justify-content-md-center">
                    <fieldset className='cold-md-4 form-group'>
                        <label className="bmd-label-floating">Email</label>
                        <Field name={FIELDS.email} component="input" type="text" className="form-control" />
                    </fieldset>
                </div>
                <div className="row justify-content-md-center">
                    <fieldset className='cold-md-4 form-group'>
                        <label className="bmd-label-floating">Mot de passe</label>
                        <Field name={FIELDS.password} component="input" type="password" className="form-control" />
                    </fieldset>
                </div>

                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-primary btn-raised">Connexion</button>
                </div>
            </form>
        )
    }
}

 const singinForm = reduxForm({
    form:"signin",
    fields : Object.keys(FIELDS)
    })(Signin);

export default connect(null,actions)(singinForm)