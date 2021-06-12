function ClienteWS(){
	this.socket=undefined;
	this.nclase=undefined;
	this.profesor=false;

	this.ini=function(){
		this.socket=io.connect();
		this.lanzarSocketSrv();
	}
	this.crearClase=function(nclase, profesor,numParticipantes){
		this.nclase=nclase;
		this.socket.emit("crearClase",nclase,profesor,numParticipantes);
	}
	this.listaClases=function(){
		this.socket.emit("listarClases");
	}
	this.registrarAlumno=function(nombre,apellido,curso,icono){
		console.log(this.nclase);
		this.socket.emit("registrarAlumno",nombre,apellido,curso,this.nclase,icono);

	}
	this.listarAlumnos=function(){
		this.socket.emit("listarAlumnos",this.nclase);
	}
	this.entrarClase=function(nclase){
		this.nclase=nclase;
		this.socket.emit("entrarClase",nclase);
	}
	this.mostrarEjercicios=function(curso){
		this.socket.emit("mostrarEjercicios",curso);
	}
	this.lanzarSocketSrv=function(){
		var cli=this;
		this.socket.on('connect',function(){
			console.log("Conectado al servidor de WS");
		});
		this.socket.on("claseCreada",function(data){
			cli.nclase=data.nclase;
			console.log(data);
			if(data.nclase!=undefined){
				cli.profesor=true;
				cw.mostrarClase(data.nclase);
				ws.listarAlumnos();
			}else{
				console.log("La clase no se ha creado correctamente: es indefinida");
			}
		});
		this.socket.on("mostrarLista",function(lista){
			console.log(lista);
			cw.listarClases(lista);
		});
		this.socket.on("mostrarAlumnos",function(lista){
			console.log(lista);
			cw.listarAlumnos(lista);
		});
		this.socket.on("alumnoRegistrado",function(lista){
			//console.log(lista);
			ws.listarAlumnos();
			cw.mostrarClase();
			
		});
		this.socket.on("entrarClase",function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});
		this.socket.on("mostrar3",function(){
			cw.mostrarEjercicios3();
		});
		this.socket.on("mostrar4",function(){
			cw.mostrarEjercicios4();
		});
		this.socket.on("mostrar5",function(){
			cw.mostrarEjercicios5();
		});
		this.socket.on("mostrar1",function(){
			cw.mostrarEjercicios1();
		});
		
	}
	this.ini();
}