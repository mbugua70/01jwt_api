require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const LoginRoute = require("./routes/main");
const DashboardRoute = require("./routes/main");

// middleware
app.use(express.static('./public'));
app.use(express.json());


// rest api
app.use('/api/v1/', LoginRoute);
app.use('/api/v1/', DashboardRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4040;

const start = async () => {

  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
