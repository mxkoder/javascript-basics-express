const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => 
array.concat([element]);

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => numbers.map(numbers => String(numbers));


const uppercaseWordsInArray = strings => {
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(word => word.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 == 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;

// MC sol: return array.filter((_, itemIndex) => itemIndex !== index); 
// syntax - filter((element, index, array) => { /* ... */ } )
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => /^[aeiou]/i.test(strings));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};


const sumNumbers = numbers => numbers.reduce((total, number) => {
    return total + number
  }, 0);


const sortByLastLetter = strings => {
  let reversedWordArray = strings.map(word => word.split("").reverse().join(""));
  return (reversedWordArray.sort()).map(word => word.split("").reverse().join(""));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
