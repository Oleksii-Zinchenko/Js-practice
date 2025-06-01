// class User {
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
//   set email(newLogin) {
//     this.#email = newLogin;
//   }
// }

// const mango = new User('Mango', 'mango@dog.com');
// console.log(mango);
// console.log(mango.login);
// mango.login = 'Mangodog';
// console.log(mango.login);
// console.log(mango.email);
// mango.email = 'pad@.com';
// console.log(mango.email);

// const poly = new User('Poly', 'poly@dog.com');

// console.log(poly);
// console.log(poly.login);
// poly.login = 'polymango';
// console.log(poly.login);
// console.log(poly.email);
// poly.email = 'pol@r.com';
// console.log(poly.email);

//-------------------------------------------------------------//

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//-----------------------------------------------------------------------------------//

// class Storage {
//   #items;
//   constructor(goodInStock) {
//     this.#items = goodInStock;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem('Scaner');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//-------------------------------------------------------------------------------------------------//

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value = this.#value + str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//------------------------------------------------------//

// const names = ['Ivan', 'Maria', 'Anna'];
// function sayHi() {
//   return names.map(el => `${el} привіт`);
// }
// console.log(sayHi());

//------------------------------------------------------//

// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// function findNameID(array, id) {
//   let user = users.find(el => el.id === id);
//   if (user) {
//     return user.name;
//   } else {
//     return `Користувача з таким ім'ям не знайдено`;
//   }
// }
// console.log(findNameID(users, 1));

//------------------------------------------------------//

// const peopls = [
//   {
//     passport: 'A1234567',
//     name: 'Alexey',
//     age: 37,
//     sex: 'Male',
//   },
//   {
//     passport: 'B2345678',
//     name: 'Maria',
//     age: 29,
//     sex: 'Female',
//   },
//   {
//     passport: 'C3456789',
//     name: 'John',
//     age: 42,
//     sex: 'Male',
//   },
//   {
//     passport: 'D4567890',
//     name: 'Eva',
//     age: 35,
//     sex: 'Female',
//   },
//   {
//     passport: 'E5678901',
//     name: 'Chris',
//     age: 50,
//     sex: 'Male',
//   },
//   {
//     passport: 'F6789012',
//     name: 'Sofia',
//     age: 28,
//     sex: 'Female',
//   },
//   {
//     passport: 'G7890123',
//     name: 'Oliver',
//     age: 31,
//     sex: 'Male',
//   },
//   {
//     passport: 'H8901234',
//     name: 'Lily',
//     age: 26,
//     sex: 'Female',
//   },
// ];

// const getGirlsPassport = array => array.filter(el => el.sex === 'Female').map(el => el.passport);

// console.log(getGirlsPassport(peopls));

//--------------------------------------------------------------------------------------------------------//

// const peopls = [
//   {
//     passport: 'A1234567',
//     name: 'Alexey',
//     age: 37,
//     sex: 'Male',
//   },
//   {
//     passport: 'B2345678',
//     name: 'Maria',
//     age: 29,
//     sex: 'Female',
//   },
//   {
//     passport: 'C3456789',
//     name: 'John',
//     age: 42,
//     sex: 'Male',
//   },
//   {
//     passport: 'D4567890',
//     name: 'Eva',
//     age: 35,
//     sex: 'Female',
//   },
//   {
//     passport: 'E5678901',
//     name: 'Chris',
//     age: 50,
//     sex: 'Male',
//   },
//   {
//     passport: 'F6789012',
//     name: 'Sofia',
//     age: 28,
//     sex: 'Female',
//   },
//   {
//     passport: 'G7890123',
//     name: 'Oliver',
//     age: 31,
//     sex: 'Male',
//   },
//   {
//     passport: 'H8901234',
//     name: 'Lily',
//     age: 26,
//     sex: 'Female',
//   },
// ];

// const getTotalBoysYers = array =>
//   array.filter(el => el.sex === 'Male').reduce((total, el) => total + el.age, 0);

// console.log(getTotalBoysYers(peopls));

//--------------------------------------------------------------------------------------------//

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Cheese', 'Butter'], status: 'processing' },
//   { id: 3, products: ['Apples', 'Bananas'], status: 'processing' },
//   { id: 4, products: ['Tomatoes', 'Lettuce', 'Cucumber'], status: 'completed' },
// ];

// const orderCompleted = array => array.every(el => el.status === 'completed');

// const listCompleted = array =>
//   array.filter(el => el.status === 'completed').flatMap(el => el.products);

// console.log(orderCompleted(orders));
// console.log(listCompleted(orders));

//------------------------------------------------------------------------------------//

// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Egs', price: 15 },
// ];

// const sumProducts = array =>
//   array.filter(el => el.price > 10).reduce((total, el) => total + el.price, 0);

// console.log(sumProducts(products));

//-----------------------------------------------------------------------------------//

// const tel = {
//   regNumber: 'A123123124',
//   brand: 'HUAWEI',
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };

// const tel_2 = {
//   regNumber: 'AS965879679',
//   brand: 'SAMSUNG',
// };

// tel.showInfo('China');
// tel.showInfo.call(tel_2, 'South Korea');
// tel.showInfo.apply(tel_2, ['South Korea']);
// const tell = tel.showInfo.bind(tel_2, 'South Korea');
// tell();

//---------------------------------------------------------------------------------//

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// const rectangle1 = new Rectangle(10, 5);

// console.log(rectangle1.calculateArea());

//--------------------------------------------------------------------------------//

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   carYear(currentYear) {
//     if (currentYear < this.year) {
//       console.log(`Помилка: рік виробництва не може бути пізнішим за поточний рік`);
//       return;
//     }
//     const age = currentYear - this.year;
//     console.log(`Вік автомобіля: ${age} років`);
//     if (age > 5) {
//       console.log(`Автомобіль потребує технічного обслуговування зааз`);
//     } else {
//       console.log(`Автомобіль не потребує технічного обслуговування`);
//     }
//   }
// }

// const honda = new Car('Honda', '1987');
// const bmw = new Car('BMW', '2022');
// const mercedec = new Car('Mercedec', '1987');

// // bmw.carYear(2024);
// // mercedec.carYear(2022);
// honda.carYear(1986);

//--------------------------------------------------------------------------------//

// class Client {
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

// const client_1 = new Client('Ivan', 'wrtdf@com.ua');

// console.log(client_1.login);
// console.log(client_1.email);

// client_1.login = 'Nastya';
// client_1.email = 'alex@good.job';

// console.log(client_1.login);
// console.log(client_1.email);

//---------------------------------------------------------//

// class Phone {
//   static MAX_PRICE = 40000;
//   #price;
//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// const newPhonePrice = new Phone(45000);

// console.log(newPhonePrice.price);
// newPhonePrice.price = 1000;
// console.log(newPhonePrice.price);

//----------------------------------------------------//

// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Знято ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
//     } else {
//       console.log(`Недостатньо коштів на рахунку.`);
//     }
//   }
//   deposit(refill) {
//     this.balance += refill;
//     console.log(`Поповнено ${refill} грн. Залишок на рахунку: ${this.balance} грн.`);
//   }
//   checkBalance() {
//     console.log(`Залишок на рахунку: ${this.balance} грн.`);
//   }
// }
// const bankAccount1 = new BankAccount('1', 2000);
// bankAccount1.withdraw(500);
// bankAccount1.withdraw(2100);
// bankAccount1.deposit(500);
// bankAccount1.checkBalance();
