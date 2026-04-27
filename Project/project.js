// ===============================
// Mini Project: API + Local Storage
// ===============================

// API URL (simulates backend service)
const API_URL = "https://jsonplaceholder.typicode.com/users";

// DOM elements
const userList = document.getElementById("userList");
const selectedDiv = document.getElementById("selected");

// ===============================
// Fetch users from API
// ===============================

// Real-world use of APIs:
// APIs allow frontend apps to communicate with servers/databases
// Example: fetching users, products, posts from a backend system

async function fetchUsers() {
  try {
    // Async handling:
    // 'await' pauses execution until data is fetched
    const response = await fetch(API_URL);
    const users = await response.json();

    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// ===============================
// Display users in UI
// ===============================
function displayUsers(users) {
  userList.innerHTML = "";

  users.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("user");

    div.innerHTML = `
      <strong>${user.name}</strong><br>
      Email: ${user.email}<br>
      City: ${user.address.city}
    `;

    // Click event to save user
    div.addEventListener("click", () => {
      saveUser(user);
      showSelectedUser(user);
    });

    userList.appendChild(div);
  });
}

// ===============================
// Save user to localStorage
// ===============================

// Browser storage:
// localStorage stores data in the browser even after refresh
// Real-world use: saving preferences, login sessions, cart items

function saveUser(user) {
  localStorage.setItem("selectedUser", JSON.stringify(user));
}

// ===============================
// Show selected user
// ===============================
function showSelectedUser(user) {
  selectedDiv.innerHTML = `
    <strong>${user.name}</strong><br>
    Email: ${user.email}<br>
    City: ${user.address.city}
  `;
}

// ===============================
// Load user from localStorage on reload
// ===============================
function loadSelectedUser() {
  const storedUser = localStorage.getItem("selectedUser");

  if (storedUser) {
    const user = JSON.parse(storedUser);
    showSelectedUser(user);
  }
}

// ===============================
// Modular structure:
// Functions are separated by responsibility
// (fetching, displaying, saving, loading)
// This improves scalability and maintainability
// ===============================

// Initialize app
fetchUsers();
loadSelectedUser();