class Cliente {
    constructor(cedula, nombre, correo, celular) {
      this.cedula = cedula;
      this.nombre = nombre;
      this.correo = correo;
      this.celular = celular;
    }
  }
  
  class Barbero {
    constructor(nombre, celular) {
      this.nombre = nombre;
      this.celular = celular;
    }
  }
  
  class Servicio {
    constructor(nombre, barbero, cliente, fecha, hora, servicio, costo) {
      this.nombre = nombre;
      this.barbero = barbero;
      this.cliente = cliente;
      this.fecha = fecha;
      this.hora = hora;
      this.servicio = servicio;
      this.costo = costo;
    }
  }
  
  const clientes = [];
  const barberos = [];
  const servicios = [];
  
  function agregarCliente() {
    const cedula = prompt("Ingrese la cédula del cliente:");
    const nombre = prompt("Ingrese el nombre del cliente:");
    const correo = prompt("Ingrese el correo del cliente:");
    const celular = prompt("Ingrese el celular del cliente:");
  
    const cliente = new Cliente(cedula, nombre, correo, celular);
    clientes.push(cliente);
  }
  
  function agregarBarbero() {
    const nombre = prompt("Ingrese el nombre del barbero:");
    const celular = prompt("Ingrese el celular del barbero:");
  
    const barbero = new Barbero(nombre, celular);
    barberos.push(barbero);
  }
  
  function pedirCita() {
    const nombreServicio = prompt("Ingrese el nombre del servicio:");
    const barbero = prompt("Ingrese el nombre del barbero:");
    const cliente = prompt("Ingrese el nombre del cliente:");
    const fecha = prompt("Ingrese la fecha de la cita:");
    const hora = prompt("Ingrese la hora de la cita:");
    const servicio = prompt("Ingrese el servicio que tomó el cliente:");
    const costo = prompt("Ingrese el costo del servicio:");
  
    const servicioNuevo = new Servicio(nombreServicio, barbero, cliente, fecha, hora, servicio, costo);
    servicios.push(servicioNuevo);
  
    console.log(`La cita para el servicio ${servicioNuevo.servicio} con el barbero ${servicioNuevo.barbero} y el cliente ${servicioNuevo.cliente} se ha registrado con éxito. El costo del servicio es de ${servicioNuevo.costo}.`);
  }
  
  function mostrarMenu() {
    const opcion = prompt(`Seleccione una opción:
    1. Agregar cliente
    2. Agregar barbero
    3. Pedir cita
    4. Salir`);
  
    switch (opcion) {
      case "1":
        agregarCliente();
        mostrarMenu();
        break;
      case "2":
        agregarBarbero();
        mostrarMenu();
        break;
      case "3":
        pedirCita();
        mostrarMenu();
        break;
      case "4":
        console.log("Adiós!");
        break;
      default:
        console.log("Opción inválida. Inténtelo de nuevo.");
        mostrarMenu();
        break;
    }
  }
  
  mostrarMenu();