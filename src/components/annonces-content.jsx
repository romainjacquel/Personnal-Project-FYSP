import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {decrementPlaces} from '../actions/index'

class AnnoncesContent extends Component {

constructor(props){
      super(props)
      const nbPlaces = this.props.post.places
      this.state = {places : nbPlaces}
}

render(){
      const {post} = this.props;

  return (
        <div className="container detail_annonces">
            <h2>{post.title}</h2>
            <p>Auteur : {post.author}</p>
            <p>{post.content}</p>
            <p>Places restantes : {this.state.places}</p>
            <Link to="/inscriptionOK"><button className="btn btn-success">Je participe</button></Link>
      </div>
)    
}

}
const mapStateToProps = (state) => {
return { 
      nbPlaces : state.nbPlaces
 }
}

const mapDispatchToProps = (dispatch) => ({
      ...bindActionCreators({decrementPlaces}, dispatch) 
})



export default connect(mapStateToProps,mapDispatchToProps)(AnnoncesContent)