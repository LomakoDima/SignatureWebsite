document.getElementById("signButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("signature").textContent = name;
});