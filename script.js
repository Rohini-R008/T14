function runProgram() {

    let n = parseInt(document.getElementById("num").value);

    // basic validation
    if (isNaN(n)) {
        document.getElementById("output").innerText = "Please enter a number";
        return;
    }

    if (n <= 0) {
        document.getElementById("output").innerText = "Enter a positive number greater than 0";
        return;
    }

    let output = "";

    // -------- sum of first n numbers --------
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    output += "Sum of first " + n + " numbers: " + sum + "\n\n";


    // -------- table --------
    output += "Table of " + n + ":\n";
    for (let i = 1; i <= 10; i++) {
        output += n + " x " + i + " = " + (n * i) + "\n";
    }
    output += "\n";


    // -------- prime check --------
    let isPrime = true;

    if (n === 1) {
        isPrime = false;
    } else {
        // checking till sqrt(n) is enough
        // because factors come in pairs
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    output += "Prime: " + (isPrime ? "Yes" : "No") + "\n\n";


    // -------- factors --------
    output += "Factors: ";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            output += i + " ";
        }
    }
    output += "\n\n";


    // -------- sum of digits --------
    let temp = n;
    let digitSum = 0;

    while (temp > 0) {
        let d = temp % 10;
        digitSum += d;
        temp = Math.floor(temp / 10);
    }

    output += "Sum of digits: " + digitSum + "\n\n";


    // -------- armstrong --------
    let count = 0;
    let temp1 = n;

    // count digits
    while (temp1 > 0) {
        count++;
        temp1 = Math.floor(temp1 / 10);
    }

    let temp2 = n;
    let armSum = 0;

    while (temp2 > 0) {
        let d = temp2 % 10;
        armSum += Math.pow(d, count);
        temp2 = Math.floor(temp2 / 10);
    }

    if (armSum === n) {
        output += "Armstrong: Yes";
    } else {
        output += "Armstrong: No";
    }

    document.getElementById("output").innerText = output;
}