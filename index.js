var express = require('express');
var wagner = require('wagner-core');

require('./server/models')(wagner);
require('./server/dependencies')(wagner);

var app = express();

wagner.invoke(require('./server/auth.js'), {app: app});
require('./server/routes.js')(app, wagner);

app.listen(3000);
console.log('Listening on port 3000!');