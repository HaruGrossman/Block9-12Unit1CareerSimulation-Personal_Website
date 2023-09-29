let nameTitle = document.createElement("div");
let aboutPageButton = document.createElement("a");
let homePageButton = document.createElement("a");
let contactPageButton = document.createElement("a");
let portfolioPageButton = document.createElement("a");
let navSection = document.createElement("section");


let navBar = document.createElement("div");
let navButtons = document.createElement("div");


nameTitle.textContent = "Haru Grossman";
nameTitle.style.fontSize = "30px";

aboutPageButton.innerText = "About";
aboutPageButton.href = "/aboutpage/about.html";
aboutPageButton.style.textDecoration = "none";

homePageButton.innerText = "Home";
homePageButton.href = "/homepage/home.html";
homePageButton.style.textDecoration = "none";

contactPageButton.innerText = "Contact";
contactPageButton.href = "/contactpage/contact.html";
contactPageButton.style.textDecoration = "none";

portfolioPageButton.innerText = "Portfolio";
portfolioPageButton.href = "/portfoliopage/portfolio.html"
portfolioPageButton.style.textDecoration = "none";


navBar.append(nameTitle);
navButtons.append(aboutPageButton, homePageButton, contactPageButton, portfolioPageButton);
navSection.append(navBar, navButtons);

document.body.append(navSection);

