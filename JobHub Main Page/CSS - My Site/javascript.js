// Modified validateLoginForm function
function validateLoginForm() {
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;

  if (loginEmail === "" || loginPassword === "") {
    showMessage("Please enter both email and password.", "error");
    return false;
  }

  // You can add more complex validation here if needed

  // If everything is valid, show success message
  showMessage("Login successful!", "success");
  return true;
}
