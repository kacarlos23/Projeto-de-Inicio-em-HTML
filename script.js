const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const texto = document.getElementById('texto');
const acender = document.getElementById('acender');
const apagar = document.getElementById('apagar');
const bFonte = document.getElementById('bFonte');
let patos = 0;

b1.onclick = function() {
	texto.innerText = patos;
	patos++;
};

b2.onclick = function() {
	document.getElementById('demo').style.display='none';
};

b3.onclick = function() {
	document.getElementById('demo').style.display='block';
}

acender.onclick = function() {
	document.getElementById('myImage').src='pic_bulbon.gif';
}

apagar.onclick = function() {
	document.getElementById('myImage').src='pic_bulboff.gif';
}

bFonte.onclick = function() {
	document.getElementById('demo').style.fontSize='35px';
}

function traduzirTitulo() {
	document.getElementById('titulo').innerHTML='O que o JavaScript pode fazer?';
}

function mostrarSoma() {
	document.getElementById('resp').innerHTML='5 + 6 = 11';
}
