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

document.addEventListener("DOMContentLoaded", () => {
    fetchSpotlightMembers();
});

async function fetchSpotlightMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const spotlights = document.getElementById("spotlight-container");

    let goldSilver = data.members.filter(m => m.level === "Gold" || m.level === "Silver");
    goldSilver = goldSilver.sort(() => Math.random() - 0.5).slice(0, 3);

    goldSilver.forEach(member => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.tagline}</p>
            <img src="${member.logo}" alt="${member.name}">
            <p>Email: ${member.email}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;
        spotlights.appendChild(div);
    });
}