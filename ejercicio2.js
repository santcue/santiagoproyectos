class Estudiante {
    constructor(cedula, nombreCompleto, email, genero, celular) {
      this.cedula = cedula;
      this.nombreCompleto = nombreCompleto;
      this.email = email;
      this.genero = genero;
      this.celular = celular;
    }
  }
  
  class Inmueble {
    constructor(numeroHabitacion, costo) {
      this.numeroHabitacion = numeroHabitacion;
      this.costo = costo;
    }
  }
  
  class Servicio {
    constructor(estudiante, inmueble, numeroContrato, fecha, cantidadMeses) {
      this.estudiante = estudiante;
      this.inmueble = inmueble;
      this.numeroContrato = numeroContrato;
      this.fecha = fecha;
      this.cantidadMeses = cantidadMeses;
    }
  }
  
  const estudiantes = [
    new Estudiante(1, "Juan Pérez", "juanperez@gmail.com", "masculino", "1234567890"),
    new Estudiante(2, "María Rodríguez", "mariarodriguez@gmail.com", "femenino", "0987654321"),
    new Estudiante(3, "Pedro Gómez", "pedrogomez@gmail.com", "masculino", "2345678901"),
    new Estudiante(4, "Ana López", "analopez@gmail.com", "femenino", "3456789012")
  ];
  
  const inmuebles = [
    new Inmueble(101, 500),
    new Inmueble(102, 600),
    new Inmueble(103, 700),
    new Inmueble(104, 800)
  ];
  
  const servicios = [
    new Servicio(estudiantes[0], inmuebles[0], 1, "2023-05-01", 6),
    new Servicio(estudiantes[1], inmuebles[1], 2, "2023-05-01", 6),
    new Servicio(estudiantes[2], inmuebles[2], 3, "2023-05-01", 6),
    new Servicio(estudiantes[3], inmuebles[3], 4, "2023-05-01", 6)
  ];
  
  const estudiantesMasculinos = servicios.filter(servicio => servicio.estudiante.genero === "masculino");
  const estudiantesFemeninos = servicios.filter(servicio => servicio.estudiante.genero === "femenino");
  
  console.log(`Hay ${estudiantesMasculinos.length} estudiantes masculinos alquilados`);
  console.log(`Hay ${estudiantesFemeninos.length} estudiantes femeninos alquilados`);
  
  const costoTotalPorCliente = servicios.reduce((total, servicio) => total + servicio.inmueble.costo * servicio.cantidadMeses, 0);
  
  console.log(`El costo total de alquiler por cliente es de ${costoTotalPorCliente} pesos`);