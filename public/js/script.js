const myButton = document.getElementById('btn');
myButton.onclick = function() {
    const name = prompt('Enter Your Full Name');
    document.getElementById('name').innerText = name;
}

// variables
const pi = 3.142;
let name = 'Linda Edu';
let age = 50;
let present = false;
console.log(name)

// Objects 
const car = {
    nuberPlate:'GR-345-24',
    model: 'Bently',
    color: 'purple',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Linda',
        driver: {
        name: 'Elizabeth'
        }
         
    }
}
console.log(car.nuberPlate);
console.log(car.owner.driver.name);
console.log(car);

car.owner.driver.name = "Leah",
console.log(car.owner.driver.name);



// Arrays
const tweet1 = {
    text: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  const tweet2 = {
    text: 'I am learning arrays today.',
    likes: 8,
    shares: 3,
    retweets: 0
  }
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets;
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  if (today.getHours() == 16)  {
    console.log('class has ended!');
  } else {
    console.log('class is in session!');
    
    
    // For loop
    for(let i = 0; i<= 10; i++){
      console.log('Notify friends!', i);
      
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Functions
// Defining functions
function login(username, password) {
  if(username== 'lynny'&& password== '1234') {
   return "User is logged in!"; 
  } else if (username != 'lynny') {
    return 'Invalid username!';
  } else if (password != '1234') {
    return 'Invalid password!';
  } else { 
    return 'Invalid username or password'
  }
 }

// Invoking functions
login('lynny', '1234');


// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;


// Comparison operators
2 == '2';
3 !== 2;
2==='2';
4==='3';

//  Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(78, 12, 98, 14, 89);

Math.ceil(Math.random()*1000000);


//  Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(78, 12, 98, 14, 89);

Math.ceil(Math.random()*1000000);

// string concatenation
const firstname = 'Linda ';
const lastname = 'Edu';
firstname.trim() + ' ' + lastname.trim();
firstname.trim() + ' ' + lastname.trim();



// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
firstname.toUpperCase();
lastname.charAt(0);
`${firstname.trim()} ${lastname.trim()}`.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;

// String conversion
String(2014);

// Write a function that will add participants to our Google Classroom
// function
const participants = [];
function addParticipant(email) {
  // Add email to the participants;
  participants.push(email);
  // check if email was provided
  if (!email) {
    return 'Email not provided!';
  }
  // Check if email is valid
  if (!email.includes('@')) {

  }
  // Add email to the participants;
  participants.push(email);
  // Notify them via mail
  // return response
  return 'Participant added!';
}
 

addParticipant('edulind99@gmail.com');


// Arrays in JavaScript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join(' ').split(' ');

// Write a function that will take a user with firstname and lastname and return fullname

const user = {
  firstname: 'Nana',
  lastname: 'Adu'
}
function fullname(user) {
  return {
    ...user,
    fullanme: `${user.firstname} ${user.lastname}`
  }
}

fullname(user);

// Array map
const users = [
  {firstname: 'Linda' , lastname: 'Parker'},
  {firstname: 'Mark' , lastname: 'Adu'},
  {firstname: 'Nana' , lastname: 'Kwesi'},
  {firstname: 'Naa' , lastname: 'Zoe'},
  {firstname: 'Kweku' , lastname: 'Osei'},
]

users.map(fullname);

// Map and return squares of numbers
function square(number) {
 return number ** 2;
}
const numbers = [0,1,2,3,4,5]
numbers.map(square);

// Filter and return even numbers
function even(number) {
  return number % 2==0;
}
numbers.filter(even);
