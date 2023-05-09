$(document).ready(function() {
    $('#login-btn').click(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
      if (username === 'Car1' && password === 'driver') {
        window.location.href = 'car1.html';
      } else if (username === 'Car2' && password === 'rider') {
        window.location.href = 'car2.html';
      } else {
        alert('Invalid login credentials');
      }
    });
  });
  