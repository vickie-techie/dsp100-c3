// alert("hello world");
// console.log("welcome");

// var x = 60;
// console.log(x);
// var i = 22;
// console.log(i);
// var f = 0.265;
// console.log(f);
// var s = "serotonin";
// console.log(s);

// var num1 = 780;
// var num2 = 550;
// if (num1 > num2) {
//   console.log(num1 + " is greater than " + num2 + "and that is the answer.");
// } else {
//   console.log("num2 is greater than num1");
// }
// // Chat bot
// var message = "Hi";
// var blocked = "No";

// if (message == "Hi" && blocked == "Yes") {
//   console.log("How can I help you?");
// } else if (message == "Transfers") {
//   console.log("Choose bank");
// } else if (message == "UBA") {
//   console.log("You have selected UBA");
// } else if (message == "Access Bank plc") {
//   console.log("You have selected Access Bank plc");
// } else if (message == "Wema") {
//   console.log("You have selected Wema");
// } else {
//   console.log("I don't understand");
// }
// var username = "John123";
// var password = "1234";

// if (username == "John123" && password == "1234") {
//   console.log("You are logged in!");
// } else {
//   console.log("Invalid username or password!");
// }
// // if(){}

// var names = [
//   "bisi",
//   "ola",
//   ["beans", [50, 10], ["dog", "cat", ["bird", "fowl"]], "rice"],
// ];
// console.log(names[1]);
// names[3] = "john";
// console.log(names);
// names[5] = "mary";
// names[6] = "ada";
// console.log(names[2][1][1]);
// console.log(names[2][2][2][1]);

// var userScores = [12, 111, 4, 9, 8, 0, 33, 14, 18];
// var newScore = 700;
// push(userScores);
// userScores.push(newScore);
// userScores.pop(newScore);
// userScores.shift(newScore);
// userScores.unshift(newScore);
// let element = 20;
// let elevenPosition = userScores.indexOf(element);
// let hasEleven = userScores.includes(element);
// let newArray = userScores.slice(1, 3);

// let position = userScores.indexOf(11);
// userScores.splice(position, 1, 24);

// userScores.map((element, index) => {
//   console.log(element, index);
// });

// let higherScores = userScores.filter((e) => e > 10);
// console.log(higherScores);

// // Common Object Method

// // 1. Key
// let person1 = { name: "Gift", age: 5, gender: "male" };
// let places = { abia: "Umuahia", delta: "Asaba", kogi: "Lokoja" };
// let keys = Object.keys(person1);
// console.log(keys);

// // 2. Value
// let values = Object.values(person1);
// console.log(values);

// // 3. Entries
// let entries = Object.entries(person1);
// console.log(entries);

// // 4. hasOwnProperty
// let hasOwnProperty = Object.hasOwnProperty(person1);
// console.log(hasOwnProperty);

// let newperson = Object.assign({}, person1, places);
// console.log(newperson);

// let userData = { name: "Paul", age: 3, gender: "male" };
// let freeze = Object.seal(userData);
// userData.age = 4;
// userData.address = "Olademeji road, Gbagba";
// console.log(userData);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// const integer = 42;
// const floatingPoint = 3.14;
// console.log(typeof integer);
// console.log(typeof floatingPoint);

// let int1 = 35;
// let int2 = 45;
// let result1 = int1 + int2;
// let result2 = int1 - int2;
// let result3 = int1 * int2;
// let result4 = int1 / int2;
// console.log(result1, result2, result3, result4);

// LOOP;
// for (let i = 0; i < 5; i++) {
//   console.log("iteration number:" + i);
// }

// for (let i = 0; i < 10; i + 2) {
//   console.log("iteration number:" + i);
// }

// let fruits1 = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits1.lenght; i++) {
//   console.log(fruits1[i]);
// }

// let i = 0;
// while (i < 5) {
//   console.log("iteration number:" + i);
//   i++;
// }

// let sum1 = 0;
// let number1 = 1;
// while (number1 <= 10) {
//   sum1 += number1;
//   number1++;
// }
// console.log("sum of numbers from 1 to 10 is:" + sum1);

// let sum2 = 0;
// let number2 = 11;
// while (number2 <= 10) {
//   sum2 += number2;
//   number2++;
// }
// console.log("sum of numbers from 1 to 10 is:" + sum2);

// let i = 0;
// do {
//   console.log("iteration number:" + i);
//   i++;
// } while (i < 5);

// for in

// let pson = { name: "John", age: 30, city: "New York" };
// for (let key in person) {
//   console.log(key + ":" + person[key]);
// }

// over array

// let fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let text = "hello";
// for (let char of text) {
//   console.log(char);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

//JS FUNCTIONS

