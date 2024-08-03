//Fetch all needed IDs
const menuBtn = document.getElementById("hamburgerIcon");
const menu = document.getElementById("menu");

//Event Listeners
menuBtn.addEventListener("click", removeClass);

//The Function
function removeClass() {
  if (menu.classList.contains("close")) {
    menu.classList.remove("close");
  } else {
    menu.classList.add("close");
  }
}
