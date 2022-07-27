function negate(a) {
  return !(a);
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
if (a == true && b == false) {
    return true;
  } else if (b == true && a == false) {
    return true;
  } else {
    return false;
  }
};

function truthiness(a) {
  return Boolean(a);

};

function isEqual(a, b) {
  return (a === b);
};

function isGreaterThan(a, b) {
  return (a > b);
};

function isLessThanOrEqualTo(a, b) {
  return (a <= b);
};

function isOdd(a) {
  return Boolean(a % 2);
};

function isEven(a) {
  return Boolean ( !(a %2));
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a)); 
};

function startsWith(char, string) {
  return Boolean( string[0] == char);
};

function containsVowels(string) {
  return Boolean(string.match(/[aeiou]/gi));
};

function isLowerCase(string) {
  return Boolean(string === string.toLowerCase());
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
