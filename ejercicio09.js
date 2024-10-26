const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sumar = 0; 
  for (let i = 0; i < numberList.length; i++){
    sumar += numbers[i];
  }
    console.log(`La suma de todos los numeros es ${sumar}`);
}

sumNumbers (numbers);