// // 1 - отримай body елемент і виведи його в консоль;
// const bodyElement = document.querySelector("body");
// console.log(bodyElement);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleElement = document.querySelector("#title");
// console.log(titleElement);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const listElement = document.querySelector(".list");
// console.log(listElement);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const topicElements = document.querySelectorAll("[data-topic]");
// console.log(topicElements);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstTopicElement = document.querySelector("[data-topic]");
// console.log(firstTopicElement);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastTopicElement = document.querySelectorAll("[data-topic]");
// console.log(lastTopicElement[lastTopicElement.length - 1]);
// // задати питання потрібно тут робити перевірку
// // if (lastTopicElement.length > 0) {
// // сonsole.log(lastTopicElement[lastTopicElement.length - 1]);
// // }
// // const lastTopicElement = document.querySelectorAll("[data-topic]").at(-1);
// // console.log(lastTopicElement);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const neighbour = titleElement.nextElementSibling;
// console.log(neighbour);

// //  8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const subTitles = document.querySelectorAll("h3");
// console.log(subTitles);

// //  9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// subTitles.forEach((subTitle) => subTitle.classList.add("active"));

// //  10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navElement = document.querySelector('li[data-topic="navigation"]');
// console.log(navElement);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// navElement.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const paragraph = navElement.querySelector("p");
// paragraph.textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const topicElement = document.querySelector(`li[data-topic="${currentTopic}"]`);
// console.log(topicElement);

// //  14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// topicElement.style.backgroundColor = "blue";

// //  15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const headerItem = document.querySelector("h3.completed");
// console.log(headerItem);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const parent = headerItem.closest("li");
// parent.remove();

// // // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// titleElement.insertAdjacentHTML(
//   "afterend",
//   "<p>Об'єктна модель документа (Document Object Mod)</p>"
// );

// // // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newItem = document.createElement("li");
// const newHeading = document.createElement("h3");
// newHeading.textContent = "Властивість innerHTML";
// const listDescription = document.createElement("p");
// listDescription.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// newItem.append(newHeading, listDescription);
// listElement.append(newItem);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const htmlMarkup = `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>
//       Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
//     </p>
//   </li>
// `;
// listElement.insertAdjacentHTML("beforeend", htmlMarkup);

// // 20 - очисти список
// listElement.innerHTML = "";

//-- Task-2 --//

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const numberContainer = document.querySelector(".number-container");

// for (let i = 0; i < 100; i++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   const numberBlock = document.createElement("div");
//   numberBlock.classList.add("number");
//   if (randomNumber % 2 === 0) {
//     numberBlock.classList.add("even");
//   } else {
//     numberBlock.classList.add("odd");
//   }
//   numberBlock.textContent = randomNumber;
//   numberContainer.appendChild(numberBlock);
// }

//-- Task - 03 --//

// / Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const input = document.querySelector(".js-username-input");
// input.addEventListener("input", checkInputValue);

// function checkInputValue() {
//   const inputValue = input.value.trim();
//   input.classList.toggle("success", inputValue.length >= 6);
//   input.classList.toggle("error", inputValue.length < 6);
// }

// function checkInputValue() {
//   const inputValue = input.value.trim();
//   input.classList.remove("success", "error");
//   if (inputValue.length >= 6) {
//     input.classList.add("success");
//   } else {
//     input.classList.add("error");
//   }
// }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// const input = document.querySelector(".js-username-input");
// input.addEventListener("focus", handleFocus);

// function handleFocus() {
//   const value = input.value.trim();
//   if (value === "") {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid green";
//   }
// }

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// const input = document.querySelector(".js-username-input");
// input.addEventListener("blur", handleInputBlur);

// function handleInputBlur() {
//   const isEmpty = input.value.trim() === "";
//   const outlineColor = isEmpty ? "3px solid red" : "3px solid lime";
//   input.style.outline = outlineColor;
// }

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector(".js-contact-form");
// const input = document.querySelector(".js-username-input");
// const output = document.querySelector(".js-username-output");

// input.addEventListener("input", () => {
//   const trimedValue = input.value.trim();
//   output.textContent = trimedValue !== "" ? trimedValue : "Anonymous";
// });

// form.addEventListener("submit", onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();

//   // const userNameValue = event.target.elements.userName.value.trim();
//   // const accept = event.target.elements.accept.checked;
//   const [userName, accept] = event.target.elements;
//   const userNameValue = userName.value.trim();

//   if (userNameValue === "") {
//     alert("Будь ласка, введіть ім'я і підтвердіть згоду з політикою.");
//     return;
//   }
//   if (!accept.checked) {
//     alert("Підтвердіть згоду з політикою.");
//   }

//   const formData = {
//     userName: userNameValue,
//   };

//   console.log("Дані користовуча:", formData);

//   form.reset();
//   output.textContent = "Anonymous";
// }

//-- Task - 04 --//

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const box = document.querySelector(".box");
// const btnDecrease = document.querySelector(".js-decrease");
// const btnIncrease = document.querySelector(".js-increase");

// let boxSize = 50;

// btnDecrease.addEventListener("click", () => {
//   boxSize -= 20;
//   if (boxSize < 20) {
//     boxSize = 20;
//   }
//   updateBoxSize();
// });

// btnIncrease.addEventListener("click", () => {
//   boxSize += 20;
//   updateBoxSize();
// });

// function updateBoxSize() {
//   box.style.width = `${boxSize}px`;
//   box.style.height = `${boxSize}px`;
// }
