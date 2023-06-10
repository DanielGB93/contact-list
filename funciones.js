/*1) Crea una lista de contactos con datos predefinidos, cada contacto 
debe contener el nombre y apellido como una sola cadena de caracteres*/
let contactos = ['Juan Perez', 'Daniel Garcia', 'Hertrudis Ávila'];

/* 2) Crea una función para añadir un nuevo contacto a una lista*/
function anadir(nombre, apellido){
    contactos.push(nombre+' '+apellido);
}

nombre= 'elbo';
apellido= 'racho';
let nuevo= anadir(nombre,apellido);
console.log(contactos);

/* Crea una función para borrar un contacto existente de la lista*/
//function eliminar(nombre, apellido){
function eliminar(nomb){
    const index= contactos.indexOf(nomb);
    const x= contactos.splice(index, 1);
    return contactos;
} 

let newContactos= eliminar('elbo racho');
console.log(newContactos);

/* Crea una función para imprimir en consola los contactos
 presentes en la lista*/

function verLista(arr=contactos){
for (const value of arr) {
    console.log(value);
}}

let ver= verLista();
