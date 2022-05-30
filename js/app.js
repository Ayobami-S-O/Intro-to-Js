
// (1)
document.querySelector('.groupName').innerHTML = 'Group Name:';

document.querySelector('.name').innerHTML = 'Team Artemis';

document.querySelector('.groupName').style.color = "lightgreen";

document.querySelector('.name').style.color = "purple";

// (2)

let teamName = ['Merit', 'Abdulsamad', 'Comely', 'Gabriel-Eta Ekpo', 'Emmanuel Stephen', 'Ayobami S O', 'Danny'];
console.log(`My name is ${teamName[5]}`);


// (3)
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

console.log(`My best movie is ${profile.bestMovie}`)

  
// (4)
let noun = 'Samuel';
let verb = 'plays';
let adjective = 'nice'

console.log(`First sentence: ${noun} is ${adjective}`);
console.log(`Second sentence: ${noun} ${verb} ${adjective} football`);
console.log(`Third sentence: ${noun} loves to ${verb}`);
console.log(`Fourth sentence: He ${verb} ${adjective} music`);
console.log(`Fift sentence: ${noun} ${verb} hockey`);



// (5)
let x = myFunction(25,4);

function myFunction(a,b) {
    return (a % b);
}
console.log(`The remainder of 25 divide by 4 is: ${x}`);


// (6)

function quadraticEquation(a, b,c) {
    var root1 = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    var root2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
    console.log(`The root of the quadratic equation is X = ${root1} or X = ${root2}`);
};

quadraticEquation(2, -3, 2)



// (7)

let myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = `My ${myAdjective} ${myNoun} ${myVerb} ${myAdverb} towards me`;

console.log(wordBlanks);


// (8)




function calculateArea(r) {
    const pi = 3.142;
    var area = pi * (Math.pow(r,2));
    console.log(`The area of the circle of radius 9cm is ${area}`);
}
calculateArea(9);


// (9)

function simpleInterest(p,r,t){
    var SI =( p*r*t)/100;
    console.log(`Simple interest is ${SI}`)
}

simpleInterest(8200, 17.5, 2.5);

// (10)

const c = 10;
const e = 4
let rem = c % e;

console.log(`The remainder is ${rem}`);


// (11)

// Test 1
const mw = 78;
const mh = 1.69;
const nw = 92;
const nh = 1.95;

let BMIM = mw/(mh*mh);
let BMIN = nw/(nh*nh);

console.log( `Merit Higher BMI data 1 is: ${BMIM} while Nutjob BMI data 1 is ${BMIN}`);

let meritHigherBMI1 = BMIM > BMIN;
console.log(`Merit Higher BMI for data 1 is ${meritHigherBMI1}`)
   

// Test 2

const nw2 = 95;
const nh2 = 1.88;
const mw2 = 85;
const mh2 = 1.76;


let BMIN2 = nw/(nh*nh);
let BMIM2 = mw/(mh*mh);

console.log(`Nutjob BMI data 2 is: ${BMIN2} while Merit BMI data 2 is ${BMIM2}`)

let meritHigherBMI2 = BMIM2 > BMIN2;
console.log(`Merit Higher BMI for data 2 is ${meritHigherBMI2}`)

