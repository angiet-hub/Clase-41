/*      Hacer un programa que sea un mini editor de texto. El programa debe inicialmente pedir para ingresar un texto, 
luego debe preguntar qué es lo que queremos hacer. Opciones:
        "duplicar": duplicar el texto
        "reemplazar": reemplaza un string por otro en el texto
        "agregar": agregar texto
        "cortar": pide dos números de índice entre los cuáles recortar el texto
        "eliminar palabra": elimina una palbra del texto
        "buscar subtexto": busca un string dentro del texto y devuelve un mensaje diciendo si lo encontró o no
        "buscar palabra": busca una palabra dentro del texto y devuelve un mensaje diciendo si lo encontró o no
        "mayusculas": poner todo el texto a mayusculas
        "minusculas": poner todo el texto en minusculas
        "contar letras": mostrar cuántas letras tiene el texto sin espacios
        "contar palabras": mostrar cuántas palabras tiene el texto
        "h4ck3r 5p34k": convierte el texto en "Hacker Speak"

Al elegir la opción debe mostrar el texto modificado y permitir seguir realizando acciones.  */


let seguir = true;
let resultado ="";
let i = 0;

const duplicarTexto = (texto) => {
   return texto + "\n" + texto;
}

const reemplazar = (original, reemplazo) => {
    return texto.replace(original, reemplazo);
}

const agregar = (texto, agrego) => {
    return texto + " " + agrego;
}

const cortar = (indice1, indice2) => {
    return texto.substring(indice1, indice2);
}

const eliminar = (palabra) => {
    return texto.replace(palabra, '');   
}

const buscarPalabra = (palabraBuscar) => {
    return texto.includes(palabraBuscar);
}

const mayusculas = (texto) => {
    return texto.toUpperCase();
}

const minusculas = (texto) => {
    return texto.toLowerCase();
}

const contarTexto = (texto) => {
    const espaciosBlancos = / /gi;
    const eliminoEspacios = texto.replace(espaciosBlancos,'');
    const separoLetras = eliminoEspacios.split('');
    const cantidad = separoLetras.length;
    return cantidad;
}

const contarPalabras = (texto) => {
    const separo = texto.split(' ');
    const cantidadPalabras = separo.length;
    return cantidadPalabras;
}

const hacker = (texto) => {
    let arrayText = texto.split("");

    for(let i = 0; i < arrayText.length; i++) {
        if (arrayText[i] === "a" || arrayText[i] === "A") {
            arrayText[i] = "4";
        } else if (arrayText[i] === "e" || arrayText[i] === "E") {
            arrayText[i] = "3";
        } else if (arrayText[i] === "i" || arrayText[i] === "I") {
            arrayText[i] = "1";
        } else if (arrayText[i] === "o" || arrayText[i] === "O") {
            arrayText[i] = "0";
        } else if(arrayText[i] === "s" || arrayText[i] === "S") {
            arrayText[i] = "5";
        }
    }
    return arrayText.join("");
}

const texto = prompt('Ingrese un texto');

while(seguir) {
    const accion = prompt(`Qué acción desea realizar?:
    1)Duplicar
    2)Reemplazar
    3)Agregar
    4)Cortar
    5)Eliminar palabra
    6)Buscar palabra
    7)Mayusculas
    8)Minusculas
    9)Contar letras
    10)Contar palabras
    11)h4ck3r 5p34k
    12)Salir`);

    switch(accion) {
        case "1":
            alert(duplicarTexto(texto));
        break;
        case "2":
            const original = prompt('Ingrese el texto a reemplazar');
            const reemplazo = prompt('Ingrese el texto nuevo');
            alert(reemplazar(original,reemplazo));
        break;
        case "3":
            const agrego = prompt('Ingrese el texto a agregar');
            alert(agregar(texto, agrego));
        break;
        case "4":
            const indice1 = Number(prompt('Ingrese el primer indice'));
            const indice2 = Number(prompt('Ingrese el indice hasta donde desea cortar'));
            alert(cortar(indice1, indice2));
        break;
        case "5":
            const palabra = prompt('Ingrese la palabra a eliminar');
            alert(eliminar(palabra));
        break;
        case "6":
            const palabraBuscar = prompt('Ingrese la palabra a buscar');
            if(buscarPalabra === true) {
                alert('Palabra encontrada');
            } else {
                alert('Palabra no encontrada')
            }
        break;
        case "7":
            alert(mayusculas(texto));
        break;
        case "8":
            alert(minusculas(texto));
        break;
        case "9":
            alert(contarTexto(texto));
        break;
        case "10":
            alert(contarPalabras(texto));
        break;
        case "11":
            alert(hacker(texto));
        break;
        case "15":
            alert('Hasta luego!');
        break;       
}
}