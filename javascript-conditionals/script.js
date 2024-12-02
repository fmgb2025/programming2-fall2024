//let age = 18;
//
//if (age >= 18) {
//    alert("You are an adult");
//} else if (age >= 13) {
//    alert("You are a teenager");
//} else {
//    alert("You are a child");
//}

//let score = 87;
//
//if (score >= 90) {
//    alert("You got a A!");
//} else if (score >= 80) {
//    alert("You got a B!");
//} else if (score >= 70) {
//    alert("You got a C!");
//} else {
//    alert("You should go study...");
//}

//let temp = 70;
//let weather = "windy";
//
//if (temp >= 70 && weather == "sunny") {
//    alert("wear a t-shirt!");
//} else if (temp > 40 && (weather == "rainy" || weather == "stormy")) {
//    alert("wear a raincoat!");
//} else if (temp <= 30 || weather == "stormy") {
//    alert("Wear a winter coat!");
//} else if (temp > 30 && temp < 50) {
//    alert("wear a coat!");
//} else if (temp >= 50 && temp < 70) {
//    alert("you should wear a hoodie!");
//} else {
//    alert("consult your meteorologist");
//}

const user = "red";
let pass = "blue";

function login() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let message = document.getElementById("info");

    if (username == user && password == pass) {
        message.style.color = green;
        message.innerText = "Correct!";
    } else if (user != username && pass == password) {
        message.style.color = red;
        message.innerText = "Username Incorrect!";
    } else if (user == username && pass != password) {
        message.style.color = red;
        message.innerText = "Password Incorrect!";
    } else {
        message.style.color = red;
        message.innerText = "All Fields Incorrect!";
    }
}
