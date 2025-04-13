// main.js

// Toggle navigation menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
      menu.style.display = "flex";
  } else {
      menu.style.display = "none";
  }
})

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Set last modified date
const lastModified = document.getElementById("last-modified");
if (lastModified) {
  lastModified.textContent = document.lastModified;
}

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
  return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))).toFixed(2);
}

const temp = 50;  // Static temp (to be dynamic later)
const windSpeed = 5;  // Static wind speed

if (temp <= 50 && windSpeed > 3) {
  document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed) + "°F";
} else {
  document.getElementById("wind-chill").textContent = "N/A";
}



// Modal dialog for resources (to use later)
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-btn");

if (modal && closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
}


// Save form input with localStorage
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector("[name='fname']")?.value;
    localStorage.setItem("username", name);
  });
}

// Show thank you message with name
const thankYouName = document.getElementById("thankyou-name");
if (thankYouName) {
  const username = localStorage.getItem("username") || "Friend";
  thankYouName.textContent = username;
}

//get all images
const images = 
document.querySelectorAll('#image-gallary img')

//add event listenertoeach image
images.forEach(image => {image.addEventListener('click', () =>{
  //filter images by category
  const category = image.getAttribute('data-category');
  filterImages(category);
});
});

// function to filter images
function filterImages (category) {
  images.forEach(image => {
    if
    (image.getAttribute('data-category') === category) {
      image.style.display ='block';
      }
      else {
        image.style.display = 'none';
      }
    })
  }


