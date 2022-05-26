// get values
function getValues(){
    let fizz = document.getElementById("inputfizz").value;
    let buzz = document.getElementById("inputbuzz").value;
    return [fizz,buzz];
}

// logic
function calcValues(fizzbuzz){
    let results = [];
    let value = 1;
    for (let index = 1; index < 101; index++) {
        if (index % fizzbuzz[0] == 0 && index % fizzbuzz[1] == 0) {
            value = 'FizzBuzz'
        } else if(index % fizzbuzz[0] == 0) {
            value = 'Fizz'
        } else if (index % fizzbuzz[1] == 0) {
            value = 'Buzz'
        } else {
            value = index
        };
        results.push(value);
    }
    return results
}

// display results
function displayValues(fizzbuzz){
    let templateRows = '<tr>';
    for (let index = 0; index < fizzbuzz.length; index++) {
        let temp ="";
        if ((index+1) % 5 == 0){temp = `<td>${fizzbuzz[index]}</td></tr><tr>`
            } else {temp = `<td>${fizzbuzz[index]}</td>`
            }
        templateRows += temp;
        };
    templateRows += `</tr>`
    document.getElementById("results").innerHTML = templateRows
}

// main
function main(){
    displayValues(calcValues(getValues()));
}