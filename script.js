// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form validation
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (name.length < 3) {
        alert("Name too short");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email");
        return false;
    }

    if (phone.length < 10) {
        alert("Invalid phone number");
        return false;
    }

    document.getElementById("formMsg").innerHTML =
        "✅ Application submitted successfully!";

    return false; // prevent actual submit (no backend yet)
}
