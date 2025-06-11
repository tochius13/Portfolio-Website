function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleDescription() {
  const desc = document.getElementById("project-description");
  desc.style.display = desc.style.display === "none" ? "block" : "none";
}