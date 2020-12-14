'use strict';
const ip = window.location.hostname;
console.log(ip);

// debugger;
const btnMenu = document.querySelector('#btn-menu')
const a = document.getElementsByTagName('a');


document.addEventListener(`click`, (e) => {
  const origin = e.target.closest("a");
  const ancho = document.body.scrollWidth;

  // console.log(`Actualente cuenta con un ancho de ${ancho}, ${origin}`);
  // if ((ancho <= 750) && (origin.href.includes('Guisos') || (origin.href.includes('Ubicacion')))) {
  //     btnMenu.click();
  // };
  // if (ancho <= 750) {
  //   btnMenu.click();
  // };


  if (origin) {
    //Obtenenemos todos los anchors
    for (let idx = 0; idx < a.length; ++idx) {
      // console.log(a[idx].href);
      a[idx].classList.remove("active");
    }

    // console.clear();
    // console.log(`You clicked ${origin.href}`);
    // origin.classList.add("active");
  }
});


//Desplazamiento suave con JS
const links = document.querySelectorAll("a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  //--INI
  // Quitar / Poner la clase
  links.classList.add("active");
  //--FIN

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

//Para crear un COMPONENTE es: Vue.componet('')
// El primer parametro es la ETIQUETA que asignamos, en este caso <olainferior>
Vue.component("olainferior", {
  template: /*html*/ `
  <div style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
    style="height: 100%; width: 100%;">
      <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        style="stroke: none; fill: #fff;"></path>
    </svg></div>
  `,
  data() {
    return;
  },
});

Vue.component("olasuperior", {
  template: /*html*/ `
  <div style="height: 150px; overflow: hidden;"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
    style="height: 100%; width: 100%;">
      <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: #fff;"></path>
    </svg></div>
  `,
  data() {
    return;
  },
});

const app = new Vue({
  el: "#app",
  data: {
    titulo: "Los Tacos del Gera",
    subtitulo: "Exquisitos tacos, ven y pruebalos",
    ubicacion: "Nuestra Ubicación",
    tit_guisos: "Nuestra Especialidad",
    guisos: [
      { nombre: "Barbacoa", siempre: true },
      { nombre: "Chicharon", siempre: true },
      { nombre: "Queso con Rajas", siempre: false },
    ],
    tit_tel: "81 2442 2917",
    url_tel: "tel:8124422917",
  },
});
