// Select all the links in the navigation menu
const navLinks = document.querySelectorAll("nav a");

// Add an event listener to each link that toggles the active class
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// Select the search form and input
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

// Add an event listener to the search form that displays a message
searchForm.addEventListener("submit", e => {
  e.preventDefault();
  alert(`You searched for: ${searchInput.value}`);
});

// Select the div element and the navigation links
const contentDiv = document.querySelector("#blog-post");


// Add an event listener to each link that updates the contents of the div
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    // Update the contents of the div based on the clicked link
    if (link.textContent === "About") {
      contentDiv.innerHTML = "<h2>About</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec dui sagittis, posuere dui non, viverra nisi. Aliquam bibendum, tellus at consectetur faucibus, dui dui fermentum lacus, quis fringilla tellus arcu sed metus. Vivamus id tincidunt elit. Mauris rutrum neque erat, non fermentum lacus bibendum ac.</p>";
    } else if (link.textContent === "Contact") {
      contentDiv.innerHTML = "<h2>Contact</h2><p>Email: info@example.com</p><p>Phone: 555-555-5555</p>";
    }
  });
});
