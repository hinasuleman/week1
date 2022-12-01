// IF ELSE IF ELSE
let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") {
    console.log ("Check again");
}
else if (place == "Manc" && weather == "Rain"){
        console.log ("Obvs");
 }
else {
   console.log ("What if it isn't raining?");
 }

// Switch  Activity
let car = "Peugeot";
switch (car){
case "Ford":
case "GM":
  console.log ("You've got an American car!");
break;
case "Peugeot":
case "Citreon":
 console.log ("You've got a French boy!");
break;
case "Honda":
case "Toyota":
case "Suzuki":
console.log ("Japanese cars are quiet dead!");
break;
case "Mercedes":
console.log ("You are proper posh German!");
break;
case "Volkswagen":
console.log ("German aren't that bad at all!");
break;
case "Hyundai":
case "Kia":
 console.log ("South Korean cars are getting popular!");
break;
default:
 console.log("Your car is not in the top ten companies in the world!!");
 }

 //Example on Switch
 const grade = 87;
 switch (true) {
     case grade >= 70:
         console.log("Distinction");
         break;
         case garde >=60:
             console.log ("Merit");
             break;
             case grade >= 50:
                 console.log ("pass");
                 break;
                 default:
                     console.log ("Failed");

// //Activity 1 IF ELSE
let age3 = 17;
if (age3 >17) {
  console.log ("Yes I can serve you");
}
else {
  console.log ("You aren't old enough");
}

// //Activity 1 Stretch If else 
let age2 = 17;
let country = "UK";

if (age2 > 17 && country == "UK"){
  console.log("Yes I can serve you");
}
else {
  console.log('You arent old enough'); 
} 

// //Activity 2 switch statement
let pizzaTopping = "pepperoni";

switch(pizzaTopping) {
case "Beef":
case "salami":
   console.log("These are important ingredients for my pizza");
    break;
case "bell peppers":
case "pineapple":
   console.log (`I do not mind having ${"pepperoni"} on my pizza`);
    break;
    default:
   console.log(`${"pepperoni"} should not be on pizza`);

}
//Activity 3 
let password = "pass"
if (password.length<8){
  console.log ("Password is too short");
}
else {
console.log ("pass");
}
//Activity 4
let num = 15

if ((num % 3 == 0) || (num % 5 == 0)) {
  console.log("This number is divisable by 3 or 5");
}
else {
  console.log("Something else");
}

//Activity 5
let num = 20
if ((num % 3 == 0)) {
    console.log ("fizz");
} if else { (num% 5 ==0)
    console.log ("buzz ");
} else {
    console.log ("fizz buzz");
}

// Activity 6
//create a variable called num
//Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

let num = 101101
let reverse = parseInt (num.toString().split ('').reverse ().join (''));

if (num == reverse){
    console.log ('$ {num} is a Palindromic number.');
}
else {
    console.log ('$ {num} is not a Palindromic number');
}

//Activity 7
let time = "7am"
let placeOfWork = "Preston"
let townOfHome= "Blackburn"
if (time =="7am" && placeOfWork == "Preston"){
    console.log ( "If the time is 7am I'm at home");
}
else if (time ="8am" && townOfHome == "Blackburn"){
    console.log ("At 8am I'm commuting");
}
else
(time == "9am"){
    console.log ("At 9am I'm at work")
}

//Activity 8 
//Take the string 
//“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
//gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
//index of a last vowel in the string

let textString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh'
let vowels =  ('a','e','i','o','u');
let lastVowel = textString.lastIndexOf(vowels);

console.log(lastVowel);

           
//Activity 9 
let word = "stress"
if (word == "stress" || word == "mom"){
    console.log ("the last letter is the same as the first letter!", true );
}
else {
    console.log ("if not", false);
}

//Activity 10
const addUp = (num1, num2) => {
    let ans1 = num1 + num2
    if (ans1 == "even"){
        console.log ("ans1 = even");
    }
   

    }
    return ans1
}

const multiply = (num3) => {
    let returnedNum = addUp(2,4)  // calling multiply
    console.log ("Returned num = " + returnedNum)
    console.log("Total = " + (returnedNum + num3) )
 
}

addUp(2, 4)  // calling addUp
multiply(8) // calling multiply