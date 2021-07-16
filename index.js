let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log(socket);
    
    socket.on('disconnect', function(){
        io.emit('users-changed', {user: socket.username, event: 'left'});
    });

    socket.on('set-name', (name) => {
        socket.username = name;
        io.emit('users-changed', {user:name, event:'joined'});
    });

    socket.on('send-message', (message) => {
        io.emit('message', {msg: message.text, user: socket.username, create})
    })
});

var port = process.env.PORT || 3001;
//servidor rodando na porta 3001
server.listen(port, function(){
    console.log('listening in htt://localhost:' + port);
})