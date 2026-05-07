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
const studentName = "Ali Saliev";
const studentTitle = "Cybersecurity";




// ==========================================
// TASK 8: Arrays (Lists of information)
// ==========================================
// An array is a list of items stored in a single variable. It uses square brackets [].
// Create an array named 'mySkills' containing at least 4 strings.
// Examples of skills: 'HTML', 'CSS', 'TCP/IP', 'Problem Solving'

const mySkills = ['HTML', 'JavaScript', 'PHP', 'MySQL', 'CSS', 'Java', 'Python', 'C++','Problem Solving', 'Teamwork', 'Communication'];




// ==========================================
// TASK 9: Objects (Complex data structures)
// ==========================================
// An object groups related variables (properties) together. It uses curly braces {}.
// Create an object named 'hackerProfile' with the following properties (keys):
// - alias (String): Your nickname
// - level (Number): Your current age or academic year
// - isActive (Boolean): true or false

const hackerProfile = {
    alias: "Amogus",
    level: 3,
    isActive: true
};



// ==========================================
// TASK 10: Accessing Object Properties
// ==========================================
// The instructor left a bug! We want to log your alias to the console.
// Fix the 'console.log' below to properly access the 'alias' property 
// of the 'hackerProfile' object you created in Task 9.
// Hint: Use dot notation! (e.g., objectName.propertyName)

// FIX THIS CODE:
console.log("Incoming connection from: " + hackerProfile.alias); 


// ==========================================
// TASK 11: Accessing Array Elements
// ==========================================
// We want to access the 2nd skill from your 'mySkills' array and log it.
// Remember, arrays are ZERO-indexed (the first element is at index 0).
// Write a console.log statement extracting and printing the 2nd element of 'mySkills'.

console.log("Second skill: " + mySkills[1]);




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



// FORM VALIDATION + AJAX

function validateForm() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Please enter your name!');
        return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email!');
        return false;
    }
    if (message === '') {
        alert('Please enter a message!');
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // CONTACT FORM — AJAX Submit
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // останавливаем стандартную отправку страницы

            if (!validateForm()) return; // если валидация не прошла — стоп

            const formData = new FormData(this);

            fetch('send_message.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    contactForm.innerHTML = `
                        <p style="color: var(--accent); font-size: 1.2rem;">
                            ✅ Message sent successfully!
                        </p>
                    `;
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Try again!');
            });
        });
    }

    // ==========================================
    // LOAD PROJECTS — AJAX from database
    // ==========================================
    const projectsContainer = document.getElementById('projects-container');

    if (projectsContainer) {
        fetch('get_projects.php')
        .then(response => response.json())
        .then(projects => {
            if (projects.length === 0) {
                projectsContainer.innerHTML = '<p>No projects yet.</p>';
                return;
            }

            projects.forEach(project => {
                projectsContainer.innerHTML += `
                    <div class="glass-panel" style="margin-bottom: 1rem;">
                        <h3 style="color: var(--accent);">${project.title}</h3>
                        <p>${project.description}</p>
                        <p><em>Tech: ${project.tech_stack}</em></p>
                        ${project.github_link ? 
                            `<a href="${project.github_link}" 
                                target="_blank" 
                                style="color: var(--accent);">
                                View on GitHub →
                             </a>` 
                            : ''}
                    </div>
                `;
            });
        })
        .catch(error => console.error('Could not load projects:', error));
    }

});

// ==========================================
// DARK MODE TOGGLE
// ==========================================
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('theme-btn');
    if (document.body.classList.contains('light-mode')) {
        btn.innerText = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        btn.innerText = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
}

// Запомнить тему при перезагрузке
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('theme-btn').innerText = '🌙 Dark Mode';
    }
});