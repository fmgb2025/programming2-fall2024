//First Activity:
//Create an array of five animals.
//Tasks:
//Write a loop to print each animal.
//Use a loop to create a new array where each animal’s name is in uppercase (push).
//Remove the last two animals after looping through the array (pop).

let animals = ["cow", "sheep", "chicken", "pig", "goat"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

let upperAnimals = [];
for (let i = 0; i < animals.length; i++) {
    upperAnimals.push(animals[i].toUpperCase());
}

console.log(upperAnimals);

upperAnimals.pop();
upperAnimals.pop();

console.log(upperAnimals);

//Second Activity:
//Create an array of 10 test scores between 30 and 100.
//Write a loop to:
//Add 5 bonus points to each score and store them in a new array.
//Replace any scores below 50 with "Retake" using splice (in the original array).

let testScores = [33, 47, 52, 67, 74, 88, 92, 30, 36, 74];

let bonus = [];

for (i = 0; i < testScores.length; i++) {
    bonus.push(testScores[i] + 5);
}

for (let i = 0; i < testScores.length; i++) {
    if (testScores[i] < 50) {
        testScores.splice(i, 1, "Retake");
    }
}

console.log(testScores);
console.log(bonus);

//let fastfood = ["hamburger", "fries", "milkshake", "chicken nuggets"];
//
//for (let i = 0; i < fastfood.length; i++) {
//    console.log(fastfood[i]);
//}
//
//let numbers = [45, 23, 78];
//
//let doubled = [];
//
//for (let i = 0; i < numbers.length; i++) {
//    doubled.push(numbers[i] * 2);
//    console.log(doubled[i]);
//}

//let nme = 100;
//const frances = "frances";
//
//for (let i = 0; i < 100; i++) {
//    console.log(frances);
//}
