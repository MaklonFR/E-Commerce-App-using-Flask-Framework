// static/script.js
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send data to Flask backend
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        // Display message based on server response
        const messageDiv = document.getElementById('message');
        if (data.message === 'Admin created successfully') {
            messageDiv.style.color = 'green';
        } else {
            messageDiv.style.color = 'red';
        }
        messageDiv.textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
