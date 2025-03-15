document.addEventListener("DOMContentLoaded", () => {
// Fetch and display members
async function fetchMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

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

fetchMembers();

// Toggle grid/list view
document.getElementById("grid-view").addEventListener("click", () => {
    document.getElementById("directory").classList.remove("list-view");
});

document.getElementById("list-view").addEventListener("click", () => {
    document.getElementById("directory").classList.add("list-view");
});

});