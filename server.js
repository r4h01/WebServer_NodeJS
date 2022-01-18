// Server Http scritto in Node.js
// questo codice crea un piccolo web server che, per ogni richiesta ricevuta,
//  invia il messaggio “Ciao a tutti…“. 
// Il server è accessibile alla porta 8080 (dato che siamo in fase di test).

// il metodo require consente di importare delle librerie esterne
// la libreria http permette di accedere ai metodi necessari per creare il web server

var http = require('http');

// la variabile http rappresent l'oggetto JS che permette di lanciare
// il nostro web server --> var server = http.createServer()
// il parametro passato è una funzione detta CallBack che verrà richiamata ogni qual volta
// il visitatore si connetterà al sito --> function(request, response){}

var server = http.createServer(function(request, response){
    response.writeHead(200);
    response.end('Welcome I am a Web server');
});

//in fase di sviluppo si utilizza la porta 8080
// in fase di deploy la porta 80

server.listen(8080);



// Richiesta del visitatore (request): questo oggetto contiene tutte le informazioni della richiesta del visitatore,
// ad esempio il suo IP, l’url che vuole visitare,
// se ha passato GET o POST ecc

// risposta (response): questo è l’oggetto che conterrà la risposta restituita dal server al browser del visitatore.
// In questo caso abbiamo inserito un testo, 
// solitamente contiene un codice HTML o, in caso di API dei dati JSON.