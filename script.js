//onload function to display the last modified date of the document
//Once the page is loaded it will allow you to use any of the functons.
window.onload = function() {
    console.log('Page loaded');
    lastModified();

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
    

}

//Function to display the last modified date of the document
function lastModified() {
    let string = 'Last Modified: ' + document.lastModified;
    console.log(string); 
    document.getElementById('lastModified').textContent = string;
    //$('#lastModified').text(`${string}`);
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