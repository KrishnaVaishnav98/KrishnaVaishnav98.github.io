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
    window.location.href = "https://drive.google.com/uc?export=download&id=1nvRdRxCb4_UtIl-dbHmFUNQeQNkV4F3U";
}






