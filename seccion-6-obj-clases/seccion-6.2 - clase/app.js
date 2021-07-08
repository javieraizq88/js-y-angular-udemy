class Carro {

    constructor(marca1, tipo1, puertas) {
        
        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;

        this.creadoEn ='hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro () {
        if (this.encendido) {
            console.error('El carro ya estaba encendido... se daño el motor)') 
        } else {
            this.encendido =true;
            console.log('El carro esta encendido');

        }
        
        return this;
    }
/* viaje solo si hay gasolina
    no realizar viaje si el carro no esta encendido
*/
    realizarViaje (consumo) {
        if (!this.encendido) return console.log('El carro esta apagado');

        if ( consumo < this.gasolina) return console.log('No se puede realizar el viaje: Gasolina ' + this.gasolina);
            
            this.gasolina = this.gasolina - consumo; // esta linea solo se ejecuta si hay gasolina para el viaje
            return ' le queda ' + this.gasolina;
        
    } // fin metodo

} // fin clase

let carro = new Carro ('Mazda', 'Sedan', '2 puertas' )


console.log(carro);