// function addtwonumbers(a, b) {
//   return a + b;
// }
// let sum = addtwonumbers(2, 4);
// console.log(sum);

// let testFN = (name, age, state) => {
//   return `${name} is ${age} years old and he is from ${state}`;
// };
// console.log(testFN("James", 11, "Ondo State"));

//Validating email

// const email = "enwenemativictory@gmail.com";
// let validateEmail = (email) => {
//   //check email split
//   let emailSplit = email.split("@");
//   console.log(emailSplit);
//   let emailInclude = email.includes("@");
//   console.log(emailInclude);
//   let emailLength = email.emaillength;
//   //   console.log(emailLength);
//   if (emailSplit.length < 2) {
//     console.log("invalid email---- @");
//   } else if (emailInclude == false) {
//     console.log("invalid email---- does not include @");
//   } else {
//     console.log("Email validated successfully!");
//   }
// };
// validateEmail(email);

// let userData = {
//   name: "Victory",
//   gender: "f",
//   wallet: 10000,
//   canWithdraw: false,
//   age: 19,
// };
// //function to allow withdrawal
// let withdrawMoney = (user, amount) => {
//   //check for age
//   if (user.age < 18) {
//     console.log("You are underaged.");
//   } else if (user.canwithdraw == false) {
//     console.log("You do not have access to withdraw.");
//   } else if (user.wallet < amount) {
//     console.log("Low wallet balance.");
//   } else {
//     let newUserdata = { ...user, wallet: user.wallet - amount };
//     console.log(newUserdata);
//   }
// };
// withdrawMoney(userData, 10000);

//MAPS
// let students = [
//   { name: "Judith", age: 9, gender: "female", wallet: 10000 },
//   { name: "James", age: 10, gender: "male", wallet: 7500 },
//   { name: "John", age: 11, gender: "male", wallet: 3500 },
//   { name: "Jennifer", age: 12, gender: "female", wallet: 3000 },
//   { name: "Jesse", age: 13, gender: "male", wallet: 9200 },
// ];
// let studentBursary = (students, bursary) => {
//   students.map((element) => {
//     console.log(
//       `${element.name} is ${element.age} years old and has a new wallet of ${
//         element.wallet + parseInt(bursary)
//       }`
//     );
//   });
// };
// studentBursary(students, 2700);

//Login Simulation
// let studentsDB = [
//   {
//     password: "Judith23",
//     username: "Judith",
//     age: 9,
//     gender: "female",
//     wallet: 10000,
//   },
//   {
//     password: "James021",
//     username: "James",
//     age: 10,
//     gender: "male",
//     wallet: 7500,
//   },
//   {
//     password: "John@45",
//     username: "John",
//     age: 11,
//     gender: "male",
//     wallet: 3500,
//   },
//   {
//     password: "Jennifer345",
//     username: "Jennifer",
//     age: 12,
//     gender: "female",
//     wallet: 3000,
//   },
//   {
//     password: "Jesse9287",
//     username: "Jesse",
//     age: 13,
//     gender: "male",
//     wallet: 9200,
//   },
// ];
// let userToLogin = { username: "musouf", password: "ve123" };
// function LoginUser(db, user) {
//   //validate data
//   if (user.username.length < 3) {
//     console.log("enter a valid username");
//   } else if (user.password < 1) {
//     console.log("enter a valid password");
//   } else {
//     //check our db if user exists
//     let filter = db.filter(
//       (element) =>
//         element.username == user.username && element.password == user.password
//     );
//     if (filter.length < 1) {
//       console.log("Invalid user details.");
//     } else {
//       console.log("User logged in successfully", filter[0]);
//     }
//   }
// }
// LoginUser(studentsDB, userToLogin);

let usersDataBase = [
  {
    name: "Ogechi",
    age: 18,
    gender: "female",
    username: "ogechi1",
    password: "oge665",
  },
  {
    name: "Sassy",
    age: 19,
    gender: "female",
    username: "sas-queen",
    password: "queen@2000",
  },
  {
    name: "Prince",
    age: 18,
    gender: "male",
    username: "Princemega",
    password: "princey27",
  },
];
// let login = (usersDataBase.username, usersDataBase.password);

function logIn(username, password) {
  let passwordInclude = password.includes("@");
  if (username.length < 3) {
    console.log("Invalid username!");
  } else if (passwordInclude == false) {
    console.log("Invalid password!");
  } else {
    console.log("User signed up successfully!");
  }
}
logIn("Serum", "Ser@123456");

// let users = [];
// let user = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
//   password: "password123",
// };
// function signUp(user) {
//   users.push(user);
//   return "User signup successful";
// }
// console.log(signUp(user));
