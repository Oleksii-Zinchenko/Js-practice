// 1) Створіть масив styles з елементами 'jazz' і 'blues'
// // Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// // Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// // Напишіть функцію logItems(array), яка приймає масив як аргумент
// // і виводить у консоль кожен його елемент у форматі:
// // "<номер елемента> - <значення елемента>".
// // Використайте цикл for для перебору елементів масиву.
// // Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// console.log(styles);

// const index = styles.indexOf("blues");
// if (index !== -1) {
//   styles[index] = "classic";
// }
// console.log(styles);

// function logItems(array) {
//   for (let i = 1; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);

//---------------------------------------------------------------------------------------------------------//

// 2) Напишіть функцію checkLogin(array), яка:
// // Приймає масив логінів як аргумент.
// // Запитує ім'я користувача через prompt.
// // Перевіряє, чи є введене ім'я у переданому масиві.
// // Якщо ім'я є в масиві виводить повідомлення через alert: "Welcome, <name>!"
// // Якщо ім'я відсутнє  виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
// const nameLogin = prompt("Enter your name:");
// function checkLogin(logins) {
//   for (const login of nameLogin) {
//     if (login === logins) {
//       return alert(`Welcome, ${login}!`);
//     }
//   }
//   alert("User not found");
// }

// checkLogin(logins);

//-------------------------------------------------------------------------------------------------------//

// 3) Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       count++;
//       sum += arg;
//     }
//   }
//   if (count === 0) {
//     return 0;
//   }
//   return sum / count;
// }
// console.log(caclculateAverage(1, 2, 3, "2"));
// console.log(caclculateAverage(0, 34, 47, 5, 78));

//-----------------------------------------------------------------------------------------------------//

// 7) Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.moode = "happy";
// //2 user["mood"] = "happy";
// //3 const key = "mood";
// // user[key] = "happy";

// user.hobby = "skydiving";
// user.premium = false;

// // const userKeys = Object.keys(user);

// // for (const key of userKeys) {
// //   console.log(`${key}:${user[key]}`);
// // }
// // console.log(userKeys);

// const userArrs = Object.entries(user);
// for (const arr of userArrs) {
//   console.log(`${arr[0]}:${arr[1]}`);
// }
// console.log(userArrs);

//--------------------------------------------------------------------------------------------------//

// 8) Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// const sal = Object.values(salaries);
// for (const values of sal) {
//   sum += values;
// }
// console.log(sum);

//------------------------------------------------------------------------------------------------//

// 9) Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   exist() {
//     return this.a !== undefined && this.b !== undefined;
//   },

//   sum() {
//     if (this.exist()) {
//       return this.a + this.b;
//     }
//     return "No such propeties";
//   },

//   mult() {
//     if (this.exist()) {
//       return this.a * this.b;
//     }
//     return "No such propeties";
//   },
// };

// // calculator.read(10, 5);
// console.log(calculator.sum());
// console.log(calculator.mult())

//-----------------------------------------------------------------------------------------------//
