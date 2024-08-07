import "./style.css";

const testTitle = "Template working!";

const titleElement = document.createElement("h1");
titleElement.textContent = testTitle;
titleElement.classList.add("title");

document.body.appendChild(titleElement);

console.log("Hello, world!");
