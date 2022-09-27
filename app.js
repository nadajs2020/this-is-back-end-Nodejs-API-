const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 9000;



app.use(logger('dev'));
//Middlewares
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cors());
// Router Middlewares
app.use('/api', usersRouter);


// Connected to DB
mongoose.connect(
  "mongodb://localhost/shopping-mn", {
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connection established....");
    }
  }
);




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


module.exports = app;