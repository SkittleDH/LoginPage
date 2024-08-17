function checkLogin() {
    const username = document.getElementById('username').value;

    if (username === "TicTacToe") {
        window.location.href = "https://htmlpreview.github.io/?https://github.com/SkittleDH/TicTacToe/blob/main/index.html";
    } else {
        document.getElementById('error-popup').classList.remove('hidden');
    }
}

function closePopup() {
    document.getElementById('error-popup').classList.add('hidden');
}
