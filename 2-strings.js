//Strings

/************************************************************************************
 * Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
 * **********************************************************************************/

var song = 'Mary had a little lamb';
var songUpperCase = song.toUpperCase();

console.log(songUpperCase);

/************************************************************************************
 * Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
 * **********************************************************************************/

var song2 = 'Humpty Dumpty had a great fall';
var song2Abbreviated = song2.substring(0,5);

console.log(song2Abbreviated);

/************************************************************************************
 * Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
 * **********************************************************************************/

var song3 = 'Old MacDonald had a farm';
var song3End = song3.substring(21);

console.log(song3End);

/************************************************************************************
 * Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
 * **********************************************************************************/

var song4 = 'row Row Row a Boat';
var song4firstUpp = song4.substring(0,1).toUpperCase() + song4.substring(1).toLowerCase();

console.log(song4firstUpp);

/************************************************************************************
 * Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
 * **********************************************************************************/

var song5 = 'Hickory Dickory Dock'
var song5FirstSpace = song5.indexOf(' ',0);

console.log('The first space is at position: ' + song5FirstSpace);

/************************************************************************************
 * Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
 * **********************************************************************************/

var song6 = 'tWEEDLEDUM AND tWEEDLEDEE';
var song6UseAll = song6.substring(0,1).toUpperCase() + song6.substring(1,10).toLowerCase() + ' and ' + song6.substring(15,16).toUpperCase() + song6.substring(16).toLowerCase();

console.log(song6UseAll);