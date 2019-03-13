var express = require("express");
var path = require("path");
var app = express();
         
app.use(express.static(__dirname + '/')); //afficher le style.css avec nodejs
//app.get('/', function(req, res){
 //   res.sendFile(path.join(__dirname + '/index.html'));
//})

// route, (index)
app.get("/", function(req, res){
    res.sendFile('index.html', {root : __dirname}); //affiche index.html si l'on écrit localhost:port
});

// route (status)
app.get("/status", function(req, res) {
    res.send("OK"); //affiche "OK" si l'on écrit localhost:port/status
});

var port = 5000;
app.listen(port, function() {
    console.log("Express Node.js serveur demarré sur le port 5000.");
});
// Le serveur va répondre aux requêtes "/" qui retourne une page "index.html"
// et "/status" retourne simplement le texte "OK"


// #############################################################
// Serveur Node.js simple 
/*
var http = require("http");
http.createServer(function (request, response) {    
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hello world !')
    response.end();
    console.log("Node.js serveur lancé sur le port 1337.");
}).listen(1337);
*/