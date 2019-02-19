import React from 'react'
import {Link} from 'react-router-dom'

const InscriptionOK =()=> {

return (
        <div className="container">
        <h1 className="title title_inscriptionOK">Félicitation vous êtes bien inscrit à cette évènement</h1>
        <Link to="/"><button className="btn btn-primary btn_inscriptionOK">Retour à la page d'accueil</button></Link>
      </div>
)
}

export default InscriptionOK