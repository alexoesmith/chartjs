const toggle = document.querySelector(".menu-icon");
const siteNavLinks = document.getElementById("site-nav");
const siteNav = document.getElementsByTagName("nav");

toggle.addEventListener("click", (e) => {
  siteNavLinks.classList.toggle("show");
});
