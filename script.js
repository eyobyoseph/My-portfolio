let iconMenu = document.querySelector(".icon-menu"); 
let clickMenu = document.querySelector(".click-menu");
let closeButton=document.querySelector(".close-button"); 

iconMenu.addEventListener("click", function() {
  clickMenu.classList.add("show");
});

closeButton.addEventListener("click", function() {
  clickMenu.classList.remove("show");
});

clickMenu.addEventListener("click", function() {
  clickMenu.classList.add("show");
  clickMenu.classList.remove("show");
});

