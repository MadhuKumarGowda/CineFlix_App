/*
used to create schema for mongo db colelctions
and also implement built in validation of the schema
File created on 15th Feb 2024 By Madhu Kumar K S
*/

const mongoose = require('mongoose');
const validator = require('validator');

// Defining Schema using mongoose and also added basic validation for each schema type
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is require field"],
        unique: true,
        maxlength : [100, "Movie name should not be more than 100 characters"],
        minlength: [4, "Movie name should be atleast 4 characters"],
        trim:true,
        validate: [validator.isAlpha,"Name should contain only alphabets"]
    },
    description:{
        type : String,
        required: [true, "Description is require field"],       
        trim:true,
    },
    duration: {
        type: Number,
        required: [true, 'Duration is require feild'],
        validate: {
            validator: function(value){
                return value >= 1 && value <= 10;
            },
            message: "Duration should be more than 60 and less than 180 mins"
        }
    },
    releaseYear: {
        type: Number,
        required : [true, "Release year is require"]
    },
    ratings: {
        type: Number,
        default: 1.0,
        min: [1, "Rating should be greater 1 and above"],
        max: [10, "Rating should be lesser 10 and below"]
    },
    genres: {
        type: String,
        required: [true, 'Genres is required fields'],
        enum: {
            values: ["Action", "Adventure", "Sci-Fi", "Thriller", "Crime","Drama","Comedy"],
            message: "This Genres doesnot exists"
        }
    }
});

// Creating model for defined schema
const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;