document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const registerForm = document.getElementById('regForm');
    const loginForm = document.getElementById('loginForm');
    const securedPage = document.getElementById('securedPage');
    const logoutButton = document.getElementById('logoutButton');
    
    // Handle Registration
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get input values
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        
        // Save user data in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        // Switch to login form
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    // Handle Login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get input values
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        // Retrieve stored credentials
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        // Validate credentials
        if (username === storedUsername && password === storedPassword) {
            // Switch to secured page
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('securedPage').style.display = 'block';
        } else {
            alert('Invalid credentials');
        }
    });

    // Handle Logout
    logoutButton.addEventListener('click', () => {
        // Switch to login form
        document.getElementById('securedPage').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });
});
