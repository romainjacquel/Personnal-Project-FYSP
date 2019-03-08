import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import * as validations from '../validations'

const FIELDS = {email : 'email',password:"password",secondPassword:"secondPassword"}

class Signup extends Component  {

handleSubmit = (formValues) => {
    this.props.signupUser(formValues,this.props.history)
}

renderInputComponent = field =>{
    return(
        <div className="row justify-content-md-center">
        <fieldset className="cold-md-4 form-group">
            <label className="bmd-label-floating">{field.label}</label>
            <input {...field.input} type={field.type} className="form-control" />
            {field.meta.touched && field.meta.error &&
            <span className="error">{field.meta.error}</span>}
        </fieldset>
        </div>
    );
};

render () {
return (
    
    <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
    <div className="row justify-content-md-center">
        <h1 className="title">Inscription</h1>
    </div>
        <Field
            name={FIELDS.email}
            component={this.renderInputComponent}
            type='text'
            label='email'
        />
        <Field
            name={FIELDS.password}
            component={this.renderInputComponent}
            type='password'
            label='Mot de passe'
        />
        <Field
            name={FIELDS.secondPassword}
            component={this.renderInputComponent}
            type='password'
            label='Confirmation du mot de passe'
        />
        <div className="row justify-content-md-center">
            <button type='submit' className="btn btn-primary btn-raised">Inscription</button>
        </div>
    </form>

        )
    }
}

const mapStateToProps = (state) => {
return { 

 }
}

function validate(formValues) {
const errors = {};
errors.email = validations.validateEmail(formValues.email);
errors.password = validations.validateNotEmpty(formValues.password);
errors.secondPassword = validations.validateEqual(formValues.password,formValues.secondPassword)
return errors;
}

const singupForm = reduxForm({
form: 'SignupForm',
fields: Object.keys(FIELDS),
validate
})(Signup);

export default connect(mapStateToProps,actions) (singupForm)