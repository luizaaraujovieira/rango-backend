const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controllerSucoVerde = require('./suco-verde/SucoVerdeController')
const controllerBrownie = require('./brownie/BrownieController')
const controllerGalette = require('./galette/GaletteController')

const server = express()
server.use(cors())
server.use(bodyParser.json())


/////////// SUCO VERDE  /////////////

server.get('/sucoverde', (request, response) => {
  controllerSucoVerde.getAll()
    .then(SucoVerde => response.send(SucoVerde))
})

server.post('/sucoverde', (request, response) => {
  controllerSucoVerde.add(request.body)
    .then(SucoVerde => {
      const _id = SucoVerde._id
      response.send(_id)

    })
    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

server.delete('/sucoverde/:id', (request, response) => {
  controllerSucoVerde.remove(request.params.id)
    .then(SucoVerde => {
      if(SucoVerde === null || SucoVerde === undefined){
      response.sendStatus(404)
      } else {
        response.sendStatus(204)
      } 
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

///////////////////////////////


/////////////BROWNIE////////////

server.get('/brownie', (request, response) => {
  controllerBrownie.getAll()
    .then(Brownie => response.send(Brownie))
})

server.post('/brownie', (request, response) => {
  controllerBrownie.add(request.body)
    .then(Brownie => {
      const _id = Brownie._id
      response.send(_id)

    })
    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

server.delete('/brownie/:id', (request, response) => {
  controllerBrownie.remove(request.params.id)
    .then(Brownie => {
      if(Brownie === null || Brownie === undefined){
      response.sendStatus(404)
      } else {
        response.sendStatus(204)
      } 
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

/////////////////////////////////////////////////

////////////////// GALETTE ///////////////////////

server.get('/galette', (request, response) => {
  controllerGalette.getAll()
    .then(galette => response.send(galette))
})

server.post('/galette', (request, response) => {
  controllerGalette.add(request.body)
    .then(galette => {
      const _id = galette._id
      response.send(_id)

    })
    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

server.delete('/galette/:id', (request, response) => {
  controllerGalette.remove(request.params.id)
    .then(galette => {
      if(galette === null || galette === undefined){
      response.sendStatus(404)
      } else {
        response.sendStatus(204)
      } 
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

//////////////////////////////////////qq

server.listen(process.env.PORT || 3000)
console.log("------Server is working------")
console.log("PORT : http://localhost:3000/sucoverde")
console.log("PORT : http://localhost:3000/brownie")
console.log("PORT : http://localhost:3000/galette")