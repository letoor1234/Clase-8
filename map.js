const array1 = ["Catalina", "Ernaldo", "Anna", "Tomás", "Hector"];

const functionCallback = (element, indice) => {
  return {
    name: element,
    id: indice,
  };
};

const array2 = array1.map(functionCallback);

console.log(array1);
console.log(array2);

/* const homemadeMap = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i));
  }
  return newArray;
};

const array2 = homemadeMap(array1, functionCallback);

console.log(array1);
console.log(array2); */
