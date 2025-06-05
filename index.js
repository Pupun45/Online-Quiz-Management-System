function login() {
    let name = prompt("Enter your name:");
    let branch = prompt("Enter your branch:");

    if (name && branch) {
        let firstLetter = name.charAt(0).toUpperCase(); // Get first letter and capitalize it
        let button = document.getElementById("loginBtn");
        button.innerText = firstLetter; // Change button text to first letter of name
        button.disabled = true; // Disable the button after login
    } else {
        alert("Please enter both name and branch to login.");
    }
}