/*
Below code demonstrate handling routes in separate files and export them for consuming from other modules
Created on 11th Feb 2024 by Madhu Kumar K S
*/

const mongoose =  require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const Movie =  require('../Models/moviesModels');

// Created database connection with connection string
mongoose.connect(process.env.CONN_STR, {useNewUrlParser:true}).then((conn)=>{
    console.log("Database connected");
}).catch((err)=>console.log("Error iccured while connecting dtabase", err));

exports.getHighestRated = (req, res, next)=>{
    req.query.limit = "5";
    req.query.sort = '-rating';
    next();
}


exports.getAllMovies = async (req,res)=>{
    try {
       const movies = await Movie.find();  
       res.status(200).json({
        status: "Success",
        length : movies.length,
        data:{
            movies
        }
       })      
    } catch (err) {
        res.status(404).json({
            status:"Failure",
            message: err.message
        })
        console.log(err);
    }
}

exports.getMovie = async (req,res)=>{
    try {
      // const movie = await Movie.find({_id: req.params.id}); 
      const movie = await Movie.findById(req.params.id);
       res.status(200).json({
        status: "Success",        
        data:{
            movie
        }
       })    
    } catch (err) {
        res.status(404).json({
            status:"Failure",
            message: err.message
        })
        console.log(err);
    }
}


exports.crateMovie = async (req,res)=>{
    // const newMovie = new Movie({});
    // newMovie.save();
    try{
        const movie = await Movie.create(req.body);
        console.log(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                movie
            }
        });
    }catch(err){
        res.status(400).json({
            status:"Failure",
            message: err.message
        })
        console.log(err);
    }

    
    

}