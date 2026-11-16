/* 
    Categorías por edad
    0 a 15: Juvenil
    de 16 a 60: Adulto -> si la edad es mayor/igual a 16 O menor a 60 -> Incorrecto.
    OR: cuando alguna de las condiciones da true, el resultado final es true. Para que sea false, todas las condiones deben dar como resultado false.
    AND: TODAS las condiciones deben ser true para que el resultado final sea true.
    Entonces: mayor/igual a 16 Y ADEMÁS menor a 60. 
    +60: Veterano
*/


// Ingreso de dato
// let nombre = prompt("Hola me decís tu nombre?")
let edad = prompt("Ingrese su edad");


// Manejo de ese dato + imprimir en consola el resultado.
// console.log("El nombre ingresado es: " + nombre)
// console.log(`El nombre ingresado es: ${nombre}`)

console.log(`La edad ingresada es: ${edad}`)


// Condicionales


// Condición para que el proceso no se ejecute si el valor es NaN (no numerico), se implementa la función isNaN() -> devuelve true si el valor es NaN, caso contrario false
if (isNaN(edad)) {
    console.log('Error: El valor ingresado debe ser un numero');
} else {
    if (edad <= 15) {
        // el bloque de ejecución, si la condición se analiza como true.
        console.log("Perteneces a la categoría Juvenil");
    } else if (edad >= 16 && edad < 60) {
        console.log("Perteneces a la categoría Adulto");
    } else if (edad >= 60 && edad <= 100) {
        console.log("Perteneces a la categoría Veterano");
    }
}
// else {
//     console.log('Solo se permiten valores entre 0 y 100')
// }






/*
    Ejercitación 2:
    - Simulación de Login de usuario.
    1º Vamos a solicitar dos datos: email y password.
    2º Informar al usuario si el login fue exitoso o si hay un error con las credenciales.
    Comparar las credenciales ingresadas con los siguientes datos:
        Email: pedro@gmail.com
        Password: 123123
*/

/*

let email = prompt('Ingrese su email');
let password = prompt('Ingrese su password')

console.log(`Email ingresado: ${email}`)
console.log(`Password ingresado: ${password}`)

if (email === "pedro@gmail.com") {
    console.log("Email ingresado es correcto")
    if (password === "123123") {
        console.log('LOGIN EXITOSO')
    } else {
        console.log('Password incorrecta')
    }
} else {
    console.log("El email no es correcto.")
}

// Manera más simplificada
//                TRUE          AND       FALSE -> FALSE
if (email === "pedro@gmail.com" && password === "123123") {
    console.log('LOGIN EXITOSO')
} else {
    console.log('Credenciales incorrectas')
}

 */

/*

    Ejercicio 3: Informar las tareas a realizar en base al día ingresado por el usuario.
    Ejemplo: Lunes y Miércoles: estudiar. Martes y Jueves: Entrenar. Viernes: ir al cine, Sábado y Domingo: descanso.
*/

let diaIngresado = prompt('Ingrese el día a verificar')


if (diaIngresado === "lunes" || diaIngresado === "miercoles") {
    console.log('Estudiar')
} else if (diaIngresado === "martes" || diaIngresado === "jueves") {
    console.log("Entrenar")
} else if (diaIngresado === "viernes") {
    console.log("Ir al cine")
}

// diaIngresado: sabado -> TRUE      ||  FALSE -> TRUE.

else if (diaIngresado === "sabado" || diaIngresado === "domingo") {
    console.log('Descanso')
}else{
    console.log('Día ingresado no válido.')
}


