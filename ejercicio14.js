const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  const repetir = [];
  for (const element of words) {
    if (repetir[element]) {
      repetir[element]++;
    } else {
      repetir[element] = 1;
    }
  }
  console.log (repetir)
}

repeatCounter(words);
