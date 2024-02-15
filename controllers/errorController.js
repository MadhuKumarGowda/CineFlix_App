/*
used to implement global error handling 
File created on 15th Feb 2024 By Madhu Kumar K S
*/

module.exports = (error, req,res,next)=>{
    error.statuscode = error.statuscode || 500;
    error.status = error.status || 'error';
    res.status(error.statuscode).json({
      status: error.statuscode,
      message: error.message
    })
  }