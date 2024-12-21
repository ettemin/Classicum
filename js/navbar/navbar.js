document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navWrapper = document.querySelector(".nav-wrapper");

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);

    // Add overflow hidden to body when menu is open
    document.body.style.overflow = isExpanded ? "" : "hidden";
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const isMenuOpen = menuButton.getAttribute("aria-expanded") === "true";
    const clickedInsideNav = navWrapper.contains(event.target);
    const clickedOnButton = menuButton.contains(event.target);

    if (isMenuOpen && !clickedInsideNav && !clickedOnButton) {
      menuButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  // Close menu on escape key
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      menuButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
});
