function ControlWeb($){

	const acierto=new Audio('/cliente/images/audio/acierto.mp3');
	const fallo=new Audio('/cliente/images/audio/fallo.mp3');
	const musica=new Audio('/cliente/images/audio/musica.mp3');
	var ms=0;
	const bien="¡Enhorabuena, has acertado! <i style='color:#00893f' class='far fa-laugh-beam fa-2x'></i>";
	const mal="Ohhh, has fallado, intentalo otra vez <i style='color:#ff0000' class='far fa-frown fa-2x'></i>";
	var ce=0;
	//Sirve para mostrar ´las distintas opciones de configuración por pantalla
	//En este caso se podrá mostrar información sobre la página web, activar la música,cambiar el color de fondo
	//y dirigirnos a otra página web que nos muestra las instrucciones de la aplicación.
	this.configuracion=function(){
		var cadena='<div id="config">';
		
		cadena=cadena +'<div class="dropdown" style="position:relative">';
		cadena=cadena +'<a href="#" class="btn btn-config dropdown-toggle" data-toggle="dropdown"><i class="fas fa-cog"></i></a>';
		cadena=cadena +'<ul class="dropdown-menu" id="conf">';
		cadena=cadena +'<li>';
		cadena=cadena+'<li><a href="#" value="1"><i class="fas fa-user-friends"></i> Sobre nosotros</a></li>';
		cadena=cadena+'<li><a href="#" value="2"><i class="fas fa-music"></i> Música</a></li>';
		cadena=cadena +'<li><a class="trigger right-caret"><i class="fas fa-image"></i> Fondo</a>';
		cadena=cadena +'<ul class="dropdown-menu sub-menu" id="fondo">';
		cadena=cadena +'<li><a href="#" value="white">Blanco</a></li>';
		cadena=cadena +'<li><a href="#" value="#EBF5FB">Azul</a></li>';
        cadena=cadena+'<li><a href="#" value="#F2D7D5">Rosa</a></li>';
        cadena=cadena+'<li><a href="#" value="imagen">Dibujo</a></li>';
        cadena=cadena+'</ul></li>';
        cadena=cadena+'<li><a href="../cliente/ayuda.html"><i class="fas fa-question"></i> Ayuda</a></li>';
    	cadena=cadena+'</ul>';
		cadena=cadena+'</div>';
		cadena=cadena+'</div>';
		$('#conf').append(cadena);

		$(".dropdown-menu > li > a.trigger").on("click",function(e){
        var current=$(this).next();
        if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        	current.toggle();
        	e.stopPropagation();
        });

    	$(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
        	var root=$(this).closest('.dropdown');
        	root.find('.left-caret').toggleClass('right-caret left-caret');
        	root.find('.sub-menu:visible').hide();
    	});

    	var StoreValue = []; //Declare array
    	var StoreValue2 = []; 
		$(".dropdown-menu > li > a").click(function(){
			StoreValue = []; //clear array
			StoreValue.push($(this).attr("value")); // add text to array
		});
		$(".dropdown-menu .sub-menu > li > a").click(function(){
			StoreValue2 = []; //clear array
			StoreValue2.push($(this).attr("value")); // add text to array
		});

    	$('#conf > li > a').click(function () {
			var num =StoreValue[0];
			if(num==1){	
				msg="<p style='text-align:justify'> Esta aplicación fue implementada para dar soporte al método ABN en etapas tempranas de aprendizaje. Así pues esta aplicación forma parte de un Trabajo de fin de Grado realizado durante el curso 2020/2021 en la Escuela superior de ingeniería informática de Albacete, UCLM."
				msg=msg+" Aprende ABN es una pagina web creada y diseñada por Amparo Martínez Martínez, estudiante de cuarto curso de la ESIIAB.</p><br>";
				msg=msg+"<img src='cliente/images/uclm.png' width='200px' height='135px'></img><br>";
				cw.mostrarModal(msg);
			}
			if(num==2){
				ms++;
				if((ms%2)==1){
					musica.loop=true;
					musica.play();
				}else{
					musica.pause();
				}
				console.log(ms);
			}
		});

		$('#fondo > li > a').click(function () {
			var color =StoreValue2[0];
			console.log(color);
			cw.cambiarFondo(color);
		});


	}

	//Funcion que permite cambiar el fondo del body de la página
	this.cambiarFondo=function(color){
		console.log(color);
		var body=document.getElementById("body");
		var encabezado=document.getElementById("encabezado");
		console.log(body);
		if(color=="white"){
			body.style.background=color;
			encabezado.style.background="#28A69B";
		}else if(color=="#EBF5FB"){
			body.style.background=color;
			encabezado.style.background="#7FB3D5";
		}else if(color=="#F2D7D5"){
			body.style.background=color;
			encabezado.style.background="#EA899A";
			encabezado.style.color="#ffffff";
		}else{
			body.style.backgroundImage= "url(cliente/images/bc.jpg)";
			encabezado.style.background="#28A69B";
		}
		
	}

	//Interfaz de inicio don de se da la opción la creación o la búsqueda de clase.
	this.mostrarInicio=function(){
		this.limpiar();
		var cadena='<div id="mostrarI">';
		cadena=cadena +'<h1>¡Bienvenid@ a Aprende ABN!</h1>';
		cadena=cadena +'<h3>Para comenzar cree una clase</h3>';
		cadena=cadena +'<h3>Si ya ha creado una pulse "Buscar Clase"</h3>';
		cadena=cadena + '<h3>Para eliminar una clase ya creada pulse "Crear/Eliminar Clase"</h3>';
		cadena=cadena+'<button type="button" id="btnCrearClase" class="btn btn-blue  btn-lg"><i class="fas fa-plus"></i> Crear/Eliminar Clase</button>';
		cadena=cadena +'<h4></h4>';
		cadena=cadena+'<button type="button" id="btnBuscarClase" class="btn btn-danger btn-lg"><i class="fas fa-search"></i> Buscar clase</button>';
		cadena=cadena+'<br>';
		cadena=cadena +'</div>';
		$('#inicio').append(cadena);
		$('#btnCrearClase').on('click',function(){
			cw.mostrarCrearClase();
		});
		$('#btnBuscarClase').on('click',function(){
			ws.listaClases();
		});

	}

	//Función necesaria para mostrar la lista de clases que han sido creadas y poder entrar en una de ellas
	this.listarClases=function(lista){
		this.limpiar();
		var cadena='<div id="mostrarLC">';
		cadena =cadena+ '<div class="list-group">';
		cadena=cadena+'<div class="input-group">';
		cadena=cadena+'<input type="text" class="form-control" placeholder="Busca aqui tu clase (sensible a mayusculas y minisculas)" id="search">';
		cadena=cadena+'<div class="input-group-btn">';
		cadena=cadena+'<button class="btn btn-default" type="submit" id="btnSearch">';
		cadena=cadena+'<i class="fas fa-search"></i></button></div></div>';
		cadena=cadena+'<p></p>';
		cadena=cadena +'<label for ="Clases">Clases:</label>';
		
		for(var i=0 ; i<lista.length;i++){
			cadena =cadena+ '<a style= "font-size:large;" href="#" value="'+lista[i].clase+'" class="list-group-item">'+lista[i].clase+'<span class="badge"> '+lista[i].alumnos+'/'+lista[i].participantes+'</span></a>';
		}
		cadena =cadena+ '</div>';
		cadena=cadena+'<button type="button" id="btnEntrarClase" class="btn btn-blue btn-lg center-block"><i class="fas fa-house-user"></i> Entrar</button>';
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
		$('#btnSearch').on('click',function(){
			var search=$('#search').val();
			cw.search(lista,search);
		});
	}

	this.search=function(lista,search){
		this.limpiar();
		var cadena='<div id="mostrarsearch">';
		
		cadena =cadena+ '<div class="list-group">';
		cadena=cadena+'<div class="input-group">';
		cadena=cadena+'<input type="text" class="form-control" placeholder="Busca aqui tu clase (sensible a mayusculas y minisculas)" id="search">';
		cadena=cadena+'<div class="input-group-btn">';
		cadena=cadena+'<button class="btn btn-default" type="submit" id="btnSearch">';
		cadena=cadena+'<i class="fas fa-search"></i></button></div></div>';
		cadena=cadena+'<p></p>';
		cadena=cadena +'<label for ="Clases">Clases:</label>';
		
		for(var i=0 ; i<lista.length;i++){
			if(lista[i].clase.includes(search)){
				cadena =cadena+ '<a style= "font-size:large;" href="#" value="'+lista[i].clase+'" class="list-group-item">'+lista[i].clase+'<span class="badge"> '+lista[i].alumnos+'/'+lista[i].participantes+'</span></a>';
			}
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
		$('#btnSearch').on('click',function(){
			var search=$('#search').val();
			cw.search(lista,search);
		});

	}

	//Función necesaria para recoger los valores que permitirán que se cree una nueva clase
	//Es la interfaz principal para la creación de clase : nombre, profesor, y num participantes
	this.mostrarCrearClase=function(){
		this.limpiar();
		var cadena='<div id="mostrarCC">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena +'<label class="pull-left" for ="nclase">Nombre de la clase:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="nclase" placeholder="Escribe un nombre">';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label class="pull-left"  for ="profesor">Nombre del profesor:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="profesor" placeholder="Escribe el nombe del profesor de la clase">';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label class="pull-left"  for ="numero">Numero de participantes:</label>';
		cadena=cadena +'<input type="number" class="form-control" size="50" id="numero" min="1" max="12" placeholder="Numero de alumnos de la clase (1-12)">';
		cadena=cadena +'</div>';
		cadena=cadena+'<button type="button" id="btnCrearClase" class="btn btn-success btn-lg" style="margin: 20px"><span class="fas fa-plus"></span> Crear Clase</button>';
		cadena=cadena+'<button type="button" id="btnEliminarClase" class="btn btn-danger btn-lg" style="margin: 20px"><i class="fas fa-times"></i> Eliminar Clase</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right" style="margin: 20px"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena=cadena +'</div>';
		$('#crearClase').append(cadena);
		$('#btnCrearClase').on('click',function(){
			var nclase=$('#nclase').val();
			var profesor=$('#profesor').val();
			var numero=$('#numero').val();
			if(nclase!="" && profesor!="" && numero!=""){
				ws.crearClase(nclase,profesor,numero);
			}
				
		});
		$('#btnEliminarClase').on('click',function(){
			var nclase=$('#nclase').val();
			if(nclase!=""){
				cw.confirmacionClase(nclase);
			}
		});
		$('#btnInfo').on('click',function(){
			var msg="Para poder completar el registro de la clase con éxito será necesario rellenar todos los campos que se muestran.";
			msg=msg+"<p>No se podrá crear una clase con más de 12 alumnos y tampoco se creará la clase si ya exite una clase con dicho nombre.</p>";
			msg=msg+"<img src='cliente/images/ayuda/clases1.png' width='700' height='350'></img><p></p>";
			msg=msg+"<p>Para eliminar una de las clases simplemente hay que introducir el nombre exacto de la clase y despues clicar en eliminar</p>";
			msg=msg+"<img src='cliente/images/ayuda/eliminar.png' width='700' height='350'></img><p></p>";
			cw.mostrarModal(msg);
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarInicio();
		});

	}

	//Función que  que muestra el boton necesario para acceder a la interfaz de registro de el alumno
	//es parte de la interfaz de la información sobre la clase
	this.mostrarClase=function(){
		var cadena='<div id="mostrarC">';
		cadena=cadena+'<button type="button" id="btnRegistrarAlumno" class="btn btn-primary btn-lg"><i class="fas fa-user-plus"></i> Registrar alumno</button>';
		cadena=cadena +'</div>';
		$('#registro').append(cadena);
		$('#btnRegistrarAlumno').on('click',function(){
			var lista=["","","","Curso"];
			cw.registrarAlumno(0,lista);
		});	
	}

	//Interfaz necesaria para registrar toda la información sobre el alumno
	this.registrarAlumno=function(num,lista){
		this.limpiar();
		var cadena='<div id="registrarA">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena +'<label class="pull-left" for ="nalumno">Nombre del alumno:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="nalumno" value="'+lista[0]+'" placeholder='+lista[0]+'>';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label class="pull-left" for ="apellido">Apellido del alumno:</label>';
		cadena=cadena +'<input type="text" class="form-control" size="50" id="apellido" value="'+lista[1]+'" placeholder='+lista[1]+'>';
		cadena=cadena +'</div>';
		cadena =cadena+'<div class="form-group">';
		cadena=cadena +'<label class="pull-left" for ="c">Curso: </label>';
		cadena=cadena +'<select class="form-control" id="curso" name="curso">';
		cadena=cadena +'<option value="'+lista[2]+'"> '+lista[2]+' '+lista[3]+'</option>';
		cadena=cadena +'<option value="3"> 3 Años </option>';
		cadena=cadena +'<option value="4"> 4 Años </option>';
		cadena=cadena +'<option value="5"> 5 Años </option>';
		cadena=cadena +'<option value="1"> 1º Primaria</option>';
		cadena=cadena +'</select>';
		cadena=cadena +'</div>';
      	//cadena=cadena +'<button id="btnIcono" type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown"><img src="cliente/images/avatar/'+num+'.png" ></img></button>';
		cadena=cadena+'<button type="button" id="btnRegistrarA" class="btn btn-blue btn-lg"> <i class="fas fa-user-plus"></i> Registrar alumno</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena=cadena +'</div>';
		var cadena2 = '<div id="mostrarIcono" style="margin-bottom: 25px;"><label>Icono:</label>';
      	cadena2=cadena2 +'<button id="btnIcono"  type="button" class="btn btn-light btn-lg dropdown-toggle" data-toggle="dropdown"><img src="cliente/images/avatar/'+num+'.png" width="150" height="150"></img></button>';
		cadena2=cadena2 +'</div>';
		$('#registroA').append(cadena);
		$('#iconoR').append(cadena2);
		$('#btnRegistrarA').on('click',function(){

			var nalumno=$('#nalumno').val();
			var apellido=$('#apellido').val();
			var curso=$('#curso').val();
			if(nalumno!="" && apellido !="" && curso!="" ){
				ws.registrarAlumno(nalumno,apellido,curso,num);
			}
		});
		$('#btnIcono').on('click',function(){
			num++;
			var lista=[];
			lista[0]=$('#nalumno').val();
			lista[1]=$('#apellido').val();
			lista[2]=$('#curso').val();
			if (lista[2]==1){
				lista[3]="º Primaria";
			}else if(lista[2]==3 ||lista[2]==4||lista[2]==5){
				lista[3]="Años";
			}else{
				lista[3]="Curso";
			}
			cw.registrarAlumno(num%12,lista);
		});
		$('#btnAtras').on('click',function(){
			ws.comprobarAlumnos();
		});
		$('#btnInfo').on('click',function(){
			var msg="Para poder completar el registro del alumno con éxito será necesario rellenar todos los campos que se muestran.<br>";
			msg=msg+"<img src='cliente/images/ayuda/registro2.png' width='700' height='350'></img><p></p>";
			msg=msg+"<p>Para cambiar el avatar del alumno simplemente hay que clicar sobre dicho icono</p>";
			msg=msg+"<img src='cliente/images/ayuda/registro3.png' width='700' height='350'></img><p></p>";
			msg=msg+"<p>Si se repite el nombre de los alumnos se mostrará un mensaje de error</p>";
			msg=msg+"<img src='cliente/images/ayuda/registro5.png' width='700' height='350'></img><p></p>";
			cw.mostrarModal(msg);
		});

	}

	//Interfaz donde se listan todos los alumnos de una misma clase 
	this.listarAlumnos=function(lista){
		var cadena='<div id="mostrarLA">';
		if(lista[0].nombre!=undefined){
			cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
			cadena=cadena +'<h1>'+lista[0].clase+'</h1>';
			cadena =cadena+ '<div class="list-group" >';
			cadena=cadena +'<label for ="Clases">Alumnos:</label>';
			for(var i=0 ; i<lista.length;i++){
				cadena =cadena+ '<a  href="#" id="'+lista[i].nombre+'" value="'+lista[i].curso+'" class="list-group-item"> <img src="cliente/images/avatar/'+lista[i].icono+'.png" width="50" height="50" align="left" ></img><p></p>'+lista[i].nombre+' '+lista[i].apellidos+'<span style= "font-size: large;"class="badge" > Curso: '+lista[i].curso+'º</span></a>';
			}	
			cadena =cadena+ '</div>';
			cadena=cadena+'<button type="button" id="btnComenzar" class="btn btn-success btn-lg" style="margin-left: 50px"><i class="fas fa-play"></i> Comenzar</button>';
			cadena=cadena+'<button type="button" id="btnEliminar" class="btn btn-danger btn-lg" style="margin-left: 50px"><i class="fas fa-times"></i> Eliminar</button><p></p>';
			cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
			cadena =cadena+ '</div>';
			$('#listarClases').append(cadena);

			var StoreValue = [];
			$(".list-group a").click(function(){
				StoreValue = []; //clear array
				StoreValue.push($(this).attr("value"));
				StoreValue.push($(this).attr("id"));
			});

			$('#btnAtras').on('click',function(){
				cw.mostrarInicio();
			});
			$('#btnEliminar').on('click',function(){
				var nombre=StoreValue[1];
				cw.limpiarModal();
				cw.confirmacion(nombre);
				//ws.eliminarAlumno(nombre);
			});

			$('#btnComenzar').on('click',function(){
				var curso=StoreValue[0];
				ws.mostrarEjercicios(curso);
			});

			$('#btnInfo').on('click',function(){
			cw.limpiarModal();
			var msg="Para poder registrar a un alumno simplemente pulse en el botón de 'Registrar alumno.'";
			msg=msg+"<img src='cliente/images/ayuda/registro1.png'width='700' height='350'></img><p></p>";
			msg=msg+"<p>Para comenzar con las actividades de un alumno seleccione a uno de los alumnos de la lista y pulse 'Comenzar'</p>";
			msg=msg+"<img src='cliente/images/ayuda/ejercicios.png' width='700' height='350'></img><p></p>";
			msg=msg+"<p>Para eliminar a uno de los alumnos de la clase seleccione a uno de los alumnos de la lista y pulse 'Eliminar'</p>";
			msg=msg+"<img src='cliente/images/ayuda/registro6.png' width='700' height='350'></img><p></p>";
			cw.mostrarModal(msg);
		});
		}else{
			cadena=cadena+'<h1><button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button> </h1>';
			cadena=cadena +'<h1>'+lista[0].nclase+'</h1>';
			cadena =cadena+ '<div class="list-group" >';
			cadena=cadena +'<label for ="Clases">Alumnos:</label>';
			cadena =cadena+ '</div>';
			cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
			cadena =cadena+ '</div>';
			$('#listarClases').append(cadena);
			$('#btnAtras').on('click',function(){
				cw.mostrarInicio();
			});

			$('#btnInfo').on('click',function(){
			cw.limpiarModal();
			var msg="Para poder registrar a un alumno simplemente pulse en el botón de 'Registrar alumno'.";
			msg=msg+"<img src='cliente/images/ayuda/registro1.png' width='700' height='350'></img><p></p>";
			msg=msg+"<p>Para volver al inicio pulse en el boton azul con la flecha</p>";
			cw.mostrarModal(msg);
		});

		}
	}

	//Interfaz donde se muestran los ejercicios que pueden realizar los niños de 3 años
	this.mostrarEjercicios3=function(){
		this.limpiar();
		var cadena='<div id="mostrar3">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>EJERCICIOS DE 3 AÑOS</h1>';
		cadena=cadena +'<h3>Identificación de números</h3>';
		cadena=cadena+'<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn31" class="btn btn-light btn-lg"><img src="cliente/images/1.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label>1 al 3</label>';
		cadena=cadena+'</div>';
		cadena=cadena+'<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn32" class="btn btn-light btn-lg" ><img src="cliente/images/2.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label>1 al 6</label>';
		cadena=cadena+'</div>';
		cadena=cadena +'<br>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			ws.comprobarAlumnos();
		});
		$('#btn31').on('click',function(){
			cw.ejercicio31(0,1,0);
		});
		$('#btn32').on('click',function(){
			cw.ejercicio32(0,1,0);
		});
		$('#btnInfo').on('click',function(){
			var msg="Para poder realizar uno de los ejercicios seleccione una de las imagenes que aparecen";
			msg=msg+"<img src='cliente/images/ayuda/3.png' width='700' height='350' ></img>";
			cw.mostrarModal(msg);
		});
	}
	// Interfaz de  el primer ejercicio de identificación de números del 1 al tres para niños de 3 años
	//en este caso será necesario introducir por parámetro el número de ejercicio en el que nos encontramos
	//el número de la imagen que queremos mostrar y la puntuación.
	this.ejercicio31=function(e31,num,score){
		this.limpiar();
		var cadena='<div id="mostrar31">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Identificacion de números del 1 al 3</h1>';
		cadena=cadena +'<h3>'+(e31+1)+'/10 Seleccione el número de objetos de la imagen</h3>';
		cadena=cadena +'<img src="cliente/images/31/'+e31+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btn1').on('click',function(){
			cw.comprobar31(e31,num,score,1);
			
		});
		$('#btn2').on('click',function(){
			cw.comprobar31(e31,num,score,2);
			
		});
		$('#btn3').on('click',function(){
			//ws.comprobar31(e31,score,btn);
			cw.comprobar31(e31,num,score,3);
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios3();
		});
		$('#btnInfo').on('click',function(){
			var msg="Selecciona el número de objetos de la imagen pulsando uno de los botones que contengan números";
			msg=msg+"<img src='cliente/images/ayuda/31.png' width='700' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez seleccionado ese botón se mostrará si la solucion es o no correcta y para continuar se deberá de clicar el boton 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/311.png' width='700' height='350' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon al 1º ejercicio para niños de 3 años
	this.comprobar31=function(e31,num,score,b){
		var m="";
		let soluciones=[3,2,1,3,3,1,2,1,3,2];
		let lights=["btn-light","btn-light","btn-light"];
		lights[(soluciones[e31]-1)]="btn-success";
		if (soluciones[e31]==b){
				score++;
				for(var i=0;i<lights.length;i++){
					if(i==(b-1)){
						lights[i]="btn-success";
					}
				}
				
				acierto.play();
				cw.resultado31(e31,num,score,lights,bien);}
		else{
				for(var j=0;j<lights.length;j++){
					if(j==(b-1)){
						lights[j]="btn-danger";
					}
				}
				
				fallo.play();
				cw.resultado31(e31,num,score,lights,mal);
		}

	}
	//Interfaz para mostrar la retroalimentación del ejercicio 1 para tres años
	this.resultado31=function(e31,num,score,b,m){
		this.limpiar();
		var cadena='<div id="r31">';
		cadena=cadena +'<h1>Identificacion de números del 1 al 3</h1>';
		cadena=cadena +'<h2>'+m+'</h2>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<img src="cliente/images/31/'+e31+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn '+b[0]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn '+b[1]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn '+b[2]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnS" class="btn btn-success btn-lg"><i class="fas fa-angle-double-right"></i> Siguiente</button>';		
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnS').on('click',function(){
			e31+=1;
			num+=1;
			if(num ==11){
				cw.mostrarResultados(score,3,31);
			}else{
				cw.ejercicio31((e31%10),num,score);
			}
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios3();
		});


	}
	// Interfaz del segundo ejercicio para niños de 3 años de identificación de números del 1 al 6
	this.ejercicio32=function(e32,num,score){
		this.limpiar();
		var soluciones=[5,4,1,5,2,6,3,2,4,3];
		var cadena='<div id="mostrar32">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Identificacion de números del 1 al 6</h1>';
		cadena=cadena +'<h3>'+num+'/10 Seleccione el número de objetos de la imagen</h3>';
		cadena=cadena +'<img src="cliente/images/32/'+e32+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn6" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/6.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);

		$('#btn1').on('click',function(){
			cw.comprobar32(e32,num,score,1);
		});
		$('#btn2').on('click',function(){
			cw.comprobar32(e32,num,score,2);
		});
		$('#btn3').on('click',function(){
			cw.comprobar32(e32,num,score,3);
		});
		$('#btn4').on('click',function(){
			cw.comprobar32(e32,num,score,4);
		});
		$('#btn5').on('click',function(){
			cw.comprobar32(e32,num,score,5);
		});
		$('#btn6').on('click',function(){
			cw.comprobar32(e32,num,score,6);
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios3();
		});
		$('#btnInfo').on('click',function(){
			var msg="Selecciona el número de objetos de la imagen pulsando uno de los botones que contengan números";
			msg=msg+"<img src='cliente/images/ayuda/32.png' width='700' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez seleccionado ese botón se mostrará si la solucion es o no correcta y para continuar se deberá de clicar el boton 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/322.png' width='700' height='350' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon del 2 ejercicio para niños de 3 años
	this.comprobar32=function(e32,num,score,b){
		var m="";
		var soluciones=[5,4,1,5,2,6,3,2,4,3];
		var l=["btn-light","btn-light","btn-light","btn-light","btn-light","btn-light"];
		l[(soluciones[e32]-1)]="btn-success";
		if (soluciones[e32]==b){
				score++;
				l[b-1]="btn-success";
				acierto.play();
				cw.resultado32(e32,num,score,l,bien);
		}else{
				l[b-1]="btn-danger";
				fallo.play();
				cw.resultado32(e32,num,score,l,mal);
		}

	}
	//Interfaz para mostrar la retroalimentación del ejercicio 2º para tres años
	this.resultado32=function(e32,num,score,b,m){
		this.limpiar();
		var cadena='<div id="r32">';
		cadena=cadena +'<h1>Identificacion de números del 1 al 6</h1>';
		cadena=cadena +'<h2>'+m+'</h2>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<img src="cliente/images/32/'+e32+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn '+b[0]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn '+b[1]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn '+b[2]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn '+b[3]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn '+b[4]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn6" class="btn '+b[5]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/6.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnS" class="btn btn-success btn-lg"><i class="fas fa-angle-double-right"></i> Siguiente</button>';		
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnS').on('click',function(){
			e32+=1;
			num+=1;
			if(num ==11){
				cw.mostrarResultados(score,3,32);
			}else{
				cw.ejercicio32((e32%10),num,score);
			}
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios3();
		});


	}
	//Interfaz para mostrar los distintos ejercicios de 4 años que se pueden realizar.
	this.mostrarEjercicios4=function(){
		this.limpiar();
		var cadena='<div id="mostrar4">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>EJERCICIOS DE 4 AÑOS</h1>';
		cadena=cadena+'<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn41" class="btn btn-light btn-lg" style="margin: 50px;margin-top:100px;"><img src="cliente/images/recta.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label >Recta numérica</label>';
		cadena =cadena+ '</div>';
		cadena=cadena+'<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn42" class="btn btn-light btn-lg"  style="margin-top:50px;" ><img src="cliente/images/arcoiris.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label >Amigos del 10</label>';
		cadena=cadena +'</div>';
		cadena=cadena +'<br>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			ws.comprobarAlumnos();
		});
		$('#btn41').on('click',function(){
			cw.ejercicio41(0,1,0);
		});
		$('#btn42').on('click',function(){
			cw.ejercicio42(0,1,0);
		});
		$('#btnInfo').on('click',function(){
			var msg="Para poder realizar uno de los ejercicios seleccione una de las imagenes que aparecen";
			msg=msg+"<img src='cliente/images/ayuda/4.png' width='700' height='350' ></img>";
			cw.mostrarModal(msg);
		});

	}
	// Interfaz del primer ejercicio para niños de 4 años de recta numérica
	this.ejercicio41=function(e41,num,score){
		this.limpiar();
		var inicio=[3,5,10,1,2,7,6,4,9,8];
		var desplazamiento=[2,-1,-2,5,1,3,1,5,-8,-6];
		var soluciones=[5,4,8,6,3,10,7,9,1,2];
		var cadena='<div id="mostrar41">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Recta numérica</h1>';
		cadena=cadena +'<h3>'+num+'/10 ¿A qué número llegamos si nos encontramos en el número '+inicio[e41]+' y nos desplazamos '+desplazamiento[e41]+' casillas?</h3>';
		cadena=cadena +'<p></p>';
		if(desplazamiento[e41]>0){
			cadena=cadena +'<h1>+ '+desplazamiento[e41]+'</h1>';
		}else{
			cadena=cadena +'<h1>'+desplazamiento[e41]+'</h1>';
		}
		cadena=cadena +'<p></p>';
		cadena=cadena +'<img src="cliente/images/41/'+e41+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn6" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/6.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn7" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/7.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn8" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/8.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn9" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/9.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn10" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/10.png"></img></button>'
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btn1').on('click',function(){
			cw.comprobar41(e41,num,score,1);
		});
		$('#btn2').on('click',function(){
			cw.comprobar41(e41,num,score,2);
		});
		$('#btn3').on('click',function(){
			cw.comprobar41(e41,num,score,3);
		});
		$('#btn4').on('click',function(){
			cw.comprobar41(e41,num,score,4);
		});
		$('#btn5').on('click',function(){
			cw.comprobar41(e41,num,score,5);
		});
		$('#btn6').on('click',function(){	
			cw.comprobar41(e41,num,score,6);
		});
		$('#btn7').on('click',function(){
			cw.comprobar41(e41,num,score,7);
		});
		$('#btn8').on('click',function(){
			cw.comprobar41(e41,num,score,8);
		});
		$('#btn9').on('click',function(){
			cw.comprobar41(e41,num,score,9);
		});
		$('#btn10').on('click',function(){
			cw.comprobar41(e41,num,score,10);
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios4();
		});
		$('#btnInfo').on('click',function(){
			var msg="Selecciona el número de objetos de la imagen pulsando uno de los botones que contengan números";
			msg=msg+"<img src='cliente/images/ayuda/41.png' width='700' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez seleccionado ese botón se mostrará si la solucion es o no correcta y para continuar se deberá de clicar el boton 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/411.png' width='700' height='350' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon al 1º ejercicio para niños de 4 años
	this.comprobar41=function(e41,num,score,b){
		var m="";
		var soluciones=[5,4,8,6,3,10,7,9,1,2];
		var l=["btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light"];
		l[(soluciones[e41]-1)]="btn-success";
		if (soluciones[e41]==b){
				score++;
				for(var i=0;i<l.length;i++){
					if(i==(b-1)){
						l[i]="btn-success";
					}
				}
				acierto.play();
				cw.resultado41(e41,num,score,l,bien);
		}
		else{
				for(var j=0;j<l.length;j++){
					
					if(j==(b-1)){
						l[j]="btn-danger";
					}
				}
				fallo.play();
				cw.resultado41(e41,num,score,l,mal);
		}

	}
	//Interfaz para mostrar la retroalimentación del ejercicio 1º para niños de 4 años
	this.resultado41=function(e41,num,score,b,m){
		this.limpiar();
		var cadena='<div id="r41">';
		cadena=cadena +'<h1>Recta numérica</h1>';
		cadena=cadena +'<h2>'+m+'</h2>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<img src="cliente/images/41/'+e41+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn '+b[0]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn '+b[1]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn '+b[2]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn '+b[3]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn '+b[4]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn6" class="btn '+b[5]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/6.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn7" class="btn '+b[6]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/7.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn8" class="btn '+b[7]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/8.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn9" class="btn '+b[8]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/9.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn10" class="btn '+b[9]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/10.png"></img></button>'
		cadena=cadena +'<p></p>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnS" class="btn btn-success btn-lg"><i class="fas fa-angle-double-right"></i> Siguiente</button>';		
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		
		
		$('#ejercicios').append(cadena);
		$('#btnS').on('click',function(){
			e41+=1;
			num+=1;
			if(num ==11){
				cw.mostrarResultados(score,4,41);
			}else{
				cw.ejercicio41((e41%10),num,score);
			}
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios4();
		});


	}
	// Interfaz del segundo ejercicio para niños de 4 años de amigos del 10
	this.ejercicio42=function(e42,num,score){
		this.limpiar();
		var numeros=[5,9,2,7,9,0,6,8,1,3];
		var soluciones=[5,1,8,3,1,10,4,2,9,7];
		var cadena='<div id="mostrar42">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Amigos del 10</h1>';
		cadena=cadena +'<h3>'+num+'/10 ¿cuál es el amigo del '+numeros[e42]+'?</h3>';
		cadena=cadena +'<img src="cliente/images/42/'+e42+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn6" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/6.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn7" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/7.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn8" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/8.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn9" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/9.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn10" class="btn btn-light btn-lg" style="margin: 20px"><img src="cliente/images/num/10.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btn1').on('click',function(){
			cw.comprobar42(e42,num,score,1);
		});
		$('#btn2').on('click',function(){
			cw.comprobar42(e42,num,score,2);
		});
		$('#btn3').on('click',function(){
			cw.comprobar42(e42,num,score,3);
		});
		$('#btn4').on('click',function(){
			cw.comprobar42(e42,num,score,4);
		});
		$('#btn5').on('click',function(){
			cw.comprobar42(e42,num,score,5);	
		});
		$('#btn6').on('click',function(){
			cw.comprobar42(e42,num,score,6);
		});
		$('#btn7').on('click',function(){
			cw.comprobar42(e42,num,score,7);
		});
		$('#btn8').on('click',function(){
			cw.comprobar42(e42,num,score,8);
		});
		$('#btn9').on('click',function(){
			cw.comprobar42(e42,num,score,9);
		});
		$('#btn10').on('click',function(){
			cw.comprobar42(e42,num,score,10);
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios4();
		});
		$('#btnInfo').on('click',function(){
			var msg="Selecciona el número de objetos de la imagen pulsando uno de los botones que contengan números";
			msg=msg+"<img src='cliente/images/ayuda/42.png' width='700' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez seleccionado ese botón se mostrará si la solucion es o no correcta y para continuar se deberá de clicar el boton 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/422.png' width='700' height='350' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon al 2º ejercicio para niños de 4 años
	this.comprobar42=function(e42,num,score,b){
		var m="";
		var soluciones=[5,1,8,3,1,10,4,2,9,7];
		var l=["btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light"];
		l[(soluciones[e42]-1)]="btn-success";
		if (soluciones[e42]==b){
				score++;
				for(var i=0;i<l.length;i++){
					if(i==(b-1)){
						l[i]="btn-success";
					}
				}
				acierto.play();
				cw.resultado42(e42,num,score,l,bien);
		}
		else{
				for(var j=0;j<l.length;j++){
					
					if(j==(b-1)){
						l[j]="btn-danger";
					}
				}
				fallo.play();
				cw.resultado42(e42,num,score,l,mal);
		}

	}

	//Interfaz para mostrar la retroalimentación del ejercicio 2º para niños cuatro años
	this.resultado42=function(e42,num,score,b,m){
		this.limpiar();
		var cadena='<div id="r42">';
		cadena=cadena +'<h1>Amigos del 10</h1>';
		cadena=cadena +'<h2>'+m+'</h2>';
		cadena=cadena +'<img src="cliente/images/42/'+e42+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn '+b[0]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn '+b[1]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn '+b[2]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn '+b[3]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn '+b[4]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn6" class="btn '+b[5]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/6.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn7" class="btn '+b[6]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/7.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn8" class="btn '+b[7]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/8.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn9" class="btn '+b[8]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/9.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn10" class="btn '+b[9]+' btn-lg" style="margin: 20px"><img src="cliente/images/num/10.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnS" class="btn btn-success btn-lg"><i class="fas fa-angle-double-right"></i> Siguiente</button>';		
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		
		
		$('#ejercicios').append(cadena);
		$('#btnS').on('click',function(){
			e42+=1;
			num+=1;
			if(num ==11){
				cw.mostrarResultados(score,4,42);
			}else{
				cw.ejercicio42((e42%10),num,score);
			}
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios4();
		});


	}
	//Interfaz para mostrar los distintos ejercicios de 5 años que se pueden realizar.
	this.mostrarEjercicios5=function(){
		this.limpiar();
		var cadena='<div id="mostrar5">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>EJERCICIOS DE 5 AÑOS</h1>';
		cadena =cadena+ '<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn51" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/s5.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label >Suma</label>';
		cadena =cadena+ '</div>';
		cadena =cadena+ '<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn52" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/r5.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label>Resta</label>';
		cadena =cadena+ '</div>';
		cadena=cadena +'<br>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			ws.comprobarAlumnos();
		});
		$('#btn51').on('click',function(){
			cw.ejercicio51(0,1,0,0);
		});
		$('#btn52').on('click',function(){
			cw.ejercicio52(0,1,0,0);
		});
		$('#btnInfo').on('click',function(){
			var msg="Para poder realizar uno de los ejercicios seleccione una de las imagenes que aparecen";
			msg=msg+"<img src='cliente/images/ayuda/5.png' width='700' height='350' ></img>";
			cw.mostrarModal(msg);
		});

	}
	// Interfaz del primer ejercicio para niños de 5 años de suma con objetos
	this.ejercicio51=function(e51,num,score,count){
		this.limpiar();
		var m="";
		var soluciones=[5,7,9,2,6,4,10,3,8,6];
		var cadena='<div id="mostrar51">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Suma con objetos</h1>';
		cadena=cadena +'<h3>'+num+'/10 Pulsa la casilla hasta que aparezca el número que de solución a la suma</h3>';
		cadena=cadena +'<img src="cliente/images/51/'+e51+'.png" class="rounded" alt="Eniun"style="margin: 20px">';
		cadena=cadena +'<img src="cliente/images/equal.png" class="rounded" alt="Eniun">';
		cadena=cadena+'<button type="button" id="btnDedos" class="btn btn-light btn-lg"><img src="cliente/images/manos/'+count+'.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn btn-success btn-lg"><i class="fas fa-check"></i> Hecho</button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios5();
		});
		$('#btnDedos').on('click',function(){
			count=((count+1)%10);
			cw.ejercicio51(e51,num,score,count);
		});
		$('#btn1').on('click',function(){
			if (soluciones[e51]== (count+1)){
				score++;
				acierto.play();
				cw.resultado51(e51,num,score,count,"btn-success",bien);
			}else{
				fallo.play();
				cw.resultado51(e51,num,score,count,"btn-danger",mal);
			}
		});
		$('#btnInfo').on('click',function(){
			var msg="Pulse en la imagen de la mano hasta encontrar la solucion correcta despues clique en 'Hecho'";
			msg=msg+"<img src='cliente/images/ayuda/51.png' width='700' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez seleccionado ese botón se mostrará si la solucion es o no correcta y para continuar se deberá de clicar el boton 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/511.png' width='700' height='350' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}
	//Interfaz para mostrar la retroalimentación del ejercicio 1º para niños de cinco años
	this.resultado51=function(e51,num,score,count,b,m){
		this.limpiar();
		var cadena='<div id="r51">';
		cadena=cadena +'<h1>Suma con objetos</h1>';
		cadena=cadena +'<h2>'+m+'<h2>';
		cadena=cadena +'<img src="cliente/images/51/'+e51+'.png" class="rounded" alt="Eniun"style="margin: 20px">';
		cadena=cadena +'<img src="cliente/images/equal.png" class="rounded" alt="Eniun">';
		cadena=cadena+'<button type="button" id="btnDedos" class="btn '+b+' btn-lg"><img src="cliente/images/manos/'+count+'.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnS" class="btn btn-success btn-lg"><i class="fas fa-angle-double-right"></i> Siguiente</button>';		
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		
		
		$('#ejercicios').append(cadena);
		$('#btnS').on('click',function(){
			e51+=1;
			num+=1;
			if(num ==11){
				cw.mostrarResultados(score,5,51);
			}else{
				cw.ejercicio51((e51%10),num,score,0);
			}
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios5();
		});


	}
	// Interfaz del segundo ejercicio para niños de 5 años de resta con objetos
	this.ejercicio52=function(e52 ,num,score,count){
		this.limpiar();
		var m="";
		var soluciones=[2,4,1,6,3,5,3,9,1,4];
		var cadena='<div id="mostrar52">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Resta con objetos</h1>';
		cadena=cadena +'<h3>'+num+'/10 Pulsa la casilla hasta que aparezca el número que de solución a la resta</h3>';
		cadena=cadena +'<img src="cliente/images/52/'+e52+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<img src="cliente/images/equal.png" class="rounded" alt="Eniun">';
		cadena=cadena+'<button type="button" id="btnDedos" class="btn btn-light btn-lg"><img src="cliente/images/manos/'+count+'.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn btn-success btn-lg"><i class="fas fa-check"></i> Hecho</button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios5();
		});
		$('#btnDedos').on('click',function(){
			count=((count+1)%10);
			cw.ejercicio52(e52,num,score,count);
		});
		$('#btn1').on('click',function(){
			if (soluciones[e52]== (count+1)){
				score++;
				acierto.play();
				cw.resultado52(e52,num,score,count,"btn-success",bien);
			}else{
				fallo.play();
				cw.resultado52(e52,num,score,count,"btn-danger",mal);
			}

		});
		$('#btnInfo').on('click',function(){
			var msg="Pulse en la imagen de la mano hasta encontrar la solucion correcta despues clique en 'Hecho'";
			msg=msg+"<img src='cliente/images/ayuda/52.png' width='700' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez seleccionado ese botón se mostrará si la solucion es o no correcta y para continuar se deberá de clicar el boton 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/522.png' width='700' height='350' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}

	//Interfaz para mostrar la retroalimentación del ejercicio 2º para niños de cinco años
	this.resultado52=function(e52,num,score,count,b,m){
		this.limpiar();
		var cadena='<div id="r52">';
		cadena=cadena +'<h1>Resta con objetos</h1>';
		cadena=cadena +'<h2>'+m+'<h2>';
		cadena=cadena +'<img src="cliente/images/52/'+e52+'.png" class="rounded" alt="Eniun"style="margin: 20px">';
		cadena=cadena +'<img src="cliente/images/equal.png" class="rounded" alt="Eniun">';
		cadena=cadena+'<button type="button" id="btnDedos" class="btn '+b+' btn-lg"><img src="cliente/images/manos/'+count+'.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnS" class="btn btn-success btn-lg"><i class="fas fa-angle-double-right"></i> Siguiente</button>';		
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		
		
		$('#ejercicios').append(cadena);
		$('#btnS').on('click',function(){
			e52+=1;
			num+=1;
			if(num ==11){
				cw.mostrarResultados(score,5,52);
			}else{
				cw.ejercicio52((e52%10),num,score,0);
			}
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios5();
		});


	}

	//Interfaz para elegir que ejercicios de primero se quieren realizar
	this.mostrarEjercicios1=function(){
		this.limpiar();
		var btn=["btn-info","btn-info","btn-info","btn-info","btn-info","btn-info"];
		var btn2=["Elige","Elige","Elige","Elige","Elige","Elige"];
		var disable=["","","","","disabled"];
		var disabled=["disabled","disabled","disabled","disabled","disabled","disabled"];
		var matriz=new Array();
		var disabled2=["","","","","",""];
		var b=[];
		var b2=[];
		for(var x=0;x<7;x++){
			matriz[x]=new Array();
			for(var y=0;y<3;y++){
				matriz[x][y]=undefined;
			}
		}
		for(var y=0;y<12;y++){
			b[y]="Elige";
			b2[y]="btn-info";
		}
		var cadena='<div id="mostrar1">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>EJERCICIOS DE 1º PRIMARIA</h1>';
		cadena =cadena+ '<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/suma.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label >Suma Guiada</label>';
		cadena =cadena+ '</div>';
		cadena =cadena+ '<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn12" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/resta.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label>Resta Guiada</label>';
		cadena =cadena+ '</div>';
		cadena=cadena +'<br>';
		cadena =cadena+ '<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn13" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/suma.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label>Suma</label>';
		cadena =cadena+ '</div>';
		cadena=cadena +'<br>';
		cadena =cadena+ '<div class="form-group col-sm-12 col-md-6">';
		cadena=cadena+'<button type="button" id="btn14" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/resta.png"></img></button>';
		cadena=cadena +'<br>';
		cadena=cadena +'<label>Resta</label>';
		cadena =cadena+ '</div>';
		cadena=cadena +'<br>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);

		$('#btn11').on('click',function(){
			cw.ejercicio11(0,0,btn,btn2,disable);
		});
		$('#btn12').on('click',function(){
			cw.ejercicio12(0,0,btn,btn2,disable);
		});
		
		$('#btn13').on('click',function(){
			cw.ejercicio13(0,0,1,matriz,disabled,disabled2,b,b2);
		});
		$('#btn14').on('click',function(){
			cw.ejercicio14(0,0,1,matriz,disabled,disabled2,b,b2);
		});
		$('#btnAtras').on('click',function(){
			ws.comprobarAlumnos();
		});
		$('#btnInfo').on('click',function(){
			var msg="Para poder realizar uno de los ejercicios seleccione una de las imagenes que aparecen";
			msg=msg+"<img src='cliente/images/ayuda/1.png' width='700' height='350' ></img>";
			cw.mostrarModal(msg);
		});

	}

	this.ejercicio13=function(e13,score,n,solucion,disabled,disabled2,btn,btn2){
		this.limpiar();
		var sumando1=[16,15,8,21,4,13,8,15,9,17];
		var sumando2=[14,7,3,14,3,7,6,6,2,7];
		var random=[];
		
		for(j=0;j<(n*4);j++){
			random[j]=cw.getRandomArbitrary(0,31);
		}
		solucion[0][1]=sumando1[e13];
		solucion[0][2]=sumando2[e13];
		
		for(let elemento in solucion){
			console.log(elemento+"="+solucion[elemento]);
		}
		console.log(random);
		var cadena='<div id="mostrar13">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Suma ABN</h1>';
		cadena=cadena +'<h3>'+(e13+1)+'/10 Pulsa las casillas y realiza la suma</h3>';
		cadena=cadena +'<br>';
		cadena=cadena +'<table class="table table-bordered" id="resta">';
		cadena=cadena +'<thead>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td><h3>Suma <i class="fas fa-plus-circle"></i></h3></td>';
		cadena=cadena +'<td><h3>'+sumando1[e13]+'</h3></td>';
		cadena=cadena +'<td><h3>'+sumando2[e13]+'</h3></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</thead>';
		cadena=cadena +'<tbody>';
		
		cadena=cadena +'<tr>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown">' ;
		cadena=cadena+'<button id="btnO1" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[0]+' >'+solucion[1][0]+'<span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="o1" role="menu">';
		for(l=1;l<=sumando2[e13];l++){
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
			cadena=cadena+'<p></p>';
		}
		cadena=cadena+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown">' ;
		cadena=cadena+'<button id="btnS1" type="button" class="btn '+btn2[0]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[0]+'>'+btn[0]+'<span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s1" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[0]+'"><h4 style="text-align:center;">'+random[0]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[1][1]+'"><h4 style="text-align:center;">'+solucion[1][1]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[1]+'"><h4 style="text-align:center;">'+random[1]+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS2" type="button" class="btn '+btn2[1]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[0]+'>'+btn[1]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s2" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[2]+'"><h4 style="text-align:center;">'+random[2]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[1][2]+'"><h4 style="text-align:center;">'+solucion[1][2]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[3]+'"><h4 style="text-align:center;">'+random[3]+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'</tr>';
		if(n>=2){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO2" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[1]+'>'+solucion[2][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o2" role="menu">';
			for(l=1;l<=solucion[1][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS3" type="button" class="btn '+btn2[2]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[1]+'>'+btn[2]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s3" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[4]+'"><h4 style="text-align:center;">'+random[4]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[2][1]+'"><h4 style="text-align:center;">'+solucion[2][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[5]+'"><h4 style="text-align:center;">'+random[5]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS4" type="button" class="btn '+btn2[3]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[1]+'>'+btn[3]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s4" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[6]+'"><h4 style="text-align:center;">'+random[6]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[2][2]+'"><h4 style="text-align:center;">'+solucion[2][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[7]+'"><h4 style="text-align:center;">'+random[7]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';
		}
		if(n>=3){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO3" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[2]+' >'+solucion[3][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o3" role="menu">';
			for(l=1;l<=solucion[2][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS5" type="button" class="btn '+btn2[4]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[2]+'>'+btn[4]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s5" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[8]+'"><h4 style="text-align:center;">'+random[8]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[3][1]+'"><h4 style="text-align:center;">'+solucion[3][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[9]+'"><h4 style="text-align:center;">'+random[9]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS6" type="button" class="btn '+btn2[5]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[2]+'>'+btn[5]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s6" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[10]+'"><h4 style="text-align:center;">'+random[10]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[3][2]+'"><h4 style="text-align:center;">'+solucion[3][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[11]+'"><h4 style="text-align:center;">'+random[11]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';
		}
		if(n>=4){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO4" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[3]+'>'+solucion[4][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o4" role="menu">';
			for(l=1;l<=solucion[3][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS7" type="button" class="btn '+btn2[6]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[3]+'>'+btn[6]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s7" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[12]+'"><h4 style="text-align:center;">'+random[12]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[4][1]+'"><h4 style="text-align:center;">'+solucion[4][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[13]+'"><h4 style="text-align:center;">'+random[13]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS8" type="button" class="btn '+btn2[7]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[3]+'>'+btn[7]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s8" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[14]+'"><h4 style="text-align:center;">'+random[14]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[4][2]+'"><h4 style="text-align:center;">'+solucion[4][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[15]+'"><h4 style="text-align:center;">'+random[15]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';			
		}
		if(n>=5){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO5" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[4]+'>'+solucion[5][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o5" role="menu">';
			for(l=1;l<=solucion[4][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS9" type="button" class="btn '+btn2[8]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[4]+'>'+btn[8]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s9" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[16]+'"><h4 style="text-align:center;">'+random[16]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[5][1]+'"><h4 style="text-align:center;">'+solucion[5][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[71]+'"><h4 style="text-align:center;">'+random[17]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS10" type="button" class="btn '+btn2[9]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[4]+'>'+btn[9]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s10" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[18]+'"><h4 style="text-align:center;">'+random[18]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[5][2]+'"><h4 style="text-align:center;">'+solucion[5][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[19]+'"><h4 style="text-align:center;">'+random[19]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';			
		}
		if(n>=6){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO6" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[5]+'>'+solucion[6][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o6" role="menu">';
			for(l=1;l<=solucion[5][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS11" type="button" class="btn '+btn2[10]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[5]+'>'+btn[10]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s11" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[20]+'"><h4 style="text-align:center;">'+random[20]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[6][1]+'"><h4 style="text-align:center;">'+solucion[6][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[21]+'"><h4 style="text-align:center;">'+random[21]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS12" type="button" class="btn '+btn2[1]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[5]+'>'+btn[11]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s12" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[22]+'"><h4 style="text-align:center;">'+random[22]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[6][2]+'"><h4 style="text-align:center;">'+solucion[6][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[23]+'"><h4 style="text-align:center;">'+random[23]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';	
			
		}
		cadena=cadena +'</tbody>';
		cadena=cadena +'</table>';
		cadena=cadena+'<button type="button" id="btnMas" class="btn btn-primary btn-lg pull-left"><i class="fas fa-plus"></i></button>';
		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg " style="margin-left:20px"><i class="fas fa-check"></i> Hecho</button>';
		cadena=cadena+'<button type="button" id="btnMenos" class="btn btn-primary btn-lg pull-right" style="margin-left:20px"><i class="fas fa-minus"></i></button>';
		cadena=cadena+'<h1></h1>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena=cadena +'</div>';

		$('#ejercicios').append(cadena);
		var StoreValue = []; //Declare array
		$(".dropdown-menu a").click(function(){
			StoreValue = []; //clear array
			StoreValue.push($(this).attr("value")); // add text to array
		});

		$('#o1 a').click(function () {
			var num =StoreValue[0];
			disabled[0]= "";
			disabled2[0]="disabled";
			solucion[1][0]=num;
			solucion[1][1]=parseInt(solucion[0][1])+parseInt(solucion[1][0]);
			solucion[1][2]=solucion[0][2]-solucion[1][0];
			if(solucion[1][2]!=0){n++;}
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o2 a').click(function () {
			var num =StoreValue[0];
			disabled[1]= "";
			disabled2[1]="disabled";
			solucion[2][0]=num;
			solucion[2][1]= parseInt(solucion[1][1])+parseInt(solucion[2][0]);
			solucion[2][2]=solucion[1][2]-solucion[2][0];
			if(solucion[2][2]!=0){n++;}
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o3 a').click(function () {
			var num =StoreValue[0];
			disabled[2]= "";
			disabled2[2]="disabled";
			solucion[3][0]=num;
			solucion[3][1]= parseInt(solucion[2][1])+parseInt(solucion[3][0]);
			solucion[3][2]=solucion[2][2]-solucion[3][0];
			if(solucion[3][2]!=0){n++;}
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o4 a').click(function () {
			var num =StoreValue[0];
			disabled[3]= "";
			disabled2[3]="disabled";
			solucion[4][0]=num;
			solucion[4][1]= parseInt(solucion[3][1])+parseInt(solucion[4][0]);
			solucion[4][2]=solucion[3][2]-solucion[4][0];
			if(solucion[4][2]!=0){n++;}
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o5 a').click(function () {
			var num =StoreValue[0];
			disabled[4]= "";
			disabled2[4]="disabled";
			solucion[5][0]=num;
			solucion[5][1]= parseInt(solucion[4][1])+ parseInt(solucion[5][0]);
			solucion[5][2]=solucion[4][2]-solucion[5][0];
			if(solucion[5][2]!=0){n++;}
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o6 a').click(function () {
			var num =StoreValue[0];
			disabled[5]= "";
			disabled2[5]="disabled";
			solucion[6][0]=num;
			solucion[6][1]= parseInt(solucion[5][1])+parseInt(solucion[6][0]);
			solucion[6][2]=solucion[0][2]-solucion[6][0];
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});

		$('#s1 a').click(function () {
			btn[0]=solucion[1][1];
			var num =StoreValue[0];
			if(num==solucion[1][1]){
				ce++;
				acierto.play();
				btn2[0]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[0]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s2 a').click(function () {
			btn[1]=solucion[1][2];
			var num =StoreValue[0];
			if(num==solucion[1][2]){
				ce++;
				acierto.play();
				btn2[1]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[1]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s3 a').click(function () {
			btn[2]=solucion[2][1];
			var num =StoreValue[0];
			if(num==solucion[2][1]){
				ce++;
				btn2[2]="btn-success";
				acierto.play();
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[2]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s4 a').click(function () {
			btn[3]=solucion[2][2];
			var num =StoreValue[0];
			if(num==solucion[2][2]){
				ce++;
				acierto.play();
				btn2[3]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[3]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s5 a').click(function () {
			btn[4]=solucion[3][1];
			var num =StoreValue[0];
			if(num==solucion[3][1]){
				ce++;
				acierto.play();
				btn2[4]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[4]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s6 a').click(function () {
			btn[5]=solucion[3][2];
			var num =StoreValue[0];
			if(num==solucion[3][2]){
				ce++;
				acierto.play();
				btn2[5]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[5]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
		});
		$('#s7 a').click(function () {
			btn[6]=solucion[4][1];
			var num =StoreValue[0];
			if(num==solucion[4][1]){
				ce++;
				acierto.play();
				btn2[6]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[6]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s8 a').click(function () {
			btn[7]=solucion[4][2];
			var num =StoreValue[0];
			if(num==solucion[4][2]){
				ce++;
				acierto.play();
				btn2[7]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[7]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s9 a').click(function () {
			btn[8]=solucion[5][1];
			var num =StoreValue[0];
			if(num==solucion[5][1]){
				ce++;
				acierto.play();
				btn2[8]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[8]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s10 a').click(function () {
			btn[9]=solucion[5][2];
			var num =StoreValue[0];
			if(num==solucion[5][2]){
				ce++;
				acierto.play();
				btn2[9]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[9]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s11 a').click(function () {
			btn[10]=solucion[6][1];
			var num =StoreValue[0];
			if(num==solucion[6][1]){
				ce++;
				acierto.play();
				btn2[10]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[10]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s12 a').click(function () {
			btn[11]=solucion[6][2];
			var num =StoreValue[0];
			if(num==solucion[6][2]){
				ce++;
				acierto.play();
				btn2[11]="btn-success";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[11]="btn-danger";
				cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);			}
			
		});

		
		$('#btnMas').on('click',function(){
			if(n<6){n++;}
			console.log(n);
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
		});
		$('#btnMenos').on('click',function(){
			if(n>1){n--;}
			cw.ejercicio13(e13,score,n,solucion,disabled,disabled2,btn,btn2);
		});
		$('#btnHecho').on('click',function(){
			e13++;
			var disable=["","","","","disabled"];
			var disabled=["disabled","disabled","disabled","disabled","disabled","disabled"];
			var matriz=new Array();
			var disabled2=["","","","","",""];
			var b=[];
			var b2=[];
			for(var x=0;x<7;x++){
				matriz[x]=new Array();
				for(var y=0;y<3;y++){
					matriz[x][y]=undefined;
				}
			}
			for(var y=0;y<12;y++){
				b[y]="Elige";
				b2[y]="btn-info";
			}
			if(ce>n){
				score++;
			}
			ce=0;
			if(e13==10){
				cw.mostrarResultados((score),1,13);
			}else{
				cw.ejercicio13((e13%10),score,1,matriz,disabled,disabled2,b,b2);
			}
			
		});

		$('#btnInfo').on('click',function(){
			var msg="Pulse en los distintos botones de undefined o 'Elegir',siempre y cuando esten habilitados";
			msg=msg+"<img src='cliente/images/ayuda/14.png' width='800' height='350' ></img><p></p>";
			msg=msg+"<p>Seleccione una de las opciones que se le proporcionan para cada uno de los botones </p>";
			msg=msg+"<img src='cliente/images/ayuda/142.png' width='800' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez acabada la suma Para continuar con el siguiente ejercicio pulse 'Hecho'</p>";
			msg=msg+"<img src='cliente/images/ayuda/143.png' width='800' height='350' ></img><p></p>";
			msg=msg+"<p> Como bien se puede intuir, en la primera columna se podrán elegir aquellos números que se van a sumar al primer sumando y restar al segundo, y en las columnas sucesivas se tendrán que elegir las opciones correctas para completar la suma.</p>";
			msg=msg+"<h3> ¡Atención! El número máximo de filas que se podrán añadir para realizar la suma serán 6</h3>";
			cw.mostrarModal(msg);
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios1();
		});

	}

this.ejercicio14=function(e13,score,n,solucion,disabled,disabled2,btn,btn2){
		this.limpiar();
		var minuendo=[14,25,8,37,12,8,24,17,10,13];
		var sustraendo=[6,13,3,21,6,4,6,8,3,8];
		var random=[];
		
		for(j=0;j<(n*4);j++){
			random[j]=cw.getRandomArbitrary(0,31);
		}
		solucion[0][1]=minuendo[e13];
		solucion[0][2]=sustraendo[e13];
		
		for(let elemento in solucion){
			console.log(elemento+"="+solucion[elemento]);
		}
		console.log(random);
		var cadena='<div id="mostrar14">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Resta ABN</h1>';
		cadena=cadena +'<h3>'+(e13+1)+'/10 Pulsa las casillas y realiza la resta</h3>';
		cadena=cadena +'<br>';
		cadena=cadena +'<table class="table table-bordered" id="resta">';
		cadena=cadena +'<thead>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td><h3>Resta <i class="fas fa-minus-circle"></i></h3></td>';
		cadena=cadena +'<td><h3>'+minuendo[e13]+'</h3></td>';
		cadena=cadena +'<td><h3>'+sustraendo[e13]+'</h3></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</thead>';
		cadena=cadena +'<tbody>';
		
		cadena=cadena +'<tr>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown">' ;
		cadena=cadena+'<button id="btnO1" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[0]+' >'+solucion[1][0]+'<span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="o1" role="menu">';
		for(l=1;l<=sustraendo[e13];l++){
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
			cadena=cadena+'<p></p>';
		}
		cadena=cadena+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown">' ;
		cadena=cadena+'<button id="btnS1" type="button" class="btn '+btn2[0]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[0]+'>'+btn[0]+'<span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s1" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[0]+'"><h4 style="text-align:center;">'+random[0]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[1][1]+'"><h4 style="text-align:center;">'+solucion[1][1]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[1]+'"><h4 style="text-align:center;">'+random[1]+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS2" type="button" class="btn '+btn2[1]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[0]+'>'+btn[1]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s2" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[2]+'"><h4 style="text-align:center;">'+random[2]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[1][2]+'"><h4 style="text-align:center;">'+solucion[1][2]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[3]+'"><h4 style="text-align:center;">'+random[3]+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'</tr>';
		if(n>=2){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO2" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[1]+'>'+solucion[2][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o2" role="menu">';
			for(l=1;l<=solucion[1][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS3" type="button" class="btn '+btn2[2]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[1]+'>'+btn[2]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s3" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[4]+'"><h4 style="text-align:center;">'+random[4]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[2][1]+'"><h4 style="text-align:center;">'+solucion[2][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[5]+'"><h4 style="text-align:center;">'+random[5]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS4" type="button" class="btn '+btn2[3]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[1]+'>'+btn[3]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s4" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[6]+'"><h4 style="text-align:center;">'+random[6]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[2][2]+'"><h4 style="text-align:center;">'+solucion[2][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[7]+'"><h4 style="text-align:center;">'+random[7]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';
		}
		if(n>=3){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO3" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[2]+' >'+solucion[3][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o3" role="menu">';
			for(l=1;l<=solucion[2][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS5" type="button" class="btn '+btn2[4]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[2]+'>'+btn[4]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s5" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[8]+'"><h4 style="text-align:center;">'+random[8]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[3][1]+'"><h4 style="text-align:center;">'+solucion[3][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[9]+'"><h4 style="text-align:center;">'+random[9]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS6" type="button" class="btn '+btn2[5]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[2]+'>'+btn[5]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s6" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[10]+'"><h4 style="text-align:center;">'+random[10]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[3][2]+'"><h4 style="text-align:center;">'+solucion[3][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[11]+'"><h4 style="text-align:center;">'+random[11]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';
		}
		if(n>=4){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO4" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[3]+'>'+solucion[4][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o4" role="menu">';
			for(l=1;l<=solucion[3][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS7" type="button" class="btn '+btn2[6]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[3]+'>'+btn[6]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s7" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[12]+'"><h4 style="text-align:center;">'+random[12]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[4][1]+'"><h4 style="text-align:center;">'+solucion[4][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[13]+'"><h4 style="text-align:center;">'+random[13]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS8" type="button" class="btn '+btn2[7]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[3]+'>'+btn[7]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s8" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[14]+'"><h4 style="text-align:center;">'+random[14]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[4][2]+'"><h4 style="text-align:center;">'+solucion[4][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[15]+'"><h4 style="text-align:center;">'+random[15]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';			
		}
		if(n>=5){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO5" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[4]+'>'+solucion[5][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o5" role="menu">';
			for(l=1;l<=solucion[4][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS9" type="button" class="btn '+btn2[8]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[4]+'>'+btn[8]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s9" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[16]+'"><h4 style="text-align:center;">'+random[16]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[5][1]+'"><h4 style="text-align:center;">'+solucion[5][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[71]+'"><h4 style="text-align:center;">'+random[17]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS10" type="button" class="btn '+btn2[9]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[4]+'>'+btn[9]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s10" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[18]+'"><h4 style="text-align:center;">'+random[18]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[5][2]+'"><h4 style="text-align:center;">'+solucion[5][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[19]+'"><h4 style="text-align:center;">'+random[19]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';			
		}
		if(n>=6){
			cadena=cadena +'<tr>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnO6" type="button" class="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled2[5]+'>'+solucion[6][0]+'<span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="o6" role="menu">';
			for(l=1;l<=solucion[5][2];l++){
				cadena = cadena + '<a class="dropdown-item" href="#" value="'+l+'"><h4 style="text-align:center;">'+l+'</h4></a>';
				cadena=cadena+'<p></p>';
			}
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown">' ;
			cadena=cadena+'<button id="btnS11" type="button" class="btn '+btn2[10]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[5]+'>'+btn[10]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s11" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[20]+'"><h4 style="text-align:center;">'+random[20]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[6][1]+'"><h4 style="text-align:center;">'+solucion[6][1]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[21]+'"><h4 style="text-align:center;">'+random[21]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'<td>';
			cadena = cadena + '<div class="dropdown" >' ;
			cadena=cadena+'<button id="btnS12" type="button" class="btn '+btn2[1]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disabled[5]+'>'+btn[11]+' <span class="caret"></span></button>';
			cadena=cadena +'<div class="dropdown-menu" id="s12" role="menu">';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[22]+'"><h4 style="text-align:center;">'+random[22]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+solucion[6][2]+'"><h4 style="text-align:center;">'+solucion[6][2]+'</h4></a>';
			cadena=cadena+'<p></p>';
			cadena = cadena + '<a class="dropdown-item" href="#" value="'+random[23]+'"><h4 style="text-align:center;">'+random[23]+'</h4></a>';
			cadena=cadena+'</td>';
			cadena=cadena +'</tr>';	
			
		}
		cadena=cadena +'</tbody>';
		cadena=cadena +'</table>';
		cadena=cadena+'<button type="button" id="btnMas" class="btn btn-primary btn-lg pull-left"><i class="fas fa-plus"></i></button>';
		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg " style="margin-left:20px"><i class="fas fa-check"></i> Hecho</button>';
		cadena=cadena+'<button type="button" id="btnMenos" class="btn btn-primary btn-lg pull-right" style="margin-left:20px"><i class="fas fa-minus"></i></button>';
		cadena=cadena+'<h1></h1>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena=cadena +'</div>';

		$('#ejercicios').append(cadena);
		var StoreValue = []; //Declare array
		$(".dropdown-menu a").click(function(){
			StoreValue = []; //clear array
			StoreValue.push($(this).attr("value")); // add text to array
		});

		$('#o1 a').click(function () {
			var num =StoreValue[0];
			disabled[0]= "";
			disabled2[0]="disabled";
			solucion[1][0]=num;
			solucion[1][1]=parseInt(solucion[0][1])-parseInt(solucion[1][0]);
			solucion[1][2]=solucion[0][2]-solucion[1][0];
			if(solucion[1][2]!=0){n++;}
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o2 a').click(function () {
			var num =StoreValue[0];
			disabled[1]= "";
			disabled2[1]="disabled";
			solucion[2][0]=num;
			solucion[2][1]= parseInt(solucion[1][1])-parseInt(solucion[2][0]);
			solucion[2][2]=solucion[1][2]-solucion[2][0];
			if(solucion[2][2]!=0){n++;}
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o3 a').click(function () {
			var num =StoreValue[0];
			disabled[2]= "";
			disabled2[2]="disabled";
			solucion[3][0]=num;
			solucion[3][1]= parseInt(solucion[2][1])-parseInt(solucion[3][0]);
			solucion[3][2]=solucion[2][2]-solucion[3][0];
			if(solucion[3][2]!=0){n++;}
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o4 a').click(function () {
			var num =StoreValue[0];
			disabled[3]= "";
			disabled2[3]="disabled";
			solucion[4][0]=num;
			solucion[4][1]= parseInt(solucion[3][1])-parseInt(solucion[4][0]);
			solucion[4][2]=solucion[3][2]-solucion[4][0];
			if(solucion[4][2]!=0){n++;}
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o5 a').click(function () {
			var num =StoreValue[0];
			disabled[4]= "";
			disabled2[4]="disabled";
			solucion[5][0]=num;
			solucion[5][1]= parseInt(solucion[4][1])-parseInt(solucion[5][0]);
			solucion[5][2]=solucion[4][2]-solucion[5][0];
			if(solucion[5][2]!=0){n++;}
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});
		$('#o6 a').click(function () {
			var num =StoreValue[0];
			disabled[5]= "";
			disabled2[5]="disabled";
			solucion[6][0]=num;
			solucion[6][1]= parseInt(solucion[5][1])-parseInt(solucion[6][0]);
			solucion[6][2]=solucion[0][2]-solucion[6][0];
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			
		});

		$('#s1 a').click(function () {
			btn[0]=solucion[1][1];
			var num =StoreValue[0];
			if(num==solucion[1][1]){
				ce++;
				acierto.play();
				btn2[0]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[0]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s2 a').click(function () {
			btn[1]=solucion[1][2];
			var num =StoreValue[0];
			if(num==solucion[1][2]){
				ce++;
				acierto.play();
				btn2[1]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[1]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s3 a').click(function () {
			btn[2]=solucion[2][1];
			var num =StoreValue[0];
			if(num==solucion[2][1]){
				ce++;
				btn2[2]="btn-success";
				acierto.play();
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[2]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s4 a').click(function () {
			btn[3]=solucion[2][2];
			var num =StoreValue[0];
			if(num==solucion[2][2]){
				ce++;
				acierto.play();
				btn2[3]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[3]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s5 a').click(function () {
			btn[4]=solucion[3][1];
			var num =StoreValue[0];
			if(num==solucion[3][1]){
				ce++;
				acierto.play();
				btn2[4]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[4]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s6 a').click(function () {
			btn[5]=solucion[3][2];
			var num =StoreValue[0];
			if(num==solucion[3][2]){
				ce++;
				acierto.play();
				btn2[5]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[5]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
		});
		$('#s7 a').click(function () {
			btn[6]=solucion[4][1];
			var num =StoreValue[0];
			if(num==solucion[4][1]){
				ce++;
				acierto.play();
				btn2[6]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[6]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s8 a').click(function () {
			btn[7]=solucion[4][2];
			var num =StoreValue[0];
			if(num==solucion[4][2]){
				ce++;
				acierto.play();
				btn2[7]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[7]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s9 a').click(function () {
			btn[8]=solucion[5][1];
			var num =StoreValue[0];
			if(num==solucion[5][1]){
				ce++;
				acierto.play();
				btn2[8]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[8]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s10 a').click(function () {
			btn[9]=solucion[5][2];
			var num =StoreValue[0];
			if(num==solucion[5][2]){
				ce++;
				acierto.play();
				btn2[9]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[9]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s11 a').click(function () {
			btn[10]=solucion[6][1];
			var num =StoreValue[0];
			if(num==solucion[6][1]){
				ce++;
				acierto.play();
				btn2[10]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[10]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}
			
		});
		$('#s12 a').click(function () {
			btn[11]=solucion[6][2];
			var num =StoreValue[0];
			if(num==solucion[6][2]){
				ce++;
				acierto.play();
				btn2[11]="btn-success";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
			}else{
				fallo.play();
				btn2[11]="btn-danger";
				cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);			}
			
		});

		
		$('#btnMas').on('click',function(){
			if(n<6){n++;}
			console.log(n);
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
		});
		$('#btnMenos').on('click',function(){
			if(n>1){n--;}
			cw.ejercicio14(e13,score,n,solucion,disabled,disabled2,btn,btn2);
		});
		$('#btnHecho').on('click',function(){
			e13++;
			var disable=["","","","","disabled"];
			var disabled=["disabled","disabled","disabled","disabled","disabled","disabled"];
			var matriz=new Array();
			var disabled2=["","","","","",""];
			var b=[];
			var b2=[];
			for(var x=0;x<7;x++){
				matriz[x]=new Array();
				for(var y=0;y<3;y++){
					matriz[x][y]=undefined;
				}
			}
			for(var y=0;y<12;y++){
				b[y]="Elige";
				b2[y]="btn-info";
			}
			if(ce>n){
				score++;
			}
			ce=0;
			if(e13==10){
				cw.mostrarResultados((score),1,14);
			}else{
				cw.ejercicio14((e13%10),score,1,matriz,disabled,disabled2,b,b2);
			}
			
		});

		$('#btnInfo').on('click',function(){
			var msg="Pulse en los distintos botones de undefined o Elegir,siempre y cuando esten habilitados";
			msg=msg+"<img src='cliente/images/ayuda/13.png' width='800' height='350' ></img><p></p>";
			msg=msg+"<p>Seleccione una de las opciones que se le proporcionan para cada uno de los botones </p>";
			msg=msg+"<img src='cliente/images/ayuda/132.png' width='800' height='350' ></img><p></p>";
			msg=msg+"<p>Una vez finalizada la resta, para continuar con el siguiente ejercicio pulse 'Hecho'</p>";
			msg=msg+"<img src='cliente/images/ayuda/133.png' width='800' height='350' ></img><p></p>";
			msg=msg+"<p> Como bien se puede intuir, en la primera columna se podrán elegir aquellos números que se van a restar tanto al minuendo como al sustraendo, y en las columnas sucesivas se tendrán que elegir las opciones correctas para completar la resta</p>";
			msg=msg+"<h3> ¡Atención! El número máximo de filas que se podrán añadir para realizar la resta serán 6</h3>";
			cw.mostrarModal(msg);
		});

		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios1();
		});

	}

	this.ejercicio11=function(e11,score,btn,btn2,disable){
		this.limpiar();
		var m="";
		var sumando1=[16,15,8,21,4,13,8,15,9,17];
		var sumando2=[14,7,3,14,3,7,6,6,2,7];
		var opcion1=[4,5,2,4,3,7,2,5,1,3];
		var opcion2=[10,2,1,10,0,0,4,1,1,4];

		var a,b,c,d,e,f;
		a=cw.getRandomArbitrary(0,31);
		b=cw.getRandomArbitrary(0,31);
		c=cw.getRandomArbitrary(0,31);
		d=cw.getRandomArbitrary(0,31);
		e=cw.getRandomArbitrary(0,31);
		f=cw.getRandomArbitrary(0,31);
		
		var s1=[];
		var s2=[];
		var s3=[];
		var s4=[];
		for(var i=0;i<sumando1.length;i++){
			s1[i]=sumando1[i]+opcion1[i];
			s2[i]=sumando2[i]-opcion1[i];
			s3[i]=sumando1[i]+opcion1[i]+opcion2[i];
			s4[i]=s2[i]-opcion2[i];
		}
		var cadena='<div id="mostrar11">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Suma ABN</h1>';
		cadena=cadena +'<h3>'+(e11+1)+'/10 Pulsa las casillas y seleccinona la opción correcta</h3>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<table class="table table-bordered" id="suma">';
		cadena=cadena +'<thead>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td><h3>Suma <i class="fas fa-plus-circle"></i></h3></td>';
		cadena=cadena +'<td><h3>'+sumando1[e11]+'</h3></td>';
		cadena=cadena +'<td><h3>'+sumando2[e11]+'</h3></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</thead>';
		cadena=cadena +'<tbody>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td><h3>'+opcion1[e11]+'</h3></td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown">' ;
		cadena=cadena+'<button id="btnS1" type="button" class="btn '+btn[0]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disable[0]+'>'+btn2[0]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s1" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+a+'""><h4 style="text-align:center;">'+a+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s1[e11]+'""><h4 style="text-align:center;">'+s1[e11]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+b+'""><h4 style="text-align:center;">'+b+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS2" type="button" class="btn '+btn[1]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disable[1]+'>'+btn2[1]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s2" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s2[e11]+'""><h4 style="text-align:center;">'+s2[e11]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+c+'""><h4 style="text-align:center;">'+c+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+d+'""><h4 style="text-align:center;">'+d+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'<tr class="table-info">';
		cadena=cadena +'<td><h3>'+opcion2[e11]+'</h3></td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS3" type="button" class="btn '+btn[2]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disable[2]+'>'+btn2[2]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s3" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+f+'""><h4 style="text-align:center;">'+f+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+e+'""><h4 style="text-align:center;">'+e+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s3[e11]+'""><h4 style="text-align:center;">'+s3[e11]+'</h4></a>';
		cadena=cadena+'</td>';		
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button type="button" class="btn '+btn[3]+' btn-lg dropdown-toggle" data-toggle="dropdown" id="btnS4"  '+disable[3]+'>'+btn2[3]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s4" role="menu" >';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s4[e11]+'""><h4 style="text-align:center;">'+s4[e11]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="1"><h4 style="text-align:center;">1</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="2"><h4 style="text-align:center;">2</h4></a>';
		cadena=cadena+'<p></p>';
		cadena=cadena+'</td>';			
		cadena=cadena +'</tbody>';
		cadena=cadena +'</table>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg " '+disable[4]+'><i class="fas fa-angle-double-right"></i>Siguiente</button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#tablas').append(cadena);

		var StoreValue = []; //Declare array
		$(".dropdown-menu a").click(function(){
			StoreValue = []; //clear array
			StoreValue.push($(this).attr("value")); // add text to array
		});

		$('#s1 a').click(function () {
			btn2[0]=s1[e11];
			disable[0]="disabled";
			var num =StoreValue[0];
			if(num==s1[e11]){
				score++;
				btn[0]="btn-success";
				acierto.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}else{
				btn[0]="btn-danger";
				fallo.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}
		});
		$('#s2 a').click(function () {
			btn2[1]=s2[e11];
			disable[1]="disabled";
			var num =StoreValue[0];
			if(num==s2[e11]){
				score++;
				btn[1]="btn-success";
				acierto.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}else{
				btn[1]="btn-danger";
				fallo.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}
		});
		$('#s3 a').click(function () {
			btn2[2]=s3[e11];
			disable[2]="disabled";
			var num =StoreValue[0];
			if(num==s3[e11]){
				score++;
				btn[2]="btn-success";
				acierto.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}else{
				btn[2]="btn-danger";
				fallo.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}
		});
		$('#s4 a').click(function () {
			btn2[3]=s4[e11];
			disable[3]="disabled";
			disable[4]="";
			var num =StoreValue[0];
			if(num==s4[e11]){
				score++;
				btn[3]="btn-success";
				acierto.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}else{
				btn[3]="btn-danger";
				fallo.play();
				cw.ejercicio11(e11,score,btn,btn2,disable);
			}
		});

		$('#btnHecho').on('click',function(){
			e11++;
			if(e11==10){
				cw.mostrarResultados((score/4),1,11);
			}else{
				btn=["btn-info","btn-info","btn-info","btn-info","btn-info","btn-info"];
				btn2=["Elige","Elige","Elige","Elige"];
				disable=["","","","","disabled"];
				cw.ejercicio11((e11%10),score,btn,btn2,disable);
			}
			
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios1();
		});
		$('#btnInfo').on('click',function(){
			var msg="Pulse en los distintos botones de 'Elegir'";
			msg=msg+"<img src='cliente/images/ayuda/11.png' width='800' height='450' ></img><p></p>";
			msg=msg+"<p>Seleccione uno de las opciones que se le proporcionan</p>";
			msg=msg+"<img src='cliente/images/ayuda/112.png' width='800' height='450' ></img><p></p>";
			msg=msg+"<p>Para continuar con el siguiente ejercicio pulse 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/113.png' width='800' height='450' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}
	this.ejercicio12=function(e12,score,btn,btn2, disable){
		this.limpiar();
		var m="";
		var minuendo=[14,25,8,37,12,8,24,17,10,13];
		var sustraendo=[6,13,3,21,6,4,6,8,3,8];
		var opcion1=[4,3,3,1,2,2,4,7,3,3];
		var opcion2=[2,10,0,20,4,2,2,1,0,5];
		var a,b,c,d,e,f;
		a=cw.getRandomArbitrary(0,31);
		b=cw.getRandomArbitrary(0,31);
		c=cw.getRandomArbitrary(0,31);
		d=cw.getRandomArbitrary(0,31);
		e=cw.getRandomArbitrary(0,31);
		f=cw.getRandomArbitrary(0,31);
		var s1=[];
		var s2=[];
		var s3=[];
		var s4=[];
		for(var i=0;i<minuendo.length;i++){
			s1[i]=minuendo[i]-opcion1[i];
			s2[i]=sustraendo[i]-opcion1[i];
			s3[i]=s1[i]-opcion2[i];
			s4[i]=s2[i]-opcion2[i];
		}
		var cadena='<div id="mostrar12">';
		cadena=cadena+'<button type="button" id="btnInfo" class="btn btn-success btn-lg pull-right"><i class="fas fa-question-circle"></i></button>';
		cadena=cadena +'<h1>Resta ABN</h1>';
		cadena=cadena +'<h3>'+(e12+1)+'/10 Pulsa las casillas y seleccinona la opción correcta</h3>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<table class="table table-bordered" id="resta">';
		cadena=cadena +'<thead>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td><h3>Resta <i class="fas fa-minus-circle"></i></h3></td>';
		cadena=cadena +'<td><h3>'+minuendo[e12]+'</h3></td>';
		cadena=cadena +'<td><h3>'+sustraendo[e12]+'</h3></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</thead>';
		cadena=cadena +'<tbody>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td><h3>'+opcion1[e12]+'</h3></td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown">' ;
		cadena=cadena+'<button id="btnS1" type="button" class="btn '+btn[0]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disable[0]+'>'+btn2[0]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s1" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+a+'""><h4 style="text-align:center;">'+a+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s1[e12]+'""><h4 style="text-align:center;">'+s1[e12]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+b+'""><h4 style="text-align:center;">'+b+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS2" type="button" class="btn '+btn[1]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disable[1]+'>'+btn2[1]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s2" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s2[e12]+'""><h4 style="text-align:center;">'+s2[e12]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+c+'""><h4 style="text-align:center;">'+c+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+d+'""><h4 style="text-align:center;">'+d+'</h4></a>';
		cadena=cadena+'</td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'<tr class="table-info">';
		cadena=cadena +'<td><h3>'+opcion2[e12]+'</h3></td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS3" type="button" class="btn '+btn[2]+' btn-lg dropdown-toggle" data-toggle="dropdown" '+disable[2]+'>'+btn2[2]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s3" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+f+'""><h4 style="text-align:center;">'+f+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+e+'""><h4 style="text-align:center;">'+e+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s3[e12]+'""><h4 style="text-align:center;">'+s3[e12]+'</h4></a>';
		cadena=cadena+'</td>';		
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button type="button" class="btn '+btn[3]+' btn-lg dropdown-toggle" data-toggle="dropdown" id="btnS4" '+disable[3]+'>'+btn2[3]+' <span class="caret"></span></button>';
		cadena=cadena +'<div class="dropdown-menu" id="s4" role="menu" >';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s4[e12]+'""><h4 style="text-align:center;">'+s4[e12]+'</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="1"><h4 style="text-align:center;">1</h4></a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="2"><h4 style="text-align:center;">2</h4></a>';
		cadena=cadena+'<p></p>';
		cadena=cadena+'</td>';			
		cadena=cadena +'</tbody>';
		cadena=cadena +'</table>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg " '+disable[4]+'><i class="fas fa-angle-double-right"></i>Siguiente</button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#tablas').append(cadena);

		var StoreValue = []; //Declare array
		$(".dropdown-menu a").click(function(){
			StoreValue = []; //clear array
			StoreValue.push($(this).attr("value")); // add text to array
		});

		$('#s1 a').click(function () {
			btn2[0]=s1[e12];
			disable[0]="disabled";
			var num =StoreValue[0];
			if(num==s1[e12]){
				score++;
				btn[0]="btn-success";
				acierto.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}else{
				btn[0]="btn-danger";
				fallo.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}
		});
		$('#s2 a').click(function () {
			btn2[1]=s2[e12];
			disable[1]="disabled";
			var num =StoreValue[0];
			if(num==s2[e12]){
				score++;
				btn[1]="btn-success";
				acierto.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}else{
				btn[1]="btn-danger";
				fallo.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}
		});
		$('#s3 a').click(function () {
			btn2[2]=s3[e12];
			disable[2]="disabled";
			var num =StoreValue[0];
			if(num==s3[e12]){
				score++;
				btn[2]="btn-success";
				acierto.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}else{
				btn[2]="btn-danger";
				fallo.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}
		});
		$('#s4 a').click(function () {
			btn2[3]=s4[e12];
			disable[3]="disabled";
			disable[4]="";
			var num =StoreValue[0];
			if(num==s4[e12]){
				score++;
				btn[3]="btn-success";
				acierto.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}else{
				btn[3]="btn-danger";
				fallo.play();
				cw.ejercicio12(e12,score,btn,btn2,disable);
			}
		});

		$('#btnHecho').on('click',function(){
			e12++;
			if(e12==10){
				cw.mostrarResultados((score/4),1,11);
			}else{
				btn=["btn-info","btn-info","btn-info","btn-info","btn-info","btn-info"];
				btn2=["Elige","Elige","Elige","Elige"];
				disable=["","","","","disabled"];
				cw.ejercicio12((e12%10),score,btn,btn2,disable);
			}
			
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios1();
		});

		$('#btnInfo').on('click',function(){
			var msg="Pulse en los distintos botones de 'Elegir'";
			msg=msg+"<img src='cliente/images/ayuda/12.png' width='800' height='450' ></img><p></p>";
			msg=msg+"<p>Seleccione uno de las opciones que se le proporcionan </p>";
			msg=msg+"<img src='cliente/images/ayuda/122.png' width='800' height='450' ></img><p></p>";
			msg=msg+"<p>Para continuar con el siguiente ejercicio pulse 'Siguiente'</p>";
			msg=msg+"<img src='cliente/images/ayuda/123.png' width='800' height='450' ></img><p></p>";
			cw.mostrarModal(msg);
		});
	}

	//Metodo realizado para mostrar la interfaz principal de la suma con el método ABN
//	this.ejercicio11=function(e11,score,btn,btn2){
//		this.limpiar();
//		var m="";
//		var sumando1=[16,15,8,21,4,13,8,15,9,17];
//		var sumando2=[14,7,3,14,3,7,6,6,2,7];
//		var opcion1=[4,5,2,4,3,7,2,5,1,3];
//		var opcion2=[10,2,1,10,0,0,4,1,1,4];
//		
//		var s1=[];
//		var s2=[];
//		var s3=[];
//		var s4=[];
//		for(var i=0;i<sumando1.length;i++){
//			s1[i]=sumando1[i]+opcion1[i];
//			s2[i]=sumando2[i]-opcion1[i];
//			s3[i]=s1[i]+opcion2[i];
//			s4[i]=s2[i]-opcion2[i];
//		}
//		console.log(s1);
//		console.log(s2);
//		console.log(s3);
//		console.log(s4);
//		var cadena='<div id="mostrar11">';
//		cadena=cadena +'<h1>Suma ABN</h1>';
//		cadena=cadena +'<h4>'+(e11+1)+'/10 Pulsa las casillas y seleccinona la opción correcta</h4>';
//		cadena=cadena +'<p></p>';
//		cadena=cadena +'<table class="table">';
//		cadena=cadena +'<thead>';
//		cadena=cadena +'<tr>';
//		cadena=cadena +'<td> Suma</td>';
//		cadena=cadena +'<td>'+sumando1[e11]+'</td>';
//		cadena=cadena +'<td>'+sumando2[e11]+'</td>';
//		cadena=cadena +'</tr>';
//		cadena=cadena +'</thead>';
//		cadena=cadena +'<tbody>';
//		cadena=cadena +'<tr>';
//		cadena=cadena +'<td>'+opcion1[e11]+'</td>';
//		cadena=cadena +'<td><button type="button" id="btn11" class="btn '+btn[0]+' btn-lg">'+btn2[0]+'</button></td>';
//		cadena=cadena +'<td><button type="button" id="btn12" class="btn '+btn[1]+' btn-lg">'+btn2[1]+'</button></td>';
//		cadena=cadena +'</tr>';
//		cadena=cadena +'<tr class="table-info">';
//		cadena=cadena +'<td >'+opcion2[e11]+'</td>';
//		cadena=cadena +'<td><button type="button" id="btn21" class="btn '+btn[2]+' btn-lg">'+btn2[2]+'</button></td>';
//		cadena=cadena +'<td><button type="button" id="btn22" class="btn '+btn[3]+' btn-lg">'+btn2[3]+'</button></td>';
//		cadena=cadena +'</tr>';
//		cadena=cadena +'<tr>';
//		cadena=cadena +'<td></td>';
//		cadena=cadena +'<td></td>';
//		cadena=cadena +'<td></td>';
//		cadena=cadena +'</tr>';
//		cadena=cadena +'</tbody>';
//		cadena=cadena +'</table>';
//		cadena=cadena +'<p></p>';
//		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg "><i class="fas fa-angle-double-right"></i>Siguiente</button>';
//		cadena=cadena +'<p></p>';
//		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
//		cadena =cadena+ '</div>';
//		$('#tablas').append(cadena);

//		$('#btn11').on('click',function(){
//			cw.modal(0,s1[e11],score,e11,btn,btn2);
//		});
//		$('#btn12').on('click',function(){
//			cw.modal(1,s2[e11],score,e11,btn,btn2);
//		});
//		$('#btn21').on('click',function(){
//			cw.modal(2,s3[e11],score,e11,btn,btn2);
//		});
//		$('#btn22').on('click',function(){
//			cw.modal(3,s4[e11],score,e11,btn,btn2);
//		});
		
//		$('#btnHecho').on('click',function(){
//			e11++;
//			if(e11==10){
//				cw.mostrarResultados((score/4),1,11);
//			}else{
//				btn=["btn-light","btn-light","btn-light","btn-light"];
//				btn2=["x","x","x","x"];
//				cw.ejercicio11((e11%10),score,btn,btn2);
//			}
			
//		});
//		$('#btnAtras').on('click',function(){
//			cw.mostrarEjercicios1();
//		});

//	}

	//Método para mostrar los distintos modales que hay en el 
//	this.modal=function(n,solucion,score,e11,btn,btn2){
//		cw.limpiarModal();
//		lista=[];
//		for(var j=0; j<4;j++){
//			lista[j]=solucion+j;
//		}
//		var cadena='<div id="modal"><h4>Elige la opción corecta para esa casilla</h4>';		
//		cadena =cadena+'<div class="input-group">';
//	  	for(var i=0;i<lista.length;i++){
//	  		cadena=cadena+'<div><input type="radio" class="form-check-input" name="optradio" value="'+lista[i]+'"> '+lista[i]+'</div>';
//	  	}
//		cadena=cadena+'</div>';
//		$('#contenidoModal').append(cadena);
//		$('#contenidoModal').append('<button type="button" id="opcion" class="btn btn-secondary"><i class="fas fa-angle-double-right"></i> Hecho</button>');
//		$('#modalGeneral').modal("show");
//		
//		var num=undefined;
//		$('.input-group input').on('change', function() {
//		   num=$('input[name=optradio]:checked', '.input-group').val(); 
//		});
//		$('#opcion').click(function(){
//			btn2[n]=solucion;
//			if(num==solucion){
//				score++;
//				btn[n]="btn-success";
//				cw.ejercicio11(e11,score,btn,btn2);
//			}else{
//				btn[n]="btn-danger";
//				cw.ejercicio11(e11,score,btn,btn2);
//			}
//		});

//	}

	
	//Función para mostrar los resultados obtenidos por el alumno
	//dependiendo de la puntuación obtenida se mostrará una interfaz u otra
	this.mostrarResultados=function(scores,curso,e){
		this.limpiar();
		btn=["btn-info","btn-info","btn-info","btn-info"];
		disable=["","","","","disabled"];
		btn2=["Elige","Elige","Elige","Elige"];
		var disable=["","","","","disabled"];
		var disabled=["disabled","disabled","disabled","disabled","disabled","disabled"];
		var matriz=new Array();
		var disabled2=["","","","","",""];
		var b=[];
		var b2=[];
		for(var x=0;x<7;x++){
			matriz[x]=new Array();
			for(var y=0;y<3;y++){
				matriz[x][y]=undefined;
			}
		}
		for(var y=0;y<12;y++){
			b[y]="Elige";
			b2[y]="btn-info";
		}
		var cadena='<div id="mostrarR">';
		cadena=cadena +'<h1>RESULTADOS</h1>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<h1>'+scores+'/10</h1>';
		if(scores>=8){
			cadena=cadena +'<p></p>';
			cadena=cadena +'<h1>!Enhorabuena!</h1>';
			cadena=cadena +'<p></p>';
			cadena=cadena +'<img src="cliente/images/scores/mb2.jpg" class="rounded" alt="Eniun">';
			cadena=cadena +'<p></p>';

		}else if(scores<8 && scores>=5){
			cadena=cadena +'<p></p>';
			cadena=cadena +'<h3> ¡Bien hecho!</h3>';
			cadena=cadena +'<p></p>';
			cadena=cadena +'<img src="cliente/images/scores/b.jpg" class="rounded" alt="Eniun">';
			cadena=cadena +'<p></p>';

		}else{
			cadena=cadena +'<p></p>';
			cadena=cadena +'<h3> Vuelve a intentarlo </h3>';
			cadena=cadena +'<p></p>';
			cadena=cadena +'<img src="cliente/images/scores/m1.jpg" class="rounded" alt="Eniun">';
			cadena=cadena +'<p></p>';

		}
		cadena=cadena+'<button type="button" id="btnRepetir" class="btn btn-success btn-lg" style="margin: 50px"><i class="fas fa-redo"></i> Repetir Ejercicio</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg" style="margin: 50px"><i class="fas fa-arrow-circle-left"></i> Menú principal</button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);
		$('#btnAtras').on('click',function(){
			ws.mostrarEjercicios(curso);
		});
		$('#btnRepetir').on('click',function(){
			if(e==31){
				cw.ejercicio31(0,1,0);
			}else if(e==32){
				cw.ejercicio32(0,1,0);
			}else if(e==41){
				cw.ejercicio41(0,1,0);
			}else if(e==42){
				cw.ejercicio42(0,1,0);
			}else if(e==51){
				cw.ejercicio51(0,1,0,0);
			}else if(e==52){
				cw.ejercicio52(0,1,0,0);
			}else if(e==11){
				cw.ejercicio11(0,0,btn,btn2,disable);
			}else if(e==12){
				cw.ejercicio12(0,0,btn,btn2,disable);
			}else if(e=13){
				cw.ejercicio13(0,0,1,matriz,disabled,disabled2,b,b2);
			}else if(e=14){
				cw.ejercicio14(0,0,1,matriz,disabled,disabled2,b,b2);
			}
			
		});


	}
	//Función para mostrar un mensaje dentro de un modal
	this.mostrarModal=function(msg){
		this.limpiarModal();	
		var cadena="<div id='info'><p>"+msg+"</p> </div>";
		//cadena=cadena+ '<button type="button" id="cerrar" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>';
		$('#contenidoModal').append(cadena);
		$('#modalGeneral').modal("show");

	}
	//funcion para mostrar dentro de un modal si se quiere o no eliminar a un alumno.
	this.confirmacion=function(nombre){
		this.limpiarModal();
		var cadena="<div id='confirmacion'><h4>¿Estas seguro de que quieres eliminar al alumno '"+nombre+"'?</h4>";
		cadena=cadena+ '<button type="button" id="btnSi" class="btn btn-success" style="margin: 20px"><i class="fas fa-check"></i> Si</button>';
		cadena=cadena+ '<button type="button" id="btnNo" class="btn btn-danger" style="margin: 20px"><i class="fas fa-times"></i> No</button>';
		cadena=cadena +'</div>';
		$('#contenidoModal').append(cadena);
		$('#modalGeneral').modal("show");
		$('#btnSi').on('click',function(){
			cw.limpiarModal();
			ws.eliminarAlumno(nombre);
			cw.mostrarModal("<h4>El alumno '"+nombre+"' ha sido eliminado correctamente<h4>");
		});
		$('#btnNo').on('click',function(){
			cw.limpiarModal();
			cw.mostrarModal("<h4>No se ha eliminado ningún alumno<h4>");
		});
	}
	//funcion para mostrar dentro de un modal si se quiere o no eliminar una clase.
	this.confirmacionClase=function(clase){
		this.limpiarModal();
		var cadena="<div id='confirmacion'><h4>¿Estas seguro de que quieres eliminar la clase '"+clase+"'?</h4>";
		cadena=cadena+ '<button type="button" id="btnSi" class="btn btn-success" style="margin: 20px"><i class="fas fa-check"></i> Si</button>';
		cadena=cadena+ '<button type="button" id="btnNo" class="btn btn-danger" style="margin: 20px"><i class="fas fa-times"></i> No</button>';
		cadena=cadena +'</div>';
		$('#contenidoModal').append(cadena);
		$('#modalGeneral').modal("show");
		$('#btnSi').on('click',function(){
			cw.limpiarModal();
			ws.eliminarClase(clase);
		});
		$('#btnNo').on('click',function(){
			cw.limpiarModal();
			cw.mostrarModal("<h4>No se ha eliminado ninguna clase<h4>");
		});
	}
	//Función para limpiar todos los modales que vayan apareciendo
	this.limpiarModal=function(){
		$('#info').remove();
		$('#confirmacion').remove();
		$('#modal').remove();
		$('#modalFondo').remove();					
	}
	//Función necesaria para que no se muestren ninguna de las interfaces implementadas anteriormente
	this.limpiar=function(){
		$('#mostrarCC').remove();
		$('#mostrarLC').remove();
		$('#mostrarLA').remove();
		$('#mostrarC').remove();
		$('#mostrarI').remove();
		$('#registrarA').remove();
		$('#mostrarIcono').remove();
		$('#mostrar3').remove();
		$('#mostrar31').remove();
		$('#mostrar32').remove();
		$('#mostrar4').remove();
		$('#mostrar41').remove();
		$('#mostrar42').remove();
		$('#mostrar5').remove();
		$('#mostrar51').remove();
		$('#mostrar52').remove();
		$('#mostrar1').remove();
		$('#mostrar11').remove();
		$('#mostrar12').remove();
		$('#mostrar13').remove();
		$('#mostrar14').remove();
		$('#mostrarR').remove();
		$('#mostrarsearch').remove();
		$('#r31').remove();
		$('#r32').remove();
		$('#r41').remove();
		$('#r42').remove();
		$('#r51').remove();
		$('#r52').remove();
	}

	this.getRandomArbitrary=function(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	/*this.getRandomArray=function(){
		var lista=[];
		for(var i =0;i<10;i++){
			lista[i]=cw.getRandomArbitrary(0,10);
		}

		return lista;
	}*/

}
