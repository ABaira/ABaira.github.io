//onload function to display the last modified date of the document
//Once the page is loaded it will allow you to use any of the functons.

//Typewriter Things roles i could be in industry from NAIT website from CNT program
const roles = [
    "Web Development",
    "Application Development",
    "Data Communication System Support",
    "Software Development and Support",
    "Instrumentation and Data Acquisition",
    "Process Control Hardware and Software",
    "Programmable Logic Design",
    "Database Programming"
];

//Type writer Variables
let rolesIndex = 0;
let charIndex = 0;
let isDeleting = false;
window.onload = function() {
    console.log('Page loaded');
    lastModified();
    typeLoop();
    //Click event listener for the send button to send the form data to an email address using EmailJS
    document.getElementById('send').addEventListener('click', function(event){
        console.log('Send button clicked');
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = $('#message').val();
        event.preventDefault(); // Prevent the default form submission behavior
        if(!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        console.log(name);
        
        //sendEmail(email, name, message);
    });
    const root = document.documentElement;
    const theme = localStorage.getItem('theme');
    if(theme)
    {
        root.setAttribute('data-theme', theme);
    }
    document.getElementById('themeToggle').addEventListener('click', function()
    {
        const isDark = getComputedStyle(root).getPropertyValue('--bg').trim() == '#17181A';
        const newTheme = isDark ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

}

//Function to display the last modified date of the document
function lastModified() {
    let string = 'Last Modified: ' + document.lastModified;
    console.log(string); 
    document.getElementById('lastModified').textContent = string;
    //$('#lastModified').text(`${string}`);
}
function typeLoop()
{
    //get current role from list
    const currentRole = roles[rolesIndex];
    const target = document.getElementById('typewriter');

    //add or delete characters 
    if (isDeleting) 
    {
        charIndex--;
    } 
    else 
    {
        charIndex++;
    }
    //add character into html
    target.textContent = currentRole.substring(0, charIndex);

    //deleting speed / updating speed 
    let speed = isDeleting ? 10 : 35;
    
    //if we are not deleting then keep typing each character
   
    if (!isDeleting && charIndex === currentRole.length) 
    {
        speed = 700;
        isDeleting = true;
    } 
    //if we are deleting then stop
    else if (isDeleting && charIndex === 0) 
    {
        isDeleting = false;
        rolesIndex = (rolesIndex + 1) % roles.length;
        speed = 150;
    }

    setTimeout(typeLoop, speed);
}



//function to verify email adress using regex
function validateEmail(email) {
    //regex to make sure there is a valid email address format @ and a .com or .org or .net etc.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


//Function to send the form data to an email address using EmailJS
function sendEmail(email, name, message) {
    let parameters = {
        email: email,
        name: name,
        message: message
    };
    //Send the email using EmailJS
    //service ID, template ID, and parameters form Email.js sent to Icloud email addressW
    emailjs.send('service_68kutn9', 'template_02ia3ed', parameters);
    console.log('Email sent');
    alert('Email sent successfully! Thank you for contacting me.');
    clearForm();
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    // $('#name').val('');
    // $('#email').val('');
    // $('#message').val('');
}




