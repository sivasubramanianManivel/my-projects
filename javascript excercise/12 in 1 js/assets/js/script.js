function convertToFahrenheit() {
    // Get the Celsius value from the input
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    
    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;
    
    // Display the result
    document.getElementById('result').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
}
// celsius to farenheit converter
function checkPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    const result = (cleanedString === reversedString) ? 'Palindrome' : 'Not a Palindrome';
    document.getElementById('result1').innerText = result;
}


function calculateBill() {
    const units = parseFloat(document.getElementById('units').value);
    let billAmount = 0;

    if (units <= 50) {
        billAmount = units * 0.75;
    } else if (units <= 150) {
        billAmount = (50 * 0.75) + ((units - 50) * 1.00);
    } else if (units <= 250) {
        billAmount = (50 * 0.75) + (100 * 1.00) + ((units - 150) * 1.30);
    } else {
        billAmount = (50 * 0.75) + (100 * 1.00) + (100 * 1.30) + ((units - 250) * 1.50);
    }

    document.getElementById('result3').innerText = `Total Bill Amount: Rs. ${billAmount.toFixed(2)}`;
}


function calculateFDRate() {
    const tenure = parseFloat(document.getElementById('tenure').value);
    let rate;

    if (tenure < 3) {
        rate = '5.8%';
    } else if (tenure >= 3 && tenure <= 6) {
        rate = '6.5%';
    } else if (tenure >= 7 && tenure <= 9) {
        rate = '6.8%';
    } else if (tenure >= 10) {
        rate = '7%';
    } else {
        rate = 'Invalid input';
    }

    document.getElementById('result4').innerText = `FD Rate: ${rate}`;
}


function calculate() {
    const expression = document.getElementById('expression').value;
    const operatorMatch = expression.match(/[\+\-\*\/]/);

    if (!operatorMatch) {
        document.getElementById('result5').innerText = 'Invalid input';
        return;
    }

    const operator = operatorMatch[0];
    const operands = expression.split(operator).map(Number);

    if (operands.length !== 2 || isNaN(operands[0]) || isNaN(operands[1])) {
        document.getElementById('result5').innerText = 'Invalid input';
        return;
    }

    const [operand1, operand2] = operands;
    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result5').innerText = `Result: ${result}`;
}




function checkEligibility() {
    const qualifications = document.getElementsByName('qualification');
    let selectedQualification = null;

    for (const qualification of qualifications) {
        if (qualification.checked) {
            selectedQualification = qualification.value;
            break;
        }
    }

    let result = '';
    switch (selectedQualification) {
        case 'high school':
        case 'ug':
            result = 'Eligible for the job';
            break;
        default:
            result = 'Not eligible for the job';
            break;
    }

    document.getElementById('result6').innerText = result;
}




// Define the User object with appropriate properties and methods
const user = {
    name: "John Doe",
    age: 30,
    qualification: "ug",
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Qualification: ${this.qualification}`;
    },
    updateDetails(name, age, qualification) {
        this.name = name;
        this.age = age;
        this.qualification = qualification;
    }
};

// Function to display user details on the webpage
function displayUserDetails() {
    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerText = user.getDetails();
}

// Function to update user details based on form input
function updateUserDetails() {
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const qualification = document.getElementById('qualificationInput').value;

    user.updateDetails(name, age, qualification);
    displayUserDetails();
    document.getElementById('result7').innerText = 'User details updated successfully!';
}

// Initialize by displaying the initial user details
displayUserDetails();


const name = 'Sivasubramanian';

// Function to generate a random letter from the name
function generateRandomLetter() {
    const randomIndex = Math.floor(Math.random() * name.length);
    const randomLetter = name[randomIndex];
    document.getElementById('randomLetter').textContent = `Random letter: ${randomLetter}`;
}


// Array of departments
const departments = ['ECE', 'CSC', 'IT', 'EEE', 'MECH', 'CIVIL'];

// Add the elements to the list in HTML
const departmentList = document.getElementById('departmentList');
departments.forEach(department => {
    const listItem = document.createElement('li');
    listItem.textContent = department;
    departmentList.appendChild(listItem);
});

// Array of numbers
const input = [6, -5, 7, -2, 4, 6, -1];

// Function to find the sum of positive numbers
function sumOfPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
}

// Display the sum of positive numbers
const sumResult = document.getElementById('sumResult');
sumResult.textContent = `Sum of positive numbers: ${sumOfPositiveNumbers(input)}`;



// Define variables for item count and total amount
let itemCount = 5;
let total = 95;

// Function to update and display the cart summary
function updateCartSummary() {
    const cartSummaryDiv = document.getElementById('cartSummary');
    cartSummaryDiv.textContent = `You have ${itemCount} items in your cart. Your bill amount is $${total}.`;
}

// Initialize the summary display when the page loads
updateCartSummary();



function manipulateArray() {
    // Initialize the array
    let arr = [5, 8, 10, 7, 9, 11];
    
    // Replace 7, 9, 11 with 17, 19, 111
    arr = arr.map(value => {
        switch(value) {
            case 7: return 17;
            case 9: return 19;
            case 11: return 111;
            default: return value;
        }
    });

    // Insert 100 at the beginning
    arr.unshift(100);

    // Insert 200 in the last but one position
    arr.splice(arr.length - 1, 0, 200);

    // Add 1000 at the end
    arr.push(1000);

    // Insert 0 in the middle
    const middleIndex = Math.floor(arr.length / 2);
    arr.splice(middleIndex, 0, 0);

    // Display the modified array
    document.getElementById('result11').textContent = `Modified array: [${arr.join(', ')}]`;
}


function countLetters() {
    // Get the text from the textarea
    const text = document.getElementById('textInput').value;
    
    // Count letters using a regular expression
    const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    
    // Display the letter count
    document.getElementById('letterCount').textContent = `Number of letters: ${letterCount}`;
}