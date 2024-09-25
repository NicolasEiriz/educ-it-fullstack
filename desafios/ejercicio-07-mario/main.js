let nombrePersonaje;


let span = document.querySelector('span')
let personajeElegido;

function elegirPersonaje(){

    switch (nombrePersonaje) {
        case 'Mario': span.innerText = 'Mario'
            establecerAtributo('mario')
            break;
        case 'Luigi': span.innerText = 'Luigi'
            establecerAtributo('luigi')
            break;
        case 'Bowser': span.innerText = 'Bowser Morton Koopa'
            establecerAtributo('bowser')
            break;
        case 'Peach': span.innerText = 'Princesa Peach Toadstool'
            establecerAtributo('peach')
            break;
        case 'Yoshi': span.innerText = 'T. Yoshisaur Munchakoopas'
            establecerAtributo('yoshi')
            break;
        case 'Toad': span.innerText = 'Toad'
         establecerAtributo('toad')
            break;
        case 'Toadette': span.innerText = 'Toadette'
            establecerAtributo('toadette')
            break;
        case 'Daisy': span.innerText = 'Princesa Daisy'
            establecerAtributo('daisy')
            break;

        default: span.innerText = 'Hoy se presenta (desconocido)'
            break;
}
}

function establecerAtributo(personaje){
    personajeElegido = personaje
    document.querySelector(`#${personaje}`).setAttribute('title', 'Presentado')
    console.log(personajeElegido);
}


function preguntarPersonaje(){
    
    verificarPersonajeMostrado()
    nombrePersonaje = prompt('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)')

    console.log(nombrePersonaje)

    elegirPersonaje()

    //ocultarBoton()
}

function ocultarBoton(){
    botonPresentar.style.display = 'none'
}

function verificarPersonajeMostrado(){
    let personajes = document.querySelectorAll('.cajas > div')
}

let botonPresentar = document.querySelector('#presentar')

botonPresentar.addEventListener('click', preguntarPersonaje)

