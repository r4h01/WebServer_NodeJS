var http = require('http');

// var server = http.createServer(function(req, res){
//     res.writeHead(200, 'Ok il server risponde');
//     res.end('ciao belli');
// });
var server = http.createServer();

server.on('request', function(req, res){
        res.writeHead(200, 'Ok il server risponde');
        res.end('ciao belli');
    } );

server.on('close', function(){
    console.log('Addio')
});

server.listen(8080);

server.close();