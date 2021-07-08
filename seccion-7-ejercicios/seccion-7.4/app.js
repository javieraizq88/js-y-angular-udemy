// cual es el numero mayor del arreglo

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let mayor = -9999999; // se visualiza la variable con numeros super bajo
                        // no se sabe el numero menor//

    for (let i = 0; i > numeros.length; i++ ) { 
        if (numeros [i] >=mayor ) { 
            mayor = numeros [i];
        }
    }
    console.log ('El numero mayor es ' + numeros(i));



/* if (numeros [i] >=mayor ) {  
    cuando parta el ciclo va a decir q 1 es menor a -999999,
    cierto, ahora el mayor va a ser 1 
    En la siguiente interaccion va a decir, 6 es mayor
    que 1? si, por lo tanto ese es el nuevo mayor
    cuando llege a 4 q va a ser mayor que 8? no, por lo tanto
    el mayor queda como 8 
    */  
