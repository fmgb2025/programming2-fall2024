//First activity:
//Create an array of three items you use every day.
//Add two items to the end using push.
//Remove the last item using pop.
//Add a new item to the second position using splice.
//Remove the third item using splice.
//console.log the array after each step.
//Second Activity:
//Create an array of three numbers.
//Write code to:
//Add a new number at the start using splice.
//Replace the second number with another value using splice.

let items = ["phone", "keys", "headphones"];
console.log(items);
items.push("glasses", "pencil");
console.log(items);
items.pop();
console.log(items);
items.splice(1, 0, "pen");
console.log(items);

let numbers = [7, 8, 9];
console.log(numbers);
numbers.splice(0, 0, 6);
console.log(numbers);
numbers.splice(1, 1, 5);
console.log(numbers);
