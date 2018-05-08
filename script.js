////////////////////////////
//////Tic-tac-toe Game//////
////////////////////////////
    
//Find X sign
var signX = document.getElementById('x');

//Find O sign
var signO = document.getElementById('o');

//Fields
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');


//Count clicks; A field can be clicked only once
var clicks = 0;
function countClicks1(){
    clicks++;
    one.removeEventListener("click", countClicks1);
}
function countClicks2(){
    clicks++;
    two.removeEventListener("click", countClicks2);
}
function countClicks3(){
    clicks++;
    three.removeEventListener("click", countClicks3);
}
function countClicks4(){
    clicks++;
    four.removeEventListener("click", countClicks4);
}
function countClicks5(){
    clicks++;
    five.removeEventListener("click", countClicks5);
}
function countClicks6(){
    clicks++;
    six.removeEventListener("click", countClicks6);
}
function countClicks7(){
    clicks++;
    seven.removeEventListener("click", countClicks7);
}
function countClicks8(){
    clicks++;
    eight.removeEventListener("click", countClicks8);
}
function countClicks9(){
    clicks++;
    nine.removeEventListener("click", countClicks9);
}

one.addEventListener("click", countClicks1);
two.addEventListener("click", countClicks2);
three.addEventListener("click", countClicks3);
four.addEventListener("click", countClicks4);
five.addEventListener("click", countClicks5);
six.addEventListener("click", countClicks6);
seven.addEventListener("click", countClicks7);
eight.addEventListener("click", countClicks8);
nine.addEventListener("click", countClicks9);


//If clicks=odd -> draw x; if clicks=even -> draw o; fields can be clicked only once
function field1(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        one.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        one.appendChild(o);
        o.style.display = "block";
    }
    one.onclick = false;
    getScores();
    whoTurns();
    
}
function field2(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        two.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        two.appendChild(o);
        o.style.display = "block";
    }
    two.onclick = false;
    getScores();
    whoTurns();
}
function field3(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        three.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        three.appendChild(o);
        o.style.display = "block";
    }
    three.onclick = false;
    getScores();
    whoTurns();
}
function field4(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        four.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        four.appendChild(o);
        o.style.display = "block";
    }
    four.onclick = false;
    getScores();
    whoTurns();
}
function field5(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        five.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        five.appendChild(o);
        o.style.display = "block";
    }
    five.onclick = false;
    getScores();
    whoTurns();
}
function field6(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        six.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        six.appendChild(o);
        o.style.display = "block";
    }
    six.onclick = false;
    getScores();
    whoTurns();
}
function field7(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        seven.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        seven.appendChild(o);
        o.style.display = "block";
    }
    seven.onclick = false;
    getScores();
    whoTurns();
}
function field8(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        eight.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        eight.appendChild(o);
        o.style.display = "block";
    }
    eight.onclick = false;
    getScores();
    whoTurns();
}
function field9(){
    if (clicks%2!==0){
        var x = signX.cloneNode(true);
        nine.appendChild(x);
        x.style.display = "block";
    }else{
        var o = signO.cloneNode(true);
        nine.appendChild(o);
        o.style.display = "block";
    }
    nine.onclick = false;
    getScores();
    whoTurns();
}

var winner = document.getElementById("winner");
var h = document.createElement('h2');
var player1 = document.createTextNode("Player 1 won the game!");
var player2 = document.createTextNode("Player 2 won the game!");
var draw = document.createTextNode("Draw!");

//Get the winner
function getScores(){
    if(one.childNodes[0]!==undefined&&two.childNodes[0]!==undefined&&three.childNodes[0]!==undefined&&one.childNodes[0].innerHTML==two.childNodes[0].innerHTML&&one.childNodes[0].innerHTML==three.childNodes[0].innerHTML){
        if (one.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);
 
    }else if(four.childNodes[0]!==undefined&&five.childNodes[0]!==undefined&&six.childNodes[0]!==undefined&&four.childNodes[0].innerHTML==five.childNodes[0].innerHTML&&four.childNodes[0].innerHTML==six.childNodes[0].innerHTML){
        if (four.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);

    }else if(seven.childNodes[0]!==undefined&&eight.childNodes[0]!==undefined&&nine.childNodes[0]!==undefined&&seven.childNodes[0].innerHTML==eight.childNodes[0].innerHTML&&seven.childNodes[0].innerHTML==nine.childNodes[0].innerHTML){
        if (seven.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);

    }else if(one.childNodes[0]!==undefined&&four.childNodes[0]!==undefined&&seven.childNodes[0]!==undefined&&one.childNodes[0].innerHTML==four.childNodes[0].innerHTML&&one.childNodes[0].innerHTML==seven.childNodes[0].innerHTML){
        if (one.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);
    
    }else if(two.childNodes[0]!==undefined&&five.childNodes[0]!==undefined&&eight.childNodes[0]!==undefined&&two.childNodes[0].innerHTML==five.childNodes[0].innerHTML&&two.childNodes[0].innerHTML==eight.childNodes[0].innerHTML){
        if (two.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);
    
    }else if(three.childNodes[0]!==undefined&&six.childNodes[0]!==undefined&&nine.childNodes[0]!==undefined&&three.childNodes[0].innerHTML==six.childNodes[0].innerHTML&&three.childNodes[0].innerHTML==nine.childNodes[0].innerHTML){
        if (three.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);
    
    }else if(one.childNodes[0]!==undefined&&five.childNodes[0]!==undefined&&nine.childNodes[0]!==undefined&&one.childNodes[0].innerHTML==five.childNodes[0].innerHTML&&one.childNodes[0].innerHTML==nine.childNodes[0].innerHTML){
        if (one.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);
    
    }else if(three.childNodes[0]!==undefined&&five.childNodes[0]!==undefined&&seven.childNodes[0]!==undefined&&three.childNodes[0].innerHTML==five.childNodes[0].innerHTML&&three.childNodes[0].innerHTML==seven.childNodes[0].innerHTML){
        if (three.childNodes[0].innerHTML=="O"){
            winner.appendChild(h);
            h.appendChild(player1);
            console.log("Player 1 won!");
        }else{
            winner.appendChild(h);
            h.appendChild(player2);
            console.log("Player 2 won!");
        }
       
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);

    }else if(one.childNodes[0]!==undefined&&two.childNodes[0]!==undefined&&three.childNodes[0]!==undefined&&four.childNodes[0]!==undefined&&five.childNodes[0]!==undefined&&six.childNodes[0]!==undefined&&seven.childNodes[0]!==undefined&&eight.childNodes[0]!==undefined&&nine.childNodes[0]!==undefined){
        winner.appendChild(h);
            h.appendChild(draw);
            console.log("Draw!");
        
        document.getElementById("square-two").style.display = "block";
        document.getElementById("restart").addEventListener("click", clearFields);

    }
}

function whoTurns(){
    if (clicks%2!==0){
        document.getElementById("p2").style.backgroundColor = "#fec95746";
        document.getElementById("p1").style.backgroundColor = "#feca57";
    }else{
        document.getElementById("p1").style.backgroundColor = "#fec95746";
        document.getElementById("p2").style.backgroundColor = "#feca57";
    }
}

function clearFields(){
    document.getElementById("square-two").style.display = "none";
    one.removeChild(one.firstChild);
    two.removeChild(two.firstChild);
    three.removeChild(three.firstChild);
    four.removeChild(four.firstChild);
    five.removeChild(five.firstChild);
    six.removeChild(six.firstChild);
    seven.removeChild(seven.firstChild);
    eight.removeChild(eight.firstChild);
    nine.removeChild(nine.firstChild);
}