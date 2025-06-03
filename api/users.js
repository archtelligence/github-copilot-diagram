// Function to fetch users from the API
function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data))
    .catch((error) => console.error("Error fetching users:", error));
}

// Function to display users in HTML
function displayUsers(users) {
  const usersContainer = document.getElementById("users");
  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.innerHTML = `
                <h3>${user.name} (${user.username})</h3>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p>Company: ${user.company.name}</p>
                <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.zipcode})</p>
            `;
    usersContainer.appendChild(userElement);
  });
}
