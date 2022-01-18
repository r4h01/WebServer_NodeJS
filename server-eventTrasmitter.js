// utte le applicazioni Node.js sono basate su un meccanismo di eventi, 
// che determina quale funzione sarà successivamente chiamata.
// Con il metodo on(), è possibile riprodurre un evento e 
// dire quale funzione deve essere richiamata al verificarsi dell’evento.
// Con il metodo emit() è possibile creare il proprio evento e 
// quindi attivare le funzioni che ascoltano l’evento

// Se vuoi trasmettere un evento, è molto semplice, 
// basta includere il modulo EventEmitter e creare un oggetto basato su EventEmitter

var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

// Se vuoi metterti in ascolto dell’evento

game.on('gameover', function(message){
    console.log(message);
})
game.on('newplayer', function(message, yold){
    console.log(message);
    console.log(yold);
})

// per trasmettere un evento nel codice,
// è necessario che l’oggetto basato su EventEmitter richiami il metodo emit()

game.emit('newplayer', 'Mario',33);

game.emit('gameover', 'you lose!')
