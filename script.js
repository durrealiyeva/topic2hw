//!STRING METHOD
//? task1
//toUpperCase() metodu metni boyuk herflerle console-da gosterir.
let pet = "golden retriever";
console.log(pet.toUpperCase());

//? task2
// length metnin uzunlugunu gosterir.
let question = "Can you solve this problem?";
console.log(question.length);

//? task3
// replace metodu ile "boring" sozunu "exciting" sozu ile evez edirik.
let activity = "This game is boring";
console.log(activity.replace("boring", "exciting"));

//? task4
// metnin 12-ci indeksden 21-ci indekse qeder olan hissesini gosterir.
let headline = "Choose Your Adventure!";
console.log(headline.substring(12, 21));

//!ARRAY METHOD
//? task1
// arrayin sonuna "Cake" deyerini elave etdik.
let desserts = ["Ice Cream", "Pie", "Pudding"];
desserts.push("Cake");
console.log(desserts);

//? task2
//arrayda "Paris" deyerinin olub-olmamasini includes metodu ile yoxlayiriq olmadigi halda false qayitmalidi.
let cities = ["London", "New York", "Tokyo"];
console.log(cities.includes("Paris"));

//? task3
// 2arrayin deyerlerini birleshdirib yeni array yaradir.
let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];
console.log(cars.concat(trucks));

//? task4
// "Pie" deyerinin arrayda hansi indeksde oldugunu yoxlayiriq.
let dessert = ["Ice Cream", "Pie", "Pudding", "Cake"];
console.log(dessert.indexOf("Pie"));

//? task5
// stringi simvollara bolerek arraya cevirib,arraydaki simvollarin sirasini tersine ceviririk ve arraydaki simvollari birleshdirib stringe ceviririk.
let word = "Technology";
let result = word.split("").reverse().join("");
console.log(result);
