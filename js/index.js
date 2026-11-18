// 21
let cart = ["apple", "cheese", "tea"];
cart.unshift("bread");   
cart.push("milk");    
console.log(cart.join(" | "));
 

// 22 
let films = ["Up", "Coco", "Inside Out", "Soul", "Luca"];
let top2 = films.slice(0, 2).reverse();
console.log(top2);
 

// 23 
let username = "diyor_dev";
console.log(username.includes("_"));  
console.log(username.indexOf("_"));    

// 24 
let scores = [67, 91, 78, 100, 54];
scores.sort((a, b) => a - b);
console.log("O'sish:", scores);       
scores.sort((a, b) => b - a);
console.log("Kamayish:", scores);    

// 25
let students = ["Ziyoda", "Akmal", "Diyor", "Madina"];
students.sort();
console.log(students.join(", "));

// 26
let codes = ["UZ-11", "UZ-12", "UZ-13"];
codes.shift();         
codes.push("UZ-14");     
console.log(codes);

// 27
let a = "book";
let b = "computer";
let c = "developer";
console.log(a.length);   
console.log(b.length);   
console.log(c.length); 

// 28
let slogan = ["Learn", "Build", "Repeat"];
console.log(slogan.join(" "));


// 29
let tickets = [501, 502, 503, 502, 504];
console.log(tickets.indexOf(502));     
console.log(tickets.lastIndexOf(502)); 

// 30
let guests = ["Lola", "Nodira", "Sevara"];
guests.unshift("Ali");   
guests.push("Zarina");     
console.log(guests);
console.log(guests.length);

// 31 
let tags = ["Learn", "JavaScript"];
console.log("#" + tags.join(""));
 
// 32 
let chat = "Men bugun yangi metod o'rgandim";
console.log(chat.split(" ").reverse().join(" "));
 
// 33 
let catalogA = ["phone", "laptop"];
let catalogB = ["tablet", "camera", "watch"];
let all = catalogA.concat(catalogB);
console.log(all.includes("tablet")); 
console.log(all.sort());
 
// 34 
let results = [72, 95, 88, 61, 100, 84];
results.sort((a, b) => b - a);
console.log(results.slice(0, 3));
 
// 35 
let fullName = "Shahzoda";
let letters = fullName.split("");
console.log(letters);
console.log(letters.includes("a"));   

// 36 
let stationery = ["pen", "ruler", "notebook", "pen", "eraser"];
console.log(stationery.indexOf("pen"));      
console.log(stationery.lastIndexOf("pen"));  
console.log(stationery.join(", "));
 
// 37 
let monday = ["reading", "coding", "practice"];
let tuesday = ["revision", "project", "quiz"];
let plan = monday.concat(tuesday).slice(0, 4).reverse();
console.log(plan);
   
// 38 
let clue = "Find the hidden treasure under the old tree";
let words = clue.split(" ");
console.log(words.includes("treasure"));   
console.log(words.indexOf("treasure"));    

// 39 
let rooms = [12, 3, 25, 7, 18];
rooms.sort((a, b) => a - b);
console.log(rooms.join("-"));
 
// 40 
let person = "Madina Karimova";
let parts = person.split(" ");
console.log("Ism:", parts[0]);         
console.log("Familiya:", parts[1]);     

// 41 
let queue = ["Ali", "Zebo", "Jasur"];
let served = queue.shift();          
queue.push("Dilnoza");               
console.log("Chiqdi:", served);    
console.log(queue.join(", "));
 
// 42
let sentence = "banana apple cherry orange";
console.log(sentence.split(" ").sort().join(" "));
 
// 43 
let passwordHint = "qwerty";
console.log(passwordHint.split("").reverse().join(""));
 
// 44
let stops = ["Center", "Museum", "Airport", "Park"];
console.log(stops.includes("Airport"));   
console.log(stops.indexOf("Center"));    
console.log(stops.lastIndexOf("Park"));  
console.log(stops.join(" -> "));
 
// 45
let english = ["apple", "book"];
let uzbek = ["olma", "kitob"];
console.log(english.concat(uzbek).join(" / "));
