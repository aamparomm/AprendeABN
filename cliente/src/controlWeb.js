function ControlWeb($){
	this.mostrarInicio=function(){
		this.limpiar();
		var cadena='<div id="mostrarI">';
		cadena=cadena +'<h1>¡Bienvenid@ a Aprende ABN!</h1>';
		cadena=cadena +'<h3>Para comenzar cree una clase</h3>';
		cadena=cadena +'<h3>Si ya ha creado una pulse "Buscar Clase"</h3>';
		cadena=cadena+'<button type="button" id="btnCrearClase" class="btn btn-success  btn-lg"><i class="fas fa-plus"></i> Crear Clase</button>';
		cadena=cadena +'<h4></h4>';
		cadena=cadena+'<button type="button" id="btnBuscarClase" class="btn btn-danger btn-lg"><i class="fas fa-search"></i> Buscar clase</button>';
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
		cadena=cadena+'<button type="button" id="btnEntrarClase" class="btn btn-success btn-lg center-block"><i class="fas fa-house-user"></i> Entrar</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
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
		$('#btnAtras').on('click',function(){
			cw.mostrarInicio();
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
		cadena=cadena+'<button type="button" id="btnCrearClase" class="btn btn-success btn-lg"><span class="fas fa-plus"></span> Crear Clase</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
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
		$('#btnAtras').on('click',function(){
			cw.mostrarInicio();
		});

	}
	this.mostrarClase=function(){
		this.limpiar();
		var cadena='<div id="mostrarC">';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena+'<button type="button" id="btnRegistrarAlumno" class="btn btn-primary btn-lg"><i class="fas fa-user-plus"></i> Registrar alumno</button>';
		cadena =cadena+ '</div>';
		cadena=cadena +'</div>';
		$('#registro').append(cadena);
		$('#btnRegistrarAlumno').on('click',function(){
			cw.registrarAlumno();
			cw.mostrarIcono();
		});	
	}

	this.mostrarIcono=function(){
		var cadena='<div id="mostrarIcono">';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena +'<label for ="icon">Icono: </label>';
		cadena=cadena +'</div>';
		cadena=cadena +'<button type="button" id="btnIcono" class="btn btn-light dropdown-toggle"data-toggle="dropdown"><img src="cliente/images/tigre.png"></img></button>';
		cadena=cadena +'<div class="dropdown-menu" id="list">';
		cadena=cadena +'<a class="dropdown-item" href="#"><img src="cliente/images/tigre.png"></img></a>';
		cadena=cadena +'<a class="dropdown-item" href="#"><img src="cliente/images/oso.png"></img></a>';
		cadena=cadena +'<a class="dropdown-item" href="#"><img src="cliente/images/koala.png"></img></a>';
		cadena=cadena +'<a class="dropdown-item" href="#"><img src="cliente/images/elefante.png"></img></a>';
		cadena=cadena +'</div>';
		//cadena=cadena+'<img src="cliente/images/tigre.png">';
		cadena=cadena +'</div>';
		cadena=cadena +'</div>';
		$('#iconoR').append(cadena);
		$('#btnIcono').on('click',function(){
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
		cadena=cadena +'<select class="form-control" id="curso" name="curso">';
		cadena=cadena +'<option value=""> Elige el curso del alumno </option>';
		cadena=cadena +'<option value="3"> 3 Años </option>';
		cadena=cadena +'<option value="4"> 4 Años </option>';
		cadena=cadena +'<option value="5"> 5 Años </option>';
		cadena=cadena +'<option value="1"> 1º Primaria</option>';
		cadena=cadena +'</select>';
		cadena=cadena +'</div>';
		cadena=cadena+'<button type="button" id="btnRegistrarA" class="btn btn-success btn-lg"> <i class="fas fa-user-plus"></i> Registrar alumno</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
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
		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});

	}
	this.listarAlumnos=function(lista){
		var cadena='<div id="mostrarLA">';
		
		cadena =cadena+ '<div class="list-group">';
		cadena=cadena +'<label for ="Clases">Alumnos:</label>';
		
		for(var i=0 ; i<lista.length;i++){
			cadena =cadena+ '<a href="#" value="'+lista[i].curso+'" class="list-group-item">'+lista[i].nombre+' '+lista[i].apellidos+'<span class="badge"> Curso: '+lista[i].curso+'º</span></a>';
		}
		cadena =cadena+ '</div>';
		cadena=cadena+'<button type="button" id="btnComenzar" class="btn btn-success btn-lg"><i class="fas fa-play"></i> Comenzar</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#listarClases').append(cadena);

		var StoreValue = []; //Declare array
		$(".list-group a").click(function(){
			StoreValue = []; //clear array
			StoreValue.push($(this).attr("value")); // add text to array
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarInicio();
		});

		$('#btnComenzar').on('click',function(){
			var curso=StoreValue[0];
			//cw.mostrarEjercicios(curso);
		});
	}
	this.limpiar=function(){
		$('#mostrarCC').remove();
		$('#mostrarLC').remove();
		$('#mostrarLA').remove();
		$('#mostrarC').remove();
		$('#mostrarI').remove();
		$('#registrarA').remove();
		$('#mostrarIcono').remove();
	}
}
