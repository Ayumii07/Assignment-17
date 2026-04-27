/*
What is Fetch API?
Fetch API is a modern JavaScript interface
used to make HTTP requests (GET, POST, etc.)
to servers. It returns a Promise, making it
easier to handle asynchronous operations.

Fetch vs XMLHttpRequest
Fetch API:
- Uses Promises (cleaner, modern)
- Easier syntax
- Better readability
XMLHttpRequest:
- Older method
- Uses callbacks
- More complex and harder to manage

Importance of Error Handling
Handling errors ensures:
- App doesn’t crash
- User sees meaningful messages
- Network/server issues are handled gracefully
*/

// DOM elements
const userContainer = document.getElementById("users");
const jokeContainer = document.getElementById("joke");
// Show loading
userContainer.innerHTML = "Loading users...";
jokeContainer.innerHTML = "Loading joke...";

  // FETCH USERS API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  })
  .then(data => {
    console.log("Users:", data);
    userContainer.innerHTML = "";
    data.forEach(user => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${user.name}</strong></p>
        <p>Email: ${user.email}</p>
      `;
      userContainer.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error:", error);
    userContainer.innerHTML = "Error loading users.";
  });
   //FETCH JOKE API
fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }
    return response.json();
  })
  .then(data => {
    console.log("Joke:", data);
    jokeContainer.innerHTML = `
      <p>${data.setup}</p>
      <p><strong>${data.punchline}</strong></p>
    `;
  })
  .catch(error => {
    console.error("Error:", error);
    jokeContainer.innerHTML = "Error loading joke.";
  });