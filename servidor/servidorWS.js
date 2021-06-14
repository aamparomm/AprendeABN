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
                if(nclase!=undefined){
                    console.log('El profesor: '+profesor+" ha creado una clase llamada: "+ nclase+" de "+numParticipantes+" participantes");
                    socket.join(nclase);              
                    cli.enviarRemitente(socket,"claseCreada",{"nclase":nclase,"profesor":profesor,"participantes":numParticipantes});
                }else{
                    cli.enviarRemitente(socket,"claseCreada",{"nclase":nclase});
                }
                
            });
            socket.on('eliminarClase', function(nclase) {
                var nclase=app.eliminarClase(nclase); 
                if(nclase!=undefined){
                    console.log("Se ha eliminado la clase "+nclase+"");              
                    cli.enviarRemitente(socket,"claseEliminada",nclase);
                }
                
            });
            socket.on('listarClases', function() {
                var lista=app.listarClases();            
                cli.enviarRemitente(socket,"mostrarLista",lista);
            });
            socket.on('registrarAlumno', function(nombre,apellido,curso,clase,icono) {
                var lista=app.registrarAlumno(nombre,apellido,curso,clase,icono);
                console.log('El alumno: '+nombre+" del curso: "+ curso+" ha sido registrado en la clase"+clase);           
                cli.enviarRemitente(socket,"alumnoRegistrado",lista);
            });
            socket.on('eliminarAlumno', function(nombre,nclase) {
                var lista=app.eliminarAlumno(nclase,nombre);
                console.log('El alumno: '+nombre+"ha sido eliminado de la clase"+nclase);           
                cli.enviarRemitente(socket,"alumnoEliminado",lista);
            });
            socket.on('listarAlumnos', function(nclase) {
                var lista=app.clases[nclase].listarAlumnos();            
                cli.enviarRemitente(socket,"mostrarAlumnos",lista);
            });
            socket.on('entrarClase', function(nclase) {
                var res=app.entrarClase(nclase);
                console.log(res);
                if(res!=-1){
                    cli.enviarRemitente(socket,"entrarClase",res);
                }
                
            });
            socket.on('mostrarEjercicios', function(curso) {
                if(curso==3){
                    cli.enviarRemitente(socket,"mostrar3");
                }else if(curso==4){
                    cli.enviarRemitente(socket,"mostrar4");
                }else if(curso==5){
                    cli.enviarRemitente(socket,"mostrar5");
                }else if(curso==1){
                    cli.enviarRemitente(socket,"mostrar1");
                }            
            });
            
        });
    }
}
module.exports.ServidorWS=ServidorWS;