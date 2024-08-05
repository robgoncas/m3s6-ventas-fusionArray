// Definición de arreglos
var arregloA = [1, 2, 3, 4];
var arregloB = [3, 4, 5, 6];

// Unión (elementos únicos combinados de ambos arreglos)
var union = arregloA.concat(arregloB.filter(function (x) { 
    //arregloA.indexOf(x) me 
    //devuelve el index 0,1,2 del elemento si lo encuentra
    // ó -1 si no lo encuentra
    return arregloA.indexOf(x) === -1; 
}

));
console.log('Unión:', union); // Salida: [1, 2, 3, 4, 5, 6]



// Intersección (elementos comunes en ambos arreglos)
var interseccion = arregloA.filter(
    function (x) { 
    return arregloB.indexOf(x) !== -1; 
}
);
console.log('Intersección:', interseccion); // Salida: [3, 4]



// Diferencia (elementos que están en uno u otro arreglo, pero no en ambos)
var diferencia = arregloA.concat(arregloB).filter(
    function (x) { 
    return !(arregloA.indexOf(x) !== -1 
    && arregloB.indexOf(x) !== -1); 
}
);
console.log('Diferencia:', diferencia); // Salida: [1, 2, 5, 6]