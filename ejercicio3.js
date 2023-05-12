class Vehiculo {
    constructor(marca, modelo, precio, disponibilidad, caracteristicas) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
      this.disponibilidad = disponibilidad;
      this.caracteristicas = caracteristicas;
    }
  }
  
  class Alquiler {
    constructor(vehiculo, fechaInicio, fechaFin) {
      this.vehiculo = vehiculo;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
    }
  
    calcularCosto() {
      const diffTime = Math.abs(this.fechaFin - this.fechaInicio);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      return this.vehiculo.precio * diffDays;
    }
  }
  
  const vehiculos = [
    new Vehiculo("Toyota", "Corolla", 500, true, { asientos: 5, aireAcondicionado: true }),
    new Vehiculo("Honda", "Civic", 600, true, { asientos: 5, aireAcondicionado: true }),
    new Vehiculo("Ford", "Mustang", 800, false, { asientos: 4, aireAcondicionado: true }),
    new Vehiculo("Chevrolet", "Camaro", 900, true, { asientos: 4, aireAcondicionado: true })
  ];
  
  const alquileres = [
    new Alquiler(vehiculos[0], new Date("2023-05-10"), new Date("2023-05-15")),
    new Alquiler(vehiculos[1], new Date("2023-05-12"), new Date("2023-05-18")),
    new Alquiler(vehiculos[3], new Date("2023-05-13"), new Date("2023-05-20"))
  ];
  
  alquileres.forEach(alquiler => {
    console.log(`El costo del alquiler del vehículo ${alquiler.vehiculo.marca} ${alquiler.vehiculo.modelo} es de ${alquiler.calcularCosto()} pesos`);
  });