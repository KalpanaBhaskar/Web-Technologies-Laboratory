// Get the button
const themeBtn = document.getElementById("themeBtn");

// Variable to keep track of current theme
let darkMode = false;

// When button is clicked
themeBtn.onclick = function () {

    // Select required elements
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const cards = document.querySelectorAll(".card");
    const headings = document.querySelectorAll(".card h2");
    const projectTitles = document.querySelectorAll(".project-item h3");
    const links = document.querySelectorAll(".contact-info a");
    const tableHeaders = document.querySelectorAll("th");
    const tableCells = document.querySelectorAll("td");

    // If currently light mode, switch to dark mode
    if (darkMode === false) {

        body.style.backgroundColor = "#1e1e1e";
        body.style.color = "#ffffff";

        header.style.backgroundColor = "#111111";

        footer.style.color = "#ffffff";

        // Cards
        cards.forEach(function(card) {
            card.style.backgroundColor = "#2d2d2d";
            card.style.color = "#ffffff";
        });

        // Section headings
        headings.forEach(function(head) {
            head.style.color = "#00e5ff";
        });

        // Project titles
        projectTitles.forEach(function(title) {
            title.style.color = "#00e5ff";
        });

        // Links
        links.forEach(function(link) {
            link.style.color = "#00e5ff";
        });

        // Table headers
        tableHeaders.forEach(function(th) {
            th.style.backgroundColor = "#444";
            th.style.color = "#ffffff";
        });

        // Table cells
        tableCells.forEach(function(td) {
            td.style.borderColor = "#666";
        });

        themeBtn.innerHTML = "Light Mode";

        darkMode = true;
    }

    // Otherwise switch back to light mode
    else {

        body.style.backgroundColor = "#f4f7f6";
        body.style.color = "#333";

        header.style.backgroundColor = "#2c3e50";

        footer.style.color = "#7f8c8d";

        cards.forEach(function(card) {
            card.style.backgroundColor = "#ffffff";
            card.style.color = "#333";
        });

        headings.forEach(function(head) {
            head.style.color = "#2c3e50";
        });

        projectTitles.forEach(function(title) {
            title.style.color = "#34495e";
        });

        links.forEach(function(link) {
            link.style.color = "#ffffff";
        });

        tableHeaders.forEach(function(th) {
            th.style.backgroundColor = "#f8f9fa";
            th.style.color = "#2c3e50";
        });

        tableCells.forEach(function(td) {
            td.style.borderColor = "#ddd";
        });

        themeBtn.innerHTML = "Dark Mode";

        darkMode = false;
    }

};
