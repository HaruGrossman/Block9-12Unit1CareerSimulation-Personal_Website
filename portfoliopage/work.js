const WorksInProgress = [
    {
        name: ["Portfolio Website"],
        favButton: "🤍",
        discription: ["lorem ipsum"],
        img: ["<img src = "" alt = "">""],
        siteLink: [""],
    }
]

class WorksInProgress {
    constructor(name, favButton, discription, img, siteLink) {
        this.name = name;
        this.favButton = favButton;
        this.discription = discription;
        this.img = img;
        this.siteLink = siteLink;
    }
    render() {
        const projectCard = document.createElement("form");
        const workTitle = document.createElement("h3");
        workTitle.textContent = this.name;

    }
}

// class Portfolio extends WorksInProgress {
//     constructor() {
//         super("Portfolio Website", favButton, "Lorem ipsum", "img", "siteLink")
//     }
// }