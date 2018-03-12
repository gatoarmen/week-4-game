"use strict"; 

//variables

let numberToGuess = Math.floor(Math.random() * (120 - 19 + 19)) + 19;

let redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let yellowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

let numberGuessed = 0
 
let wins = 0

let losses = 0 

console.log(numberToGuess)

//reset

function reset () {

    numberToGuess = Math.floor(Math.random() * (120 - 19 + 19)) + 19;
    $(".random-number").html(numberToGuess);

     redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
yellowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

numberGuessed = 0;

}




// html values to DOM


$("#wins").html(wins);
$("#losses").html(losses);
$(".random-number").html(numberToGuess);
$(".total").html(numberGuessed);


// add make function to set the score 

function win (){


if (numberGuessed === numberToGuess ) {


    wins++;
    $("#wins").html(wins);

    reset();
} }

function lose (){


    if (numberGuessed > numberToGuess ) {
    
    
        losses++;
        $("#losses").html(losses);
    
        reset();
    } }
    
    



//  assign the number to the buttons to the buttons

//red

$("#red").click( function () {

numberGuessed = numberGuessed + redNumber;

win();
$(".total").html(numberGuessed);
console.log (numberGuessed)
lose();
})

//blue

$("#blue").click( function () {

    numberGuessed = numberGuessed + blueNumber;
    
    
win();
$(".total").html(numberGuessed);
    console.log (numberGuessed)
    lose();

    })

// yellow

    $("#yellow").click( function () {

        numberGuessed = numberGuessed + yellowNumber;
        
        
win();
$(".total").html(numberGuessed);
        console.log (numberGuessed)

        lose();
        })

// green
        $("#green").click( function () {

            numberGuessed = numberGuessed + greenNumber;
            
win();
$(".total").html(numberGuessed);
            
            console.log (numberGuessed)

            lose();
            })


