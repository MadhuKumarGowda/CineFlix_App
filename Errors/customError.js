/*
used to implement custom error handling 
File created on 15th Feb 2024 By Madhu Kumar K S
*/

class CustomError extends Error {
    constructor(errorMessage, statusCode){
        super(errorMessage);
        this.statusCode =  statusCode;
        this.status =  statusCode >= 400 && statusCode < 500 ? 'fail' : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = CustomError;