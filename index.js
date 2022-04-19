// Accedo a los elementos HTML a través de querySelector.

const cuentaRegresiva = document.querySelector(".cuenta-regresiva")
const bordeGiratorio = document.querySelector(".borde-giratorio")
const botonPausar = document.querySelector(".pausar-cronometro")
const divFinal = document.querySelector(".final")
const inputContador = document.querySelector(".input-contador")
const botonEmpezar = document.querySelector(".empezar-cuenta")
const tituloAdvertencia = document.querySelector(".advertencia")
const nombreApp = document.querySelector(".nombre-app")

// Inicializo una variable contador para definir 
// el comportamiento predeterminado del programa.
// O sea para que solo se visaulice el input apenas 
// se inicia el programa.

let contador = 0;


if (contador === 0){
    botonPausar.style.visibility = "hidden"
    bordeGiratorio.style.visibility = "hidden"
    tituloAdvertencia.style.visibility = "hidden"
    nombreApp.style.visibility = "visibility"

    // Le asigno un valor distinto de 0 al contador
    botonEmpezar.addEventListener("click", ()=>{

        

        inputContador.style.visibility = "hidden"
        botonEmpezar.style.visibility = "hidden"
        contador = inputContador.value
        console.log(contador)
        
        let contadorEnPausa = false;

        if (contador <= 0){
            tituloAdvertencia.style.visibility = "visible"
            inputContador.style.visibility = "visible"
            botonEmpezar.style.visibility = "visible"
            divFinal.style.visibility = "hidden"
            cuentaRegresiva.style.visibility = "hidden"

            clearInterval(cronometro)
            
        }

        // Le asigno un evento al boton para que cambie el valor de 
        // contador en pausa, para reanudar y pausar la cuenta.

        botonPausar.addEventListener("click", () => {
            contadorEnPausa = !contadorEnPausa;
        
        })
        
        // Genero un intervalo de ejecucion ciclica para realizar la 
        // cuenta regresiva.
        const cronometro = setInterval(() => {
            tituloAdvertencia.style.visibility = "hidden"
            botonPausar.style.visibility = "visible"
            cuentaRegresiva.style.visibility = "visible"
            nombreApp.style.visibility = "hidden"
            divFinal.style.visibility = "visible"


            if (contadorEnPausa) {
                bordeGiratorio.style.visibility = "hidden";
                botonPausar.innerHTML = "REANUDAR"
                divFinal.innerHTML = "La cuenta regresiva se ha pausado en: "
                
                return;

            } else 
                if (contadorEnPausa === false){
                    botonPausar.innerHTML = "PAUSAR"
                    bordeGiratorio.style.visibility = "visible";
                    divFinal.innerHTML = "La cuenta regresiva finalizará en: ";
                    
                    
                    if(contador === 0){
                        bordeGiratorio.style.visibility = "hidden";
                        clearInterval(cronometro)
                        divFinal.innerHTML = "La cuenta regresiva ha finalizado, ingrese un nuevo número."
                        inputContador.style.visibility = "visible"
                        botonEmpezar.style.visibility = "visible"
                        botonPausar.style.visibility = "hidden"
                        cuentaRegresiva.style.visibility = "hidden"
                        nombreApp.style.visibility = "visible"
                    }

                    cuentaRegresiva.innerHTML = contador;
                
                    console.log(contador)
                    contador -= 1;
                }
            }, 1000)
            
    
    }) 
}












// Esto es simplemente otra forma de realizar la cuenta regresiva

// const cronometro2 = setInterval(() => {
//     while (contador > 0) {
//         contador -= 1;
//         console.log(contador)
//     }
// }, 1000)
