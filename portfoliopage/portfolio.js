// let heartButton = document.getElementById("heart");

// heartButton.addEventListener("click", changeHeartOnClick);

// function changeHeartOnClick() {
//     let heartIcon = document.getElementById("heart");
//     if (heartIcon.innerHTML === ("❤️")) {
//         heartIcon.innerHTML = ("🤍")
//     } else if (heartIcon.innerHTML === ("🤍")) {
//         heartIcon.innerHTML = ("❤️");
//     }
// };



class WorksInProgress {
    constructor(name, favButton, discription, img, siteLink) {
        this.name = name;
        this.favButton = favButton;
        this.discription = discription;
        this.img = img;
        this.siteLink = siteLink;
    }
}

class Portfolio extends WorksInProgress {
    constructor() {
        super("Portfolio Website", favButton, "Lorem ipsum", "img", "siteLink")
    }
}
