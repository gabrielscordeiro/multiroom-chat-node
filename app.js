/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizar porta de escuta 
* O server é colocado em uma variável pois teremos que atribuir ele para o Socket.io
*/

const server = app.listen(8080, function(){
    console.log('Servidor online');
});

//O socket.io irá usar a mesma porta que a aplicação, ou seja, ele responde 2 protocolos diferentes na mesma porta
const io = require('socket.io').listen(server);
/**
 * É setado a instancia do socket.io dentro do objeto do express
 */
app.set('io', io);

/**
* Criar a coneção por websocket
*/

io.on('connection', (socket) => {
    console.log('User connected');
    
    socket.on('disconnect',() => {
        console.log('User disconnected');
    });
});