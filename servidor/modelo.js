function ABN(){
	//colección para guardar todas las clases que sean creadas y así que estas no se repitan
	this.clases={};
	//función para la creación de clases,para identificar las clases seránecesario
	//introducir el nombre de la clase, el profesor, y el número de Participantes.
	this.crearClase=function(nclase,profesor, numParticipantes){
		if(this.comprobarlimites(numParticipantes)){
			if(!this.clases[nclase]){
				this.clases[nclase]=new Clase(nclase,profesor,numParticipantes,this);
				profesor.clase=this.clases[nclase];
			}else{
				return undefined;
			}
		return nclase;	
		}

	}
	//Funcion para eliminar clases introduciendo su numbre
	this.eliminarClase=function(nclase){
		if(this.clases[nclase]){
			this.puedeEliminarClase(nclase);
			return nclase;
		}else{
			return undefined;
		}
	}

	this.puedeEliminarClase=function(nclase){
		delete this.clases[nclase];
	}
	//Se comprueban los límites de alumnos para la creación de clases
	//En este caso, el número mínimo de alumnos que pueden estar en una clase es 1,
	//y el número máximo de alumnos por clase es de 40
	this.comprobarlimites=function(num){
		return num<=12 && num>=1;
	} 

	//Función que devuelve una lista con la informacion de las clases que hayan sido creadas
	//Por cada una de las clases se retornarña el nombre de la clases, su profesor y el número máximo de alumnos
	this.listarClases=function(){
		var lista=[];
		for(i in this.clases){
			var clase=this.clases[i];
			var nombre=clase.nombre;
			var profesor=clase.profesor;
			var a=clase.numAlumnos();
			var num=clase.numMax;
			lista.push({"clase":nombre,"profesor":profesor,"participantes": num,"alumnos":a});
		}
		return lista;
	}

	//Se registra a el alumno en la lista de alumnos de la claseque tiene como identificador su nombre
	// se crea una lista para poder leer los datos de los alumnos que se encuentran en la clase determinada
	this.registrarAlumno=function(nombre, apellido, curso,nclase,icono){
		var lista=[];
		var alumno=[]
		var clase=this.clases[nclase];
		if(clase!=undefined && clase.comprobarMaximo()){
			alumno=clase.agregarAlumno(nombre,apellido,curso,icono);
			console.log(alumno);
			if(clase.igualMaximo()){
				return undefined;
			}	
		}else{
			console.log("No se puede registrar en la clase: clase ya definida o el cupo de la clase esta completo");
		}
		lista=clase.listarAlumnos();
		return lista;

	}
	//Método necesaria para poder eliminar a los alumnos de una determinada clase
	this.eliminarAlumno=function(nclase,nombre){
		var lista=[];
		lista=this.clases[nclase].eliminarAlumno(nombre);
		return lista;
	}

	//Función que permite entrar en una de las clases que ya hayan sido creadas
	this.entrarClase=function(nclase){
		var res=-1;
		if (this.clases[nclase]){
			res = 0;
			if(this.clases[nclase].numMax==this.clases[nclase].numAlumnos()){
				res=1;
			}	
		}
		return res;
	}
	
}

//Clase que incluye todas las funciones y atributos que ha de tener una clase
function Clase(nclase, profesor,num, ABN){
	this.nombre=nclase;
	this.profesor=profesor;
	this.numMax=num;
	this.app=ABN;
	this.alumnos={};

	//Función que devuelve la lista de alumnos que se encuentran en la clase 
	this.listarAlumnos=function(){
		let lista=[];
		for (var i in this.alumnos){
			var alumno=this.alumnos[i];
			var nombre= alumno.nombre;
			var apellido= alumno.apellido;
			var curso=alumno.curso;
			var icono=alumno.icono;
			lista.push({"nombre":nombre,"apellidos":apellido,"curso":curso,"clase":this.nombre,"icono": icono});
		}
		if (Object.keys(lista).length==0){
			lista.push({"nclase":this.nombre});
		}
		
		return lista;
	}
	 //Función que  añade un alumno a la clase
	this.agregarAlumno=function(nombre,apellido,curso,icono){
		let n=nombre;
		this.alumnos[n]=new Alumno(nombre,apellido,curso,icono);
		this.alumnos[n].clase=this;
		var a=this.alumnos[nombre];
		var nombre=a.nombre;
		var apellidos=a.apellido;
		var curso=a.curso;
		var icono = a.icono;
		if(curso==3){
			a.ejercicios[0]=new Ejercicio(31);
			a.ejercicios[1]=new Ejercicio(32);
		}else if(curso==4){
			a.ejercicios[0]=new Ejercicio(41);
			a.ejercicios[1]=new Ejercicio(42);
		}else if(curso==5){
			a.ejercicios[0]=new Ejercicio(51);
			a.ejercicios[1]=new Ejercicio(52);
		}else if(curso==1){
			a.ejercicios[0]=new Ejercicio(11);
			a.ejercicios[1]=new Ejercicio(12);	
		}
		return {"clase":this.nombre,"nombre":nombre,"apellidos":apellidos,"curso":curso,"id_Icono":icono};
	}

	this.eliminarAlumno=function(nombre){
		this.puedeEliminarAlumno(nombre);
		return {"clase":this.nombre,"nombre":nombre};
	}

	this.puedeEliminarAlumno=function(nombre){
		delete this.alumnos[nombre];
	}

	//Comprueba el número máximo de alumnos que puede haber en la clase
	this.comprobarMaximo=function(){
		return this.numAlumnos()<this.numMax;

	}
	//Comprueba si el número actual de alumnos es igual al número máximo de alumnos
	this.igualMaximo=function(){
		return this.numAlumnos()==this.numMax;

	}
	//Función que devuelve el número de alumnos que se encuentra en la clase
	this.numAlumnos=function(){
		var a=Object.keys(this.alumnos).length;
		return a;
	}
}

//Clase que incluye todas las funciones y atributos que ha de tener el Profesor
function Profesor(nombre,clase){
	this.nombre=nombre;
	this.clase=clase;

	// this.crearClase=function(nclase,numParticipantes){
	// 	return this.app.crearPartida(nclase,this,numParticipantes);
	// }
}

//Clase que incluye todas las funciones y atributos que ha de tener el ALumno
function Alumno(nombre, apellido, curso,idIcono){
	this.nombre=nombre;
	this.apellido=apellido;
	this.curso=curso;
	this.icono=idIcono;
	this.clase;
	this.ejercicios={};

}

function Ejercicio(num){
	this.num=num;
	this.comprobar31=function(){

	}
}
module.exports.ABN=ABN;
module.exports.Profesor=Profesor;
module.exports.Alumno=Alumno;