document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values entered in the form
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if the email already exists in the mock database (you can use a real backend for this)
  const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

  // Check if the email is already in use
  const existingUser = existingAccounts.find(account => account.email === email);

  if (existingUser) {
    alert("This email is already registered. Please use a different one.");
    return;
  }

  // Save the new account to the local storage (you should use a database for production apps)
  const newAccount = { username, email, password };
  existingAccounts.push(newAccount);
  localStorage.setItem("accounts", JSON.stringify(existingAccounts));

  alert("Registration successful! You can now log in.");
  window.location.href = "login.html"; // Redirect to the login page after successful registration
});