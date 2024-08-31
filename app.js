let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#2cab37";

let item = '';

// Обработчики кликов для кнопок
let btn1 = document.getElementById("product1");
let btn2 = document.getElementById("product2");
let btn3 = document.getElementById("product3");
let btn4 = document.getElementById("product4");
let btn5 = document.getElementById("product5");
let btn6 = document.getElementById("product6");
let btn7 = document.getElementById("product7");

btn1.addEventListener("click", function() {
    if (tg.MainButton.isVisible()) { // исправлено
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали Clab Sendvich");
        item = '1';
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function() {
    if (tg.MainButton.isVisible()) { // исправлено
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали Chicken Legs");
        item = '2'; // исправлено
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function() {
    if (tg.MainButton.isVisible()) { // исправлено
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали Burger");
        item = '3'; // исправлено
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function() {
    if (tg.MainButton.isVisible()) { // исправлено
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали Hot Pizza");
        item = '4'; // исправлено
        tg.MainButton.show();
    }
});

btn5.addEventListener("click", function() {
    if (tg.MainButton.isVisible()) { // исправлено
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали Assorti Pizza");
        item = '5'; // исправлено
        tg.MainButton.show();
    }
});

btn6.addEventListener("click", function() {
    if (tg.MainButton.isVisible()) { // исправлено
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали Max Bludo");
        item = '6'; // исправлено
        tg.MainButton.show();
    }
});

btn7.addEventListener("click", function() {
    if (tg.MainButton.isVisible()) { // исправлено
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали Lavash");
        item = '7'; // исправлено
        tg.MainButton.show();
    }
});

// Обработчик клика на основную кнопку
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
});

