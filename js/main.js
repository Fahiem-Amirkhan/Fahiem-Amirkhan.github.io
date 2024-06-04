function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID");
})();

// Add event listener for form submission
document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values using querySelector
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const number = document.querySelector('#number').value;
    const question = document.querySelector('#question').value;

    // Create the email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        from_number: number,
        message: question
    };

    // Send the email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('There was an error sending your message. Please try again.');
        });
});
