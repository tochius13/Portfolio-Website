function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDescription1() {
  const desc = document.getElementById("project-description1");
  const reason = document.getElementById("project-reason1");

  reason.classList.remove("show");
  desc.classList.toggle("show");
}

function toggleDescription2() {
  const desc = document.getElementById("project-description2");
  const reason = document.getElementById("project-reason2");

  reason.classList.remove("show");
  desc.classList.toggle("show");
}

function toggleDescription3() {
  const desc = document.getElementById("project-description3");
  const reason = document.getElementById("project-reason3");

  reason.classList.remove("show");
  desc.classList.toggle("show");
}

function toggleReason1() {
  const desc = document.getElementById("project-description1");
  const reason = document.getElementById("project-reason1");

  desc.classList.remove("show");
  reason.classList.toggle("show");
}

function toggleReason2() {
  const desc = document.getElementById("project-description2");
  const reason = document.getElementById("project-reason2");

  desc.classList.remove("show");
  reason.classList.toggle("show");
}

function toggleReason3() {
  const desc = document.getElementById("project-description3");
  const reason = document.getElementById("project-reason3");

  desc.classList.remove("show");
  reason.classList.toggle("show");
}

const desktopNav = document.getElementById("desktop-nav");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
  const stopPoint = aboutSection.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY >= stopPoint) {
    desktopNav.style.opacity = "0";
    desktopNav.style.pointerEvents = "none";
  } else {
    desktopNav.style.opacity = "1";
    desktopNav.style.pointerEvents = "auto";
  }
});
