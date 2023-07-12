// Escribir una función que reciba un texto y lo devuelva al revés.

let palabra = prompt("Ingrese una palabra: "); //Solicita el ingreso por teclado de un texto

let vuelta = reverso(palabra); //Variable local que invoca a la funcion para devolver el reverso de una palabra

//Muestra por consola la palabra ingresada y el haberlo resuelto al reves
console.log(`La palabra ingresada es ${palabra} y, al reves: ${vuelta} `);

function reverso(dato) {
    let valor = /\d/.test(dato); //Permite identificar si hay caracteres numericos en el texto escrito

    if (valor != true) { //En caso de tener unicamente caracteres de texto, resuelve lo solicitado
        var caracteres = dato.split('').reverse().join('');
        
        return caracteres; //Retorna lo resuelto en la linea anterior
    } else {
        return "No puede ser resuelta, contiene caracteres desconocidos";
        //Retorna el siguiente comentario en caso de tener caracteres numericos
    }
} 