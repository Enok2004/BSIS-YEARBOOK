document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the entered values
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Get the stored accounts from localStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Find the user matching the entered email and password
    const user = accounts.find(account => account.email === email && account.password === password);

    if (user) {
        alert("Login successful!");
        // Redirect to index.html after successful login
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});