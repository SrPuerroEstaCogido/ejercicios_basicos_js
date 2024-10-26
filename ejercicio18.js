const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const paises = placesToTravel;

for (let i = 0; i < paises.length; i++) {
  if (paises.id == 40 || 11) {
    paises.splice(i, 1);
  }
}

console.log(paises);
