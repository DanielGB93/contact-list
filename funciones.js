const contacto = {
  nombre: ["Juan Pérez", "Daniel García", "Maria Bonilla"],
  telefono: ["9878-7846", "3598-9754", "8246-4698"],
  ubicaciones: {
    ciudad: ["Tegucigalpa", "Comayagua", "San Pedro"],
    direccion: ["Col. 3 de Mayo", "Col. Carlos Miranda", "3era Avenida"],
  },
};

const funciones = {
  //Agrega un contacto nuevo a la lista de contactos
  anadir: function (name, tel, city, direction) {
    this.contacto.nombre.push(name);
    this.contacto.telefono.push(tel);
    this.contacto.ubicaciones.ciudad.push(city);
    this.contacto.ubicaciones.direccion.push(direction);
  },
//Eliminar un contacto según el nombre
  eliminar: function eliminar(nomb) {
    const index = contacto.nombre.indexOf(nomb);
    const nombres2 = contacto.nombre.splice(index, 1);
    return nombres2;
  },
  //Muestra los contactos existentes hasta el momento
  verTodo: function () {
    for (const i in contacto.nombre) {
      console.log(
        `${i}. Nombre: ${contacto.nombre[i]} . Teléfono: ${contacto.telefono[i]}`
      );
      console.log(
        `Ubicación: ${contacto.ubicaciones.ciudad[i]}, ${contacto.ubicaciones.direccion[i]}`
      );
   
    }
  },
  buscarContacto: function(nomb){
    const index = contacto.nombre.indexOf(nomb);
    console.log(`${index}. Nombre: ${contacto.nombre[index]}. Teléfono: ${contacto.telefono[index]}`);
    console.log(`Ubicación: ${contacto.ubicaciones.ciudad[index]}, ${contacto.ubicaciones.direccion[index]}`);
  }
};
function hola(){
    const saludo = 'Hola';
    return saludo;
}

console.log(contacto);
let listaContactos =funciones.verTodo();
// document.getElementById("lista").innerHTML= listaContactos;
funciones.eliminar("Daniel García");
funciones.verTodo();
funciones.buscarContacto('Juan Pérez');

const saludo= hola();
document.getElementById("lista").innerHTML = saludo;