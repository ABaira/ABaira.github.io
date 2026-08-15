console.log('Script loaded');


document.addEventListener("DOMContentLoaded", ()=>{ 
    // window.onload = function() { // can use this too

    document.getElementById('send').addEventListener('click', function (e) 
    {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Button clicked');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        
    });


})
