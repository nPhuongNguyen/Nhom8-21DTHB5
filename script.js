document.getElementById("editProfile").addEventListener("click", function() {
    document.getElementById("nameInput").disabled = false;
    document.getElementById("emailInput").disabled = false;
    document.getElementById("saveProfile").style.display = "block";
});

document.getElementById("saveProfile").addEventListener("click", function() {
    document.getElementById("nameInput").disabled = true;
    document.getElementById("emailInput").disabled = true;
    document.getElementById("saveProfile").style.display = "none";
});

document.getElementById("avatar").addEventListener("click", function() {
    document.getElementById("avatarInput").click();
});

document.getElementById("avatarInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("avatar").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
