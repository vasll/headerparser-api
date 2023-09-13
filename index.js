const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use('/api', routes);

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
