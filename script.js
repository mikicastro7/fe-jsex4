let palabras = ['café', 'croissant', 'tostada', 'zumo', "hola"];

function modificaPares(palabras, modificarPalabra){
    let palabrasModificadas = [];
    palabras.forEach(palabra => {
        if(palabra.length % 2 === 0){
            let modificada = modificarPalabra(palabra);
            palabrasModificadas.push(modificada)
        } else {
            palabrasModificadas.push(palabra);
        }
    });

    return palabrasModificadas
}

let palabrasParesModificadas = modificaPares(palabras, elemento => elemento.charAt(0).toUpperCase() + elemento.slice(1)); 
console.log(palabrasParesModificadas);