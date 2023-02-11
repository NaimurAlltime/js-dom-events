// Option-1: directly set in the value events onclick function 
/* <button onclick="console.log('this on click function')">Make Red</button> */

// Option-2: onclick function [important usable]
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}


// Option-3: onclick function 
const makeBlackButton = document.getElementById('make-black');
makeBlackButton.onclick = makeBlack;

function makeBlack(){
    document.body.style.backgroundColor = 'black';
}
// Option-3: onclick function (another)
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// Option-4: onclick function 
const makeMaroon = document.getElementById('make-maroon');
makeMaroon.addEventListener('click', Maroon);

function Maroon(){
    document.body.style.backgroundColor = 'maroon';
}

// Option-4: onclick function (another)
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'pink';
})

// Option-4: onclick function (final) [important usable]
const cyanButton = document.getElementById('make-cyan').addEventListener('click', function(){
    document.body.style.backgroundColor = 'cyan';
})

