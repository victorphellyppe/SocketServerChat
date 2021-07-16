Devemos configurar o projeto com npm init
Logo depois disso instalamos o pacote express e o socket.io com:
    npm install express socket.io para começar a criar a api.

Criei 3 variaveis, uma app para requerir o express.
Logo depois uma server requerindo o http e iniciando o servidor com a variavel app criada anteriormente.
Depois uma variavel io requerindo o socket.io e iniciando o server criada no passo dois.

Depois com o io do socket.io apontei os status da api para emitir no aplicativo, por ultimo criei uma variavel para apontar a porta que o servidor vai está "ouvindo";
