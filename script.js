let palabras = ['café', 'croissant', 'tostada', 'zumo', "hola", "crack"];

function modificaPares(palabras, modificarPalabra){
    let palabrasModificadas = [];
    palabras.forEach((palabra, i) => {
        if((i + 1) % 2 === 0){
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