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
    this.lanzarSocketSrv=function(io,juego){
        
    }
}
module.exports.ServidorWS=ServidorWS;