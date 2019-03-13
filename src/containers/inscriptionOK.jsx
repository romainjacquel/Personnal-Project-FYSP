import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {decrementPlaces} from '../actions/index'

const InscriptionOK =()=> {

return (
        <div className="container">
        <h1 className="title title_inscriptionOK">Félicitation vous êtes bien inscrit à cette évènement</h1>
        <Link to="/"><button className="btn btn-primary btn_inscriptionOK">Retour à la page d'accueil</button></Link>
      </div>
)
}

const mapStateToProps = (state) => {
  return {
    places : state.posts.places
  }
}

const mapDispatchToProps =(dispatch)=> ({
  ...bindActionCreators({decrementPlaces}, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps) (InscriptionOK)