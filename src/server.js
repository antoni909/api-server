
'use strict';
// can import dependencies
const express = require('express');
// initialize
const app = express();

// Middleware Imports
const notFoundHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');
const beerRouter = require('./routes/beer');

// allows express to consume json
app.use(express.json());
//Resource Routers
app.use(beerRouter);

// App level middleware

// Post Routes Error Handling Middleware
app.use('*',notFoundHandler);
app.use(serverErrorHandler);

// export server
module.exports = {
  app: app,
  start: port => {
    if(!port){throw new Error('missing PORT')};
    app.listen(port, () => {
      console.log(`server listening PORT: ${port}`);
    });
  },
};
