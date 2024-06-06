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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  