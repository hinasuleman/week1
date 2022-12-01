const pressGrindBeans = () => {
      console.log("Grinding for 20 seconds");
    }
   pressGrindBeans ();
    
//Parameters and functions
    const cashWithdrawal = (amount, accnum) => {
        console.log (`Withdrawing ${amount}` from account ${accnum});
    }
    cashwithd

//Returns
    const addUp = (num1, num2) => {
        return num1 + num2;
    }
    addUp (7,3);
    console.log (addUp (2,5));

//example
    const addUp = (num1, num2) => {
        let ans1 = num1 + num2
        console.log ("ans1 = " + ans1)
        return ans1
    }
   addUp (3,4); //calling addUp

    const addAgain = (num3 => {
        let returndNum = addUp(7,3) // calling addUp

    })

//Activity 1 Functions
    // Take this code and turn it into arrow function
// syntax:

// function factorial (n) {
//     if ((n===0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// arrow function syntax of above

const factorial = (n) => {
   let factorial = 33
   if ((n===0) || (n === 1)) {
       return 1;
   } else {
       return (n * factorial(n-1));
   }
}
     console.log("factorial(33)");

//Activity 2 Functions
//Functions - Activity 2
//Edit the below snippet to include two parameters and a
//running order count updated when the function is called:

//let orderCount = 0;

// //const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");


let orderCount = 0;

const takeOrder = (topping1, topping2 ) => {
    console.log("Pizza with ${topping1} and ${topping2}");
    orderCount++;
}

takeOrder("pineapple", "ham");
console.log("There are currently ${orderCount} orders.")

takeOrder("pepperoni","green peppers")
console.log("There are currently ${orderCount} orders.")

takeOrder("ham","mushrooms")
console.log("There are currently ${orderCount} orders.")

//Activity 3 Functions
//git add 
//Cash machine time! 
//Let’s create one that:
//> Dispenses cash if your pin number is correct and your 
//balance is equal to, or more than, the amount you’re 
//trying to withdraw!
//Be Creative
/*
function cashMachine (pin, withdrawal, balance) {
    if (pin == "4321") {
        if (withdrawal <= balance) {
            console.log("You can have your money")
        } else {                                    //-- could be written like {
    console.log("No money for you today")           //else
        }                                           //}
    }
}
*/
// arrow  function version
const cashMachine = (pin, withdrawal, balance) => { //
   if (pin == "4321") {
       if (withdrawal <= balance) {
           console.log("You can have your money")
       } else {                                    
   console.log("No money for you today")           
       }                                           
   }
}


cashMachine("4321", 127, 100)       //pin , withdrawal, balance
cashMachine("4321", 27, 100)
   
    











   
