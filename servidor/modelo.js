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
		var lista=[];
		for(i in this.clases){
			var clase=this.clases[i];
			var nombre=clase.nombre;
			var profesor=clase.profesor;
			var num=clase.numMax;
			lista.push({"clase":nombre,"profesor":profesor,"participantes": num});
		}
		return lista;
	}

	//Se registra a el alumno en la lista de alumnos de la claseque tiene como identificador su nombre
	// se crea una lista para poder leer los datos de los alumnos que se encuentran en la clase determinada
	this.registrarAlumno=function(nombre, apellido, curso,nclase){
		var lista=[];
		var alumno=[]
		var clase=this.clases[nclase];
		if(clase!=undefined && clase.comprobarMaximo()){
			alumno=clase.agregarAlumno(nombre,apellido,curso);
			console.log(alumno);	
		}else{
			console.log("No se puede registrar en la clase: clase ya definida o el cupo de la clase esta completo");
		}
		lista=clase.listarAlumnos();
		return lista;

	}

	this.entrarClase=function(nclase){
		var res=-1;
		if (this.clases[nclase]){
			res = 0;	
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
			lista.push({"nombre":nombre,"apellidos":apellido,"curso":curso,"clase":this.nombre});
		}
		
		return lista;
	}
	this.agregarAlumno=function(nombre,apellido,curso){
		let n=nombre;
		this.alumnos[n]=new Alumno(nombre,apellido,curso);
		this.alumnos[n].clase=this;
		var a=this.alumnos[nombre];
		var nombre=a.nombre;
		var apellidos=a.apellido;
		var curso=a.curso;
		return {"clase":this.nombre,"nombre":nombre,"apellidos":apellidos,"curso":curso};

	}
	this.comprobarMaximo=function(){
		return this.numAlumnos()<this.numMax;

	}
	this.numAlumnos=function(){
		return Object.keys(this.alumnos).length;
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
function Alumno(nombre, apellido, curso){
	this.nombre=nombre;
	this.apellido=apellido;
	this.curso=curso;
	this.clase;

}
module.exports.ABN=ABN;
module.exports.Profesor=Profesor;
module.exports.Alumno=Alumno;