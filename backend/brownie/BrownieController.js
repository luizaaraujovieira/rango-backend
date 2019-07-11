const { connect } = require('./BrownieRepository')
const BrownieModel = require('./BrownieSchema')

connect() 

const getAll = () => {
  return BrownieModel.find((error, Brownie) => {
    return Brownie
  })
}


const add = (Brownie) => {
  const newBrownie = new BrownieModel(Brownie)
  return newBrownie.save()
}


const remove = (id) => {
  return BrownieModel.findByIdAndDelete(id)
}


module.exports = {
  getAll,
  add,
  remove
}