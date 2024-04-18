document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribeForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      const email = form.querySelector('input[type="email"]').value;
      if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        form.reset(); // Reset the form after successful submission
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  