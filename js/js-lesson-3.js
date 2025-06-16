// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.map((num) => num ** 2);

// const doubleNumbers = (array) => array.map((num) => num ** 2);

// console.log(doubleNumbers);

//----------------------------------------------------------------------------------//

// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// // const allValues = data.flatMap((num) => num.values);
// const allValues = (array) => array.flatMap((item) => item.values);

// console.log(allValues);
//----------------------------------------------------------------------------------//

// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const leastOne = people.some((hum) => hum.age > 20);

// const leastOne = (array) => array.some((hum) => hum.age > 20);

// console.log(leastOne(people));

//----------------------------------------------------------------------------------//

// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const paired = numbers.every((num) => num % 2 === 0);

// const paired = (array) => array.every((num) => num % 2 === 0);

// console.log(paired(numbers));

//---------------------------------------------------------------------------------//

// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firstNum = numbers.find((num) => num % 2 !== 0);

// const firstNum = (array) => array.find((num) => num % 2 !== 0);

// console.log(firstNum(numbers));

//---------------------------------------------------------------------------------//

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortedArray = numbersArray.toSorted((a, b) => a - b);

// const sortedArray = (array) => array.toSorted((a, b) => a - b);

// console.log(sortedArray(numbersArray));

//----------------------------------------------------------------------------------//

// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortedArray = stringArray.toSorted((a, b) => a.localeCompare(b));

// const sortedArray = (array) => array.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedArray(stringArray));

//----------------------------------------------------------------------------------//

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

//---------------------------------------------------------------------------------//

// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newArr = user.filter((person) => person.age > 20);

// const newArr = (array) => array.filter((person) => person.age > 20);

// console.log(newArr(user));

//-----------------------------------------------------------------------------------//

// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// const sum = (array) => array.reduce((acc, num) => acc + num, 0);

// console.log(sum(numbers));
//-----------------------------------------------------------------------------------//

// Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }

//   number(value) {
//     this.value = value;
//     return this;
//   }

//   add(value) {
//     this.value += value;
//     return this;
//   }

//   subtract(value) {
//     this.value -= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       console.log(`Неможливо ділити на 0`);
//     } else this.value /= value;
//     return this;
//   }

//   multiply(value) {
//     this.value *= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       console.log("Неможливо ділити на 0");
//       return this;
//     }
//     this.value /= value;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(0) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

//------------------------------------------------------------------------------------//

// Завдання 12:

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// lass Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const newUser = new Client("Alex", "alex@gmail.com");

// newUser.login = "Oleksii";
// console.log(newUser.login);

// newUser.email = "oleksii@gmail.com";
// console.log(newUser.email);

// console.log(newUser);

//------------------------------------------------------------------------------------//

// Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, departament) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.departament = departament;
//   }

//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       departament: this.departament,
//     };
//   }
// }

// const emp1 = new Employee(
//   "Oleksii",
//   38,
//   "male",
//   "oleksii@gamil.com",
//   35000,
//   "Development"
// );

// console.log(emp1.getDetails());
// console.log(emp1.getEmployeeDetails());
