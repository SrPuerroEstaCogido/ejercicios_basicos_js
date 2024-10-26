const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
  
    let Avengadores = ""
//No entendia en el length y me lo estaban explicando
    console.log(Avengadores.length);
// Aqui ya lo entendi.
    for (let i = 0; i < avengers.length; i++) {
        if (avengers[i].length > Avengadores.length){
            Avengadores = avengers[i];
        }
    }
    //console.log(`La palabra mas larga es ${Avengadores}`);
    return Avengadores
}

console.log (`La palabra más larga es ${findLongestWord(avengers)}`);
//finLongestWord (avengers);