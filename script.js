function submitForm(event) {
    event.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbzFouTq2KIAdOb98mJb6DgJc7eUNzF9_tDr2wU6ZUavnYDfp8TTlz-voYjN--bjh2nU/exec', {
        method: 'POST',
        body: new FormData(document.getElementById('contactForm'))
    })
    .then(response => {
        if (response.ok) {
            alert('Sent');
        } else {
            alert('Failed to send. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}
