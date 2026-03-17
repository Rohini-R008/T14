// Main function 
function runProgram() {

    let n = parseInt(document.getElementById("num").value);

    if (isNaN(n)) {
        document.getElementById("output").innerText = "Enter a valid number";
        return;
    }

    let result = "";

    result += "Number: " + n + "\n\n";

    result += "Sum of first " + n + " numbers: " + sumOfFirstN(n) + "\n\n";

    result += "Table of " + n + ":\n";
    result += getTable(n) + "\n";

    result += "Prime: " + (isPrimeNumber(n) ? "Yes" : "No") + "\n\n";

    result += "Factors: " + getFactors(n) + "\n\n";

    result += "Sum of digits: " + sumOfDigits(n) + "\n\n";

    result += "Armstrong: " + (isArmstrongNumber(n) ? "Yes" : "No");

    document.getElementById("output").innerText = result;
}


/* ---------------- FUNCTIONS ---------------- */


// 1. Sum of first n numbers
function sumOfFirstN(n) {
    let sum = 0;

    // Loop runs from 1 to n and keeps adding
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}


// 2. Table of n
function getTable(n) {
    let text = "";

    // Loop from 1 to 10 to generate multiplication table
    for (let i = 1; i <= 10; i++) {
        text += n + " x " + i + " = " + (n * i) + "\n";
    }

    return text;
}


// 3. Check Prime Number
function isPrimeNumber(n) {

    // Numbers <= 1 are not prime
    if (n <= 1) {
        return false;
    }

    // Try dividing n by all numbers from 2 to n-1
    for (let i = 2; i < n; i++) {

        // If divisible, it is NOT prime
        if (n % i === 0) {
            return false;
        }
    }

    // If no divisor found, it is prime
    return true;
}


// 4. Get Factors
function getFactors(n) {
    let factors = "";

    // Check all numbers from 1 to n
    for (let i = 1; i <= n; i++) {

        // If i divides n exactly, it's a factor
        if (n % i === 0) {
            factors += i + " ";
        }
    }

    return factors;
}


// 5. Sum of digits
function sumOfDigits(n) {

    let temp = n;
    let sum = 0;

    // Keep extracting last digit until number becomes 0
    while (temp > 0) {

        let digit = temp % 10;   // get last digit
        sum = sum + digit;       // add it
        temp = Math.floor(temp / 10); // remove last digit
    }

    return sum;
}


// 6. Armstrong Number 
function isArmstrongNumber(n) {

    let temp = n;
    let digits = 0;

    // Step 1: Count number of digits
    let countTemp = n;
    while (countTemp > 0) {
        digits++;
        countTemp = Math.floor(countTemp / 10);
    }

    let sum = 0;

    // Step 2: Calculate sum of digits^digits
    while (temp > 0) {

        let digit = temp % 10;

        // Raise digit to power = number of digits
        sum = sum + Math.pow(digit, digits);

        temp = Math.floor(temp / 10);
    }

    // Step 3: Compare
    return sum === n;
}