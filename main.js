let number = prompt("Первое число");
let srt = prompt("Выберите (+, -, /, *)");
let number2 = prompt("Второе число");
if (srt === "+") {
  console.log(number + number2);
} else if (srt === "-") {
  console.log(number - number2);
}
if (srt === "*") {
  console.log(number * number2);
} else if (srt === "/") {
  console.log(number / number2);
}
