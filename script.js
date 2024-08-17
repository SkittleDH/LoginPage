document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;

    // Simulate checking the username
    if (username !== 'TicTacToe') {
        document.getElementById('errorPopup').style.display = 'block';
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('errorPopup').style.display = 'none';
});
