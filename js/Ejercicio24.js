const soloNumeros = cadena => /^\d+$/.test(cadena);
console.log(soloNumeros("12345"));
console.log(soloNumeros("123a5")); 
