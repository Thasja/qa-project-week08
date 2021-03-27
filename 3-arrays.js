//Arrays

/************************************************************************************
 * Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
 * **********************************************************************************/

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[4] + months[10]);


/************************************************************************************
 * Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
 * **********************************************************************************/

console.log(months.sort());

/************************************************************************************
 * Agregar un elemento al principio y al final del array (utilizar unshift y push).
 * **********************************************************************************/

console.log(months.unshift('Summer'));
console.log(months.push('Winter'));

/************************************************************************************
 * Quitar un elemento del principio y del final del array (utilizar shift y pop).
 * **********************************************************************************/

console.log(months.shift());
console.log(months.pop());

 /************************************************************************************
 * Invertir el orden del array (utilizar reverse)
 * **********************************************************************************/

console.log(months.reverse());

/************************************************************************************
 * Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
 * **********************************************************************************/

console.log(months.join('-'));

/************************************************************************************
 * Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
 * **********************************************************************************/

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var months2 = months.slice(4, 11);

console.log(months2);


