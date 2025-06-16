// // Створіть функцію, яка відповідає на запитання «Ви граєте на банджо?».
// // Якщо ваше ім'я починається з літери «R» або малої «r», ви граєте на банджо!

// // Функція приймає ім'я як єдиний аргумент і повертає один із наступних рядків:

// // name + " plays banjo"
// // name + " does not play banjo"
// // Надані імена завжди є коректними рядками

// function areYouPlayingBanjo(name) {
//   const first = name.toLowerCase();
//   if (first[0] === "r") {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not play banjo`;
// }
// console.log(areYouPlayingBanjo("vafael"));

//--------------------------------------------------------------------------------------------//

// // Враховуючи непорожній масив цілих чисел, поверніть результат множення значень по порядку. Приклад:
// // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// const x = [1, 2, 3, 4];
// const grow = (x) => x.reduce((acc, val) => acc * val, 1);
// console.log(grow(x));

//-------------------------------------------------------------------------------------------//

// Напиши функцію getCenturies(years), яка:
// Приймає масив років (наприклад: [1705, 1601, 2000, 89]).
// Повертає новий масив, у якому кожен рік замінено на відповідне століття.
// Має використовувати метод масивів .map().
// Століття визначай за допомогою Math.ceil(year / 100).

// const years = [1705, 1601, 2000, 89];

// function getCenturies(years) {
//   const repYear = years.map((year) => Math.ceil(year / 100));
//   return repYear;
// }
// console.log(getCenturies(years));

//--------------------------------------------------------------------------------------------//

// Завдання:
// Відібрати тільки ті покупки, де категорія — "food".
// Для кожної з них створити рядок типу:
// "Product: Bread - Total: $3.00"
// (Ціна множиться на кількість)
// Повернути загальний об'єкт з:
// масивом таких рядків,
// загальною сумою витрат на їжу (totalSpent).

// const purchases = [
// { product: "Bread", category: "food", price: 1.5, quantity: 2 },
// { product: "T-shirt", category: "clothing", price: 12, quantity: 1 },
// { product: "Milk", category: "food", price: 0.99, quantity: 3 },
// { product: "Laptop", category: "electronics", price: 899, quantity: 1 },
// ];

// function analPurch(array) {
// const select = array.filter((item) => item.category === "food");

// const descriptions = select.map((item) => {
//     const total = item.price * item.quantity;
//     return `Product: ${item.product} - Total: ${total.toFixed(2)}`;
// });

// const totalSpend = select.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
// }, 0);

// return {
//     descriptions,
//     "Загальна сума витрат на їжу": `$${totalSpend.toFixed(2)}`,
// };
// }

// console.log(analPurch(purchases))

// ----------------------------------------------------------------------------------------------//

// Розглянемо масив/список овець, де деякі вівці можуть бути відсутні на своїх місцях. Нам потрібна функція, яка підраховує кількість овець, присутніх у масиві (true означає присутність).

// const sumSheeps = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter((sheep) => sheep === true).length;
// }

// console.log(countSheeps(sumSheeps));

//-----------------------------------------------------------------------------------------------//

