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
		cadena =cadena+ '</div>';
		$('#listarClases').append(cadena);
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
		cadena=cadena+'<button type="button" id="btnRegistrarAlumno" class="btn btn-primary">Registrar alumno</button>';
		cadena =cadena+ '</div>';
		cadena=cadena +'</div>';
		$('#registro').append(cadena);
		$('#btnRegistrarAlumno').on('click',function(){
		});

	}
	this.limpiar=function(){
		$('#mostrarCC').remove();
		$('#mostrarLC').remove();
		$('#mostrarC').remove();
		$('#mostrarI').remove();
	}
}
