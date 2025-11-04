// 1. GPU SECTION
//Increment & Decrement Buttons
//for GPU
const highInc = document.getElementById ('highInc')
const highDec = document.getElementById ('highDec')
const midInc = document.getElementById ('midInc')
const midDec = document.getElementById ('midDec')
const lowInc = document.getElementById ('lowInc')
const lowDec = document.getElementById ('lowDec')
const highCounter = document.getElementById ('highCounter')
const midCounter = document.getElementById ('midCounter')
const lowCounter = document.getElementById ('lowCounter')

let counterHigh = 0;
let counterMid = 0;
let counterLow = 0;
highInc.addEventListener('click', function(){
    counterHigh +=1;
    highCounter.textContent = counterHigh;
});
highDec.addEventListener('click',function(){
    counterHigh -=1;
    highCounter.textContent = counterHigh;
});
midInc.addEventListener('click', function(){
    counterMid +=1;
    midCounter.textContent = counterMid;
});
midDec.addEventListener('click',function(){
    counterMid -=1;
    midCounter.textContent = counterMid;
});
lowInc.addEventListener('click', function(){
    counterLow +=1;
    lowCounter.textContent = counterLow;
});
lowDec.addEventListener('click',function(){
    counterLow -=1;
    lowCounter.textContent = counterLow;
});
//for Monitor
const alienInc = document.getElementById ('alienInc')
const alienDec = document.getElementById ('alienDec')
const kooruiInc = document.getElementById ('kooruiInc')
const kooruiDec = document.getElementById ('kooruiDec')
const nvisionInc = document.getElementById ('nvisionInc')
const nvisionDec = document.getElementById ('nvisionDec')
const alienCounter = document.getElementById ('alienCounter')
const kooruiCounter = document.getElementById ('kooruiCounter')
const nvisionCounter = document.getElementById ('nvisionCounter')

let counterAlien = 0;
let counterKoorui = 0;
let counterNvision = 0;

alienInc.addEventListener('click', function(){
    counterAlien +=1;
    alienCounter.textContent = counterAlien;
});
alienDec.addEventListener('click',function(){
    counterAlien -=1;
    alienCounter.textContent = counterAlien;
});
kooruiInc.addEventListener('click', function(){
    counterKoorui +=1;
    kooruiCounter.textContent = counterKoorui;
});
kooruiDec.addEventListener('click',function(){
    counterKoorui -=1;
    kooruiCounter.textContent = counterKoorui;
});
nvisionInc.addEventListener('click', function(){
    counterNvision +=1;
    nvisionCounter.textContent = counterNvision;
});
nvisionDec.addEventListener('click',function(){
    counterNvision -=1;
    nvisionCounter.textContent = counterNvision;
});
//for Power Supply
const psuHInc = document.getElementById ('psuHInc')
const psuMInc = document.getElementById ('psuMInc')
const psuLInc = document.getElementById ('psuLInc')
const psuHDec = document.getElementById ('psuHDec')
const psuMDec = document.getElementById ('psuMDec')
const psuLDec = document.getElementById('psuLDec')
const psuHCounter = document.getElementById ('psuHCounter')
const psuMcounter = document.getElementById ('psuMcounter')
const psuLCounter = document.getElementById('psuLCounter')

let counterPsuH = 0;
let counterPsuM = 0;
let counterPsuL = 0;

psuHInc.addEventListener('click',function() {
    counterPsuH +=1;
     psuHCounter.textContent = counterPsuH;
});
psuHDec.addEventListener('click',function(){
    counterPsuH -=1;
    psuHCounter.textContent = counterPsuH;
});
psuMInc.addEventListener('click',function() {
    counterPsuM +=1;
     psuMCounter.textContent = counterPsuM;
});
psuMDec.addEventListener('click',function() {
    counterPsuM -=1;
     psuMCounter.textContent = counterPsuM;
});
psuLInc.addEventListener('click',function() {
    counterPsuL +=1;
     psuLCounter.textContent = counterPsuL;
});
psuLDec.addEventListener('click',function() {
    counterPsuL -=1;
     psuLCounter.textContent = counterPsuL;
});

