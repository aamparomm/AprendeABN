var modelo=require("./modelo.js");

describe("Aplicación AprendeABN", function() {
	var abn;
	var nclase;
	var profesor;
	beforeEach(function(){
		abn = new modelo.ABN();
		nclase="CP José Prat 3A";
		profesor="Pedro Alfaro";

	});

	it("comprobar valores iniciales",function(){
		expect(abn).not.toBe(undefined);
		expect(Object.keys(abn.clases).length).toEqual(0);
		expect(nclase).toEqual("CP José Prat 3A");
		expect(profesor).toEqual("Pedro Alfaro");
	});

	it("comprobar restriccion de participantes de la clase",function(){
		var nclase=abn.crearClase(nclase,profesor,0);
		expect(nclase).toBe(undefined);
		nclase=abn.crearClase(nclase,profesor,13);
		expect(nclase).toBe(undefined);
	});

	it("comprobar que no se pueden crear dos clases con el mismo nombre",function(){
		var nc=abn.crearClase(nclase,profesor,4);
		expect(nc).not.toBe(undefined);
		var clase=abn.crearClase(nclase,profesor,8);
		expect(clase).toBe(undefined);
	});

	describe("El profesor crea una clase de 3 alumnos",function(){
		var nc;
		var anombre="Pepe";
		var aapellido="Lorenzo";
		beforeEach(function(){
			nc=abn.crearClase(nclase,profesor,3);
		});

		it("Comprobación de los valores de la clase",function(){
			expect(Object.keys(abn.clases).length).toEqual(1);
			var clase=abn.clases[nc];
			expect(clase).not.toBe(undefined);
			expect(clase.nombre).toEqual(nc);
			expect(clase.profesor).toEqual(profesor);
			expect(clase.numMax).toEqual(3);
			expect(clase.app).toEqual(abn);
			expect(Object.keys(clase.alumnos).length).toEqual(0);
		});

		it("Comprobación eliminar clase",function(){
			abn.eliminarClase(nc);
			expect(Object.keys(abn.clases).length).toEqual(0);
			var clase=abn.clases[nc];
			expect(clase).toBe(undefined);
			var error=abn.eliminarClase(nc);
			expect(error).toBe(undefined);
		});


		it("Comprobación entrar a clase",function(){
			abn.entrarClase(nc);
			var clase=abn.clases[nc];
			expect(clase).not.toBe(undefined);
			expect(clase.nombre).toEqual(nc);
			expect(clase.profesor).toEqual(profesor);
			expect(clase.numMax).toEqual(3);
			expect(clase.app).toEqual(abn);
			expect(Object.keys(clase.alumnos).length).toEqual(0);
		});

		it("Registro del alumno en la clase", function(){
			abn.registrarAlumno(anombre,aapellido,3,nc,1);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			expect(Object.keys(clase.alumnos).length).toEqual(1);
			expect(alumno.nombre).toEqual(anombre);
			expect(alumno.apellido).toEqual(aapellido);
			expect(alumno.curso).toEqual(3);
			expect(alumno.clase).toEqual(clase);
		});

		it("No se puede registrar un alumno con el mismo nombre (los datos del alumno no cambian)", function(){
			abn.registrarAlumno(anombre,aapellido,3,nc,1);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			abn.registrarAlumno(anombre,"Jiménez",4,nc,3);
			expect(alumno.nombre).toEqual(anombre);
			expect(alumno.apellido).toEqual(aapellido);
			expect(alumno.curso).toEqual(3);
			expect(alumno.clase).toEqual(clase);

			});

		it("Comprobación del máximo del registro", function(){
			var lista=abn.registrarAlumno(anombre,aapellido,3,nc,1);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			expect(Object.keys(clase.alumnos).length).toEqual(1);
			expect(lista).not.toBe(undefined);
			

			var lista=abn.registrarAlumno("Ana","Lopez",3,nc,2);
			var alumno1=clase.alumnos["Ana"];
			expect(Object.keys(clase.alumnos).length).toEqual(2);
			expect(lista).not.toBe(undefined);
			

			var lista=abn.registrarAlumno("Lucía","Arias",4,nc,3);
			var alumno2=clase.alumnos["Lucía"];
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			expect(lista).toBe(undefined);
			
			var lista=abn.registrarAlumno("Juan","Lucas",5,nc,4);
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			expect(lista).not.toBe(undefined);
			
		});

		it("Comprobación de los límites del registro", function(){
			abn.registrarAlumno(anombre,aapellido,3,nc,1);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			expect(Object.keys(clase.alumnos).length).toEqual(1);
			expect(alumno.nombre).toEqual(anombre);
			expect(alumno.apellido).toEqual(aapellido);
			expect(alumno.curso).toEqual(3);
			expect(alumno.clase).toEqual(clase);

			abn.registrarAlumno("Ana","Lopez",3,nc,2);
			var alumno1=clase.alumnos["Ana"];
			expect(Object.keys(clase.alumnos).length).toEqual(2);
			expect(alumno1.nombre).toEqual("Ana");
			expect(alumno1.apellido).toEqual("Lopez");
			expect(alumno1.curso).toEqual(3);
			expect(alumno1.clase).toEqual(clase);

			abn.registrarAlumno("Lucía","Arias",4,nc,3);
			var alumno2=clase.alumnos["Lucía"];
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			expect(alumno2.nombre).toEqual("Lucía");
			expect(alumno2.apellido).toEqual("Arias");
			expect(alumno2.curso).toEqual(4);
			expect(alumno2.clase).toEqual(clase);
			
			abn.registrarAlumno("Juan","Lucas",5,nc,4);
			var alumno3=clase.alumnos["Juan"];
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			expect(alumno3).toBe(undefined);
		});
		it("Eliminación del alumno de la clase", function(){
			abn.registrarAlumno(anombre,aapellido,3,nc,1);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			expect(Object.keys(clase.alumnos).length).toEqual(1);
			expect(alumno.nombre).toEqual(anombre);
			expect(alumno.apellido).toEqual(aapellido);
			expect(alumno.curso).toEqual(3);
			expect(alumno.clase).toEqual(clase);
			abn.eliminarAlumno(nc,anombre);
			expect(Object.keys(clase.alumnos).length).toEqual(0);

		});

		it("Funcionamiento del método comprobar alumnos", function(){
			abn.registrarAlumno(anombre,aapellido,3,nc,1);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			expect(Object.keys(clase.alumnos).length).toEqual(1);
			var res=abn.comprobarAlumnos(nc);
			expect(res).toEqual(0);

			abn.registrarAlumno("Ana","Lopez",3,nc,2);
			var alumno1=clase.alumnos["Ana"];
			expect(Object.keys(clase.alumnos).length).toEqual(2);
			var res=abn.comprobarAlumnos(nc);
			expect(res).toEqual(0);

			abn.registrarAlumno("Lucía","Arias",4,nc,3);
			var alumno2=clase.alumnos["Lucía"];
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			var res=abn.comprobarAlumnos(nc);
			expect(res).toEqual(1);
			
			abn.registrarAlumno("Juan","Lucas",5,nc,4);
			var alumno3=clase.alumnos["Juan"];
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			var res=abn.comprobarAlumnos(nc);
			expect(res).toEqual(1);
			expect(alumno3).toBe(undefined);

		});

	});

});