function cadena(cadena) {
  let distanciaTemp = 0;
  let posTemp;
  let letraTemp;
  for (let i = 0; i < cadena.length; i++) {
    let letraActual = cadena[i];
    for (let j = i + 1; j < cadena.length; j++) {
      if (cadena[j] == letraActual) {
        if (j - i < distanciaTemp || distanciaTemp === 0) {
          distanciaTemp = j - i;
          posTemp = i;
        }
      }
    }
  }
  if (posTemp != null) {
    console.log(
      'El caracter es: ' +
        cadena[posTemp] +
        '\nLa distancia entre carácteres es: ' +
        distanciaTemp +
        '\nLa primera aparición del caracter es en la posición es: ' +
        posTemp
    );
  } else console.log('carácter:  null -> "\0" ');
}
cadena('ABCAB');
console.log('------------------------');
cadena('ABBAC');
console.log('------------------------');
cadena('ABCDE');
