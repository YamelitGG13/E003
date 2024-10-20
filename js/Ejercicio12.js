const esPalindromo = palabra => {
    const reversa = palabra.split("").reverse().join("");
    return palabra === reversa;
  };
  console.log(esPalindromo("ana")); 
  