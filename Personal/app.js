//>>>>>>>>>>>>>>>>>>>>>>>>>>>DOM<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2")[0];
// const heading2 = document.getElementsByClassName("h2-class");
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector("h2"); // One element only

// const heading3 = heading2.nextElementSibling;
const h2List = document.querySelectorAll("h2");
const heading3 = h2List[h2List.length - 1];
// const heading3 = document.querySelector("#addCard");

setTimeout(() => {
  addStylesTo(heading, "CENSORED");
}, 1500);

setTimeout(() => {
  addStylesTo(heading2, "@mustafos", "aqua");
}, 3000);

const link = heading3.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Click on link", event.target.getAttribute("href"));
  const url = event.target.getAttribute("href");

  window.location = url;
});

setTimeout(() => {
  addStylesTo(link, "Add card!", "gold", "3rem");
}, 4500);

function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.width = "100%";
  // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
  if (heading.style.color === "red") {
    heading.style.color = "#00ff00";
    heading.style.backgroundColor = "#ff4500";
  } else {
    heading.style.color = "red";
    heading.style.backgroundColor = "#000";
  }
};

heading2.addEventListener("dblclick", () => {
  if (heading2.style.color === "aqua") {
    heading2.style.color = "#f8f8ff";
    heading2.style.backgroundColor = "#00bfff";
  } else {
    heading2.style.color = "aqua";
    heading2.style.backgroundColor = "#000";
  }
});
