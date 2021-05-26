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
	this.comprobar31=function(e31,num,score,b){
		var m="";
		let soluciones=[3,2,1,3,3,1,2,1,3,2];
		let lights=["btn-light","btn-light","btn-light"];
		l[(soluciones[e31]-1)]="btn-success";
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
	this.mostrarEjercicios1=function(){
		this.limpiar();
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

		$('#btnAtras').on('click',function(){
			ws.listarAlumnos();
			cw.mostrarClase();
		});

	}

	this.mostrarResultados=function(scores,curso,e){
		this.limpiar();
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
				cw.ejercicio11();
			}else if(e=12){
				cw.ejercicio12();
			}
			
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
		$('#mostrar31').remove();
		$('#mostrar32').remove();
		$('#mostrar4').remove();
		$('#mostrar41').remove();
		$('#mostrar42').remove();
		$('#mostrar5').remove();
		$('#mostrar51').remove();
		$('#mostrar52').remove();
		$('#mostrar1').remove();
		$('#mostrarR').remove();
		$('#r31').remove();
		$('#r32').remove();
		$('#r41').remove();
		$('#r42').remove();
		$('#r51').remove();
		$('#r52').remove();
	}

}
