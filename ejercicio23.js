const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

const pelPeq = [];
const pelMed = [];
const pelGran = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    pelPeq.push(movie);
  } else if (movie.durationInMinutes > 200) {
    pelGran.push(movie);
  } else {
    pelMed.push(movie);
  }
}

console.log("las peliculas pequeñas son: \n", pelPeq, "\n");
console.log("las peliculas medianas son: \n", pelsMed, "\n");
console.log("las peliculas grandes son: \n", pelGran, "\n");