/* Calcular la nota de 3 alumnos
de 100, 80 y 59
*/


function imprimirNota (nota){
    let notaletra = '';
       if (nota >= 90) {
           notaletra ='A'; 
           } else if (nota >= 80) {
               notaletra ='B';
               } else if (nota >= 70) {
                   notaletra ='C';
                   }else if (nota >= 60){
                       notaletra ='D';
                   } else  {
                       notaletra ='F';
                   }
       console.log(nota + ' es igual a ' + notaletra);
}

imprimirNota (100);   
imprimirNota (80);
imprimirNota (59);
   
