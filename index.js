var menu = document.getElementById("drop-down");
var list = document.querySelectorAll(".nav-link");

function myFunction() {
    if (menu.style.visibility === "hidden") {
        menu.style.visibility = "visible";
    } else {
        menu.style.visibility = "hidden";
    }
}

function linkClick() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function downloadResume(event) {
    event.preventDefault(); // Prevent default link behavior

    const link = document.createElement('a');
    // Direct Google Drive download link
    link.href = "https://drive.google.com/uc?export=download&id=1FLM8D6oE9btnbvVW6DHFO3tsArHEF7Ep";
    link.download = 'Krishna-Vaishnav-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

