https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  let newArr = [];
  let regex = /\W*_*/g;
  const newStr = str.toLowerCase().replace(regex, "");
  let compare = newStr.split("");
  for (let character of compare) {
    newArr.unshift(character);
  }

  return newStr === newArr.join("");
}

console.log(palindrome("eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /- :) 0-0"));
