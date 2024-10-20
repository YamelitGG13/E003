const frecuenciaCaracteres = cadena => {
    return cadena.split("").reduce((contador, char) => {
      contador[char] = (contador[char] || 0) + 1;
      return contador;
    }, {});
  };
  console.log(frecuenciaCaracteres("abbccc"));