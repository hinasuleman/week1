//Objects Activity 1
    const person = {
    name: "Hina",
    age: 33
 }
   
    console.log(person.name)

    //Objects Activity 2
    const alarmType = {
        weekendAlarm : "No Alarm Needed",
        weekdayAlarm : "get up at 7am"
    }

    let day = "Sunday"
    let alarm = ""

    if (day == "Saturday" || "Sunday") {
        alarm = alarmType.weekendAlarm;
    } else {
        alarm = alarmType.weekdayAlarm;
    }

    console.log(alarm)

//Objects Activity 3
const person1 = {
    name: "Harry",
    age: 30,
    favSongs: ["Easy Lover - Phil Collins","Under the Bridge - RHCP","Hotel California - The Eagles"],

    sayHi:()=>{
        return "Hello my name is ${this.name}";
    }
}

console.log(person1.sayHi());

//Objects Avtivity 4
const pet = {
    name1: "Fluffy",
    typeOfPet: "dog",
    age: 10,
    colour: "white",
    eat(){
        return `${this.name1} is ${this.typeOfPet} and is eating`
    },
    drink(){
        return  `${this.name1} is drinking`
    },
    sleep(){
        return  `${this.name1} is sleeping`
    },
}

console.log(pet.sleep());
console.log(pet.eat());
console.log(pet.drink());

//Objects Activity 5
// Declaring the object called coffee shop
const coffeeShop = {
    //Properties of the coffee shop using key value pairs
    branch: "Humphrey's Coffee Shop",
    arrDrinks: ["coffee",  "coconut water", "fruit juice"], //An array of drinks (strings)
    drinkPrices: [2.50, 1.50, 3.00] ,
    arrFood: ["bacon", "beans", "eggs", "sausage"],
    foodPrices: [2.00, 4.00, 1.00, 2.50],
    total: 0,


     //Funtion to determine the cost of the drink
     foodOrdered (foodParam) {
        idx = this.arrFood.indexOf(foodParam); //Finds the index of the value in drink
        foodCost = this.foodPrices[idx]; //Use the same index to find the price of the drink
        console.log(`Your ${foodParam} costs £${foodCost}`)
        return(`The total bill is £ ${this.total += foodCost}`) //returns the sting containing the total of both food and drink (i.e. food cost + drink cost)
    },

    //Funtion to determine the cost of the drink
    drinksOrdered (drinkParam) {
        idx = this.arrDrinks.indexOf(drinkParam); //Finds the index of the value in drink
        drinkCost = this.drinkPrices[idx]; //Use the same index to find the price of the drink
        console.log(`Your ${drinkParam} costs £${drinkCost}`)
        return(`The total bill is £ ${this.total += drinkCost}`) //returns the sting containing the total of both food and drink (i.e. food cost + drink cost)
    }


} 

// Calling the functions - to make them run
console.log(coffeeShop.foodOrdered("eggs"))  // edds is an argument which is passed to the parameter foodParam
console.log(coffeeShop.drinksOrdered("coffee"));   // coffee is an argument which is passed to the parameter drinkParam
console.log(coffeeShop.drinksOrdered("coconut water"));