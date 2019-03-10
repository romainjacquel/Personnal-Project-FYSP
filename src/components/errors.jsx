import React, { Component } from 'react'
import {resetError} from '../actions/index'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import {withRouter} from 'react-router'

class Errors extends Component  {

    componentWillUpdate(nextProps){
        if(this.props.location !== nextProps.location){
            this.props.resetError()
        }
    }
    

render () {
return (
    this.props.error && 
    <div className="alert alert-danger" role="alert">
         {this.props.error}
    </div>
        )
    }
}

const mapStateToProps = (state) => {
return { 
    error : state.errors.message
 }
}

const mapDispatchToProps =(dispatch)=> ({
    ...bindActionCreators({resetError}, dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Errors))