const mobileNavLinks = document.getElementById("links");
const toggleMobileNav = document.getElementById("toggle-mobile-nav");

toggleMobileNav.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("hidden");
});

const toggleProfilePopUp = () => {
  const profilePopUp = document.getElementById("profile-popup");
  profilePopUp.classList.toggle("hidden");
};
