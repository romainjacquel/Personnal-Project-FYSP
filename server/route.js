const AuthentificationController = require('./controllers/authentification')
require('./services/passport');
const passport = require('passport')

const requireToken = passport.authenticate('jwt',{session:false});
const requireValidCredentials = passport.authenticate("local",{session:false})

module.exports = function (expressServer){
    // Inscription et connexion
    expressServer.post("/signup",AuthentificationController.signup);
    expressServer.post("/signin",requireValidCredentials,AuthentificationController.signin);
    // ici pour récupérer le user ? 
};
