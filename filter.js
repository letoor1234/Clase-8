let letras = ["xyz", "abc", "efg", "ehg", "eth", "zzz"];

const functionCallback = (element, i) => {
  return element.includes("e");
};

const filteredLetras = letras.filter(functionCallback);

console.log(letras);
console.log(filteredLetras);

/* const homemadeFilter = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const filteredLetras = homemadeFilter(letras, functionCallback);

console.log(letras);
console.log(filteredLetras);
 */
