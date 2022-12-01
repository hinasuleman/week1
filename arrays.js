//example in class array

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado", 
    "Charlie - Whatever's new"
];
coffeeOrder [1]= "Anne - Vanilla latte":
    console.log (coffeeOrder.length);
     console.log(coffeeOrder);
     console.log(coffeeOrder[2]);
coffeeOrder.push ("Donna - espresso");
coffeeOrder.pop ();


//Activity 1 Arrays
//Make an array of 3 your favourite songs add another two songs to the list 
//using a method and then remove the last one added

let favSong = [
    "Believe - Cher",
    "I will survive - Tina Turner",
    "Easy Lover - Phill Collins"
    ]
    favSong.push("Queen - Bohemian Rapsidy", "Believer - Thunder");
        console.log("favSong");

//Activity 2
//Generate 6 random numbers between 1-50 and log them to the console.

let randNum = [];

for(let i = 0; i <= 5; i++){
    randNum.push((Math.floor(Math.random() * 50)));
}
    console.log("randNum");

//Activity 3
//If we can create a loop to put 0-9 on the screen, how 
//can we count from 9-0? Create a program that does 
//this.
//   start ;  condition ; increment

for (let i = 0; i < 10; i++) {      //displays 0 - 9
    console.log("i = ", "i");
}
for (let j = 9; j >= 0; j--) {   //displays 9 - 0, j starts at high no. till 0, count goes down --
    console.log("j = ", "j");
}

//Activity 4
  let favFilms = ["Wednesday", "Homealone", "Ghostbusters", "cinderella"];
    console.log(favFilms);
    for(let i = 0; i < favFilms.length; i++){
        console.log(favFilms[i]);
    }
        if (favFilms[3] = "Ghostbusters"){
            console.log("Yay it's Ghostbusters!");
    }

    //Activity 5
    let randNum2= [];
    for(let i = 0; i <= 5; i++){
        randNum2.push(Math.floor(Math.random ()*30));
    }
       console.log(randNum2);
    let number = randNum2 % 7 === 0;
    if(randNum2 === 0){
        console.log("result is divisible by 7");    
    }else{
        console.log("result is not divisible by 7");
    }
    
//Activity 6

let bobsFollowers = ["Rob", "Jordan", "Kelly", "Yash"];
let hannasFollowers = ["Rob", "Paul", "Yash", "Mary"];

let matches = [];

for(i = 0; i < bobsFollowers.length; i++) {
for(i = 0; i < hannasFollowers.length; i++) {
        console.log("Rob and Yash are matching followers");
    }
}

//Activity 7
//A for loop is usually used when the number of iterations is known.
//And while and do...while loops are usually used when the number of iterations are unknown.
//Example of each
// program to display numbers
// do...while loop from 1 to 5

let i = ("1");
const n = 5;
do {
    console.log("i");
    i++;
} while(i <= n);


//example for loop
// this loop is iterated 5 times
for (let i = 1; i <=5; ++i) {
    // body of loop
 }


 //example while loop
while (condition) {
    // body of loop
}


//do while loop is a control flow statement that executes a block of code and then either 
//repeats the block or exits the loop depending on a given boolean condition.
//The do while construct consists of a process symbol and a condition.

//Example
do {
    // body of loop
} while(condition)

//The body of the loop is executed at first. Then the condition is evaluated.
//If the condition evaluates to true, the body of the loop inside the do statement is executed again.
//The condition is evaluated once again.
//If the condition evaluates to true, the body of the loop inside the do statement is executed again.
//This process continues until the condition evaluates to false. Then the loop stops.
//do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.


//pros 
//The main advantage of a for loop over a while loop is readability. 
//A For loop is a lot cleaner and a lot nicer to look at. 
//code reusability

//cons
//It's also much easier to get stuck in an infinite loop with a while loop.
//if you fail to put a condition statement you will have an infinite loop




