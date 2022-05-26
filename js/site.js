// get values
function getValues(){
    let fizz = parseInt(document.getElementById("inputfizz").value);
    let buzz = parseInt(document.getElementById("inputbuzz").value);
    return [fizz,buzz];
}

// logic
function calcValues(fizzbuzz){
    let results = [];
    let value = 1;
    for (let index = 1; index < 101; index++) {
        if (index % fizzbuzz[0] == 0 && index % fizzbuzz[1] == 0) {value = 'FizzBuzz'} 
        else if(index % fizzbuzz[0] == 0) {value = 'Fizz'} 
        else if (index % fizzbuzz[1] == 0) {value = 'Buzz'} 
        else {value = index};
        results.push(value);
    }
    return results
}

// display results
function displayValues(fizzbuzz){
    let templateRows = `<tr>`;
    for (let index = 0; index < fizzbuzz.length; index++) {
        let temp ="";
        let temp2="";
        // Applies classes for CSS
        if      (fizzbuzz[index] == 'FizzBuzz') {temp2 = `<td class="fizzbuzz">${fizzbuzz[index]}`}
        else if (fizzbuzz[index] == 'Fizz')     {temp2 = `<td class="fizz">${fizzbuzz[index]}`}
        else if (fizzbuzz[index] == 'Buzz')     {temp2 = `<td class="buzz">${fizzbuzz[index]}`}
        else                                    {temp2 = `<td>${fizzbuzz[index]}`};
        // Adds new table row tags every 5 columns. 
        if      ((index+1) % 5 == 0){temp = `${temp2}</td></tr><tr>`}
        else                        {temp = `${temp2}</td>`};
        templateRows += temp;
        };
    templateRows += `</tr>`
    document.getElementById("results").innerHTML = templateRows
}

// main
function main(){
    displayValues(calcValues(getValues()));
}

// Alternate Logic using Ternary Operator
/*
function calcValues(fizzbuzz){
    let results = [];
    for (let i = 1; i < 101; i++) {
        let value = ((i % fizzbuzz[0] == 0 ? 'Fizz' : '') + (i % fizzbuzz[1] == 0 ? 'Buzz' : '') || i);
        results.push(value);
    }
    return results
}
*/