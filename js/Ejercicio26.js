const palabraMasLarga = cadena => {
    let palabras = cadena.split(" ");
    return palabras.reduce((masLarga, palabra) => palabra.length > masLarga.length ? palabra : masLarga, "");
  };
  console.log(palabraMasLarga("Aprender JavaScript es emocionante")); 
  