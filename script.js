function checkLogin() {
    const username = document.getElementById('username').value;

    if (username === "TicTacToe") {
        window.location.href = "https://htmlpreview.github.io/?https://github.com/SkittleDH/TicTacToe/blob/main/index.html";
    } else {
        alert("Error\n\nInvalid Code");
    }
}
