// Adding logout functionality with confirmation modal
document.getElementById("logoutLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior (which would reload the page)

    // Show the confirmation modal
    document.getElementById("logoutModal").style.display = "flex";
});

// Handle the "Yes" button (confirm logout)
document.getElementById("confirmLogout").addEventListener("click", function() {
    // Clear session data or user login data
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    // Redirect to the login page (login.html)
    window.location.href = "login.html"; // You can adjust this to the actual path of your login page
});

// Handle the "No" button (cancel logout)
document.getElementById("cancelLogout").addEventListener("click", function() {
    // Hide the modal
    document.getElementById("logoutModal").style.display = "none";
});