const contarOcurrencias = (cadena, letra) => {
    return cadena.split(letra).length - 1;
  };
  console.log(contarOcurrencias("javascript", "a")); 
  