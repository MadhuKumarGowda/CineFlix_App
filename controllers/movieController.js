/*
Below code demonstrate handling routes in separate files and export them for consuming from other modules
Created on 11th Feb 2024 by Madhu Kumar K S
*/

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Movie = require("../Models/moviesModels");
const CustomError = require("../Errors/customError");
const asynErrorHandler = require("../Utils/asynErrorHandler");
// Created database connection with connection string
mongoose
  .connect(process.env.CONN_STR, { useNewUrlParser: true })
  .then((conn) => {
    console.log("Database connected");
  })
  .catch((err) => console.log("Error iccured while connecting dtabase", err));

exports.getHighestRated = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-rating";
  next();
};

exports.getAllMovies = asynErrorHandler(async (req, res, next) => {
  const movies = await Movie.find();
  res.status(200).json({
    status: "Success",
    length: movies.length,
    data: {
      movies,
    },
  });
});

exports.getMovie = asynErrorHandler(async (req, res, next) => {
  // const movie = await Movie.find({_id: req.params.id});
  const movie = await Movie.findById(req.params.id);
  res.status(200).json({
    status: "Success",
    data: {
      movie,
    },
  });
});

exports.crateMovie = asynErrorHandler(async (req, res, next) => {
  // const newMovie = new Movie({});
  // newMovie.save();

  const movie = await Movie.create(req.body);
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      movie,
    },
  });
});
