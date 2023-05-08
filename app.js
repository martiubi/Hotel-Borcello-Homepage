// API COTIZACION DOLAR OFICIAL
$(document).ready(function () {
  $.getJSON('https://www.dolarsi.com/api/api.php?type=dolar', function (data) {
    var cotizacion = data[0].casa.venta;
    $('#cotizacion').html(cotizacion);
  });
});

// MUESTRA DESCRIPCION HABITACIONES
const hab = document.querySelectorAll('.hab');

hab.forEach((h) => {
  const habP = h.querySelector('.hab-texto');
  const habImg = h.querySelector('.habitaciones-img');

  h.addEventListener('mouseover', () => {
    habP.classList.remove('hide');
    habImg.classList.add('descrip');
  });

  h.addEventListener('mouseout', () => {
    habP.classList.add('hide');
    habImg.classList.remove('descrip');
  });

  h.addEventListener('click', () => {
    habP.classList.remove('hide');
    habImg.classList.add('descrip');
  });
});

window.onscroll = function () {
  mostrarBotonArriba();
};
document.getElementById('btn-arriba').addEventListener('click', function () {
  subirPagina();
});

// BOTON PARA VOLVER ARRIBA AL HACER SCROLL ABAJO
function mostrarBotonArriba() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('btn-arriba').style.display = 'block';
  } else {
    document.getElementById('btn-arriba').style.display = 'none';
  }
}

// DESPLAZAR PAGINA HACIA ARRIBA CUANDO SE HACE CLICK EN BOTON
function subirPagina() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// VALIDACION DEL FORMULARIO DE CONSULTAS

function validarForm() {
  // Obtener los valores de los campos del formulario
  var nombre = document.forms['formConsultas']['nombre'].value;
  var mail = document.forms['formConsultas']['mail'].value;
  var celular = document.forms['formConsultas']['celular'].value;
  var consulta = document.forms['formConsultas']['consulta'].value;

  // Verificar que los campos estén completos
  if (nombre == '' || mail == '' || celular == '' || consulta == '') {
    swal('Error', 'Por favor, complete todos los campos', 'error');
    return false;
  }

  // Verificar que el correo electrónico sea válido
  var expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!expReg.test(mail)) {
    swal('Error', 'Por favor, ingrese un correo electrónico válido', 'error');
    return false;
  }

  swal(
    'Gracias',
    'Su consulta será respondida en las próximas horas',
    'success'
  );
  setTimeout(10000);

  // Devolver true para enviar el formulario
  return true;
}

// MENU HAMBURGUESA
const showMenu = () => {
  const toggle = document.querySelector('.navbar-toggle'),
    nav = document.querySelector('.links');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('links-active');
  });
};

showMenu();

// HIDE MENU
const closeBtn = document.querySelector('.navbar-x');

function hideMenu() {
  const nav = document.querySelector('.links');

  nav.classList.remove('links-active');
}

closeBtn.addEventListener('click', hideMenu);

// HIDE ON SCROLL
const nav = document.querySelector('.links');

const hideMenuOnScroll = () => {
  nav.addEventListener('transitionend', () => {
    document.addEventListener('scroll', hideMenu);
  });
};

hideMenuOnScroll();

// HIDE WHEN CLICKING OUTSIDE

document.addEventListener('click', function (e) {
  const nav = document.querySelector('.links'),
    toggle = document.querySelector('.navbar-toggle');

  if (
    !nav.contains(e.target) &&
    !toggle.contains(e.target) &&
    nav.classList.contains('links-active')
  ) {
    hideMenu();
  }
});
