function toggleMode() {
    var body = document.body;
    var modeToggle = document.getElementById('mode-toggle');
    var modeIcon = document.getElementById('mode-icon');

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        // Switch to dark mode
        modeIcon.innerHTML = '&#9790;'; // Unicode for moon icon
    } else {
        // Switch to light mode
        modeIcon.innerHTML = '&#9728;'; // Unicode for sun icon
    }
}
