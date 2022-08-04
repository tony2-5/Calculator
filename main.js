// array for storing two number values and operator
var arr = [];
var check = 0;
const OPERATORS = "+-*/"
const NUMBERS = "0123456789";
document.getElementById('numbers').innerHTML = "";
document.getElementById("result").innerHTML = "";
// operation functions
function add(num1, num2) {
    // if user keeps using operators without pressing equals
    if(arr.length > 3) {
        arr.length = 0; // array wiped
        check = 1; //set variable check to 1 to allow if statement to run inside of operation event switch statement
        arr[arr.length] = num1 + num2; // first array element now answer
        return document.getElementById("result").innerHTML = num1 + num2;
    } else {
        arr.length = 0; // clears array
        arr[arr.length] = num1 + num2; // sets first element of array to answer if user wants to keep using that value
        return document.getElementById("result").innerHTML = num1 + num2;
    }
}
function subtract(num1, num2) {
    if(arr.length > 3) {
        arr.length = 0;
        check = 1;
        arr[arr.length] = num1 - num2;
        return document.getElementById("result").innerHTML = num1 - num2;
    } else {
        arr.length = 0;
        arr[arr.length] = num1 - num2;
        return document.getElementById("result").innerHTML = num1 - num2;
    }
}
function multiply(num1, num2) {
    if(arr.length > 3) {
        arr.length = 0;
        check = 1;
        arr[arr.length] = num1 * num2;
        return document.getElementById("result").innerHTML = num1 * num2;
    } else {
        arr.length = 0;
        arr[arr.length] = num1 * num2;
        return document.getElementById("result").innerHTML = num1 * num2;
    }
}
function divide(num1, num2) {
    if(arr.length > 3) {
        arr.length = 0;
        check = 1;
        arr[arr.length] = num1 / num2;
        return document.getElementById("result").innerHTML = num1 / num2;
    } else {
        arr.length = 0;
        arr[arr.length] = num1 / num2;
        return document.getElementById("result").innerHTML = num1 / num2;
    }
}
//clears calculator and array
function clear() {
    arr.length = 0;
    document.getElementById('numbers').innerHTML = "";
    document.getElementById("result").innerHTML = "";
}
//listens for users button clicks on numbers and clear 
document.querySelector(".calcNumbers").addEventListener('click', (e) => {
    if(e.target.innerHTML == "Clear") {
        clear();
    }else if(NUMBERS.includes(e.target.innerHTML)) {
        // concatenates user number input until and operator is selected
        if(document.getElementById('numbers').innerHTML.length < 16) document.getElementById('numbers').innerHTML = document.getElementById('numbers').innerHTML.concat('', e.target.innerHTML);
    }
});

/*listens for users input for operator buttons,
when clicked stores number in array
*/
document.querySelector(".opButtons").addEventListener('click', (e) => {
    // allows user to stop using answer as first number slot when entering a new value before selecting an operator
    if(arr.length == 1 && document.getElementById('numbers').innerHTML.trim() != '') arr.length = 0; 
    // stores num1 and num2 into array, expects array element 1 and 3 to be numbers
    if(arr.length == 0 || arr.length == 2) arr[arr.length] = document.getElementById('numbers').innerHTML.trim();
    //checks if user intents to make a bigger equation without pressing equals
    // if the array length is equal to 3 and the next event taken is a operation allows for special case where array length is 4
    if(arr.length == 3 && OPERATORS.includes(e.target.innerHTML)) {
        arr[arr.length] = e.target.innerHTML;
    }
    // when users selects =, checks second array element expecting operation. If no operation sets number entered to answer
    // arr length 4 is if user wants to keep using answer for operations without hitting equals
    if(e.target.innerHTML == '=' || arr.length == 4) {
        switch(arr[1]) {
            case '+': add(parseInt(arr[0]), parseInt(arr[2]));
            if(check == 1) {
                arr[arr.length] = e.target.innerHTML;
                check = 0;
            }
            document.getElementById('numbers').innerHTML = "";
            break;
            case '-': subtract(parseInt(arr[0]), parseInt(arr[2]));
            if(check == 1) {
                // sets arr[1] to operation with arr[0] being the answer (no = needed)
                arr[arr.length] = e.target.innerHTML;
                check = 0;
            }
            document.getElementById('numbers').innerHTML = "";
            break;
            case '*': multiply(parseInt(arr[0]), parseInt(arr[2]));
            if(check == 1) {
                arr[arr.length] = e.target.innerHTML;
                check = 0;
            }
            document.getElementById('numbers').innerHTML = "";
            break;
            case '/': divide(parseInt(arr[0]), parseInt(arr[2]));
            if(check == 1) {
                arr[arr.length] = e.target.innerHTML;
                check = 0;
            }
            document.getElementById('numbers').innerHTML = "";
            break;
            default: 
            document.getElementById('result').innerHTML = document.getElementById('numbers').innerHTML;
            document.getElementById('numbers').innerHTML = "";
        }
    } else {
        document.getElementById('numbers').innerHTML = '';
        // sets array slot after first number to operation
        arr[arr.length] = e.target.innerHTML;
    }
});
