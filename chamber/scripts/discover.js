// Display current year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Burger menu
document.getElementById("menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("open");
});

// localStorage for visit tracking
const message = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  message.textContent = days === 0
    ? "Back so soon! Awesome!"
    : `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
}

localStorage.setItem("lastVisit", now);

// Fetch JSON data
fetch("data/places.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("places-container");
    data.forEach(place => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
          <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });
