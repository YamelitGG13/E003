const truncarCadena = (cadena, num) => cadena.length > num ? cadena.slice(0, num) + "..." : cadena;
console.log(truncarCadena("JavaScript es genial", 10)); 