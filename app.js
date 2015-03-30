var http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express();


// all environments
app.set('port', 1010);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(path.join(__dirname, 'server/')));
app.use(express.bodyParser());
app.use(express.methodOverride());


var server = http.createServer(app);

server.listen(app.get('port'));

