document.addEventListener("DOMContentLoaded", () => {
    // Set year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modification date
    document.getElementById("last-modified").textContent = document.lastModified;
})