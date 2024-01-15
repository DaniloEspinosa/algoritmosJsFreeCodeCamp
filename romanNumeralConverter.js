// https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
  console.log();

  let strNum = num.toString();
  let arrRoman = [];

  let number3 = strNum[strNum.length - 1];
  switch (number3) {
    case "9":
      arrRoman.unshift("IX");
      break;
    case "8":
      arrRoman.unshift("VIII");
      break;
    case "7":
      arrRoman.unshift("VII");
      break;
    case "6":
      arrRoman.unshift("VI");
      break;
    case "5":
      arrRoman.unshift("V");
      break;
    case "4":
      arrRoman.unshift("IV");
      break;
    case "3":
      arrRoman.unshift("III");
      break;
    case "2":
      arrRoman.unshift("II");
      break;
    case "1":
      arrRoman.unshift("I");
      break;
  }
  let number2 = strNum[strNum.length - 2];
  switch (number2) {
    case "9":
      arrRoman.unshift("XC");
      break;
    case "8":
      arrRoman.unshift("LXXX");
      break;
    case "7":
      arrRoman.unshift("LXX");
      break;
    case "6":
      arrRoman.unshift("LX");
      break;
    case "5":
      arrRoman.unshift("L");
      break;
    case "4":
      arrRoman.unshift("XL");
      break;
    case "3":
      arrRoman.unshift("XXX");
      break;
    case "2":
      arrRoman.unshift("XX");
      break;
    case "1":
      arrRoman.unshift("X");
      break;
  }
  let number1 = strNum[strNum.length - 3];
  switch (number1) {
    case "9":
      arrRoman.unshift("CM");
      break;
    case "8":
      arrRoman.unshift("DCCC");
      break;
    case "7":
      arrRoman.unshift("DCC");
      break;
    case "6":
      arrRoman.unshift("DC");
      break;
    case "5":
      arrRoman.unshift("D");
      break;
    case "4":
      arrRoman.unshift("CD");
      break;
    case "3":
      arrRoman.unshift("CCC");
      break;
    case "2":
      arrRoman.unshift("CC");
      break;
    case "1":
      arrRoman.unshift("C");
      break;
  }
  let number = strNum[strNum.length - 4];
  switch (number) {
    case "3":
      arrRoman.unshift("MMM");
      break;
    case "2":
      arrRoman.unshift("MM");
      break;
    case "1":
      arrRoman.unshift("M");
      break;
  }

  return arrRoman.join("");
}

console.log(convertToRoman(39));
