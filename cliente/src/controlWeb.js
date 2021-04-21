function ControlWeb($){
	this.mostrarInicio=function(){
		this.limpiar();
		var cadena='<div id="mostrarI">';
		cadena=cadena +'<h1>¡Bienvenid@ a Aprende ABN!</h1>';
		cadena=cadena +'<h3>Para comenzar cree una clase</h3>';
		cadena=cadena +'<h3>Si ya ha creado una pulse "Buscar Clase"</h3>';
		cadena=cadena+'<button type="button" id="btnCrearClase" class="btn btn-success  btn-lg">Crear Clase</button>';
		cadena=cadena +'<h4></h4>';
		cadena=cadena+'<button type="button" id="btnBuscarClase" class="btn btn-danger btn-lg">Buscar clase</button>';
		cadena=cadena +'</div>';
		$('#inicio').append(cadena);
		$('#btnCrearClase').on('click',function(){
			cw.mostrarCrearClase();
		});
		$('#btnBuscarClase').on('click',function(){
			ws.listaClases();
		});

	}
	this.listarClases=function(lista){
		this.limpiar();
		var cadena='<div id="mostrarLC">';
		
		cadena =cadena+ '<div class="list-group">';
		cadena=cadena +'<label for ="Clases">Clases:</label>';
		
		for(var i=0 ; i<lista.length;i++){
			cadena =cadena+ '<a href="#" value="'+lista[i].clase+'" class="list-group-item">Clase: '+lista[i].clase+'  Profesor:'+lista[i].profesor+'<span class="badge"> nº '+lista[i].participantes+'</span></a>';
		}
		cadena =cadena+ '</div>';
		cadena=cadena+'<button type="button" id="btnEntrarClase" class="btn btn-success btn-lg">Entrar</button>';
		cadena =cadena+ '</div>';
		$('#listarClases').append(cadena);

		var StoreValue = []; //Declare array
		$(".list-group a").click(function(){
			StoreValue = []; //clear array
			StoreValue.push($(this).attr("value")); // add text to array
		});

		$('#btnEntrarClase').on('click',function(){
			var nclase=StoreValue[0];
			ws.entrarClase(nclase);
		});
	}
	this.mostrarCrearClase=function(){
		this.limpiar();
		var cadena='<div id="mostrarCC">';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena +'<label for ="nclase">Nombre de la clase:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="nclase" placeholder="Escribe un nombre">';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label for ="profesor">Nombre del profesor:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="profesor" placeholder="Escribe el nombe del profesor de la clase">';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label for ="numero">Numero de participantes:</label>';
		cadena=cadena +'<input type="number" class="form-control" size="50" id="numero" min="1" max="40" placeholder="Numero de alumnos de la clase (1-40)">';
		cadena=cadena +'</div>';
		cadena=cadena+'<button type="button" id="btnCrearClase" class="btn btn-success">Crear Clase</button>';
		cadena=cadena +'</div>';
		$('#crearClase').append(cadena);
		$('#btnCrearClase').on('click',function(){
			var nclase=$('#nclase').val();
			var profesor=$('#profesor').val();
			var numero=$('#numero').val();
			if(nclase!=""){
				ws.crearClase(nclase,profesor,numero);
			}
		});

	}
	this.mostrarClase=function(){
		this.limpiar();
		var cadena='<div id="mostrarC">';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena+'<button type="button" id="btnRegistrarAlumno" class="btn btn-primary btn-lg">Registrar alumno</button>';
		cadena =cadena+ '</div>';
		cadena=cadena +'</div>';
		$('#registro').append(cadena);
		$('#btnRegistrarAlumno').on('click',function(){
			cw.registrarAlumno();
		});

	}
	this.registrarAlumno=function(){
		this.limpiar();
		var cadena='<div id="registrarA">';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena +'<label for ="nalumno">Nombre del alumno:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="nalumno" placeholder="Escribe el nombre del alumno">';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label for ="apellido">Apellido del alumno:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="apellido" placeholder="Escribe el apellido de el alumno">';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label for ="c">Curso: </label>';
		cadena=cadena +'<select name="curso" class="custom-select">';
		cadena=cadena +'<option selected> Elige el curso del alumno </option>';
		cadena=cadena +'<option value="3"> 3 Años </option>';
		cadena=cadena +'<option value="4"> 4 Años </option>';
		cadena=cadena +'<option value="5"> 5 Años </option>';
		cadena=cadena +'<option value="1"> 1º Primaria </option>';
		cadena=cadena +'</select>';
		cadena=cadena +'</div>';
		cadena=cadena+'<button type="button" id="btnRegistrarA" class="btn btn-success btn-lg">Registrar alumno</button>';
		cadena=cadena +'</div>';
		$('#registroA').append(cadena);

		$('#btnRegistrarA').on('click',function(){

			var nalumno=$('#nalumno').val();
			var apellido=$('#apellido').val();
			var curso=$('#curso').val();
			console.log(curso);
			if(nalumno!=""){
				ws.registrarAlumno(nalumno,apellido,curso);
			}
		});

	}
	this.listarAlumnos=function(lista){
		var cadena='<div id="mostrarLA">';
		
		cadena =cadena+ '<div class="list-group">';
		cadena=cadena +'<label for ="Clases">Alumnos:</label>';
		
		for(var i=0 ; i<lista.length;i++){
			cadena =cadena+ '<a href="#" value="'+lista[i].nombre+'" class="list-group-item">'+lista[i].nombre+' '+lista[i].apellidos+'</a>';
		}
		cadena =cadena+ '</div>';
		cadena=cadena+'<button type="button" id="btnComenzar" class="btn btn-success btn-lg">Comenzar</button>';
		cadena =cadena+ '</div>';
		$('#listarClases').append(cadena);
		$('#btnComenzar').on('click',function(){
			//cw.mostrarEjercicios();
		});
	}
	this.limpiar=function(){
		$('#mostrarCC').remove();
		$('#mostrarLC').remove();
		$('#mostrarLA').remove();
		$('#mostrarC').remove();
		$('#mostrarI').remove();
		$('#registrarA').remove();
	}
}
