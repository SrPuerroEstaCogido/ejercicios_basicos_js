const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const key in alien) {
    if (Object.prototype.hasOwnProperty.call(alien, key)) {
      console.log("La propiedad", key, "tiene cómo valor:", alien[key]);
    }
  }