var modelo =require("./modelo.js");
function ServidorWS(){ 
	this.enviarRemitente=function(socket,mens,datos){
        socket.emit(mens,datos);
    }
	this.enviarATodos=function(io,nombre,mens,datos){
        io.sockets.in(nombre).emit(mens,datos);
    }
    this.enviarATodosMenosRemitente=function(socket,nombre,mens,datos){
        socket.broadcast.to(nombre).emit(mens,datos)
    };
	this.enviarGlobal=function(socket,mens,datos){
        socket.broadcast.emit(mens,datos)
    };
    this.lanzarSocketSrv=function(io,app){
        var cli = this;
        io.on('connection',function(socket){
            socket.on('crearClase', function(nclase,profesor,numParticipantes) {
                var nclase=app.crearClase(nclase,profesor,numParticipantes); 
                console.log('El profesor: '+profesor+" ha creado una clase llamada: "+ nclase+" de "+numParticipantes+" participantes");
                socket.join(nclase);              
                cli.enviarRemitente(socket,"claseCreada",{"nclase":nclase,"profesor":profesor,"participantes":numParticipantes});
            });
            socket.on('listarClases', function(nclase) {
                var lista=app.listarClases();            
                cli.enviarRemitente(socket,"mostrarLista",lista);
            });
        });
    }
}
module.exports.ServidorWS=ServidorWS;