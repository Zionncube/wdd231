document.addEventListener("DOMContentLoaded", () => {
    // Set year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modification date
    document.getElementById("last-modified").textContent = document.lastModified;
})// Set the timestamp value to the current date and time in ISO format


// This section is for the  join page for join and thankyou page
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value = new Date().toISOString();
});

document.getElementById('timestamp').textContent = params.get('timestamp') || 'N/A';



