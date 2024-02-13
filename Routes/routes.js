/*
Below code demonstrate speration of concern theory.
Separatng the routes from app.js and exporting route to other moduules
Enable express routing using Router middlewear
File cretaed on 11th Feb 2024 by Madhu Kumar KS
*/

const express = require('express');
const movieController = require('../controllers/movieController')
const router = express.Router();


router.route('/')
.get(movieController.getAllMovies)
.post(movieController.crateMovie)

router.route("/:id")
.get(movieController.getMovie)


module.exports = router;