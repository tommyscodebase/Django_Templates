// Mobile menu
const mobileMenuBtn = document.getElementById("toggle-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");

// User menu
const userMenuBtn = document.getElementById("user-menu-button");
const userMenu = document.getElementById("user-menu");

// Categories
const categoriesMenuBtn = document.getElementById("categories-menu-button");
const categoriesMenu = document.getElementById("categories-menu");

// Error and Success Alerts
const alertContainer = document.getElementById("alert-container");
const alertContainerCloseButton = document.getElementById(
  "close-alert-container"
);

// Show / Hide the Mobile Menu
try {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
} catch (error) {}

// Show / Hide the profile menu
try {
  userMenuBtn.addEventListener("click", () => {
    userMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("scale-100");
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("scale-0");
    mobileMenu.classList.toggle("opacity-0");
  });
} catch (error) {}

// Show / hide categories menu
try {
  categoriesMenuBtn.addEventListener("click", () => {
    categoriesMenu.classList.toggle("hidden");
    categoriesMenu.classList.toggle("scale-100");
    categoriesMenu.classList.toggle("opacity-100");
    categoriesMenu.classList.toggle("scale-0");
    categoriesMenu.classList.toggle("opacity-0");
  });
} catch (error) {}

// Close Login Error
try {
  alertContainerCloseButton.addEventListener("click", () => {
    alertContainer.classList.add("hidden");
  });
} catch (error) {}
