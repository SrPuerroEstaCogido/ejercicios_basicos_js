const jedi = {nombre: "Luke Skywalker", edad: 19};

 jedi.edad = 25;

 console.log (jedi,"\n");

 let nombre = "leia";
 let apellido = "Organa";
 let edad = 20;

 console.log (`Soy ${nombre} ${apellido} tengo ${edad} y soy princesa de Alderaan \n`);


 const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
 const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

 let totalPrice =  sable1.precio + sable2.precio;

 console.log (`El precio total de los sables de luz es ${totalPrice}\n`)


 let precioBaseGlobal = 10000;

 precioBaseGlobal = 25000;


const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;

nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log (`El precio total del Ala-X es ${nave1.precioFinal} y del Halcón Milenario es ${nave2.precioFinal}\n`);

