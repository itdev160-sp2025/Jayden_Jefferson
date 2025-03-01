// Welcome message 
var user = "Jayden";
var salutation = "Hello, ";
var greeting = salutation + user + "Here are the latest reviews.";
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting;

//Calculations For price iphone

var price = 500,
    studentDiscount = 0.10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById("Price"),
    studentPriceEl = document.getElementById("Student-price");

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

// Calculations For Price Apple watch


var price2 = 300,
    studentDiscount = 0.10,
    studentPrice = price2 - (price2 * studentDiscount),
    priceEl = document.getElementById("Price2"),
    studentPriceEl = document.getElementById("Student-price2");

priceEl.textContent = price2.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);
