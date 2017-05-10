
var input = document.getElementsByTagName('input');

var submit = input[3];

input[0].addEventListener("blur", function(){
	var nTest = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
	if(!nTest.test(input[0].value)) {
		input[0].nextElementSibling.innerText = "Ingresar datos con primera letra mayúscula";
	} else {
		input[0].nextElementSibling.innerText = "";
	}
});

input[1].addEventListener("blur", function(){
	var emailTest = /([a-zA-Z0–9]+)([\_\.\-{1}])?([a-zA-Z0–9]+)\@([a-zA-Z0–9]+)([\.])([a-zA-Z\.]+)/g;
	if(!emailTest.test(input[1].value)) {
		input[1].nextElementSibling.innerText = "Email no válido";
	} else {
		input[1].nextElementSibling.innerText = "";
	}
});

input[2].addEventListener("blur", function(){
	var phoneTest = /^([0-9])*$/;
	if(!phoneTest.test(input[2].value)) {
		input[2].nextElementSibling.innerText = "teléfono no válido";
	} else {
		input[2].nextElementSibling.innerText = "";
	}
});

input[3].addEventListener("blur", function(){
	if(input[3].value == "") {
		input[3].nextElementSibling.innerText = "Ingresar comentario";
	} else {
		input[3].nextElementSibling.innerText = "";
	}
});
