const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {

  let = sumar = 0

  for (let i = 0; i < list.length; i++){
    if (typeof list[i] === "string"){
        sumar += list[i].length;
    } else {
      sumar += list[i];
    }
  }
  const media = sumar / list.length

  console.log (`El promedio es ${media}`)
}

averageWord (mixedElements);