let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(/* e */){
    // e.preventDefault();
    if(contador==0){
        enlaces.className = ("enlaces dos")
        console.log(`OP: ${contador}`)
        contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        console.log(`OP: ${contador}`)        
        contador=0;
    }
})

const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Los Tacos del Gera',
        subtitulo: 'Exquisitos tacos, ven y pruebalos'
    }


})