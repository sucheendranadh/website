function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}

function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggle-switch");
    const body = document.body;

    // Check local storage for previous theme setting
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleSwitch.classList.add("active");
    }

    toggleSwitch.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleSwitch.classList.add("active");
        } else {
            localStorage.setItem("theme", "light");
            toggleSwitch.classList.remove("active");
        }
    });
});


document.addEventListener("mousemove", function (e) {
    let cursor = document.createElement("div");
    cursor.classList.add("cursor-trail");

    // Set position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    document.body.appendChild(cursor);

    // Animate & Remove trail (Longer effect)
    setTimeout(() => {
        cursor.style.transform = "scale(3)";  // Bigger effect
        cursor.style.opacity = "0";           // Fade out smoothly
    }, 300); // Increased from 100 to 300ms for a longer-lasting effect

    setTimeout(() => {
        cursor.remove();
    }, 1000); // Increased from 500 to 1000ms for a longer trail
});



function sendEmail() {
    let name = document.getElementById('name').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !message) {
        alert("Please fill out all fields before sending the email.");
        return;
    }

    let subject = encodeURIComponent(`Contact from ${name}`);
    let body = encodeURIComponent(`Message:\n${message}`);

    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=esucheendranadh@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailLink, '_blank');
}




