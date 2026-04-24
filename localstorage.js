// Get form and display element
const form = document.getElementById("userForm");
const display = document.getElementById("display");
// Save data on form submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page reload

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Store data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Show saved data
    showData();
});
// Function to display saved data
function showData() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (name && email) {
        display.innerHTML = `Name: ${name} <br> Email: ${email}`;
    } else {
        display.innerHTML = "No data found";
    }
}
// Clear data from localStorage
function clearData() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    display.innerHTML = "Data cleared!";
}
// Load data when page reloads
showData();