// Redirect based on the username entered
document.getElementById('submitBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;

    if (username === "TicTacToe") {
        window.location.href = "https://htmlpreview.github.io/?https://github.com/SkittleDH/TicTacToe/blob/main/index.html";
    } else if (username === "Proxy") {
        window.location.href = "https://funnyloginpage.yaha.pro/";
    } else {
        // Show error popup if the input is incorrect
        const errorPopup = document.getElementById('error-popup');
        errorPopup.style.display = 'block';
        setTimeout(() => {
            errorPopup.classList.add('visible');
        }, 50);  // Slight delay to trigger the transition smoothly
    }
});

// Close error popup on clicking the close button
document.getElementById('closeBtn').addEventListener('click', function() {
    const errorPopup = document.getElementById('error-popup');
    errorPopup.classList.remove('visible');
    setTimeout(() => {
        errorPopup.style.display = 'none';
    }, 500);  // Allow time for transition to complete before hiding
});
