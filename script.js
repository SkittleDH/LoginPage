// Redirect to TicTacToe page when correct input is entered
document.getElementById('submitBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;

    // Check if the entered username is "TicTacToe"
    if (username === "TicTacToe") {
        window.location.href = "https://htmlpreview.github.io/?https://github.com/SkittleDH/TicTacToe/blob/main/index.html";
    } else {
        // Show error popup if the input is incorrect
        document.getElementById('error-popup').style.display = 'block';
    }
});

// Close error popup on clicking the close button
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('error-popup').style.display = 'none';
});
