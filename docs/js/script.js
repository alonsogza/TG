'use strict';
// debugger;
const btnMenu = document.querySelector('#btn-menu')
const a = document.getElementsByTagName('a');

document.addEventListener(`click`, e => {
    const origin = e.target.closest("a");
    // btnMenu.click();

    //Obtenenemos todos los anchors
    for (let idx= 0; idx < a.length; ++idx){
        // console.log(a[idx].href);
        a[idx].classList.remove("active");
    }    

    if (origin) {
        // console.clear();
        // console.log(`You clicked ${origin.href}`);
        origin.classList.add('active')
    }
  });


const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Los Tacos del Gera',
        subtitulo: 'Exquisitos tacos, ven y pruebalos',
        ubicacion: 'Nuestra Ubicación',
        tit_guisos: 'Nuestra Especialidad',
        tel: '81 12345678'
    }

})
