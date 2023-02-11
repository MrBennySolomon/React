function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map((num) => {
       return {
         val: num  
       };
    });
}

console.log(transformToObjects([1, 2, 3]))