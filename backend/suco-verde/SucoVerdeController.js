const { connect } = require('./SucoVerdeRepository')
const SucoVerdeModel = require('./SucoVerdeSchema')

connect() 

const getAll = () => {
  return SucoVerdeModel.find((error, SucoVerde) => {
    return SucoVerde
  })
}


const add = (SucoVerde) => {
  const newSucoVerde = new SucoVerdeModel(SucoVerde)
  return newSucoVerde.save()
}


const remove = (id) => {
  return SucoVerdeModel.findByIdAndDelete(id)
}


module.exports = {
  getAll,
  add,
  remove
}