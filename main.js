//! task-1
// через for
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
// Через while
// let num = 0;
// while (num <= 100) {
//   num++;
//   console.log(num);
// }
// декрипшен
// for (let i = 100; i >= 0; i--) {
//     console.log(i);
//   }
//! task-2
// четные
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) console.log(i);
// }
// не четные
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) console.log(i);
//   }
//! task-3
// сумма общ
// let sum1 = 0;
// for (let i = 0; i <= 100; i++) {
//   sum1 = sum1 + i;
// }
// console.log(sum1);
// сумма четных
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);
//! task-4
//! while
// let studentName = "Duolingo Green";
// let studentChar = prompt("Enter any char...");
// let couter = 0;
// while (couter <= studentName.length) {
//   const currentChar = studentName.charAt(couter);
//   if (currentChar === studentChar) {
//     console.log(Char: ${couter});
//   }
//   couter++;
// }
//! For
// let long = studentName.length;
// for (let count = 0; count <= long; long--) {
//   const currentChar = studentName.charAt(long);
//   if (currentChar === studentChar) {
//     console.log("Ооба бар е char");
//   }
// }
//! task-5
// let name1 = "Hellow";
// let counter = 0;
// let num1 = name1.length;
//! while
// while (num1 >= counter) {
//   console.log(name1.charAt(num1));
//   num1--;
// }
//! for
// for (num1 >= counter; num1 >= counter; num1--) {
//   console.log(name1.charAt(num1));
// }
//! task-6
// let str = ``;
// let count = 0;
// while (count <= 6) {
//   let second = 0;
//   while (second <= 10) {
//     str = str + "*";
//     second++;
//   }
//   str = str + "\n";
//   count++;
// }
// console.log(str);
//! task-7
//! while
// let count = 1;
// while (count <= 5) {
//   let str = "";
//   let second2 = 1;
//   while (second2 <= count) {
//     str += "*";
//     second2++;
//   }
//   console.log(str);
//   count++;
// }
//! for
// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let second3 = 1; second3 <= i; second3++) {
//     str += "*";
//   }
//   console.log(str);
// }