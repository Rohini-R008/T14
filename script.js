function runProgram() {

    let n = parseInt(document.getElementById("num").value);

    if (isNaN(n)) {
        document.getElementById("output").innerText = "Please enter a valid number";
        return;
    }

    let result = "";

    result += "Number: " + n + "\n\n";

    // 1. Sum of first n numbers
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    result += "Sum of first " + n + " numbers: " + sum + "\n\n";

    // 2. Table
    result += "Table of " + n + ":\n";
    for (let i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + (n * i) + "\n";
    }

    result += "\n";

    // 3. Prime check
    let isPrime = true;

    if (n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    result += "Prime: " + (isPrime ? "Yes" : "No") + "\n\n";

    // 4. Factors
    result += "Factors: ";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result += i + " ";
        }
    }

    result += "\n\n";

    // 5. Sum of digits
    let temp = n;
    let digitSum = 0;

    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }

    result += "Sum of digits: " + digitSum + "\n\n";

    // 6. Armstrong
    let numCopy = n;
    let armstrongSum = 0;

    while (numCopy > 0) {
        let digit = numCopy % 10;
        armstrongSum += digit * digit * digit;
        numCopy = Math.floor(numCopy / 10);
    }

    result += "Armstrong: " + (armstrongSum === n ? "Yes" : "No");

    // Display on screen
    document.getElementById("output").innerText = result;
}