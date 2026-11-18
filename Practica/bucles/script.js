/* 

    Bucles: son estructuras que nos permiten ejecutar de forma reptitiva un bloque código.

    FOR: nos permite indicar la cantidad de veces que queremos ejecutar una serie de líneas de codigo en nuestra app.
*/

/*
 () -> dentro de los parentesis indicamos 3 cosas:
  1. Debemos definir una variable y asignarle un valor INICIAL. Este valor indica a partir de que valor el bucle comienza a contabilizar.
  2. Indicamos hasta que valor va a llegar esa variable, a través de una condición, es decir, el LIMITE.
  3. Se indica en que medida va aumentar la variable, cada vez que se termine de ejecutar el bloque de código.

  * El bucle termina cuando al condición establecida en el segundo punto, da como resultado FALSE.
  * La variable que se implementa para establecer el inicio y el fin bucle, se puede y muchas se debe dentro utilizar del bloque de código
*/

for (let i = 1; i <= 10; i++) {
    /* Bloque de código a ejecutar */
    //console.log(i)
}


/* 
    Mostrar en consola la tabla de multiplicar del 2.
    Ejemplo:
    2 x 1 = 2
    2 x 2 = 4
    2 x 3 = 6
    ...
    2 x 10 = 20
*/

/* 
for (let i = 1; i <= 10; i++) {
    let resultado = 2 * i
    console.log(`2 x ${i} = ${resultado}`)
}
    */


/* 
    Mostrar en consola los valores pares del 1 al 100
*/
// Alternativa 1
/* 
for (let i = 2; i <= 100; i = i + 2) {
    console.log(i)
}
    */
// Alternativa 2
// 4 / 2 -> 2; 5 / 2 -> 2,5
/* 
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`El numero es par! ${i}`)
    }
}

*/

/*

    Solicitar al usuario su usario y contraseña, verificar que estas credenciales sean correctos, pero como máximo dar 3 posibilidades de ingreso de los datos, una vez sobrepasadas esas posibilidades cortar el programa.

    credenciales a verificar: 
    email: "juan@gmail.com"
    password: "123123"

*/

/* 
for (let i = 1; i <= 3; i++) {

    let email = prompt("Ingrese su email")
    let password = prompt("Ingrese su password")


    if (email === "juan@gmail.com" && password === "123123") {
        console.log('Usuario Logueado');
        break;
    } else {
        console.log('Credenciales incorrectas')
    }

}
*/
/* 

    Solicitar los datos 3 productos: titulo, categoria, y precio.
    Mostrar los datos solicitados en consola, con un mensaje personalizado del siguiente estilo.
    Ejemplo:
        - Titulo: "PC Gamer", Categoría: "Tecnología", Precio: 1000000


    Mostrar en consola el total de los precios de los 3 productos, además del promedio de los mismos.

*/

// Scope o Entorno GLOBAL, las variables definidas acá pueden ser implementadas en TODO el programa, es decir, en scope locales.
let total = 0;
let cantidadBombillas = 0;
for (let i = 1; i <= 3; i++) {
    // Scope o Entorno LOCAL. Las variables creadas acá solo se pueden implementar en este mismo scope / entorno.
    let titulo = prompt(`Ingrese el título del producto ${i}`)
    let categoria = prompt(`Ingrese la categoría del producto ${i}`)
    // la función prompt() -> convierto el valor ingresado en un STRING, por defecto. Si queres implementar valores numericos, debemos hacer una conversión, con la función Number()
    let precio = Number(prompt(`Ingrese el precio del producto ${i}`))

    total = total + precio;
    console.log(`- Título: ${titulo}, Categoría: ${categoria}, Precio: ${precio}`)

    if(categoria === "bombillas"){
        // contabilizar en un contador, ese producto
        cantidadBombillas = cantidadBombillas + 1;
        cantidadBombillas++;
    }
}

console.log(`El total de precios de todos los productos es de: ${total}`)
console.log(`El promedio de precios de los productos es de: ${total / 3}`)