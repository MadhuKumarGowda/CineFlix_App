/*
Below code demonstrate handling error of all API reqeusts
Created on 01st March 2024 by Madhu Kumar K S
*/

// Genric function to handle error
// implemented this function to avoid mulitple try catch block in other functions
module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => next(err));
  };
};
