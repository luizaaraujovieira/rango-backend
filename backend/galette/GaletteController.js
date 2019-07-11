const { connect } = require('./GaletteRepository')
const GaletteModel = require('./GaletteSchema')

connect() 

const getAll = () => {
  return GaletteModel.find((error, Galette) => {
    return Galette
  })
}


const add = (Galette) => {
  const newGalette = new GaletteModel(Galette)
  return newGalette.save()
}


const remove = (id) => {
  return GaletteModel.findByIdAndDelete(id)
}


module.exports = {
  getAll,
  add,
  remove
}