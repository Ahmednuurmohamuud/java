var username, password; 

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
  
    if (username && password) {
        // alert('Welcome ');
        window.location.href = 'index.html';
    } else {
      document.getElementById('error-message').textContent = 'Please enter both username and password.';
    }
});