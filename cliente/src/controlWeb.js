function ControlWeb($){

	//Interfaz de inicio don de se da la opción la creación o la búsqueda de clase.
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

	//Función necesaria para mostrar la lista de clases que han sido creadas y poder entrar en una de ellas
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

	//Función necesaria para recoger los valores que permitirán que se cree una nueva clase
	//Es la interfaz principal para la creación de clase : nombre, profesor, y num participantes
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

	//Función que  que muestra el boton necesario para acceder a la interfaz de registro de el alumno
	//es parte de la interfaz de la información sobre la clase
	this.mostrarClase=function(){
		this.limpiar();
		var cadena='<div id="mostrarC">';
		cadena =cadena+ '<div class="form-group">';
		cadena=cadena+'<button type="button" id="btnRegistrarAlumno" class="btn btn-primary btn-lg"><i class="fas fa-user-plus"></i> Registrar alumno</button>';
		cadena =cadena+ '</div>';
		cadena=cadena +'</div>';
		$('#registro').append(cadena);
		$('#btnRegistrarAlumno').on('click',function(){
			cw.registrarAlumno(0);
		});	
	}

	//Interfaz necesaria para registrar toda la información sobre el alumno
	this.registrarAlumno=function(num){
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
      	//cadena=cadena +'<button id="btnIcono" type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown"><img src="cliente/images/avatar/'+num+'.png" ></img></button>';
		cadena=cadena+'<button type="button" id="btnRegistrarA" class="btn btn-success btn-lg"> <i class="fas fa-user-plus"></i> Registrar alumno</button>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena=cadena +'</div>';
		var cadena2 = '<div id="mostrarIcono" style="margin-bottom: 25px;"><h3>Icono:</h3>';
      	cadena2=cadena2 +'<button id="btnIcono" type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown"><img src="cliente/images/avatar/'+num+'.png" width="100" height="100"></img></button>';
		cadena2=cadena2 +'</div>';
		$('#registroA').append(cadena);
		$('#iconoR').append(cadena2);
		$('#btnRegistrarA').on('click',function(){

			var nalumno=$('#nalumno').val();
			var apellido=$('#apellido').val();
			var curso=$('#curso').val();
			if(nalumno!=""){
				ws.registrarAlumno(nalumno,apellido,curso,num);
			}
		});
		$('#btnIcono').on('click',function(){
			num++;
			cw.registrarAlumno(num%12);
		});
		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});

	}

	//Interfaz donde se listan todos los alumnos de una misma clase 
	this.listarAlumnos=function(lista){
		var cadena='<div id="mostrarLA">';
		if(lista[0]!=undefined){
			cadena=cadena +'<h1>'+lista[0].clase+'</h1>';
			cadena =cadena+ '<div class="list-group">';
			cadena=cadena +'<label for ="Clases">Alumnos:</label>';
			for(var i=0 ; i<lista.length;i++){
				cadena =cadena+ '<a style= "font-size: x-large;" href="#" value="'+lista[i].curso+'" class="list-group-item"> <img src="cliente/images/avatar/'+lista[i].icono+'.png" width="50" height="50"></img>	'+lista[i].nombre+' '+lista[i].apellidos+' <span style= "font-size: large;" class="badge" > Curso: '+lista[i].curso+'º</span></a>';
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
	}

	//Interfaz necesaria para acceder a las distintas interfaces dependiendo de el curso en el que
	//se haya registrado al alumno, para ello se pasara por parámetro el curso del alumno
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

	//Interfaz donde se muestran los ejercicios que pueden realizar los niños de 3 años
	this.mostrarEjercicios3=function(){
		this.limpiar();
		var cadena='<div id="mostrar3">';
		cadena=cadena +'<h1>EJERCICIOS DE 3 AÑOS</h1>';
		cadena=cadena +'<h3>Identificación de números</h3>';
		cadena=cadena+'<button type="button" id="btn31" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn32" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/2.png"></img></button>';
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
		$('#btn31').on('click',function(){
			cw.ejercicio31(0,1,0);
		});
		$('#btn32').on('click',function(){
			cw.ejercicio32(0,1,0);
		});
	}
	// Interfaz de  el primer ejercicio de identificación de números del 1 al tres para niños de 3 años
	//en este caso será necesario introducir por parámetro el número de ejercicio en el que nos encontramos
	//el número de la imagen que queremos mostrar y la puntuación.
	this.ejercicio31=function(e31,num,score){
		this.limpiar();
		var cadena='<div id="mostrar31">';
		cadena=cadena +'<h1>Identificacion de números del 1 al 3</h1>';
		cadena=cadena +'<h3>'+num+'/10 Seleccione el número de objetos de la imagen</h3>';
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
			cw.comprobar31(e31,num,score,3);
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios3();
		});
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon al 1º ejercicio para niños de 3 años
	this.comprobar31=function(e31,num,score,b){
		var m="";
		let soluciones=[3,2,1,3,3,1,2,1,3,2];
		let lights=["btn-light","btn-light","btn-light"];
		lights[(soluciones[e31]-1)]="btn-success";
		if (soluciones[e31]==b){
				m="¡Enhorabuena, has acertado!";
				score++;
				for(var i=0;i<lights.length;i++){
					if(i==(b-1)){
						lights[i]="btn-success";
					}
				}
				cw.resultado31(e31,num,score,lights,m);}
		else{
				m="Ohhh, has fallado, intentalo otra vez";

				for(var j=0;j<lights.length;j++){
					if(j==(b-1)){
						lights[j]="btn-danger";
					}
				}
				cw.resultado31(e31,num,score,lights,m);
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
		cadena=cadena +'<h1>Identificacion de números del 1 al 6</h1>';
		cadena=cadena +'<h3>'+num+'/10 Seleccione el número de objetos de la imagen</h3>';
		cadena=cadena +'<img src="cliente/images/32/'+e32+'.png" class="rounded" alt="Eniun">';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btn1" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn6" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/num/6.png"></img></button>';
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
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon del 2 ejercicio para niños de 3 años
	this.comprobar32=function(e32,num,score,b){
		var m="";
		var soluciones=[5,4,1,5,2,6,3,2,4,3];
		var l=["btn-light","btn-light","btn-light","btn-light","btn-light","btn-light"];
		l[(soluciones[e32]-1)]="btn-success";
		if (soluciones[e32]==b){
				m="¡Enhorabuena, has acertado!";
				score++;
				for(var i=0;i<l.length;i++){
					if(i==(b-1)){
						l[i]="btn-success";
					}
				}
				cw.resultado32(e32,num,score,l,m);
		}
		else{
				m="Ohhh, has fallado, intentalo otra vez";

				for(var j=0;j<l.length;j++){
					
					if(j==(b-1)){
						l[j]="btn-danger";
					}
				}
				cw.resultado32(e32,num,score,l,m);
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
		cadena=cadena+'<button type="button" id="btn1" class="btn '+b[0]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/1.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn2" class="btn '+b[1]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/2.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn3" class="btn '+b[2]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/3.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn4" class="btn '+b[3]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/4.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn5" class="btn '+b[4]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/5.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn6" class="btn '+b[5]+' btn-lg" style="margin: 50px"><img src="cliente/images/num/6.png"></img></button>';
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
		cadena=cadena +'<h1>EJERCICIOS DE 4 AÑOS</h1>';
		cadena=cadena+'<button type="button" id="btn41" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/recta.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn42" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/arcoiris.png"></img></button>';
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
		$('#btn41').on('click',function(){
			cw.ejercicio41(0,1,0);
		});
		$('#btn42').on('click',function(){
			cw.ejercicio42(0,1,0);
		});

	}
	// Interfaz del primer ejercicio para niños de 4 años de recta numérica
	this.ejercicio41=function(e41,num,score){
		this.limpiar();
		var inicio=[3,5,10,1,2,7,6,4,9,8];
		var desplazamiento=[2,-1,-2,5,1,3,1,5,-8,-6];
		var soluciones=[5,4,8,6,3,10,7,9,1,2];
		var cadena='<div id="mostrar41">';
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
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon al 1º ejercicio para niños de 4 años
	this.comprobar41=function(e41,num,score,b){
		var m="";
		var soluciones=[5,4,8,6,3,10,7,9,1,2];
		var l=["btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light"];
		l[(soluciones[e41]-1)]="btn-success";
		if (soluciones[e41]==b){
				m="¡Enhorabuena, has acertado!";
				score++;
				for(var i=0;i<l.length;i++){
					if(i==(b-1)){
						l[i]="btn-success";
					}
				}
				cw.resultado41(e41,num,score,l,m);
		}
		else{
				m="Ohhh, has fallado, intentalo otra vez";

				for(var j=0;j<l.length;j++){
					
					if(j==(b-1)){
						l[j]="btn-danger";
					}
				}
				cw.resultado41(e41,num,score,l,m);
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
	}
	//Función para comprobar que la opción elegida corresponde con la solucíon al 2º ejercicio para niños de 4 años
	this.comprobar42=function(e42,num,score,b){
		var m="";
		var soluciones=[5,1,8,3,1,10,4,2,9,7];
		var l=["btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light","btn-light"];
		l[(soluciones[e42]-1)]="btn-success";
		if (soluciones[e42]==b){
				m="¡Enhorabuena, has acertado!";
				score++;
				for(var i=0;i<l.length;i++){
					if(i==(b-1)){
						l[i]="btn-success";
					}
				}
				cw.resultado42(e42,num,score,l,m);
		}
		else{
				m="Ohhh, has fallado, intentalo otra vez";

				for(var j=0;j<l.length;j++){
					
					if(j==(b-1)){
						l[j]="btn-danger";
					}
				}
				cw.resultado42(e42,num,score,l,m);
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
		cadena=cadena +'<h1>EJERCICIOS DE 5 AÑOS</h1>';
		cadena=cadena+'<button type="button" id="btn51" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/s5.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn52" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/r5.png"></img></button>';
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
		$('#btn51').on('click',function(){
			cw.ejercicio51(0,1,0,0);
		});
		$('#btn52').on('click',function(){
			cw.ejercicio52(0,1,0,0);
		});

	}
	// Interfaz del primer ejercicio para niños de 5 años de suma con objetos
	this.ejercicio51=function(e51,num,score,count){
		this.limpiar();
		var m="";
		var soluciones=[5,7,9,2,6,4,10,3,8,6];
		var cadena='<div id="mostrar51">';
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
				m="¡Enhorabuena, has acertado!";
				score++;
				cw.resultado51(e51,num,score,count,"btn-success",m);
			}else{
				m="Ohhh, has fallado, intentalo otra vez";
				cw.resultado51(e51,num,score,count,"btn-danger",m);
			}
		});
	}
	//Interfaz para mostrar la retroalimentación del ejercicio 1º para niños de cinco años
	this.resultado51=function(e51,num,score,count,b,m){
		this.limpiar();
		var cadena='<div id="r51">';
		cadena=cadena +'<h1>Suma con objetos</h1>';
		cadena=cadena +'<h3>'+m+'<h3>';
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
				m="¡Enhorabuena, has acertado!";
				score++;
				cw.resultado52(e52,num,score,count,"btn-success",m);
			}else{
				m="Ohhh, has fallado, intentalo otra vez";
				cw.resultado52(e52,num,score,count,"btn-danger",m);
			}

		});
	}

	//Interfaz para mostrar la retroalimentación del ejercicio 2º para niños de cinco años
	this.resultado52=function(e52,num,score,count,b,m){
		this.limpiar();
		var cadena='<div id="r52">';
		cadena=cadena +'<h1>Resta con objetos</h1>';
		cadena=cadena +'<h3>'+m+'<h3>';
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
		var btn=["btn-light","btn-light","btn-light","btn-light"];
		var btn2=["x","x","x","x"];
		var cadena='<div id="mostrar1">';
		cadena=cadena +'<h1>EJERCICIOS DE 1º PRIMARIA</h1>';
		cadena=cadena+'<button type="button" id="btn11" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/suma.png"></img></button>';
		cadena=cadena+'<button type="button" id="btn12" class="btn btn-light btn-lg" style="margin: 50px"><img src="cliente/images/resta.png"></img></button>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<label style="margin-right: 120px">Suma</label>';
		cadena=cadena +'<label style="margin-left: 120px ">Resta</label>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#ejercicios').append(cadena);

		$('#btn11').on('click',function(){
			cw.ejercicio111(0,0,btn,btn2);
		});
		$('#btn12').on('click',function(){
			cw.ejercicio12(0,0,btn,btn2);
		});

		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});

	}
	this.ejercicio111=function(e11,score,btn,btn2){
		this.limpiar();
		var m="";
		var sumando1=[16,15,8,21,4,13,8,15,9,17];
		var sumando2=[14,7,3,14,3,7,6,6,2,7];
		var opcion1=[4,5,2,4,3,7,2,5,1,3];
		var opcion2=[10,2,1,10,0,0,4,1,1,4];
		
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
		cadena=cadena +'<h1>Suma ABN</h1>';
		cadena=cadena +'<h4>'+(e11+1)+'/10 Pulsa las casillas y seleccinona la opción correcta</h4>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<table class="table">';
		cadena=cadena +'<thead>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td> Suma</td>';
		cadena=cadena +'<td>'+sumando1[e11]+'</td>';
		cadena=cadena +'<td>'+sumando2[e11]+'</td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</thead>';
		cadena=cadena +'<tbody>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td>'+opcion1[e11]+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown">' ;
		cadena=cadena+'<button id="btnS1" type="button" class="btn '+btn[0]+' dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >'+btn2[0]+'</button>';
		cadena=cadena +'<div class="dropdown-menu" id="s1" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s1[e11]+'"">'+s1[e11]+'</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s1[(e11+2)%10]+'"">'+s1[(e11+2)%10]+'</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s1[(e11-4)%10]+'"">'+s1[(e11+4)%10]+'</a>';
		cadena=cadena+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS2" type="button btn-info" class="btn '+btn[1]+' dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">'+btn2[1]+'</button>';
		cadena=cadena +'<div class="dropdown-menu" id="s2" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s2[e11]+'"">'+s2[e11]+'</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s2[(e11+2)%10]+'"">'+s2[(e11+2)%10]+'</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s2[(e11-4)%10]+'"">'+s2[(e11+4)%10]+'</a>';
		cadena=cadena+'</td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'<tr class="table-info">';
		cadena=cadena +'<td >'+opcion2[e11]+'</td>';
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button id="btnS3" type="button btn-info" class="btn '+btn[2]+' dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">'+btn2[2]+'</button>';
		cadena=cadena +'<div class="dropdown-menu" id="s3" role="menu">';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s3[e11]+'"">'+s3[e11]+'</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s3[(e11+2)%10]+'"">'+s3[(e11+2)%10]+'</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s3[(e11-4)%10]+'"">'+s3[(e11+4)%10]+'</a>';
		cadena=cadena+'</td>';		
		cadena=cadena +'<td>';
		cadena = cadena + '<div class="dropdown" >' ;
		cadena=cadena+'<button type="button btn-info" class="btn '+btn[3]+' dropdown-toggle" data-toggle="dropdown" id="btnS4" aria-haspopup="true" aria-expanded="false" >'+btn2[3]+'</button>';
		cadena=cadena +'<div class="dropdown-menu" id="s4" role="menu" >';
		cadena = cadena + '<a class="dropdown-item" href="#" value="'+s4[e11]+'"">'+s4[e11]+'</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="1">1</a>';
		cadena=cadena+'<p></p>';
		cadena = cadena + '<a class="dropdown-item" href="#" value="2">2</a>';
		cadena=cadena+'<p></p>';
		cadena=cadena+'</td>';			
		cadena=cadena +'<tr>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</tbody>';
		cadena=cadena +'</table>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg "><i class="fas fa-angle-double-right"></i>Siguiente</button>';
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
			var num =StoreValue[0];
			if(num==s1[e11]){
				score++;
				btn[0]="btn-success";
				cw.ejercicio111(e11,score,btn,btn2);
			}else{
				btn[0]="btn-danger";
				cw.ejercicio111(e11,score,btn,btn2);
			}
		});
		$('#s2 a').click(function () {
			btn2[1]=s2[e11];
			var num =StoreValue[0];
			if(num==s2[e11]){
				score++;
				btn[1]="btn-success";
				cw.ejercicio111(e11,score,btn,btn2);
			}else{
				btn[1]="btn-danger";
				cw.ejercicio111(e11,score,btn,btn2);
			}
		});
		$('#s3 a').click(function () {
			btn2[2]=s3[e11];
			var num =StoreValue[0];
			if(num==s3[e11]){
				score++;
				btn[2]="btn-success";
				cw.ejercicio111(e11,score,btn,btn2);
			}else{
				btn[2]="btn-danger";
				cw.ejercicio111(e11,score,btn,btn2);
			}
		});
		$('#s4 a').click(function () {
			btn2[3]=s4[e11];
			var num =StoreValue[0];
			if(num==s4[e11]){
				score++;
				btn[3]="btn-success";
				cw.ejercicio111(e11,score,btn,btn2);
			}else{
				btn[3]="btn-danger";
				cw.ejercicio111(e11,score,btn,btn2);
			}
		});

		$('#btnHecho').on('click',function(){
			e11++;
			if(e11==10){
				cw.mostrarResultados((score/4),1,11);
			}else{
				btn=["btn-light","btn-light","btn-light","btn-light"];
				btn2=["x","x","x","x"];
				cw.ejercicio111((e11%10),score,btn,btn2);
			}
			
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios1();
		});
	}

	//Metodo realizado para mostrar la interfaz principal de la suma con el método ABN
	this.ejercicio11=function(e11,score,btn,btn2){
		this.limpiar();
		var m="";
		var sumando1=[16,15,8,21,4,13,8,15,9,17];
		var sumando2=[14,7,3,14,3,7,6,6,2,7];
		var opcion1=[4,5,2,4,3,7,2,5,1,3];
		var opcion2=[10,2,1,10,0,0,4,1,1,4];
		
		var s1=[];
		var s2=[];
		var s3=[];
		var s4=[];
		for(var i=0;i<sumando1.length;i++){
			s1[i]=sumando1[i]+opcion1[i];
			s2[i]=sumando2[i]-opcion1[i];
			s3[i]=s1[i]+opcion2[i];
			s4[i]=s2[i]-opcion2[i];
		}
		console.log(s1);
		console.log(s2);
		console.log(s3);
		console.log(s4);
		var cadena='<div id="mostrar11">';
		cadena=cadena +'<h1>Suma ABN</h1>';
		cadena=cadena +'<h4>'+(e11+1)+'/10 Pulsa las casillas y seleccinona la opción correcta</h4>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<table class="table">';
		cadena=cadena +'<thead>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td> Suma</td>';
		cadena=cadena +'<td>'+sumando1[e11]+'</td>';
		cadena=cadena +'<td>'+sumando2[e11]+'</td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</thead>';
		cadena=cadena +'<tbody>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td>'+opcion1[e11]+'</td>';
		cadena=cadena +'<td><button type="button" id="btn11" class="btn '+btn[0]+' btn-lg">'+btn2[0]+'</button></td>';
		cadena=cadena +'<td><button type="button" id="btn12" class="btn '+btn[1]+' btn-lg">'+btn2[1]+'</button></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'<tr class="table-info">';
		cadena=cadena +'<td >'+opcion2[e11]+'</td>';
		cadena=cadena +'<td><button type="button" id="btn21" class="btn '+btn[2]+' btn-lg">'+btn2[2]+'</button></td>';
		cadena=cadena +'<td><button type="button" id="btn22" class="btn '+btn[3]+' btn-lg">'+btn2[3]+'</button></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</tbody>';
		cadena=cadena +'</table>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg "><i class="fas fa-angle-double-right"></i>Siguiente</button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#tablas').append(cadena);

		$('#btn11').on('click',function(){
			cw.modal(0,s1[e11],score,e11,btn,btn2);
		});
		$('#btn12').on('click',function(){
			cw.modal(1,s2[e11],score,e11,btn,btn2);
		});
		$('#btn21').on('click',function(){
			cw.modal(2,s3[e11],score,e11,btn,btn2);
		});
		$('#btn22').on('click',function(){
			cw.modal(3,s4[e11],score,e11,btn,btn2);
		});
		
		$('#btnHecho').on('click',function(){
			e11++;
			if(e11==10){
				cw.mostrarResultados((score/4),1,11);
			}else{
				btn=["btn-light","btn-light","btn-light","btn-light"];
				btn2=["x","x","x","x"];
				cw.ejercicio11((e11%10),score,btn,btn2);
			}
			
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios1();
		});

	}
	//Método para mostrar los distintos modales que hay en el 
	this.modal=function(n,solucion,score,e11,btn,btn2){
		cw.limpiarModal();
		lista=[];
		for(var j=0; j<4;j++){
			lista[j]=solucion+j;
		}
		var cadena='<div id="modal"><h4>Elige la opción corecta para esa casilla</h4>';		
		cadena =cadena+'<div class="input-group">';
	  	for(var i=0;i<lista.length;i++){
	  		cadena=cadena+'<div><input type="radio" class="form-check-input" name="optradio" value="'+lista[i]+'"> '+lista[i]+'</div>';
	  	}
		cadena=cadena+'</div>';
		$('#contenidoModal').append(cadena);
		$('#contenidoModal').append('<button type="button" id="opcion" class="btn btn-secondary"><i class="fas fa-angle-double-right"></i> Hecho</button>');
		$('#modalGeneral').modal("show");
		
		var num=undefined;
		$('.input-group input').on('change', function() {
		   num=$('input[name=optradio]:checked', '.input-group').val(); 
		});
		$('#opcion').click(function(){
			btn2[n]=solucion;
			if(num==solucion){
				score++;
				btn[n]="btn-success";
				cw.ejercicio11(e11,score,btn,btn2);
			}else{
				btn[n]="btn-danger";
				cw.ejercicio11(e11,score,btn,btn2);
			}
		});

	}

	//Método realizado para mostrar la interfaz principal de la resta con el método ABN 
	this.ejercicio12=function(e12,score,btn,btn2){
		this.limpiar();
		var m="";
		var minuendo=[14,25,8,37,12,8,24,17,10,13];
		var sustraendo=[6,13,3,21,6,4,6,8,3,8];
		var opcion1=[4,3,3,1,2,2,4,7,3,3];
		var opcion2=[2,10,0,20,4,2,2,1,0,5];
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
		cadena=cadena +'<h1>Resta ABN</h1>';
		cadena=cadena +'<h4>'+(e12+1)+'/10 Pulsa las casillas y seleccinona la opción correcta</h4>';
		cadena=cadena +'<p></p>';
		cadena=cadena +'<table class="table table-lg">';
		cadena=cadena +'<thead>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td>Resta</td>';
		cadena=cadena +'<td>'+minuendo[e12]+'</td>';
		cadena=cadena +'<td>'+sustraendo[e12]+'</td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</thead>';
		cadena=cadena +'<tbody>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td>'+opcion1[e12]+'</td>';
		cadena=cadena +'<td><button type="button" id="btn11" class="btn '+btn[0]+' btn-lg">'+btn2[0]+'</button></td>';
		cadena=cadena +'<td><button type="button" id="btn12" class="btn '+btn[1]+' btn-lg">'+btn2[1]+'</button></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'<tr class="table-info">';
		cadena=cadena +'<td >'+opcion2[e12]+'</td>';
		cadena=cadena +'<td><button type="button" id="btn21" class="btn '+btn[2]+' btn-lg">'+btn2[2]+'</button></td>';
		cadena=cadena +'<td><button type="button" id="btn22" class="btn '+btn[3]+' btn-lg">'+btn2[3]+'</button></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'<tr>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'<td></td>';
		cadena=cadena +'</tr>';
		cadena=cadena +'</tbody>';
		cadena=cadena +'</table>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnHecho" class="btn btn-success btn-lg "><i class="fas fa-angle-double-right"></i>Siguiente</button>';
		cadena=cadena +'<p></p>';
		cadena=cadena+'<button type="button" id="btnAtras" class="btn btn-primary btn-lg pull-right"><i class="fas fa-arrow-circle-left"></i></button>';
		cadena =cadena+ '</div>';
		$('#tablas').append(cadena);

		$('#btn11').on('click',function(){
			cw.modal1(0,s1[e12],score,e12,btn,btn2);
		});
		$('#btn12').on('click',function(){
			cw.modal1(1,s2[e12],score,e12,btn,btn2);
		});
		$('#btn21').on('click',function(){
			cw.modal1(2,s3[e12],score,e12,btn,btn2);
		});
		$('#btn22').on('click',function(){
			cw.modal1(3,s4[e12],score,e12,btn,btn2);
		});
		$('#btnHecho').on('click',function(){
			e12++;
			if(e12==10){
				cw.mostrarResultados((score/4),1,12);
			}else{
				btn=["btn-light","btn-light","btn-light","btn-light"];
				btn2=["x","x","x","x"];
				cw.ejercicio12((e12%10),score,btn,btn2);
			}
		});
		$('#btnAtras').on('click',function(){
			cw.mostrarEjercicios1();
		});

	}
	//Método para mostrar los distintos modales que hay en el 
	this.modal1=function(n,solucion,score,e12,btn,btn2){
		cw.limpiarModal();
		lista=[];
		for(var j=0; j<4;j++){
			lista[j]=solucion+j;
		}
		var cadena='<div id="modal1"><h4>Elige la opción corecta para esa casilla</h4>';		
		cadena =cadena+'<div class="input-group">';
	  	for(var i=0;i<lista.length;i++){
	  		cadena=cadena+'<div><input type="radio" class="form-check-input" name="optradio" value="'+lista[i]+'"> '+lista[i]+'</div>';
	  	}
		cadena=cadena+'</div>';
		$('#contenidoModal').append(cadena);
		$('#contenidoModal').append('<button type="button" id="op" class="btn btn-secondary"><i class="fas fa-angle-double-right"></i> Hecho</button>');
		$('#modalGeneral').modal("show");
		
		var num=undefined;
		$('.input-group input').on('change', function() {
		   num=$('input[name=optradio]:checked', '.input-group').val(); 
		});
		$('#op').click(function(){
			btn2[n]=solucion;
			if(num==solucion){
				score++;
				btn[n]="btn-success";
				cw.ejercicio12(e12,score,btn,btn2);
			}else{
				btn[n]="btn-danger";
				cw.ejercicio12(e12,score,btn,btn2);
			}
		});

	}
	
	//Función para mostrar los resultados obtenidos por el alumno
	//dependiendo de la puntuación obtenida se mostrará una interfaz u otra
	this.mostrarResultados=function(scores,curso,e){
		this.limpiar();
		btn=["btn-light","btn-light","btn-light","btn-light"];
		btn2=["x","x","x","x"];
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
			cw.mostrarEjercicios(curso);
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
				cw.ejercicio11(0,0,btn,btn2);
			}else if(e=12){
				cw.ejercicio12(0,0,btn,btn2);
			}
			
		});


	}
	//Función para limpiar todos los modales que vayan apareciendo
	this.limpiarModal=function(){
		$('#modal1').remove();
		$('#modal').remove();
		$('#opcion').remove();
		$('#op').remove();					
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
		$('#mostrarR').remove();
		$('#r31').remove();
		$('#r32').remove();
		$('#r41').remove();
		$('#r42').remove();
		$('#r51').remove();
		$('#r52').remove();
	}

	

}
