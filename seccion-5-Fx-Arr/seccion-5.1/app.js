
function ImprimirTabla (base, limite ){

    for ( let i = 1; i<=limite; i++ ) {

        let resultado = base * i;

        console.log(base + ' x ' + i + ' = ' + resultado);

    }

}

ImprimirTabla(10,5);
ImprimirTabla(3,10);

