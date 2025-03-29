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
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Failed to fetch members data.");
            
            const data = await response.json();
            const spotlights = document.getElementById("spotlight-container");
    
            if (!spotlights) {
                console.error("Spotlight container not found.");
                return;
            }
    
            // Clear previous spotlights
            spotlights.innerHTML = "";
    
            // Filter only Gold & Silver members
            let goldSilverMembers = data.members.filter(m => m.level === "Gold" || m.level === "Silver");
    
            // Randomly select up to 3 spotlight members
            goldSilverMembers = goldSilverMembers.sort(() => Math.random() - 0.5).slice(0, 3);
    
            // Display each selected member
            goldSilverMembers.forEach(member => {
                const div = document.createElement("div");
                div.classList.add("spotlight-card"); // Optional: Add a class for styling
                div.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.tagline || "No tagline available"}</p>
                    <img src="images/${member.image}" alt="${member.name}">
                    <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
                    <p>Phone: ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                `;
                spotlights.appendChild(div);
            });
        } catch (error) {
            console.error("Error fetching spotlight members:", error);
        }
    }

    // Run the function when the page loads
    document.addEventListener("DOMContentLoaded", fetchSpotlightMembers);



    
    