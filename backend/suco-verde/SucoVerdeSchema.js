const mongoose = require("mongoose")

var Schema = mongoose.Schema;
var SucoVerdeSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    profile: { type: String, required: true },
    url: { type: String, required: true  }, 
    message: {type: String, required: true }
})

const SucoVerdeModel = mongoose.model("sucoverde", SucoVerdeSchema)

module.exports = SucoVerdeModel