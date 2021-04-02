/*
heeHaw.js
Phillip Ball
04/02/2021
For the js-review-exercises assignment - JS 3
 */

// makes variables for the various HTML IDs that are needed
let submitBtn = document.getElementById("submitBtn");
let inputNumber = document.getElementById("userNum");
let heeHawText = document.getElementById("heeHawText");
let errorMessage = document.getElementById("err");

// resets what is currently being displayed then calls a function
submitBtn.addEventListener("click", function(){
    heeHawText.innerHTML = "";
    errorMessage.style.display = "none";
    //heeHaw(inputNumber.value);
    recursiveHeeHaw(inputNumber.value);
});

// a recursive version of the function below
function recursiveHeeHaw(maximum, current = 1){
    function checkIfNeedToStop(maximum){
        current++;
        if(current > maximum){
            return;
        }
        recursiveHeeHaw(maximum, current);
    }

    // display error if inputNumber is not a positive integer
    if(isNaN(maximum) || maximum < 1){
        errorMessage.style.display = "block";
        return;
    }

    // makes variables to reduce code redundancy
    let divisibleByThree = current % 3 === 0;
    let divisibleByFive  = current % 5 === 0;

    // if the number is divisible by 3 and 5
    if(divisibleByThree && divisibleByFive){
        heeHawText.innerHTML += "Hee Haw!<br>";
        checkIfNeedToStop(maximum);
    }
    // if the number is divisible by just 3
    else if(divisibleByThree){
        heeHawText.innerHTML += "Hee!<br>";
        checkIfNeedToStop(maximum);
    }
    // if the number is divisible by just 5
    else if(divisibleByFive){
        heeHawText.innerHTML += "Haw!<br>";
        checkIfNeedToStop(maximum);
    }
    // if the number is not divisible by 3 or 5
    else{
        heeHawText.innerHTML += current + "<br>";
        checkIfNeedToStop(maximum);
    }
}



// a function that takes one parameter
function heeHaw(inputNumber){
    // display error if inputNumber is not a positive integer
    if(isNaN(inputNumber) || inputNumber < 1){
        errorMessage.style.display = "block";
        return;
    }

    // makes variables to be use in a loop
    let number;
    let divisibleByThree;
    let divisibleByFive;

    // loops inputNumber times
    for(number = 1; number <= inputNumber; number++){
        // makes variables to reduce code redundancy
        divisibleByThree = number % 3 === 0;
        divisibleByFive = number % 5 === 0;

        // if the number is divisible by 3 and 5
        if(divisibleByThree && divisibleByFive){
            heeHawText.innerHTML += "Hee Haw!<br>";
        }
        // if the number is divisible by just 3
        else if(divisibleByThree){
            heeHawText.innerHTML += "Hee!<br>";
        }
        // if the number is divisible by just 5
        else if(divisibleByFive){
            heeHawText.innerHTML += "Haw!<br>";
        }
        // if the number is not divisible by 3 or 5
        else{
            heeHawText.innerHTML += number + "<br>";
        }
    }
}