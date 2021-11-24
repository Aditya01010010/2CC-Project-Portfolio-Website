var PORT =  process.env.PORT || 3000;

var express = require('express');
var path = require('path');

var routes = require('./routes/index');

var app = express();

app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));

app.use('/',routes);

app.listen(PORT, console.log(`server up and running on port ${PORT}`));