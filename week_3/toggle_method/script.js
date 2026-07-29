// Get the theme button
const themeBtn = document.getElementById("themeBtn");

// Toggle the dark theme class when the button is clicked
themeBtn.onclick = function () {
    const isDarkMode = document.body.classList.toggle("dark-theme");

    themeBtn.innerHTML = isDarkMode ? "Light Mode" : "Dark Mode";
};