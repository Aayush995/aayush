document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const team = document.getElementById('team').value;

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Thank you, ${name}! You have registered your team "${team}". We will contact you at ${email}.`;
    
    // Clear the form
    document.getElementById('registration-form').reset();
});

