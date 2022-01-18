var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
  var params = querystring.parse(url.parse(req.url).query);
  res.writeHead(200, {"Content-Type": "text/plain"});
  if ('firstname' in params && 'lastname' in params) {
    res.write('Il tuo nome: ' + params['firstname'] + ' ' + params['lastname']);
  } else {
    res.write('Tu hai un nome giusto?');
  }
  res.end();
});

server.listen(8080);


// Il ‘firstname’ di params permette di verificare se l’array params contiene una voce ‘firstname’. Se manca puoi visualizzare un messaggio di errore, in caso contrario verrebbe mostrato il valore ‘undefined’, ovvero non definito.
// Inoltre, non abbiamo controllato la pagina chiamata. Questo codice funziona anche su http://localhost:8080 come su http://localhost:8080/imaginarypage. Questo e il codice precedente devono essere combinati per gestire sia la pagina che i parametri.