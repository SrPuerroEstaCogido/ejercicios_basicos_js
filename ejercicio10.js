const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sumar = 0;
  for (let i = 0; i < numberList.length; i++) {
    sumar += numbers[i];
    
  }
  console.log(sumar / numberList.length)
}

average(numbers);