/*
Entry point of node application
 File created on 10th Feb 2024 By Madhu Kumar K S
*/

const app = require('./index');

// // Created database connection with connection string
// mongoose.connect(process.env.CONN_STR, {useNewUrlParser:true}).then((conn)=>{
//     console.log("Database connected");
// }).catch((err)=>console.log("Error iccured while connecting dtabase", err));

// // Defining Schema using mongoose and also added basic validation for each schema type
// const movieSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is require field"],
//         unique: true
//     },
//     description: String,
//     duration: {
//         type: Number,
//         required: [true, 'Duration is require feild']
//     },
//     releaseYear: Number,
//     ratings: {
//         type: Number,
//         default: 1.0
//     }
// });

// // Creating model for defined schema
// const Movie = mongoose.model('Movie', movieSchema);
// const testMovie = new Movie({
//     name: "Intersteller",
//     description: "A thrilling sci-fi movie wiuth sapce adventure and great action.",
//     duration: 180,
//     releaseYear: 2015,
//     ratings: 4.5
// })

// // save the data to mongoDB
// testMovie.save().then((doc)=>{
//     console.log("data saved succesfully");
// }).catch((err)=>{console.log(err, "Error while saving data")});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server has started");
})

