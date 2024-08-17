document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;

    // Check if the username is correct
    if (username === 'TicTacToe') {
        // Redirect to the TicTacToe game URL
        window.location.href = 'https://htmlpreview.github.io/?https://github.com/SkittleDH/TicTacToe/blob/main/index.html';
    } else {
        // Show the error popup if the username is incorrect
        document.getElementById('errorPopup').style.display = 'block';
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('errorPopup').style.display = 'none';
});
