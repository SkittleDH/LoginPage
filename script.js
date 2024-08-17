function checkLogin() {
    const username = document.getElementById('username').value;

    if (username === "TicTacToe") {
        window.location.href = "https://htmlpreview.github.io/?https://github.com/SkittleDH/TicTacToe/blob/main/index.html";
    } else {
        // Show modal popup
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
}

// Close the modal when the user clicks the "x"
document.querySelector(".close").onclick = function() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
