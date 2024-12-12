const animal = {
    id: 44,
    name: "Ralph",
    type: "dog"
};

console.log(animal);

animal.name = "moo";
console.log(animal);

let person = {
    name: "Terry",
    age: 23,
    favColor: "green",
    height: "6'8\"",
    satScore: 400,
    job: "Basketball Player",
    biggestFear: "inflated basketballs"
};

console.log(person);

console.log(person.height);

person.age = 25;

let person2 = {
    name: "Charles",
    age: 27,
    favColor: "yellow",
    height: "5'10\"",
    satScore: 1250,
    job: "Accountant",
    biggestFear: "spiders"
};

console.log(
    "Once upon a time, in a not so distant future, a man named ",
    person2.name,
    "was working at his job as an ",
    person2.job +
        ". He felt the floor thump and shake. Next thing he knew, the doorknob to his office rattled. In walked ",
    person.name,
    "whose height of ",
    person.height,
    "was staggering compared to",
    person2.name + "'s height of ",
    person2.height + ". A long silence enveloped the room before ",
    person.name,
    "spoke. 'What's your favorite color?'",
    person2.name,
    "took a moment to compose himself before responding, 'My favorite color is",
    person2.favColor + ".'",
    person.name,
    "guffawed before turing and leaving."
);
