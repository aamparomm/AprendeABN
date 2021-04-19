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

		}

	}
	//Se comprueban los límites de alumnos para la creación de clases
	//En este caso, el número mínimo de alumnos que pueden estar en una clase es 1,
	//y el número máximo de alumnos por clase es de 40
	this.comprobarlimites=function(num){
		return num<=40 && num>=1;
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

}
function Alumno(nombre, apellido, curso, clase){
	this.nombre=nombre;
	this.clase=clase;
	this.apellido=apellido;
	this.curso=curso;

	this.crearClase=function(){
	}

}
module.exports.ABN=ABN;