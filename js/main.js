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


