// https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}\D*\d{4}$/g;

  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));

console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
