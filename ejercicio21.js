const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

const mayor = [];
const menor = [];

for (const user of users) {
  if (user.years < 18) {
    menor.push(user.name);
  } else {
    mayor.push(user.name);
  }
}

console.log("Usuarios menores de edad:", menor);
console.log("Usuarios mayores de edad:", mayor);