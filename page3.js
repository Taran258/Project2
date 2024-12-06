
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let message = document.getElementById('message').value.trim();

    
    if (name === "") {
        alert("Please enter your name.");
        event.preventDefault();
        return;
    }

    
    if (message === "") {
        alert("Please enter your message.");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});
