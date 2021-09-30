function sum(a , b ) {
  let resultado = 0
  if ( !a && !b){
    resultado = 0
  }else {
      if (!a){
        resultado = b + 0 
      } else if ( !b){
        resultado = a + 0 
      }else {
        resultado = a + b
      }
  }
  return resultado ;
}

function subtract(a , b ) {
  let resultado = 0
  if ( !a && !b){
    resultado = 0
  }else {
      if (!a){
        resultado = b - 0 
      } else if ( !b){
        resultado = a - 0 
      }else {
        resultado = a - b
      }
  }
  return resultado ;
}

function divide(a, b) {
  let resultado = 0
  if (a != 0){
    if(b != 0){
      resultado = a/b
    }else{
      throw new Error('el valor de "b" no puede ser 0');
    }
  }else{
    throw new Error('el valor de "a" no puede ser 0');
  }
  return resultado;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
