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
function downloadResume() {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?export=download&id=1UhEjUnTBzAx8JpZ0niyOSJrCaNXImchC";
    link.download = 'Krishna-Vaishnav-Resume.pdf'; // Optional: desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}





