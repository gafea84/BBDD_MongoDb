const mongoose = require('mongoose');
const Schema = mongoose.Schema

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    superficie: Number,
    habitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    email: String
});

module.exports= mongoose.model('inmueble',inmuebleSchema)

