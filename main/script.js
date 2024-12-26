document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    var product = document.getElementById('product').value;
    var url = 'https://script.google.com/macros/s/AKfycbxiNA01BweCleZvJd_gM7dQK2KshMe_PkIt4ITFYk_tA6fzras-Z8fWjuSuq9Tbyxue/exec'; // Replace with the URL of your Google Apps Script web app
    
    // Check if both fields are filled
    if (!username || !message) {
      alert('Please enter both your name and a message.');
      return;
    }
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'username': username,
        'message': message,
        'product': product
      })
    })
    .then(response => response.text())
    .then(result => {
      alert('Message sent successfully!');
      // Clear the input fields
      document.getElementById('username').value = '';
      document.getElementById('message').value = '';
      document.getElementById('product').value = '';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message.');
    });
  });