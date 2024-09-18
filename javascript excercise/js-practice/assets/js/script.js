// add a array values to a dropdown using HTML
// JavaScript code to populate dropdown and update result
document.addEventListener("DOMContentLoaded", function() {
    // Array of courses (example)
    var courses = ["ECE", "CSE", "IT", "EEE","MECH","CIVIL"];

    // Get reference to the select element
    var dropdown = document.getElementById("courseDropdown");

    // Populate dropdown with courses
    courses.forEach(function(course) {
        var option = document.createElement("option");
        option.textContent = course;
        option.value = course;
        dropdown.appendChild(option);
    });

    // Get reference to the paragraph element where result will be shown
    var resultParagraph = document.querySelector(".shown");

    // Event listener for dropdown change
    dropdown.addEventListener("change", function() {
        // Update the result paragraph text with selected option
        resultParagraph.textContent = "Selected course: " + this.value;
    });
});

// add a array values to a dropdown using HTML



// remove duplicate values from array
document.getElementById('removeDuplicatesBtn').addEventListener('click', function() {
    // Original array with duplicates
    var originalArray = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3];

    // Remove duplicates
    var uniqueArray = Array.from(new Set(originalArray));

    // Display the result
    document.getElementById('result2').textContent = 'Unique Array: ' + JSON.stringify(uniqueArray);
});
// remove duplicate values from array


// abreviated first letter from word
// script.js

document.getElementById('abbreviateBtn').addEventListener('click', function() {
    // Get the full name entered by the user
    var fullName = document.getElementById('fullName').value.trim();
    
    // Check if the full name is not empty
    if (fullName !== '') {
        // Split the full name into parts (assuming first name and last name)
        var nameParts = fullName.split(' ');
        
        // Initialize abbreviated name variable
        var abbreviatedName = '';
        
        // Iterate over name parts to construct abbreviated name
        for (var i = 0; i < nameParts.length; i++) {
            // Append the first character of each part to the abbreviated name (capitalized)
            abbreviatedName += nameParts[i].charAt(0).toUpperCase();
        }
        
        // Display the abbreviated name in the result paragraph
        document.getElementById('result').innerText = abbreviatedName;
    } else {
        // Display an error message if full name is empty
        document.getElementById('result').innerText = 'Please enter a full name.';
    }
});


// abreviated first letter from word
