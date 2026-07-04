function button() {
    let email = document.getElementById("input").value.trim();
    let username = document.getElementById("input1").value.trim();

    if (email === "" && username === "") {
        alert("Please fill in the form.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (username === "") {
        alert("Please enter your username.");
        return;
    }

    // Only runs if both fields are filled
    alert("All good!");
    window.location.href = "get started.html";
}