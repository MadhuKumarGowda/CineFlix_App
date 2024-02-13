const mongoose = require('mongoose');

// Defining Schema using mongoose and also added basic validation for each schema type
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is require field"],
        unique: true,
        trim:true
    },
    description:{
        type : String,
        required: [true, "Description is require field"],       
        trim:true,
    },
    duration: {
        type: Number,
        required: [true, 'Duration is require feild']
    },
    releaseYear: {
        type: Number,
        required : [true, "Release year is require"]
    },
    ratings: {
        type: Number,
        default: 1.0
    },
});

// Creating model for defined schema
const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;