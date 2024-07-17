(function () {
  emailjs.init("ZlvtNvlNRaV_WYDOj"); // Replace "YOUR_USER_ID" with your actual user ID
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  
  // These IDs from the previous steps
  emailjs.sendForm('service_bbouos7', 'template_gj7ot5n', this)
    .then(function () {
      console.log('SUCCESS!');
      alert('Your message has been sent successfully!');
    }, function (error) {
      console.log('FAILED...', error);
      alert('There was an error sending your message. Please try again.');
    });
});