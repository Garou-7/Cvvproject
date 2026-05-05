/**
 * 🚀 WELCOME TO WEEK 5: THE MATRIX OF JAVASCRIPT!
 * 
 * HTML is the skeleton. CSS is the skin and clothes.
 * JavaScript is the BRAIN. It makes the web page alive!
 * 
 * Why JavaScript?
 * Without JS, pages are static (they just sit there). 
 * With JS, we can interact with users, change styling dynamically,
 * load data, and build full-blown interactive applications.
 * 
 * Below are your Week 5 Tasks. Notice how we use variables, 
 * arrays, and objects to store data, and then process and inject it 
 * into the HTML automatically using our Instructor Engine!
 * 
 * Open the console in your browser (Right Click -> Inspect -> Console) 
 * to see your outputs!
 */

console.log("=== SYSTEM BOOT INITIATED ===");

// ==========================================
// TASK 7: Variables & Data Types
// ==========================================
// Create two variables using 'const' or 'let':
// 1. 'studentName' (String) - Assign your full name.
// 2. 'studentTitle' (String) - Assign your dream job (e.g., "Full Stack Developer", "Cybersecurity Analyst")

// YOUR CODE HERE:




// ==========================================
// TASK 8: Arrays (Lists of information)
// ==========================================
// An array is a list of items stored in a single variable. It uses square brackets [].
// Create an array named 'mySkills' containing at least 4 strings.
// Examples of skills: 'HTML', 'CSS', 'TCP/IP', 'Problem Solving'

// YOUR CODE HERE:




// ==========================================
// TASK 9: Objects (Complex data structures)
// ==========================================
// An object groups related variables (properties) together. It uses curly braces {}.
// Create an object named 'hackerProfile' with the following properties (keys):
// - alias (String): Your nickname
// - level (Number): Your current age or academic year
// - isActive (Boolean): true or false

// YOUR CODE HERE:




// ==========================================
// TASK 10: Accessing Object Properties
// ==========================================
// The instructor left a bug! We want to log your alias to the console.
// Fix the 'console.log' below to properly access the 'alias' property 
// of the 'hackerProfile' object you created in Task 9.
// Hint: Use dot notation! (e.g., objectName.propertyName)

// FIX THIS CODE:
// console.log("Incoming connection from: " + hackerProfile_wrong_property); 


// ==========================================
// TASK 11: Accessing Array Elements
// ==========================================
// We want to access the 2nd skill from your 'mySkills' array and log it.
// Remember, arrays are ZERO-indexed (the first element is at index 0).
// Write a console.log statement extracting and printing the 2nd element of 'mySkills'.

// YOUR CODE HERE:




console.log("=== SYSTEM BOOT COMPLETE ===");


/**
 * ⚠️ INSTRUCTOR'S CORE SYSTEM FUNCTION - DO NOT MODIFY (Unless you are feeling brave!)
 * 
 * This code block uses your variables above to change the HTML automatically!
 * We will learn more about DOM Manipulation in the upcoming weeks.
 * But for now, watch how your JS data comes alive on the screen.
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Injecting Name and Title into the DOM
        if (typeof studentName !== 'undefined') {
            document.getElementById('hero-name').innerText = studentName;
        }
        if (typeof studentTitle !== 'undefined') {
            document.getElementById('hero-title').innerText = studentTitle;
        }

        // Injecting Skills Array dynamically
        if (typeof mySkills !== 'undefined' && Array.isArray(mySkills)) {
            const skillsContainer = document.getElementById('skills-container');
            
            // We use a loop to go through each item in your array and generate HTML dynamically!
            mySkills.forEach(skill => {
                const span = document.createElement('span');
                span.className = 'skill-tag';
                span.innerText = skill;
                skillsContainer.appendChild(span);
            });
        }
    } catch (error) {
        console.warn("System Initialization Incomplete: Finish your JS tasks to unlock the full portfolio features!", error);
    }
});
