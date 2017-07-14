/*Botón Sidebar*/

$(".button-collapse").sideNav();

/*Funcionalidad de Collapsible*/

$(document).ready(function(){
   $('.collapsible').collapsible();
});

/*Traer el JSON*/

$(document).ready(function(){
  $('.btn-calcular').click(function() {

  	var infoInput = $('.num_tarjeta').val();
      
    if($('.num_tarjeta').val() === ''){
        alert("Debes completar el campo");
    }else{
       $.ajax({
           	url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+infoInput,
           	type: 'GET',
           	dataType: 'json',
           	data: {limit: '1200'},
           })
           .done(function(val) {
           	console.log("success");
           	console.log(val);
           	$('.project').append('<p>Saldo de la tarjeta:'+val.saldoTarjeta+'</p>')
           })
           .fail(function() {
           	console.log("error");
           })
           .always(function() {
           	console.log("complete");
           });
               
        }
    });
});

/*Local Storage*/

function guardarDatos(){
  localStorage.name = $('#email').val();
}

function recuperarDatos(){
  $(".datos-row").append('<p class="correo-usuario">' + localStorage.name +'</p>');
}

/*Validación de campos*/

$(document).ready(function() {

  $("#login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();

    if (email == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
      alert("Ingrese un correo válido");
    }else if (password == "" || password.length < 6) {
      alert("Ingrese una contraseña válida. Debe tener más de 6 carácteres.")
    }
    else{
      window.location.href="trans-lab.html";
      guardarDatos();
      $('#login').attr('href', 'index2.html');
      recuperarDatos();
    }
  })

});

/*Agregar tarjetas*/

$('.btn-agregartarjeta').click(function(){

  var numTarjeta = $('#num_tarjeta').val();

  $('.tarjetas').append('<li>' + numTarjeta + '</li>');

  $('#num_tarjeta').val('');
});
