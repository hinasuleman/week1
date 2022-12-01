// Revision Question 
console.log("All Around The World".charAt(8).toUpperCase());

//Week 2 Variable operators
//Variables Exercise 1//
let i = 10 ; 
i = i+2;
// i=12

//Variable Ex2//
let favouriteDrink = "coffee"
console.log (favouriteDrink)
console.log ("My favourite drink is" +favouriteDrink); 

// Example - variable operators
let name1 = "Chris";
let age1 = 27;
let favDrink = "Tea"
console.log ("Hi my name is" +name1 +". I am" +age1 +" and my favourite drink is"+favDrink+ ".")
let name2 = "Chris";
let age3 = 27;
let favDrink1 = "Tea"
console.log ("Hi my name ${name2}. I am ${age3} and my favourite drink is ${favdrink1}.")
age = 28
favDrink = "Ice tea";
console.log ("Hi my name ${name1}. I am ${age} and my favourite drink is ${favdrink}.")


// Week 2: Activity 1 Variables 
let personname = 'Izzy';
let age = 33;
let favouriteColour = 'Blue';
console.log(`Hi my name is ${personname}. I am ${age} and my favorite colour is ${favouriteColour}.`);


personName = 'Enoch'
age = 22
favouriteColour2 = "LightBlue";
console.log(`Hi my name is ${personName}. I am ${age} and my favorite colour is ${favouriteColour2}.`);

    // Activity 2 DailyFood

    let breakfast = "Porridge";
    let lunch = "Sandwich";
    let dinner = "Burger";

    console.log(`For breakfast I had ${breakfast}. For lunch I had ${lunch}. For dinner I had ${dinner}.`);

    breakfast2 = "Cereal";
    lunch2 = "McDonalds";
    dinner2 = "pasta";
    console.log(`For breakfast I had ${breakfast2}. For lunch I had ${lunch2}. For dinner I had ${dinner2}.`);

//Activity 3 
const oneDay = 24 * 60 * 60 * 1000; // hoursminutesseconds*milliseconds
const today = new Date(2022, 11, 22);
const birthday = new Date(2023, 8, 15);
const diffDays = Math.round(Math.abs((today - birthday) / oneDay));

console.log(diffDays);
//Activity 4 

let space1 = 'x'
let space2 = 'o'
let space3 = ' '
let space4 = 'x'
let space5 = 'x'
let space6 = ' '
let space7 = 'o'
let space8 = ' '
let space9 = ' '

console.log(`
    |   |   
  ${space1} | ${space2} | ${space3} 
    |   |   
 -----------
    |   |   
  ${space4} | ${space5} | ${space6} 
    |   |   
 -----------
    |   |   
  ${space7} | ${space8} | ${space9} 
    |   |   
 `);


//Week 2 example
//Variable If else If else Ex 1//
let weather = "sunny";

if (weather == "sunny") {
    console.log ("Well, I better wear some sunscreen!")
} else if (weather == "rainy"){
    console.log ("Better take an umbrella")
} else {
    console.log ("Hmm, it could go either way!")
}

//Example 1
if (1 === "1") {
    console.log (true);
}
else{
    console.log (false);
}

//Ex 2
if (1 != "1") {
    console.log (true);
}
else{
    console.log (false);
}



//Ex 3
let a = 1;
 a = "1";
//if (a!==1) {

if (a==1){
    console.log("a=1")
 } else {
        console.log ("a is not 1")
    }
    


//If else statements
let age2 = 17;
let country = "UK";

if (age2 > 17 && country == "UK"){
    console.log("Yes I can serve you");
}
else {
    console.log('You arent old enough'); 
} 

//Revision
let pizzaTopping = "pepperoni";

switch(pizzaTopping) {
    case "Beef":
    case "salami":
        console.log("These are important ingredients for my pizza");
        break;
    case "bell peppers":
    case "pineapple":
        console.log (`I do not mind having ${pizzaTopping} on my pizza`) ;
        break;
default:
console.log(`${pizzaTopping} should not be on pizza`);

}
//Revision
let password = "pass"
if (password.length<8){
    console.log ("Password is too short");
}
else {
    console.log (password);
}
//Revision
let num = 15

if ((num % 3 == 0) || (num % 5 == 0)) {
    console.log("This number is divisable by 3 or 5");
}
else {
    console.log("Something else");
}
//Activity 5