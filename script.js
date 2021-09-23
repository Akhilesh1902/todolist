const list = document.querySelector(".list");
const userInput = document.querySelector("#userText");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newElem = document.createElement("li");
  newElem.classList.add("list-item");

  newElem.innerText = userInput.value;

  list.appendChild(newElem);

  userInput.value = "";

  newElem.addEventListener("click", () => {
    
    newElem.remove();
  });
});
