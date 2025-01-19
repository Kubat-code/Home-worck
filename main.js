//? task-1
// function getNumber(x, y) {
//   for (let index = x; index <= y; index++) {
//     console.log(index);
//   }
//   x = y;
// }
// getNumber(10, 50);
//? task-2
// const getNumber = function (x, y) {
//   for (let index = x; index <= y; index++) {
//     if (index % 2 === 0) {
//       console.log(index);
//     }
//   }
//   x = y;
// };
// getNumber(10, 50);
//? task-3
// const getNumber = function (x, y) {
//   let sum = 0;
//   for (let index = x; index <= y; index++) {
//     if (index % 2 === 0) {
//       sum += index;
//       console.log(index);
//     }
//   }
//   x = y;
//   console.log(sum);
// };
// getNumber(10, 50);
//? task-4
// function findChar(word, char) {
//   let couter = 0;
//   while (couter <= word.length) {
//     const currentChar = word.charAt(couter);
//     if (currentChar === char) {
//       console.log(Boolean(char));
//     } else if (char !== true) {
//       console.log(Boolean(false));
//     }
//     couter++;
//   }
// }
// findChar("Bill Gates", "e");
//? task-5
// const showText = (text) => {
//   let counter = 0;
//   let num1 = text.length;
//   while (num1 >= counter) {
//     num1--;
//     console.log(text.charAt(num1));
//   }
// };
// showText("Hellow");