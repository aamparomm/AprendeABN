var fs = require("fs"); //Liberia para el sistema de archivos
var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require("body-parser");
var io = require('socket.io').listen(server);
var modelo=require("./servidor/modelo.js");
var wss=require("./servidor/servidorWS.js");

var servidorWS=new wss.ServidorWS();

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var abn = new modelo.ABN();

app.get('/', function (request, response) {
    var contenido = fs.readFileSync(__dirname + "/cliente/index.html"); 
   
    response.setHeader("Content-type", "text/html");
    response.send(contenido);
    
});


server.listen(app.get('port'), function () {
    console.log('Node esta escuchando en el puerto', app.get('port'));
});

servidorWS.lanzarSocketSrv(io,abn);