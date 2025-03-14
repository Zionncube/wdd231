document.addEventListener("DOMContentLoaded", () => {
    // Set year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modification date
    document.getElementById("last-modified").textContent = document.lastModified;

    // Fetch and display members
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => displayMembers(data));

    function displayMembers(members) {
        const container = document.getElementById("directory");
        container.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
            `;
            container.appendChild(card);
        });
    }

    // Toggle grid/list view
    document.getElementById("grid-view").addEventListener("click", () => {
        document.getElementById("directory").classList.remove("list-view");
    });

    document.getElementById("list-view").addEventListener("click", () => {
        document.getElementById("directory").classList.add("list-view");
    });

    // Toggle mobile menu
    document.getElementById("menu-toggle").addEventListener("click", () => {
        document.getElementById("menu").classList.toggle("show");
    });
});