const array = ["Catalina", "Ernaldo", "Anna", "Tomás", "Hector"];

/* const functionCallback = (elemento, indice) => {
  console.log(`El elemento ${indice} es ${elemento}`);
}; */

const resultado = array.forEach((elemento, indice) =>
  console.log(`El elemento ${indice} es ${elemento}`)
);

console.log(resultado);

/* const homemadeForEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i);
  }
};

homemadeForEach(array, functionCallback); */
