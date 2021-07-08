

function filtrarPorLetra(arr, letra) {

    let nuevoArr = [];

    for (let i = 0; i < arr.length; i++) {

        let nombre = arr[i]; // da un arreglo las letras de cada nombre

        if (nombre[0] === letra) {
            nuevoArr.push(nombre);
        }
        // si el nombre comienza con la letra guardada en "letra", lo muestra
        
    }

    return nuevoArr;
}



let heroes = ["Doom", "Dr. Strange", "Hulk", "She Hulk", "Spiderman", "Captain Marvel"];


let heroesCon = filtrarPorLetra(heroes, "S");
console.log(heroesCon); // She Hulk, Spiderman