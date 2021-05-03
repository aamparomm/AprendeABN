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
		cadena=cadena +'<h1>'+lista[0].clase+'</h1>';
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
			cw.mostrarEjercicios(curso);
		});
	}
	this.mostrarEjercicios=function(curso){
		if(curso==3){
			cw.mostrarEjercicios3();
		}else if(curso==4){
			cw.mostrarEjercicios4();
		}else if(curso==5){
			cw.mostrarEjercicios5();
		}else if(curso==1){
			cw.mostrarEjercicios1();
		}
	}
	this.mostrarEjercicios3=function(){
		this.limpiar();
		var cadena='<div id="mostrar3">';
		cadena=cadena +'<h1>EJERCICIOS DE 3 AÑOS</h1>';
		cadena=cadena +'<h3>Identificación de números</h3>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/2.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<label style="margin-right: 400px">1 al 3</label>';
		cadena=cadena +'<label style="margin-left: 200px ">1 al 6</label>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});
	}
	this.mostrarEjercicios4=function(){
		this.limpiar();
		var cadena='<div id="mostrar4">';
		cadena=cadena +'<h1>EJERCICIOS DE 4 AÑOS</h1>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/recta.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/arcoiris.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<label style="margin-right: 80px">Recta numérica</label>';
		cadena=cadena +'<label style="margin-left: 250px">Amigos del 10</label>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});

	}
	this.mostrarEjercicios5=function(){
		this.limpiar();
		var cadena='<div id="mostrar5">';
		cadena=cadena +'<h1>EJERCICIOS DE 5 AÑOS</h1>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/s5.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/r5.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<label style="margin-right: 200px">Suma</label>';
		cadena=cadena +'<label style="margin-left: 200px ">Resta</label>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});

	}
	this.mostrarEjercicios1=function(){
		this.limpiar();
		var cadena='<div id="mostrar1">';
		cadena=cadena +'<h1>EJERCICIOS DE 1º PRIMARIA</h1>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/suma.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/resta.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<label style="margin-right: 120px">Suma</label>';
		cadena=cadena +'<label style="margin-left: 120px ">Resta</label>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);

		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
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
		$('#mostrar3').remove();
		$('#mostrar4').remove();
		$('#mostrar5').remove();
		$('#mostrar1').remove();
	}

}
