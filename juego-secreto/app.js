let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUSusario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUSusario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó
       if (numeroDeUSusario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
       }else{
        asignarTextoElemento('p','El número secreto es mayor'); 
       }
       intentos++; 
       limpiarCaja();
    }
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length ==  numeroMaximo){
      asignarTextoElemento('p','ya se sortearon todos los múmeros posibles');
    
        }else{
    //si el numero genrado está en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value= ''; 
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //inidcar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intento
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable','true');
   
}

 condicionesIniciales();
