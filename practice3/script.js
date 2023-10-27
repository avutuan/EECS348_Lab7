document.addEventListener("DOMContentLoaded", function () {
    // Get the submit button and add a click event listener
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", verifyPasswords);

    // Function to verify passwords
    function verifyPasswords() {
        // Get the password inputs
        var password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;

        // Check if passwords are at least eight characters long and match
        if (password1.length < 8 || password2.length < 8 || password1 !== password2) {
            alert("Passwords must be at least eight characters long and must match.");
        } else {
            alert("Passwords match!");
        }
    }
});
