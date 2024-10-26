const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  const NoDuplicado = [];
  for (let i = 0; i < list.length; i++) {
    if (list.indexOf(list[i]) === i) {
      NoDuplicado.push(list[i]);
    }
  }
  console.log(NoDuplicado);
}
removeDuplicates(duplicates);
