class Tren {
    constructor(capacidadAsientos, precioTiquete) {
      this.capacidadAsientos = capacidadAsientos;
      this.precioTiquete = precioTiquete;
      this.asientosDisponibles = capacidadAsientos;
      this.asientosReservados = [];
    }
  
    verificarDisponibilidad() {
      return this.asientosDisponibles > 0;
    }
  
    reservarAsiento(usuario) {
      if (this.verificarDisponibilidad()) {
        const numeroAsiento = this.asientosReservados.length + 1;
        const tiquete = new Tiquete(numeroAsiento, usuario, this.precioTiquete);
        this.asientosReservados.push(tiquete);
        this.asientosDisponibles--;
        console.log(`El asiento número ${numeroAsiento} ha sido reservado para ${usuario.nombre}`);
      } else {
        console.log("Lo siento, no hay asientos disponibles");
      }
    }
  }
  
  class Usuario {
    constructor(nombre, edad, correoElectronico, formaPago) {
      this.nombre = nombre;
      this.edad = edad;
      this.correoElectronico = correoElectronico;
      this.formaPago = formaPago;
    }
  }
  
  class Tiquete {
    constructor(numeroAsiento, usuario, precio) {
      this.numeroAsiento = numeroAsiento;
      this.usuario = usuario;
      this.precio = precio;
      this.horaSalida = "9:00 AM"; 
      this.estacionOrigen = "Bogotá";
      this.estacionDestino = "Medellín";
    }
  }
  
  const tren = new Tren(50, 10000);
  
  const usuario1 = new Usuario("Juan Pérez", 25, "juanperez@gmail.com", "tarjeta de crédito");
  const usuario2 = new Usuario("María Rodríguez", 30, "mariarodriguez@gmail.com", "efectivo");
  
  tren.reservarAsiento(usuario1); 
  tren.reservarAsiento(usuario2); 
  tren.reservarAsiento(usuario1); 
  
  console.log(`Quedan ${tren.asientosDisponibles} asientos disponibles`);