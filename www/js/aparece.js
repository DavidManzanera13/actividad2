var indice_pic = 0; //numero de la foto
var posx_pic = 0; //posicion horizontal de la foto
var posy_pic = 0; //posicion vertical de la foto
var tiempo_pic = 800; //tiempo de la foto
var lim_hor_pic = 800; 
var lim_ver_pic = 300;

var fotos = [
	"img/galeria/foto1.jpg",
	"img/galeria/foto2.jpg",
	"img/galeria/foto3.jpg",
	"img/galeria/foto4.jpg",
	"img/galeria/foto5.jpg",
	"img/galeria/foto6.jpg",
	"img/galeria/foto7.jpg",
	"img/galeria/foto8.jpg",
	"img/galeria/foto9.jpg",
	"img/galeria/foto10.jpg"

];

//funciones

function crear_img(){
	if(indice_pic < fotos.length){
		var id_pic = "f" + indice_pic;
		posx_pic = Math.random() * lim_hor_pic;
		posy_pic = Math.random() * lim_ver_pic;
		$('#aparecer').append("<a href='"+fotos[indice_pic]+"'>"+
		"<img id='"+id_pic+"' class='pic' src='" + fotos[indice_pic] + "'>"+ "</a>");

	indice_pic++;
	$("#"+id_pic+"").css("top", posy_pic);
	$("#"+id_pic+"").css("left", posx_pic);
	$("#"+id_pic+"").fadeIn(1000,function(){
		$("#"+id_pic+"").delay(3000).fadeOut(1000,function(){
			$("#"+id_pic+"").parent().remove();

		});
	});


}
else{
	indice_pic=0;
  }

 }



//eventos
$(document).ready(function(){
	setInterval(crear_img,3000);
	});
