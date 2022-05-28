// document.write('<h1>Hello World</h1>');

// document.querySelector('.first').innerHTML = 'Welcome Home';

// // alert('Hello Somebody');

// console.log('Hello Ayo');

// function greetMe() {
//  alert("Good Morning Everyone")
// }

// let noun = 'Samson';
// let verb = 'kill';
// let adjective = 'big'

// console.log(`${noun} ${verb} ${adjective}`)

document.querySelector('.groupName').innerHTML = 'Group Name:';

document.querySelector('.name').innerHTML = 'Team Atemis';

document.querySelector('.groupName').style.color = "lightgreen";

document.querySelector('.name').style.color = "purple";

let teamName = ['Merit', 'Abdulsamad', 'Comely', 'Gabriel-Eta Ekpo', 'Emmanuel Stephen', 'Ayobami S O', 'Danny'];
console.log(teamName[5]);

let profile = {
    firstName: 'Ayobami',
    lastName: 'Ogundiya',
    bestMovie: 'Prison Break',
    bestFood: 'Fried Rice & Chicken',
    Complexion: 'Light',
    birthMonth:  'January',
    state:       'Oyo',
    groupName:    'Team Artemis'
};

console.log(profile.bestMovie)

let noun = 'Samuel';
let verb = 'plays';
let adjective = 'nice'

console.log(`${noun} is ${adjective}`);
console.log(`${noun} ${verb} ${adjective} football`);
console.log(`${noun} loves to ${verb}`);
console.log(`He ${verb} ${adjective} music`);
console.log(`${noun} ${verb} hockey`);



(5)
let x = myFunction(25,4);

function myFunction(a,b) {
    return (a % b);
}
console.log(x);


(6)
let d = quadraticFormula(4,4,6);
let y = quadraticFormula(4,4, 6);

function quadraticFormula(a, b,c) {
    const d = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    const y = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    return `${d} , ${y}`
};
console.log(d, y);


(7)

let myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

console.log(`My ${myAdjective} ${myNoun} ${myVerb} ${myAdverb} towards me`);


// (8)

let a = areaOfCircle(3.142, 9);

function areaOfCircle(pi, r) {
  
   return pi * (Math.pow(r,2));
}
console.log(a);

// (9)

let p = 8200;
let r = 17.5;
let t = 2.5;
const SI = (p*r*t)/100;
console.log(SI);

// (10)

const c = 10;
const e = 4
let rem = c % e;

console.log(rem);


// (11)

// Test 1
const mw = 78;
const mh = 1.69;
const nw = 92;
const nh = 1.95;

let BMIM = mw/(mh*mh);
let BMIN = nw/(nh*nh);

console.log(BMIM, BMIN);
   

// Test 2

const nw2 = 95;
const nh2 = 1.88;
const mw2 = 85;
const mh2 = 1.76;


let BMIN2 = nw/(nh*nh);
let BMIM2 = mw/(mh*mh);

console.log(BMIN2, BMIM2)

const meritHigherBMI = BMIM > BMIN;

