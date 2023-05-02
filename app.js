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
});


// BOTON PARA VOLVER ARRIBA AL HACER SCROLL ABAJO


function mostrarBotonArriba() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-arriba").style.display = "block";
  } else {
    document.getElementById("btn-arriba").style.display = "none";
  }
}


// DESPLAZAR PAGINA HACIA ARRIBA CUANDO SE HACE CLICK EN BOTON

function subirPagina() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
