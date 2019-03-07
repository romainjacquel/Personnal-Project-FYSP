const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const expressServer = express();
const router = require("./route")
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb+srv://romain:ralarala@cluster0-iyztk.mongodb.net/test?retryWrites=true", {useCreateIndex:true,useNewUrlParser: true})

mongoose.connection
    .once('open',()=>{"Connecté à mongoDb"})
    .on('error',error=>('Erreur de connexion a MongoDb : ', error))

expressServer.use(morgan('combined'))
expressServer.use(bodyParser.json({type:'*/*'}))
expressServer.use(cors())

const port = 3090;
const server = http.createServer(expressServer)
router(expressServer);
server.listen(port)
console.log("le serveur écoute sur le port :", port)