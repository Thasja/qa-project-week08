/************************************************************************************
 * Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
 * **********************************************************************************/

if(Math.random() >= 0.5){
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}

/************************************************************************************
 * Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
 * **********************************************************************************/

var Age = 76;

if(Age < 2){
    alert('Bebe');
} else if (Age <= 12){
    alert('Nino');
} else if (Age <= 19){
    alert('Adolecente');
} else if (Age <= 30){
    alert('Joven');
} else if (Age <= 60){
    alert('Adulto');
} else if (Age <= 75){
alert('Adulto mayor');
} else if (Age > 75){
alert('Anciano');
}