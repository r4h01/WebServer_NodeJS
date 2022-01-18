// qui il server restituisce un HTML

// var http = require('http'); 

// var server = http.createServer(function(req, res) {
//   res.writeHead(200, {"Content-Type": "text/html"});
//   res.write('<!DOCTYPE html>'+
//   '<html>'+
//   ' <head>'+
//   ' <meta charset="utf-8" />'+
//   ' <title>Pagina Node.js!</title>'+
//   ' </head>'+
//   ' <body>'+
//   '  <p>Sono un paragrafo <strong>HTML</strong>!</p>'+
//   ' </body>'+
//   '</html>');
//   res.end();
// });

// server.listen(8080);


//Bisogna capire come fare routing tra diverse pagine html
// per questo utilizziamo require('url')

var http = require('http'); 

var url = require('url');


var server = http.createServer(function(req, res) {

  var page = url.parse(req.url).pathname;
  console.log(page);
  res.writeHead(200, {"Content-Type": "text/plain"});
  
    if (page == '/') {
        res.write('Sei nella reception');
    } else if (page == '/basement') {
        res.write('Sei in basement');
    } else if (page == '/floor/1/bedroom') {
        res.write('Oh no!!!!!!!!!!');
    } else {
        res.write('404 Page not found');
    }

  res.end();
});

server.listen(8080);