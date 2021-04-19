function ABN(){
	//colección para guardar todas las clases que sean creadas y así que estas no se repitan
	this.clases={};
	//función para la creación de clases,para identificar las clases seránecesario
	//introducir el nombre de la clase, el profesor, y el número de Participantes.
	this.crearClase=function(nclase,profesor, numParticipantes){
		if(this.comprobarlimites(numParticipantes)){
			if(!this.clases[nclase]){
				this.clases[nclase]=new Clase(nclase,profesor,numParticipantes,this);
				profesor.clase=this.clase[nclase];
			}
		return nclase;	
		}

	}
	//Se comprueban los límites de alumnos para la creación de clases
	//En este caso, el número mínimo de alumnos que pueden estar en una clase es 1,
	//y el número máximo de alumnos por clase es de 40
	this.comprobarlimites=function(num){
		return num<=40 && num>=1;
	}
	this.listarClases=function(){
		var lsta=[];
		for(i in this.clases){
			var clase=this.clases[i];
			var nombre=clase.nombre;
			var profesor=clase.profesor;
			lista.push({"Clase:":nombre,"Profesor:":profesor});
		}
	}

	this.registrarAlumno=function(){

	}
	
}
function Clase(nombre, profesor,num, ABN){
	this.nombre=nombre;
	this.profesor=profesor;
	this.numMax=num;
	this.app=ABN;
}
function Profesor(nombre,clase){
	this.nombre=nombre;
	this.clase=clase;

	this.crearPartida=function(nclase,numParticipantes){
		return this.app.crearPartida(nclase,this,numParticipantes);
	}
}
function Alumno(nombre, apellido, curso, clase){
	this.nombre=nombre;
	this.clase=clase;
	this.apellido=apellido;
	this.curso=curso;

}
module.exports.ABN=ABN;
module.exports.Profesor=Profesor;
module.exports.Alumno=Alumno;