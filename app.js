/****************************************
setup root relative paths
****************************************/
require('rootpath')();

/****************************************
server config Settings
****************************************/
var timestamp   = new Date(),
    port        = 3000,
    oneDay      = 86400000;

/****************************************
require general modules
****************************************/
var express = require('express'),
    exphbs  = require('express3-handlebars'),
    app     = module.exports = express();

/****************************************
define Handlebars rendering
****************************************/
var hbs = exphbs.create({
    defaultLayout: 'main'
});

/****************************************
Register `hbs.engine` with the Express app.
****************************************/ 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/****************************************
Enable View Cache
****************************************/
app.enable('view cache');

/****************************************
Register Static Content Folder with expiry time
****************************************/
app.use(express.static(__dirname + '/public'), { maxAge: oneDay });

/****************************************
Route App
****************************************/
app.get('/', function (req, res) {
    res.render('home');
});

/****************************************
start server
****************************************/
app.listen(port);
console.log('Server Started on port ' + port + ' at' + timestamp);