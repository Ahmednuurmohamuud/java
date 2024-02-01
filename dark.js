document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

   
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';


    setDarkMode(isDarkMode);


    darkModeToggle.addEventListener('change', function () {
        setDarkMode(darkModeToggle.checked);
    });


    function setDarkMode(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    }
});
