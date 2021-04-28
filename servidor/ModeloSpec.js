var modelo=require("./modelo.js");

describe("Aplicación AprendeABN", function() {
	var abn;
	var nclase;
	var profesor;
	beforeEach(function(){
		abn = new modelo.ABN();
		nclase="CP José Prat 3A";
		profesor="Pedro Alfaro"

	});

	it("comprobar valores iniciales",function(){
		expect(abn).not.toBe(undefined);
		expect(Object.keys(abn.clases).length).toEqual(0);
		expect(nclase).toEqual("CP José Prat 3A");
		expect(profesor).toEqual("Pedro Alfaro");
	});

	it("comprobar restriccion de participantes de la clase",function(){
		var nclase=abn.crearClase(nclase,profesor,0);
		expect(nclase).toEqual(undefined);
		nclase=abn.crearClase(nclase,profesor,41);
		expect(nclase).toEqual(undefined);
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
			abn.registrarAlumno(anombre,aapellido,3,nc);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			expect(Object.keys(clase.alumnos).length).toEqual(1);
			expect(alumno.nombre).toEqual(anombre);
			expect(alumno.apellido).toEqual(aapellido);
			expect(alumno.curso).toEqual(3);
			expect(alumno.clase).toEqual(clase);
		});

		it("Comprobación de los límites del registro", function(){
			abn.registrarAlumno(anombre,aapellido,3,nc);
			var clase=abn.clases[nc];
			var alumno=clase.alumnos[anombre];
			expect(Object.keys(clase.alumnos).length).toEqual(1);
			expect(alumno.nombre).toEqual(anombre);
			expect(alumno.apellido).toEqual(aapellido);
			expect(alumno.curso).toEqual(3);
			expect(alumno.clase).toEqual(clase);

			abn.registrarAlumno("Ana","Lopez",3,nc);
			var alumno1=clase.alumnos["Ana"];
			expect(Object.keys(clase.alumnos).length).toEqual(2);
			expect(alumno1.nombre).toEqual("Ana");
			expect(alumno1.apellido).toEqual("Lopez");
			expect(alumno1.curso).toEqual(3);
			expect(alumno1.clase).toEqual(clase);

			abn.registrarAlumno("Lucía","Arias",3,nc);
			var alumno2=clase.alumnos["Lucía"];
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			expect(alumno2.nombre).toEqual("Lucía");
			expect(alumno2.apellido).toEqual("Arias");
			expect(alumno2.curso).toEqual(3);
			expect(alumno2.clase).toEqual(clase);
			
			abn.registrarAlumno("Juan","Lucas",3,nc);
			var alumno3=clase.alumnos["Juan"];
			expect(Object.keys(clase.alumnos).length).toEqual(3);
			expect(alumno4).toBe(undefined);
		});

	});

});