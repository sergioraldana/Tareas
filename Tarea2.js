// JavaScript Document
var mes = 10;

var estacion = "";

var nombreCompleto = "Sergio Renato Aldana Alvarez";

var carne = "20001908";

switch(mes) {
	case 12:
	case 1:
	case 2:
		var estacion = "Es invierno"
		break;
	case 3:
	case 4:
	case 5:
		var estacion = "Es primavera"
		break;
	case 6:
	case 7:
	case 8:
		var estacion = "Es verano"
		break;
	case 9:
	case 10:
	case 11:
		var estacion = "Es otoÃ±o"
		break;
	default: 
		var estacion = "No es un mes correcto"
		break;
}

document.write(estacion, "<br>")
document.write("Mi nombre es " + nombreCompleto, "<br>")
document.write("Mi nÃºmero de carne es " + carne)