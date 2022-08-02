// array for storing two number values and operator
var arr = [];
// operation functions
function add(num1, num2) {
    arr.length = 0; // clears array
    arr[arr.length] = num1 + num2; // sets first element of array to answer if user wants to keep using that value
    return document.getElementById("result").innerHTML = num1 + num2;
}
function subtract(num1, num2) {
    arr.length = 0;
    arr[arr.length] = num1 - num2;
    return document.getElementById("result").innerHTML = num1 - num2;
}
function multiply(num1, num2) {
    arr.length = 0;
    arr[arr.length] = num1 * num2;
    return document.getElementById("result").innerHTML = num1 * num2;
}
function divide(num1, num2) {
    arr.length = 0;
    arr[arr.length] = num1 / num2;
    return document.getElementById("result").innerHTML = num1 / num2;
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
    }else {
        // concatenates user number input until and operator is selected
        document.getElementById('numbers').innerHTML = document.getElementById('numbers').innerHTML.concat('', e.target.innerHTML);
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
    //when users selects =, checks second array element expecting operation. If no operation sets number entered to answer
    if(e.target.innerHTML == '=') {
        switch(arr[1]) {
            case '+': add(parseInt(arr[0]), parseInt(arr[2]));
            document.getElementById('numbers').innerHTML = "";
            break;
            case '-': subtract(parseInt(arr[0]), parseInt(arr[2]));
            document.getElementById('numbers').innerHTML = "";
            break;
            case '*': multiply(parseInt(arr[0]), parseInt(arr[2]));
            document.getElementById('numbers').innerHTML = "";
            break;
            case '/': divide(parseInt(arr[0]), parseInt(arr[2]));
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
