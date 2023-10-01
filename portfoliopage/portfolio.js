let heartButton = document.getElementById("heart");

heartButton.addEventListener("click", changeHeartOnClick);

function changeHeartOnClick() {
    let heartIcon = document.getElementById("heart");
    if (heartIcon.innerHTML === ("❤️")) {
        heartIcon.innerHTML = ("🤍")
    } else if (heartIcon.innerHTML === ("🤍")) {
        heartIcon.innerHTML = ("❤️");
    }
};

