document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    const messageDiv = document.getElementById('message');

    if (response.ok) {
        messageDiv.innerHTML = `<p style="color: green;">${data.message}</p>`;
        // Optionally redirect or store the token
        console.log("Token:", data.token);  // Log the token (for demo purposes)
    } else {
        messageDiv.innerHTML = `<p style="color: red;">${data.message}</p>`;
    }
});
