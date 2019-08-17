function caracterRepetido(e) {
  if (e.keyCode == 13) {
    //detecto cuando se presiona la tecla enter
    let cadena = document.getElementById('cadena').value; //se obtiene la cadena mediante el identificador
    let resultado = document.getElementById('resultado'); //elemento que contendrá la respuesta
    let distanciaTemp = 0; //Es la distancia entre carácteres que se repiten
    let posTemp; // posición final del primer carácter que se repite
    for (let i = 0; i < cadena.length; i++) {
      // for que recorre el string en primera instancia
      let letraActual = cadena[i]; //es la letra actual a evaluar
      for (let j = i + 1; j < cadena.length; j++) {
        // for para comparar letra actual con el resto de la cadena
        if (cadena[j] == letraActual) {
          //hago la comparación
          if (j - i < distanciaTemp || distanciaTemp === 0) {
            // comparo las distancias entre caracteres que se repiten.
            //la distancia menor es la que se almacena
            distanciaTemp = j - i;
            posTemp = i;
          }
        }
      }
    }
    //Posibles Respuestas
    if (posTemp != null) {
      resultado.innerHTML = `<strong>El primer carácter repetido es: ${
        cadena[posTemp]
      }</strong>`;
      console.log(
        'El caracter es: ' +
          cadena[posTemp] +
          '\nLa distancia entre carácteres es: ' +
          distanciaTemp +
          '\nLa primera aparición del caracter es en la posición es: ' +
          posTemp
      );
    } else {
      console.log('carácter null');
      resultado.innerHTML = `<strong>El primer carácter repetido es:'\0' (NULL)</strong>`; // el carácter NULL se representa mediante el \0
    }
  }
}