// Show Alert on Add to Cart & Buy Now
const highAdd = document.getElementById ('highAdd')
const highBuy = document.getElementById ('highBuy')
const midAdd = document.getElementById ('midAdd')
const midBuy = document.getElementById ('midBuy')
const lowAdd = document.getElementById ('lowAdd')
const lowBuy = document.getElementById ('lowBuy')
// For GPU
highAdd.addEventListener('click',function() {
    alert('You have added the item to your cart');
});
highBuy.addEventListener('click',function(){
    alert('Thank you for your Purchase!');
});
midAdd.addEventListener('click',function() {
    alert('You have added the item to your cart');
});
midBuy.addEventListener('click',function(){
    alert('Thank you for your Purchase!');
});
lowAdd.addEventListener('click',function() {
    alert('You have added the item to your cart');
});
lowBuy.addEventListener('click',function() {
    alert('Thank you for your Purchase!');
});
// For Monitor
alienAdd.addEventListener('click', function() {
    alert('You have added the item to your cart');
});
alienBuy.addEventListener('click',function() {
    alert('Thank you for your Purchase!');
});
kooruiAdd.addEventListener('click', function() {
    alert('You have added the item to your cart');
});
kooruiBuy.addEventListener('click',function() {
    alert('Thank you for your Purchase!');
});
nvisionAdd.addEventListener('click', function() {
    alert('You have added the item to your cart');
});
nvisionBuy.addEventListener('click',function() {
    alert('Thank you for your Purchase!');
});
//for PSU
psuHAdd.addEventListener('click', function() {
    alert('You have added the item to your cart');
});
psuHBuy.addEventListener('click',function() {
    alert('Thank you for your Purchase!');
});
psuMAdd.addEventListener('click', function() {
    alert('You have added the item to your cart');
});
psuMBuy.addEventListener('click',function() {
    alert('Thank you for your Purchase!');
});
psuLAdd.addEventListener('click', function() {
    alert('You have added the item to your cart');
});
psuLBuy.addEventListener('click',function() {
    alert('Thank you for your Purchase!');
});

//Toggle Show/Hide
const gpuBtn = document.getElementById('gpuBtn')
const gpuMenu = document.getElementById('gpuMenu')

gpuBtn.addEventListener('click',function() {
    if (gpuMenu.style.display === 'none') {
        gpuMenu.style.display = 'flex';
        gpuMenu.style.flexDirection = 'row';
    } else {
        gpuMenu.style.display = 'none';
    }
});
//2.Monitor Section
//Show & Hide
const monitorBtn = document.getElementById ('monitorBtn')
const monitorMenu = document.getElementById ('monitorMenu')
monitorBtn.addEventListener('click', function() {
    if (monitorMenu.style.display === 'none'){
        monitorMenu.style.display = 'flex';
        monitorMenu.style.flexDirection = 'row';
    } else {
        monitorMenu.style.display = 'none';
    }
});

// Peripherals ( N/A )
const periBtn = document.getElementById ('periBtn')

periBtn.addEventListener('click',function() {
    alert('Sorry The Peripheral section items are not available at the moment.');
});


//Power Supply Section
const psuBtn = document.getElementById ('psuBtn')
const psuMenu = document.getElementById ('psuMenu')


psuBtn.addEventListener('click', function() {
    if (psuMenu.style.display === 'none'){
        psuMenu.style.display = 'flex';
        psuMenu.style.flexDirection = 'row';
    } else {
        psuMenu.style.display = 'none';
    }
});
//Reset Section
const resetBtn = document.getElementById ('resetBtn')

resetBtn.addEventListener('click', function() {
    location.reload();
});
// Greet section
const userInput = document.getElementById ('username')
const joinBtn = document.getElementById ('joinBtn')
const joinMsg = document.getElementById ('joinMsg')

function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}
joinBtn.addEventListener('click', function(){
    const welcome = document.createElement ('p');
    welcome.textContent = 'Welcome to our Kingdom and have fun shopping!';
    gratsContainer.appendChild(welcome);
    const username = userInput.value.trim();


    if(username ===' '){
        joinMsg.textContent = 'Please Enter Your Name & Age';
    }else if(!isValidName(username)){
        joinMsg.textContent = 'Invalid Input, Please use the required inputs';
    }else {
        joinMsg.textContent = `Hello, ${username}!`;
    }
});
const gratsContainer = document.getElementById ('gratsContainer')
