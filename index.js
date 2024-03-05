/*
used mulitple middlewears
like express router and morgan to log the HTTP reqeust
File created on 10th Feb 2024 By Madhu Kumar K S
*/

const express = require("express");
const app = express();
const movieRouter = require("./Routes/routes");
const authRouter = require("./Routes/authRouter");
const morgan = require("morgan");

const CustomError = require("./Utils/customError");
const globalErrorHandler = require("./controllers/errorController");

app.use(morgan("combined"));

app.use("/", movieRouter);
app.use("/users", authRouter);

// Defult error handler
app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: "Failure",
  //   message: `Can't find ${req.originalUrl} on the server.`
  // })

  const err = new CustomError(
    `Can't find ${req.originalUrl} on the server.`,
    404
  );
  next(err);
});

// Global Error handling middlewear
app.use(globalErrorHandler);

module.exports = app;
