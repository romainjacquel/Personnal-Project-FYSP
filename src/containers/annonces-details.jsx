import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import AnnoncesContent from '../components/annonces-content';
import {getActivePost} from '../actions/index'

class AnnoncesDetail extends Component  {
componentWillMount(){
    this.props.getActivePost(this.props.match.params.id)
}

renderPostActive(){
    const {post} = this.props
    if(post){
        return <AnnoncesContent post={this.props.posts}/>
    }
}

render () {
return (
<div>
    {this.renderPostActive()}
      </div>
)
}
}

const mapStateToProps = (state) => {
return { 
    post :state.activePost
 }
}

const mapDispatchToProps =(dispatch)=> ({
    ...bindActionCreators({getActivePost},dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (AnnoncesDetail)