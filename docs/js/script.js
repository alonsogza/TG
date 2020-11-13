// let boton = document.getElementById("icono");
// let enlaces = document.getElementById("enlaces");
// let contador = 1;
console.log('Estoy activo...;');
// boton.addEventListener("click", function(e){
//     console.log(`Click`);
//     e.preventDefault();
//     if(contador==0){
//         enlaces.className = ("enlaces dos")
//         console.log(`OP: ${contador}`)
//         contador=1;
//     }else{
//         enlaces.classList.remove("dos")
//         enlaces.className = ("enlaces uno")
//         console.log(`OP: ${contador}`)        
//         contador=0;
//     }
// })

document.addEventListener(`click`, e => {
    const origin = e.target.closest("a");
    
    if (origin) {
        // debugger;
        origin.classList.remove('active')
        console.clear();
        console.log(`You clicked ${origin.href}`);

//         if(origin.includes('Guisos')){
        origin.classList.add('active')
//         }

// origin.includes('Guisos')
// origin.includes('Ubicacion')
        
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
