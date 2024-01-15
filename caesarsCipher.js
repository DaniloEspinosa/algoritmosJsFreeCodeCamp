// https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
  let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  let arrNewStr = [];
  for (let character of str) {
    if (list.indexOf(character) >= 0) {
      arrNewStr.push(list[list.indexOf(character) + 13]);
    } else {
      arrNewStr.push(character);
    }
  }

  return arrNewStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
